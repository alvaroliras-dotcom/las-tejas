import { useParallax } from "@/hooks/use-parallax";

interface PageHeroProps {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

/**
 * Cabecera de página interior.
 *
 * Movimiento: la foto respira (Ken Burns) y se queda atrás al bajar
 * (parallax con scrub); el titular entra por líneas enmascaradas y el resto
 * detrás, escalonado. El recorrido del parallax está por debajo del sangrado
 * del contenedor (-8%) para que nunca asome el borde de la foto.
 */
export const PageHero = ({ image, eyebrow, title, subtitle }: PageHeroProps) => {
  const parallax = useParallax<HTMLDivElement>(0.14);

  return (
    <section
      data-hero
      className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden"
    >
      <div ref={parallax} className="absolute -inset-[8%] will-change-transform">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover animate-kenburns"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-overlay" />

      <div className="relative container mx-auto px-4 md:px-6 pb-14 text-cream">
        {eyebrow && (
          <div data-hero-item className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            {eyebrow}
          </div>
        )}

        <h1 data-split className="font-serif text-4xl md:text-6xl text-balance max-w-3xl">
          {title}
        </h1>

        {subtitle && (
          <p data-hero-item className="mt-5 text-lg text-cream/85 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
