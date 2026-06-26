import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Etiqueta a renderizar (div por defecto) */
  as?: ElementType;
  /** Dirección de entrada */
  variant?: "up" | "left" | "right";
  /** Retardo en ms (para escalonar tarjetas) */
  delay?: number;
  /** Umbral de visibilidad para disparar */
  threshold?: number;
}

/**
 * Envuelve contenido y lo revela con fundido + desplazamiento
 * cuando entra en el viewport. Solo se anima una vez.
 * En servidor (SSG) y con prefers-reduced-motion se renderiza ya visible.
 */
export const Reveal = ({
  children,
  className = "",
  as: Tag = "div",
  variant = "up",
  delay = 0,
  threshold = 0.15,
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const variantClass =
    variant === "left" ? "reveal-left" : variant === "right" ? "reveal-right" : "";

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${variantClass} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};
