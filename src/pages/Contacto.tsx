import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { photos } from "@/assets/photos";
import logoBlanco from "@/assets/photos/logo-las-tejas-blanco.png";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { GOLD } from "@/lib/constants";

const TEL_HREF = "tel:+34916108007";
const TEL_TEXT = "916 10 80 07";

const Contacto = () => {
  return (
    <Layout>
      <SEO
        title="Contacto y reservas | Mesón Restaurante Las Tejas, Alcorcón"
        description="Reservas por teléfono en Mesón Restaurante Las Tejas, desde 1978: llama al 916 10 80 07. Av. del Alcalde José Aranda 49 (posterior), Alcorcón."
        path="/contacto"
      />

      <PageHero
        image={photos.fachada02}
        eyebrow="Contacto"
        title="Contacto y reservas"
        subtitle="Las reservas se hacen solo por teléfono: llámanos al 916 10 80 07."
      />

      {/* RESERVA POR TELÉFONO */}
      <section id="reserva" className="pt-12 pb-8 bg-[#f8f5ef]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div data-reveal="up"
            className="relative overflow-hidden rounded-2xl bg-primary text-cream px-6 py-14 md:px-16 md:py-20 text-center shadow-xl"
          >
            {/* LOGO BLANCO LAVADO */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <img
                src={logoBlanco}
                alt=""
                aria-hidden="true"
                className="w-[420px] md:w-[620px] object-contain opacity-[0.035]"
              />
            </div>

            <div className="relative z-10">
              <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
                Reservas solo por teléfono
              </div>

              <h2 className="font-serif text-3xl md:text-5xl leading-tight text-balance max-w-2xl mx-auto">
                Llama y te guardamos la mesa
              </h2>

              <a
                href={TEL_HREF}
                aria-label={`Llamar al ${TEL_TEXT}`}
                data-dial
                className="press-solo mt-10 inline-block font-serif text-5xl sm:text-6xl md:text-8xl tracking-tight transition-colors duration-200 hover:text-white"
                style={{ color: GOLD }}
              >
                {TEL_TEXT}
              </a>

              <div className="mt-10">
                <a
                  href={TEL_HREF}
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-md text-black text-sm font-semibold uppercase tracking-widest shadow-lg transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
                  style={{ backgroundColor: GOLD }}
                >
                  <Phone className="h-4 w-4" />
                  Llamar ahora
                </a>
              </div>

              <p className="mt-8 text-sm text-cream/70 max-w-md mx-auto leading-relaxed">
                Para grupos y celebraciones, dinos cuántos sois y qué día queréis venir y lo organizamos contigo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO LLEGAR */}
      <section className="pb-16 bg-[#f8f5ef]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl grid md:grid-cols-2 gap-6">
          <div data-reveal="up" className="bg-white border border-black/5 rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-md" style={{ backgroundColor: "#f4efe7", color: GOLD }}>
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Dirección</div>
                <div className="font-medium text-primary mt-1">Av. del Alcalde José Aranda 49 (posterior)</div>
                <div className="text-sm text-muted-foreground mt-0.5">28924 Alcorcón, Madrid</div>
                <a
                  href="https://maps.google.com/?q=Av.+del+Alcalde+José+Aranda+49,+28924+Alcorcón,+Madrid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline underline-offset-4 decoration-[#b89352]/60 hover:decoration-[#b89352]"
                >
                  <Navigation className="h-4 w-4" />
                  Cómo llegar
                </a>
              </div>
            </div>
          </div>

          <div data-reveal="up" className="bg-white border border-black/5 rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-md" style={{ backgroundColor: "#f4efe7", color: GOLD }}>
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Horario</div>
                <div className="font-medium text-primary mt-1">Consulta horario actualizado</div>
                <div className="text-sm text-muted-foreground mt-0.5">Te lo confirmamos por teléfono</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="pb-0">
        <div data-reveal className="w-full h-[420px]">
          <iframe
            title="Ubicación Las Tejas"
            src="https://www.google.com/maps?q=Mesón+Restaurante+Las+Tejas,+Av.+del+Alcalde+José+Aranda+49,+28924+Alcorcón,+Madrid&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
