import { useEffect, useRef } from "react";

interface CountUpProps {
  end: number;
  /** Duración en ms */
  duration?: number;
  prefix?: string;
  suffix?: string;
  /** Formatea miles con separador es-ES (2.200) */
  separator?: boolean;
}

/**
 * Cuenta de 0 al valor final cuando entra en pantalla. Una sola vez.
 *
 * El número final se hornea en el HTML: sin JS (y para Google) ahí está el
 * dato. El conteo escribe directo en el DOM en lugar de pasar por el estado
 * de React: son ~90 repintados por cifra y no hay motivo para que cada uno
 * cueste un render del árbol.
 *
 * SSR-safe y respeta prefers-reduced-motion (muestra el final directo).
 */
export const CountUp = ({
  end,
  duration = 1600,
  prefix = "",
  suffix = "",
  separator = false,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  const format = (n: number) =>
    `${prefix}${separator ? n.toLocaleString("es-ES") : String(n)}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let started = false;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) return;
          started = true;
          obs.disconnect();

          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            // Salida fuerte: arranca disparado y se posa en la cifra.
            const eased = 1 - Math.pow(1 - p, 4);
            el.textContent = format(Math.round(end * eased));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration, prefix, suffix, separator]);

  return <span ref={ref}>{format(end)}</span>;
};
