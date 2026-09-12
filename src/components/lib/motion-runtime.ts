/**
 * Motor de la capa de movimiento — Las Tejas
 * ===========================================
 * Esto NO se importa desde las páginas. Lo carga MotionProvider en cliente
 * (import dinámico, así GSAP no entra en el bundle del servidor ni en el
 * primer chunk crítico).
 *
 * Filosofía: la capa es *externa* al contenido. Las páginas solo declaran
 * intención con atributos `data-*`; aquí se decide el tiempo, la curva y el
 * orden. Si mañana se quita este archivo y el gate `.js-motion`, la web
 * queda exactamente como estaba: nada de esto es estructura ni diseño.
 *
 * Contrato de atributos
 * ---------------------
 *  data-reveal="up|left|right|scale|mask"   Revelado al entrar en pantalla.
 *  data-reveal-delay="120"                  Retardo en ms.
 *  data-reveal-group                        Sus hijos directos entran escalonados.
 *  data-parallax="0.15"                     Recorrido parallax (fracción de su alto).
 *  data-split                               Titular partido en líneas enmascaradas.
 *  data-hero                                Bloque con entrada orquestada al cargar.
 *  data-hero-item                           Pieza de esa entrada, en orden del DOM.
 *  data-hero-fade                           Se desvanece al salir el hero por arriba.
 *  data-pin                                 Sección con pin + scrub (solo escritorio).
 */

import { DUR, EASE, STAGGER, START } from "./motion";

type Gsap = typeof import("gsap")["gsap"];
type ScrollTriggerType = typeof import("gsap/ScrollTrigger")["ScrollTrigger"];

/** Desplazamientos iniciales. Deben coincidir con el gate CSS de index.css. */
const OFFSET = {
  up: { y: 34, x: 0, scale: 1 },
  left: { y: 0, x: -40, scale: 1 },
  right: { y: 0, x: 40, scale: 1 },
  scale: { y: 20, x: 0, scale: 0.96 },
} as const;

type RevealVariant = keyof typeof OFFSET | "mask";

const isVariant = (v: string): v is RevealVariant =>
  v === "up" || v === "left" || v === "right" || v === "scale" || v === "mask";

/* ------------------------------------------------------------------ */
/* Titulares partidos en líneas                                        */
/* ------------------------------------------------------------------ */

/**
 * Parte el titular en líneas reales (medidas, no adivinadas) y mete cada
 * una en una caja con overflow oculto para que suba desde debajo del borde.
 * Guarda el HTML original para poder deshacerlo tal cual.
 *
 * Accesibilidad: el texto completo se conserva en `aria-label`, y el
 * andamiaje de spans queda oculto al lector de pantalla.
 */
function splitIntoLines(el: HTMLElement): (() => void) | null {
  const text = (el.textContent || "").trim();
  if (!text) return null;

  const originalHTML = el.innerHTML;
  const hadLabel = el.getAttribute("aria-label");

  // 1. Cada palabra en su span para poder medir dónde rompe la línea.
  el.innerHTML = text
    .split(/\s+/)
    .map((w) => `<span class="ln-w">${w}</span>`)
    .join(" ");

  const words = Array.from(el.querySelectorAll<HTMLElement>(".ln-w"));
  if (!words.length) {
    el.innerHTML = originalHTML;
    return null;
  }

  // 2. Agrupar por altura: mismo offsetTop = misma línea.
  const lines: string[][] = [];
  let currentTop: number | null = null;
  words.forEach((w) => {
    const top = w.offsetTop;
    if (currentTop === null || Math.abs(top - currentTop) > 4) {
      currentTop = top;
      lines.push([]);
    }
    lines[lines.length - 1].push(w.textContent || "");
  });

  // 3. Reconstruir con la máscara por línea.
  //    Cada línea menos la última acaba en un espacio: el navegador lo
  //    descarta al final del renglón (no se ve), pero mantiene el texto
  //    separado para quien lee el DOM — Google incluido.
  el.innerHTML = lines
    .map(
      (words, i) =>
        `<span class="ln"><span>${words.join(" ")}${i < lines.length - 1 ? " " : ""}</span></span>`
    )
    .join("");

  el.setAttribute("aria-label", text);
  el.setAttribute("data-split-ready", "");

  return () => {
    el.innerHTML = originalHTML;
    el.removeAttribute("data-split-ready");
    if (hadLabel === null) el.removeAttribute("aria-label");
    else el.setAttribute("aria-label", hadLabel);
  };
}

/* ------------------------------------------------------------------ */
/* Motor                                                               */
/* ------------------------------------------------------------------ */

