import { useEffect, useRef } from "react";

/**
 * Marca una capa de fondo como parallax.
 *
 * Ya no mueve nada por su cuenta: deja el atributo `data-parallax` y la capa
 * de movimiento (GSAP + ScrollTrigger) se encarga del recorrido, atado al
 * scroll con scrub y recalculado al redimensionar. Se gana suavidad y se
 * quita un listener de scroll propio por cada capa.
 *
 * `intensity` es la fracción del alto del elemento que recorre en total, así
 * que la capa debe llevar sangrado (p. ej. `-inset-[8%]`) para que no se vea
 * el borde. SSR-safe y respeta prefers-reduced-motion (la capa no lo monta).
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(intensity = 0.18) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.dataset.parallax = String(intensity);
    return () => {
      delete el.dataset.parallax;
    };
  }, [intensity]);

  return ref;
}
