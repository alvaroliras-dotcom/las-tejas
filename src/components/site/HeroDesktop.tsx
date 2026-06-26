// components/hero/HeroDesktop.tsx

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { photos } from "@/assets/photos";
import { GOLD } from "@/lib/constants";

export const HeroDesktop = () => {
  return (
    <section className="hidden md:block relative min-h-[980px] bg-black overflow-hidden">

      <img
        src={photos.fabadaOscura}
        alt="Fabada asturiana casera en Restaurante Las Tejas Alcorcón"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      <div className="relative container mx-auto px-6 pt-28 pb-14 text-white">

        <div className="max-w-3xl">

          <div className="text-sm uppercase tracking-[0.25em]" style={{ color: GOLD }}>
            Restaurante en Alcorcón · Cocina casera desde 1978
          </div>

          <h1 className="font-serif text-7xl mt-6 leading-tight">
            Restaurante en Alcorcón
          </h1>

          <h2 className="font-serif text-4xl mt-4 italic" style={{ color: GOLD }}>
            Aquí se viene a comer muy bien
          </h2>

          <p className="mt-6 text-lg text-white/85 max-w-xl">
            Cocina casera desde 1978. Fabada, cachopo y platos de los de siempre.
          </p>

          <div className="mt-8 flex gap-4">
            <Button asChild className="px-8 py-6 text-black" style={{ backgroundColor: GOLD }}>
              <Link to="/contacto">Reservar mesa</Link>
            </Button>

            <Button asChild variant="outline" className="border-white text-white px-8 py-6">
              <Link to="/carta">Ver carta</Link>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};