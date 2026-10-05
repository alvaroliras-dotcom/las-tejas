/**
 * Tokens de movimiento — Las Tejas
 * =================================
 * Un único sitio donde viven duraciones y curvas. Si algo se mueve en
 * esta web, coge su tiempo de aquí. Así todo el sitio respira igual.
 *
 * Criterio:
 *  - Entradas y salidas: easing de salida (arranca rápido, se posa).
 *  - Movimiento en pantalla (algo que va de A a B): in-out.
 *  - Nunca ease-in en interfaz: retrasa justo el instante que el ojo mira.
 *  - UI por debajo de 300 ms. El cine (scroll) puede permitirse más.
 */

/** Curvas para GSAP */
export const EASE = {
  /** Entradas de contenido. Firme pero elegante. */
  out: "power3.out",
  /** Titulares enmascarados: el golpe de la línea al subir. */
  strongOut: "power4.out",
  /** Algo que se desplaza de un punto a otro. */
  inOut: "power2.inOut",
  /** Scrub: el scroll ya es la curva, no metas otra encima. */
  none: "none",
} as const;

/** Duraciones en segundos (GSAP trabaja en segundos) */
export const DUR = {
  /** Feedback de pulsación */
  press: 0.16,
  /** Micro: tooltips, badges */
  micro: 0.2,
  /** UI: menús, cabecera, estados */
  ui: 0.26,
  /** Revelado de contenido al hacer scroll */
  reveal: 0.85,
  /** Línea de titular enmascarada */
  line: 1.0,
  /** Entrada del hero completa */
  hero: 1.1,
} as const;

/** Escalonado entre hermanos, en segundos. Corto: 30-80 ms. */
export const STAGGER = {
  tight: 0.045,
  base: 0.065,
  loose: 0.08,
} as const;

/** Punto de disparo por defecto: el bloque asoma por abajo. */
export const START = "top 86%";

/** ¿El usuario ha pedido menos movimiento? */
export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Clase que activa los estados iniciales ocultos (gate de mejora progresiva). */
export const GATE_CLASS = "js-motion";

/** Clase que marca que la capa ya ha tomado el control. */
export const READY_CLASS = "motion-ready";
