import { Phone } from "lucide-react";
import logoBlanco from "@/assets/photos/logo-las-tejas-blanco.png";
import { GOLD } from "@/lib/constants";

/**
 * Cierre de todas las páginas: la reserva.
 *
 * Aquí el movimiento se aparta. El logo lavado del fondo deriva despacio
 * (parallax mínimo) para que el bloque no sea una pared plana, y el texto
 * entra escalonado. El botón NO se mueve al hacer scroll: cuando alguien
 * llega hasta aquí, lo que tiene que hacer es pulsarlo.
 */
export const CTASection = () => (
  <section
    className="relative overflow-hidden py-24 md:py-32"
    style={{ backgroundColor: GOLD }}
  >
    {/* LOGO BLANCO LAVADO */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <div data-parallax="0.10" className="will-change-transform">
        <img
          src={logoBlanco}
          alt=""
          aria-hidden="true"
          className="w-[520px] md:w-[750px] object-contain opacity-[0.07]"
        />
      </div>
    </div>

    <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-10">

      {/* TEXTO */}
      <div data-reveal-group>
        <div data-reveal className="text-xs uppercase tracking-[0.3em] mb-3 text-black/45 font-medium">
          Reserva por teléfono
        </div>
        <h2 data-reveal className="font-serif text-3xl md:text-5xl text-black leading-tight max-w-xl">
          ¿Te apetece comer bien de verdad?
        </h2>
        <p data-reveal className="mt-4 text-black/60 max-w-lg leading-relaxed">
          Llama, reserva tu mesa y ven a disfrutar de una cocina que lleva más de 40 años haciendo que la gente repita.
        </p>
      </div>

      {/* BOTÓN */}
      <a
        href="tel:+34916108007"
        className="press-solo group inline-flex items-center gap-3 px-10 py-5 rounded-md text-sm font-medium uppercase tracking-widest transition-[background-color,color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] bg-black text-white hover:bg-white hover:text-black flex-shrink-0 shadow-lg"
      >
        <Phone className="h-4 w-4" />
        Llamar: 916 10 80 07
      </a>

    </div>
  </section>
);
