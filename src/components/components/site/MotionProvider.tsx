import { useEffect, type RefObject } from "react";
import { GATE_CLASS, READY_CLASS, prefersReducedMotion } from "@/lib/motion";

interface MotionProviderProps {
  /** El contenedor que se anima. Normalmente el <main> del Layout. */
  scopeRef: RefObject<HTMLElement>;
  /** Ruta actual: al cambiar, se desmonta la capa y se vuelve a montar. */
  pathname: string;
}

/**
 * Capa de movimiento del sitio.
 *
 * No pinta nada. Solo carga GSAP en cliente (import dinámico, fuera del
 * bundle de servidor y del chunk crítico) y aplica el motor sobre el
 * contenido de la página actual.
 *
 * Mejora progresiva: los estados iniciales ocultos viven detrás de la clase
 * `.js-motion`, que pone un script del <head> y que se retira sola si la
 * capa no llega a arrancar. Sin JS —y para Google— la web se ve entera.
 */
export const MotionProvider = ({ scopeRef, pathname }: MotionProviderProps) => {
  useEffect(() => {
    let cancelled = false;
    let unmount: (() => void) | undefined;

    const openGate = () => {
      document.documentElement.classList.remove(GATE_CLASS);
    };

    (async () => {
      try {
        const [{ gsap }, { ScrollTrigger }, { mountMotion }] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("@/lib/motion-runtime"),
        ]);

        if (cancelled) return;

        gsap.registerPlugin(ScrollTrigger);
        document.documentElement.classList.add(READY_CLASS);

        const scope = scopeRef.current;
        if (!scope) {
          openGate();
          return;
        }

        unmount = mountMotion({
          scope,
          gsap,
          ScrollTrigger,
          reduced: prefersReducedMotion(),
        });
      } catch {
        // Si GSAP no carga (red, bloqueador, chunk caído) la web no se puede
        // quedar en blanco: se abre el gate y todo queda visible y quieto.
        openGate();
      }
    })();

    return () => {
      cancelled = true;
      unmount?.();
    };
  }, [pathname, scopeRef]);

  return null;
};
