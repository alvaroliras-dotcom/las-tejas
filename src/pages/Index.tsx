// =======================
// 🔵 INICIO DESARROLLO HOME
// =======================

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Star,
  Clock,
  ChevronLeft,
  ChevronRight,
  X,
  MapPin,
  BookOpen,
  ChefHat,
  Leaf,
  Users,
  MessageCircle,
  CalendarDays,
  ArrowRight,
  Utensils,
  ExternalLink,
  Grid3X3,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/site/SEO";
import { CTASection } from "@/components/site/CTASection";
import { HeroMobile } from "@/components/site/HeroMobile";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { useParallax } from "@/hooks/use-parallax";
import { photos } from "@/assets/photos";
import { GOLD } from "@/lib/constants";
import { HERO_IMAGES } from "@/lib/hero-images";

const Index = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const heroParallax = useParallax<HTMLDivElement>(0.15);

  const opiniones = [
    { t: "Trato muy cercano y comida abundante. Volveremos seguro.", a: "Cliente habitual" },
    { t: "Cocina casera de la de siempre. El menú del día está muy bien.", a: "Comensal local" },
    { t: "Buen ambiente familiar y raciones generosas. Buena relación calidad-precio.", a: "Cliente recurrente" },
    { t: "Servicio rápido y personal atento incluso en hora punta.", a: "Cliente de mediodía" },
    { t: "Muy buen cachopo, de los mejores que hemos probado en la zona.", a: "Pareja visitante" },
    { t: "Restaurante de confianza para comer bien en Alcorcón.", a: "Cliente de barrio" },
  ];

  const galeria = [
    photos.calamares,
    photos.oreja,
    photos.escalibada,
    photos.jamonQueso,
    photos.cordero,
    photos.pulpo01,
    photos.flan,
    photos.puding,
    photos.postres,
    photos.pulpo02,
    photos.interior,
    photos.salon,
  ];

  const especialidades = [
    {
      img: photos.fabadaOscura,
      title: "Fabada asturiana",
      text: "Fabada asturiana hecha como siempre. Sabor, tiempo y producto.",
      link: "/especialidades",
    },
    {
      img: photos.cachopo01,
      title: "Cachopo",
      text: "Generoso, crujiente y jugoso. Uno de los platos más pedidos de la casa.",
      link: "/especialidades",
    },
    {
      img: photos.flan,
      title: "Flan casero",
      text: "Flan casero tradicional. El postre que más recuerda la gente.",
      link: "/especialidades",
    },
  ];

  const heroStats = [
    {
      icon: Star,
      title: "4,4 / 5 en Google",
      text: "+2.200 reseñas",
      extra: "★★★★★",
    },
    {
      icon: ChefHat,
      title: "Cocina casera",
      text: "Recetas tradicionales hechas como en casa",
    },
    {
      icon: Leaf,
      title: "Productos de calidad",
      text: "Seleccionamos lo mejor de nuestra tierra",
    },
    {
      icon: Users,
      title: "Ambiente familiar",
      text: "Un lugar para disfrutar y sentirse como en casa",
    },
  ];

  const menuCards = [
    {
      img: photos.fabadaOscura,
      title: "Menú del día",
      text: "Primeros caseros, segundos variados y postre. Una opción pensada para comer bien cualquier día, sin complicaciones.",
      link: "/menu-del-dia",
      icon: ChefHat,
      cta: "Ver menú",
    },
    {
      img: photos.cachopo01,
      title: "Carta de restaurante",
      text: "Fabada, cachopo, carnes, pescados y platos tradicionales que llevan años funcionando. Cocina reconocible para venir sin fallar.",
      link: "/carta",
      icon: Utensils,
      cta: "Ver carta",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Mesón Restaurante Las Tejas | Restaurante en Alcorcón desde 1978"
        description="Fabada asturiana, cachopo, menú del día, cocina casera y postres reconocidos en Alcorcón."
        path="/"
      />

      {/* ======================= */}
      {/* 1. HERO — GIRO DESKTOP */}
      {/* ======================= */}

      <section className="hidden md:block relative min-h-[980px] bg-black overflow-hidden">
        <div ref={heroParallax} className="absolute -inset-[8%] will-change-transform">
          <HeroSlideshow images={HERO_IMAGES} imgClassName="object-center" />
        </div>

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        <div className="relative container mx-auto px-4 md:px-6 pt-28 pb-14 text-white">
          <div className="max-w-3xl">

            {/* TEXTO SUPERIOR */}
            <div
              className="text-xs md:text-sm uppercase tracking-[0.25em] font-medium"
              style={{ color: GOLD }}
            >
              Restaurante en Alcorcón · Cocina casera desde 1978
            </div>

            {/* H1 SEO LIMPIO */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-6 leading-[0.98]">
              Restaurante en Alcorcón
            </h1>

            {/* COPY DE CONVERSIÓN */}
            <h2
              className="font-serif text-3xl md:text-5xl mt-4 italic"
              style={{ color: GOLD }}
            >
              Aquí se viene a comer muy bien
            </h2>

            {/* TEXTO PRINCIPAL */}
            <p className="mt-7 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">
              Cocina casera desde 1978. Fabada, cachopo y platos de los de siempre en un restaurante donde lo importante sigue siendo comer bien.
            </p>

            <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
              Si buscas un sitio donde comer bien de verdad, en Las Tejas llevamos más de 40 años haciendo que la gente repita.
            </p>

            {/* BOTONES */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <Button
                asChild
                className="px-8 py-6 text-black rounded-md"
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
                className="border-white/45 text-white bg-black/20 px-8 py-6 rounded-md"
              >
                <Link to="/carta">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Ver carta
                </Link>
              </Button>
            </div>
          </div>

          {/* ======================= */}
          {/* 2. FALDÓN GLASS DESKTOP */}
          {/* ======================= */}

          <div className="mt-16 bg-black/35 backdrop-blur-md border border-white/10 rounded-xl grid md:grid-cols-4 overflow-hidden shadow-2xl">
            {heroStats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="p-6 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0"
                >
                  <div className="flex items-center gap-3 mb-2" style={{ color: GOLD }}>
                    <Icon className="h-6 w-6 flex-shrink-0" />
                    <span className="font-semibold text-white">{item.title}</span>
                  </div>

                  {item.extra && (
                    <div className="text-sm mb-1" style={{ color: GOLD }}>
                      {item.extra}
                    </div>
                  )}

                  <div className="text-white/70 text-sm leading-relaxed">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================= */}
      {/* 2. HERO — GIRO MOBILE */}
      {/* ======================= */}

      <HeroMobile />

      {/* ======================= */}
      {/* 3. BANDA DATOS — CONTACTO */}
      {/* ======================= */}

      <section className="hidden md:block bg-[#f8f5ef] py-7 border-b border-black/5">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-4 gap-6 items-center text-sm text-primary">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
            <span>
              Avenida Alcalde José Aranda 49 posterior
              <br />
              Alcorcón · 28924 · Madrid
            </span>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
            <span>
              07:00 - 19:00
              <br />
              sábado y domingo
            </span>
          </div>

          <div className="flex items-start gap-3">
            <MessageCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#25D366]" />
            <span>
              WhatsApp
              <br />
              670 XXXXXXX
            </span>
          </div>

          <Button
            asChild
            className="text-black hover:opacity-90 rounded-md"
            style={{ backgroundColor: GOLD }}
          >
            <Link to="/contacto">Reservar mesa</Link>
          </Button>
        </div>
      </section>

      {/* ======================= */}
      {/* 4. HISTORIA — QUIÉNES SOMOS */}
      {/* ======================= */}

      <section className="section-padding bg-[#f8f5ef] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal as="div" variant="left">

            {/* EYEBROW */}
            <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
              Nuestra historia
            </div>

            {/* H2 OPTIMIZADO */}
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
              Más de 40 años haciendo las cosas como siempre
            </h2>

            {/* TEXTO */}
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Las Tejas lleva desde 1978 formando parte del día a día de muchas personas.
              Cocina casera, producto reconocible y una forma de trabajar que no ha cambiado con el tiempo.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
              Aquí vienes a lo que vienes: a comer bien, a sentirte a gusto y a saber que lo que pidas va a estar como esperas.
            </p>

            {/* CTA */}
            <Button
              asChild
              variant="outline"
              className="mt-8 bg-white border-primary/20 text-primary hover:bg-primary hover:text-white"
            >
              <Link to="/quienes-somos">Conócenos mejor</Link>
            </Button>
          </Reveal>

          {/* IMÁGENES (NO TOCADAS) */}
          <Reveal as="div" variant="right" className="relative h-[460px]">
            <div className="absolute right-6 top-10 w-[360px] h-[300px] rounded-[45%] bg-[#e5d8c8] blur-3xl opacity-80 rotate-[-8deg]" />
            <div className="absolute right-12 top-16 w-[340px] h-[240px] rounded-full bg-[#d7c7b3] blur-2xl opacity-40 rotate-[12deg]" />

            <div className="absolute left-8 top-8 bg-white p-3 shadow-2xl rotate-[-6deg] z-10">
              <img
                src={photos.cartel1978}
                alt="Cartel histórico Las Tejas 1978"
                className="w-[260px] h-[300px] object-cover"
              />
            </div>

            <div className="absolute right-0 top-24 bg-white p-3 shadow-2xl rotate-[5deg] z-20">
              <img
                src={photos.propietarioMarcial}
                alt="Propietario de Las Tejas"
                className="w-[270px] h-[300px] object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================= */}
      {/* 4b. CIFRAS — CONTEO ANIMADO */}
      {/* ======================= */}

      <section className="bg-[#7e252e] text-white py-16 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #fff 1px, transparent 1px), radial-gradient(circle at 70% 70%, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <Reveal as="div" className="relative container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 text-center md:divide-x divide-white/15">
            <div className="px-4">
              <div className="font-serif text-5xl md:text-7xl leading-none" style={{ color: GOLD }}>
                <CountUp end={1978} />
              </div>
              <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.25em] text-white/70">
                El año que abrimos
              </div>
            </div>

            <div className="px-4">
              <div className="font-serif text-5xl md:text-7xl leading-none" style={{ color: GOLD }}>
                <CountUp end={48} />
              </div>
              <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.25em] text-white/70">
                Años de cocina casera
              </div>
            </div>

            <div className="px-4">
              <div className="font-serif text-5xl md:text-7xl leading-none" style={{ color: GOLD }}>
                <CountUp end={2200} prefix="+" separator />
              </div>
              <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.25em] text-white/70">
                Reseñas en Google
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ======================= */}
      {/* 5. MENÚ + CARTA — DECISIÓN */}
      {/* ======================= */}

      <section className="section-padding bg-[#090807] text-white">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
          {menuCards.map((item, i) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} as="div" delay={i * 140}>
              <Link
                to={item.link}
                className="group relative block h-[320px] rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-shadow duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                <div className="absolute left-8 bottom-8 right-8">
                  <Icon className="h-7 w-7 mb-4" style={{ color: GOLD }} />

                  {/* H2 = INTENCIÓN CLARA */}
                  <h2 className="font-serif text-3xl md:text-4xl">
                    {item.title}
                  </h2>

                  {/* TEXTO MEJORADO */}
                  <p className="mt-4 text-white/75 leading-relaxed max-w-sm">
                    {item.title === "Menú del día"
                      ? "Primeros caseros, segundos variados y postre. Una opción pensada para comer bien cualquier día sin complicaciones."
                      : "Los platos de siempre: fabada, cachopo, carnes y pescados. Cocina reconocible, sin sorpresas y con sabor a casa."}
                  </p>

                  {/* CTA MÁS NATURAL */}
                  <div
                    className="inline-flex items-center gap-2 mt-6 text-sm font-medium"
                    style={{ color: GOLD }}
                  >
                    {item.title === "Menú del día" ? "Ver menú completo" : "Ver carta completa"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ======================= */}
      {/* 6. ESPECIALIDADES — PRODUCTO */}
      {/* ======================= */}

      <section className="section-padding text-white text-center relative overflow-hidden">

        {/* FONDO MADERA CON PARALLAX */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${photos.texturaMadera})` }}
        />
        {/* OVERLAY OSCURO PARA LEGIBILIDAD */}
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">

          <Reveal as="div">
          {/* EYEBROW */}
          <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
            Platos más pedidos
          </div>

          {/* H2 (SE QUEDA) */}
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
            Los platos por los que la gente vuelve
          </h2>

          {/* TEXTO MEJORADO */}
          <p className="mt-6 text-white/70 max-w-2xl mx-auto leading-relaxed">
            Si es tu primera vez, empieza por aquí. Son los platos que más salen de cocina y los que hacen que mucha gente vuelva una y otra vez.
          </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {especialidades.map((item, i) => (
              <Reveal
                key={item.title}
                as="div"
                delay={i * 120}
              >
              <Link
                to={item.link}
                className="group block text-center"
              >
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <h3 className="font-serif text-2xl mt-5" style={{ color: GOLD }}>
                  {item.title}
                </h3>

                <p className="text-white/70 mt-2 max-w-xs mx-auto leading-relaxed">
                  {item.text}
                </p>

                <div
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: GOLD }}
                >
                  Ver plato
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              </Reveal>
            ))}
          </div>

          <Button
            asChild
            variant="outline"
            className="mt-10 border-white/20 text-white bg-transparent hover:bg-white hover:text-black"
          >
            <Link to="/especialidades">
              Ver todas las especialidades
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ======================= */}
      {/* 7. RESEÑAS — PRUEBA SOCIAL */}
      {/* ======================= */}

      <section className="section-padding bg-[#f8f5ef]">
        <div className="container mx-auto px-4 md:px-6 text-center">

          <Reveal as="div">
          <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
            Opiniones reales
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-primary max-w-3xl mx-auto leading-tight">
            Lo que dicen quienes ya han comido con nosotros
          </h2>

          {/* TEXTO MEJORADO */}
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Más de 2.000 reseñas en Google avalan lo mismo: comida casera, buen trato y un sitio al que apetece volver.
          </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {opiniones.map((o, i) => (
              <Reveal
                key={i}
                as="div"
                delay={(i % 3) * 110}
                className="bg-white p-6 rounded-xl shadow-soft border border-black/5 text-left transition-shadow duration-500 hover:shadow-warm"
              >
                <div className="mb-3 tracking-[0.18em]" style={{ color: GOLD }}>
                  ★★★★★
                </div>

                <p className="text-primary/90 leading-relaxed italic">
                  “{o.t}”
                </p>

                <div className="mt-4 text-sm text-muted-foreground">
                  — {o.a}
                </div>
              </Reveal>
            ))}
          </div>

          <Button
            asChild
            variant="outline"
            className="mt-10 bg-white border-primary/20 text-primary hover:bg-primary hover:text-white"
          >
            <a
              href="https://www.google.com/search?q=Restaurante+Las+Tejas+Alcorc%C3%B3n+rese%C3%B1as"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver todas las reseñas en Google
            </a>
          </Button>
        </div>
      </section>

      {/* ======================= */}
      {/* 8. GALERÍA — VALIDACIÓN VISUAL */}
      {/* ======================= */}

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">

          <Reveal as="div">
          <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
            Nuestra cocina
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-primary max-w-3xl mx-auto leading-tight">
            Así se come en Las Tejas
          </h2>

          {/* TEXTO MEJORADO */}
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sin postureo. Platos reales, raciones generosas y el ambiente de siempre. Lo que ves aquí es lo que te vas a encontrar.
          </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {galeria.map((img, i) => (
              <Reveal key={i} as="div" delay={(i % 4) * 90}>
              <button
                onClick={() => setSelected(i)}
                className="group block w-full overflow-hidden rounded-lg border border-black/5 shadow-sm"
                aria-label={`Abrir imagen ${i + 1} de la galería`}
              >
                <img
                  src={img}
                  alt={`Fotos reales de platos y local en Restaurante Las Tejas ${i + 1}`}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </button>
              </Reveal>
            ))}
          </div>

          <Button
            variant="outline"
            className="mt-10 border-primary/20 text-primary hover:bg-primary hover:text-white"
            onClick={() => setSelected(0)}
          >
            <Grid3X3 className="mr-2 h-4 w-4" />
            Ver galería completa
          </Button>
        </div>

        {selected !== null && (
          <div
            className="lb-backdrop fixed inset-0 bg-black/92 z-50 flex items-center justify-center px-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white hover:text-white/70"
              aria-label="Cerrar galería"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected((selected - 1 + galeria.length) % galeria.length);
              }}
              className="absolute left-6 text-white hover:text-white/70"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <img
              key={selected}
              src={galeria[selected]}
              alt="Imagen ampliada Restaurante Las Tejas"
              onClick={(e) => e.stopPropagation()}
              className="lb-img max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected((selected + 1) % galeria.length);
              }}
              className="absolute right-6 text-white hover:text-white/70"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
          </div>
        )}
      </section>

      {/* ======================= */}
      {/* 9. CTA FINAL — CONVERSIÓN */}
      {/* ======================= */}

      <CTASection />

      {/* ======================= */}
      {/* 🔴 FIN DESARROLLO HOME */}
      {/* ======================= */}

    </Layout>
  );
};

export default Index;
