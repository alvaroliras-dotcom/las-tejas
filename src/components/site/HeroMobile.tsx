// components/hero/HeroMobile.tsx

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, ChefHat, Leaf, Users, MapPin, Clock, MessageCircle, CalendarDays, BookOpen } from "lucide-react";
import { GOLD } from "@/lib/constants";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import { HERO_IMAGES } from "@/lib/hero-images";

export const HeroMobile = () => {
  return (
    <section className="md:hidden relative bg-black overflow-hidden text-white" style={{ minHeight: "100svh" }}>

      {/* FOTO DE FONDO */}
      <div className="absolute -inset-[6%] will-change-transform">
        <HeroSlideshow images={HERO_IMAGES} imgClassName="object-[65%_center]" />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/95" />

      {/* CONTENIDO */}
      <div className="relative px-5 pt-28 pb-8 flex flex-col gap-5">

        {/* EYEBROW */}
        <div className="text-[11px] uppercase tracking-[0.25em] font-medium" style={{ color: GOLD }}>
          Restaurante en Alcorcón · Cocina casera desde 1978
        </div>

        {/* H1 */}
        <h1 className="font-serif text-[2.6rem] leading-[1.0]">
          Restaurante en Alcorcón
        </h1>

        {/* H2 */}
        <h2 className="font-serif text-2xl italic -mt-3" style={{ color: GOLD }}>
          Aquí se viene a comer muy bien
        </h2>

        {/* DESCRIPCIÓN */}
        <p className="text-[15px] text-white/85 leading-relaxed -mt-1">
          Cocina casera desde 1978. Fabada, cachopo y platos de siempre en Las Tejas.
        </p>

        {/* BADGE GOOGLE */}
        <div className="inline-flex items-center gap-2 bg-white/95 text-black px-4 py-2 rounded-full text-xs font-medium w-fit shadow-xl -mt-1">
          <Star className="h-3.5 w-3.5 fill-current" style={{ color: GOLD }} />
          <span>4,4 en Google · +2.200 reseñas</span>
        </div>

        {/* BOTONES */}
        <div className="flex flex-col gap-3">
          <Button
            asChild
            className="h-13 text-black rounded-md text-sm font-medium w-full"
            style={{ backgroundColor: GOLD }}
          >
            <Link to="/contacto">
              <CalendarDays className="mr-2 h-4 w-4" />
              Reservar mesa
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-13 border-white/45 text-white bg-black/20 rounded-md text-sm w-full"
          >
            <Link to="/carta">
              <BookOpen className="mr-2 h-4 w-4" />
              Ver carta
            </Link>
          </Button>
        </div>

        {/* ATRIBUTOS */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-black/35 border border-white/10 backdrop-blur-sm rounded-lg px-2 py-3">
            <ChefHat className="h-5 w-5 mx-auto mb-1" style={{ color: GOLD }} />
            <div className="text-[11px] leading-tight text-white/80">Cocina<br />casera</div>
          </div>
          <div className="bg-black/35 border border-white/10 backdrop-blur-sm rounded-lg px-2 py-3">
            <Leaf className="h-5 w-5 mx-auto mb-1" style={{ color: GOLD }} />
            <div className="text-[11px] leading-tight text-white/80">Productos<br />de calidad</div>
          </div>
          <div className="bg-black/35 border border-white/10 backdrop-blur-sm rounded-lg px-2 py-3">
            <Users className="h-5 w-5 mx-auto mb-1" style={{ color: GOLD }} />
            <div className="text-[11px] leading-tight text-white/80">Ambiente<br />familiar</div>
          </div>
        </div>

        {/* BANDA CONTACTO */}
        <div className="grid grid-cols-3 gap-2 text-[11px] text-white/80 bg-black/30 border border-white/10 backdrop-blur-sm rounded-lg p-3 mt-1">
          <div className="flex flex-col items-center gap-1 text-center">
            <MapPin className="h-4 w-4" style={{ color: GOLD }} />
            <span>Avda. Alcalde<br />José Aranda 49</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center border-x border-white/10">
            <Clock className="h-4 w-4" style={{ color: GOLD }} />
            <span>07:00 - 19:00<br />sáb y dom</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            <span>WhatsApp<br />Escríbenos</span>
          </div>
        </div>

      </div>
    </section>
  );
};
