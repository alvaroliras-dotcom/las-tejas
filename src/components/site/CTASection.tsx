import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logoBlanco from "@/assets/photos/logo-las-tejas-blanco.png";
import { GOLD } from "@/lib/constants";

export const CTASection = () => (
  <section
    className="relative overflow-hidden py-24 md:py-32"
    style={{ backgroundColor: GOLD }}
  >
    {/* LOGO BLANCO LAVADO */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <img
        src={logoBlanco}
        alt=""
        aria-hidden="true"
        className="w-[520px] md:w-[750px] object-contain opacity-[0.07]"
      />
    </div>

    <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-10">

      {/* TEXTO */}
      <div>
        <div className="text-xs uppercase tracking-[0.3em] mb-3 text-black/45 font-medium">
          Reserva
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-black leading-tight max-w-xl">
          ¿Te apetece comer bien de verdad?
        </h2>
        <p className="mt-4 text-black/60 max-w-lg leading-relaxed">
          Reserva tu mesa y ven a disfrutar de una cocina que lleva más de 40 años haciendo que la gente repita.
        </p>
      </div>

      {/* BOTÓN */}
      <Link
        to="/contacto"
        className="group inline-flex items-center gap-3 px-10 py-5 rounded-md text-sm font-medium uppercase tracking-widest transition-all duration-300 bg-black text-white hover:bg-white hover:text-black flex-shrink-0 shadow-lg"
      >
        Reservar mesa
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>

    </div>
  </section>
);
