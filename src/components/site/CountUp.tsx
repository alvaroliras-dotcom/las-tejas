import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  /** Formatea miles con separador es-ES (2.200) */
  separator?: boolean;
}

/**
 * Cuenta de 0 al valor final cuando entra en pantalla. Una sola vez.
 * SSR-safe y respeta prefers-reduced-motion (muestra el final directo).
 */
export const CountUp = ({
  end,
  duration = 1800,
  prefix = "",
  suffix = "",
  separator = false,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(end);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVal(end);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done.current) {
            done.current = true;
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
              setVal(end);
              return;
            }
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(end * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  const shown = separator ? val.toLocaleString("es-ES") : String(val);
  return (
    <span ref={ref}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
};
