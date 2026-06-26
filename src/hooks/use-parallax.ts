import { useEffect, useRef } from "react";

/**
 * Devuelve un ref para una capa de fondo. Al hacer scroll, desplaza
 * la capa en vertical más despacio que la página (efecto parallax).
 * El desplazamiento está acotado a ±(intensity * 50%) de la altura del
 * elemento, así que la capa debe tener algo de sangrado (p. ej. -inset-[8%])
 * para que no se vea el borde.
 *
 * SSR-safe: no hace nada en servidor. Respeta prefers-reduced-motion.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(intensity = 0.18) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progreso 0..1 mientras el elemento cruza el viewport
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh + rect.height);
      const clamped = Math.max(-0.5, Math.min(0.5, progress));
      const range = rect.height * intensity; // recorrido total
      const offset = clamped * range;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [intensity]);

  return ref;
}
