import type { ReactNode, ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Etiqueta a renderizar (div por defecto) */
  as?: ElementType;
  /** Dirección de entrada */
  variant?: "up" | "left" | "right" | "scale" | "mask";
  /** Retardo en ms (para escalonar tarjetas) */
  delay?: number;
  /**
   * Obsoleto. El umbral lo fija la capa de movimiento para todo el sitio,
   * así el ritmo es el mismo en todas las páginas. Se mantiene la prop
   * para no romper las llamadas existentes.
   */
  threshold?: number;
}

/**
 * Declara que este bloque entra revelándose al llegar a pantalla.
 *
 * No anima nada por su cuenta: solo deja la marca. El tiempo, la curva y el
 * orden los pone la capa de movimiento (MotionProvider + GSAP). En servidor
 * y sin JS se renderiza visible y quieto — el estado oculto vive detrás del
 * gate `.js-motion`, no en este componente.
 */
export const Reveal = ({
  children,
  className = "",
  as: Tag = "div",
  variant = "up",
  delay = 0,
}: RevealProps) => (
  <Tag
    className={className}
    data-reveal={variant}
    data-reveal-delay={delay || undefined}
  >
    {children}
  </Tag>
);
