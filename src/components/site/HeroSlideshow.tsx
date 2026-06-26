import { useEffect, useState } from "react";

interface HeroSlideshowProps {
  images: string[];
  /** Clases extra para cada <img> (p. ej. posición del recorte) */
  imgClassName?: string;
  /** Milisegundos que se ve cada foto antes de cambiar */
  interval?: number;
}

/**
 * Rota un conjunto de imágenes de fondo con fundido cruzado.
 * La foto activa lleva Ken Burns; las demás quedan en opacity 0.
 * SSR-safe: en servidor se hornea la primera ya visible; la rotación
 * arranca en cliente. Las <img> son decorativas (alt vacío): el
 * significado lo lleva el H1 del hero.
 */
export const HeroSlideshow = ({
  images,
  imgClassName = "",
  interval = 6500,
}: HeroSlideshowProps) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          aria-hidden={i !== active}
          className={[
            "absolute inset-0 w-full h-full object-cover",
            "transition-opacity duration-[1400ms] ease-in-out",
            i === active ? "opacity-100 animate-kenburns" : "opacity-0",
            imgClassName,
          ].join(" ")}
        />
      ))}
    </>
  );
};