export interface MotionOptions {
  /** Raíz sobre la que buscar. Normalmente el <main> de la página. */
  scope: HTMLElement;
  gsap: Gsap;
  ScrollTrigger: ScrollTriggerType;
  /** El usuario ha pedido menos movimiento. */
  reduced: boolean;
}

/**
 * Monta toda la capa sobre `scope`. Devuelve la función que la desmonta
 * y deja el DOM como estaba (imprescindible al cambiar de página).
 */
export function mountMotion({ scope, gsap, ScrollTrigger, reduced }: MotionOptions): () => void {
  const undoSplits: Array<() => void> = [];

  const ctx = gsap.context(() => {
    /* --------------------------------------------------------------
     * Movimiento reducido: nada de recorridos ni pines. Solo dejamos
     * el contenido visible con un fundido corto que no marea a nadie.
     * ------------------------------------------------------------ */
    if (reduced) {
      const hidden = gsap.utils.toArray<HTMLElement>("[data-reveal], [data-hero-item]");
      gsap.to(hidden, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: DUR.micro,
        ease: EASE.out,
        stagger: 0.02,
      });
      return;
    }

    /* --------------------------------------------------------------
     * 1. Titulares enmascarados
     * ------------------------------------------------------------ */
    gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
      // Un titular oculto (el hero que no toca en esta anchura) mide cero:
      // partirlo daría una sola línea falsa y se quedaría escondido.
      if (!el.offsetParent) return;
      const undo = splitIntoLines(el);
      if (undo) undoSplits.push(undo);
    });

    /* --------------------------------------------------------------
     * 2. Entrada del hero (al cargar, no al hacer scroll)
     * ------------------------------------------------------------ */
    gsap.utils.toArray<HTMLElement>("[data-hero]").forEach((hero) => {
      // Un hero oculto por CSS (el de móvil en escritorio y viceversa) no se
      // anima: sus medidas son cero y la entrada se perdería. Se deja visible
      // por si el usuario gira el móvil o agranda la ventana y aparece.
      if (!hero.offsetParent && getComputedStyle(hero).position !== "fixed") {
        gsap.set(hero.querySelectorAll("[data-hero-item]"), { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: EASE.out },
        onComplete: () => {
          // Igual que en los revelados: una vez dentro, fuera la marca y los
          // estilos en línea, para no dejar capas de composición vivas ni
          // pisar hovers en los botones del hero.
          hero.querySelectorAll<HTMLElement>("[data-hero-item]").forEach((el) => {
            el.removeAttribute("data-hero-item");
            gsap.set(el, { clearProps: "all" });
          });
        },
      });

      const heading = hero.querySelector<HTMLElement>("[data-split-ready]");
      const splitLines = heading
        ? Array.from(heading.querySelectorAll<HTMLElement>(".ln > span"))
        : [];
      const items = Array.from(hero.querySelectorAll<HTMLElement>("[data-hero-item]"));

      // El orden del encuadre manda: lo que va antes del titular entra
      // antes que él, y lo que va detrás, detrás. Nada de que el pie
      // aparezca antes que la cabeza.
      const before = heading
        ? items.filter(
            (el) => heading.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_PRECEDING
          )
        : items;
      const after = items.filter((el) => !before.includes(el));

      if (before.length) {
        tl.to(before, { opacity: 1, y: 0, duration: 0.7, stagger: STAGGER.base }, 0.1);
      }

      if (splitLines.length) {
        // fromTo explícito a propósito: el estado inicial vive en CSS como
        // porcentaje (`translateY(115%)`) y del estilo calculado solo se
        // pueden leer píxeles. Con un `to` a `yPercent: 0`, GSAP daría por
        // hecho que ya está en cero y la línea no se movería nunca.
        tl.fromTo(
          splitLines,
          { yPercent: 115, y: 0 },
          {
            yPercent: 0,
            duration: DUR.line,
            stagger: STAGGER.loose,
            ease: EASE.strongOut,
          },
          before.length ? 0.24 : 0.12
        );
      }

      if (after.length) {
        tl.to(
          after,
          { opacity: 1, y: 0, duration: DUR.reveal, stagger: STAGGER.base },
          splitLines.length ? 0.52 : 0.2
        );
      }
    });

    /* --------------------------------------------------------------
     * 3. El contenido del hero se retira al salir de plano
     * ------------------------------------------------------------ */
    gsap.utils.toArray<HTMLElement>("[data-hero-fade]").forEach((el) => {
      gsap.to(el, {
        opacity: 0.15,
        y: -60,
        ease: EASE.none,
        scrollTrigger: {
          trigger: el.closest("[data-hero]") || el,
          start: "top top",
          end: "bottom 30%",
          scrub: 0.4,
        },
      });
    });

    /* --------------------------------------------------------------
     * 4. Parallax con scrub
     * ------------------------------------------------------------ */
    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
      const intensity = parseFloat(el.dataset.parallax || "0.15") || 0.15;
      const travel = intensity * 50; // en % del alto del propio elemento
      const trigger = el.parentElement || el;

      gsap.fromTo(
        el,
        { yPercent: -travel },
        {
          yPercent: travel,
          ease: EASE.none,
          scrollTrigger: {
            trigger,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    /* --------------------------------------------------------------
     * 5. Revelados al entrar en pantalla
     * ------------------------------------------------------------ */
    /**
     * Al terminar de entrar, el elemento deja de ser "un elemento animado":
     * se le quita la marca y los estilos en línea. Si no, el `transform` que
     * deja GSAP pisa los hovers de CSS (una tarjeta con `.lift` no levantaría)
     * y el elemento arrastraría capas de composición que ya no hacen falta.
     */
    const settle = (el: HTMLElement) => {
      el.removeAttribute("data-reveal");
      gsap.set(el, { clearProps: "all" });
    };

    const revealTo = (el: HTMLElement, variant: RevealVariant, delay: number) => {
      const common = {
        duration: DUR.reveal,
        ease: EASE.out,
        delay,
        overwrite: "auto" as const,
        onComplete: () => settle(el),
      };

      if (variant === "mask") {
        return gsap.to(el, {
          ...common,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: DUR.reveal + 0.15,
        });
      }

      return gsap.to(el, { ...common, opacity: 1, x: 0, y: 0, scale: 1 });
    };

    // 5a. Grupos: los hijos directos entran escalonados con un solo disparo.
    gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
      const children = Array.from(group.children).filter(
        (c): c is HTMLElement => c instanceof HTMLElement && c.hasAttribute("data-reveal")
      );
      if (!children.length) return;

      ScrollTrigger.create({
        trigger: group,
        start: START,
        once: true,
        onEnter: () => {
          // El escalonado no puede crecer sin fin: con doce fotos, 65 ms
          // por pieza son casi ocho décimas de espera. Se comprime para
          // que la cascada nunca pase de medio segundo.
          const step = Math.min(STAGGER.base, 0.5 / children.length);

          children.forEach((child, i) => {
            const raw = child.dataset.reveal || "up";
            const variant: RevealVariant = isVariant(raw) ? raw : "up";
            revealTo(child, variant, i * step);
          });
        },
      });
    });

    // 5b. Sueltos: cada uno con su propio disparo.
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      const parent = el.parentElement;
      if (parent && parent.hasAttribute("data-reveal-group")) return; // ya va en grupo

      const raw = el.dataset.reveal || "up";
      const variant: RevealVariant = isVariant(raw) ? raw : "up";
      const delay = (parseFloat(el.dataset.revealDelay || "0") || 0) / 1000;

      ScrollTrigger.create({
        trigger: el,
        start: START,
        once: true,
        onEnter: () => revealTo(el, variant, delay),
      });
    });

    /* --------------------------------------------------------------
     * 6. Pin + scrub — solo escritorio, y solo donde vale la pena
     * ------------------------------------------------------------ */
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      gsap.utils.toArray<HTMLElement>("[data-pin]").forEach((section) => {
        const layers = section.querySelectorAll<HTMLElement>("[data-pin-layer]");
        if (!layers.length) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=55%",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        layers.forEach((layer) => {
          const depth = parseFloat(layer.dataset.pinLayer || "1") || 1;
          tl.fromTo(
            layer,
            { yPercent: 6 * depth, rotate: `+=${1.2 * depth}` },
            { yPercent: -6 * depth, rotate: `-=${1.2 * depth}`, ease: EASE.none },
            0
          );
        });
      });
    });

    return () => mm.revert();
  }, scope);

  /* Recalcular cuando las fotos terminan de cargar y cambian alturas. */
  const refresh = () => ScrollTrigger.refresh();
  const imgs = Array.from(scope.querySelectorAll("img"));
  imgs.forEach((img) => {
    if (!img.complete) img.addEventListener("load", refresh, { once: true });
  });
  const t1 = window.setTimeout(refresh, 400);
  const t2 = window.setTimeout(refresh, 1600);

  return () => {
    window.clearTimeout(t1);
    window.clearTimeout(t2);
    imgs.forEach((img) => img.removeEventListener("load", refresh));
    ctx.revert();
    undoSplits.forEach((undo) => undo());
  };
}
