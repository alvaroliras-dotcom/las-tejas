import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { photos } from "@/assets/photos";
import salaGrande from "@/assets/photos/restaurante-las-tejas-alcorcon-sala-grande.jpeg";
import { Star, Quote } from "lucide-react";
import { GOLD } from "@/lib/constants";

const opiniones = [
  { t: "Trato muy cercano y comida abundante. Volveremos seguro.", a: "Cliente habitual" },
  { t: "Cocina casera de la de siempre. El menú del día está muy bien de precio.", a: "Comensal local" },
  { t: "Buen ambiente familiar y raciones generosas. Buena relación calidad-precio.", a: "Cliente recurrente" },
  { t: "El cachopo es enorme y muy sabroso. Salimos contentísimos.", a: "Visitante" },
  { t: "Servicio rápido en el menú del día, perfecto para comer cerca del trabajo.", a: "Cliente del menú" },
  { t: "Comida tradicional de la que ya casi no se encuentra. Repetiremos.", a: "Cliente nuevo" },
  { t: "Fabada muy lograda y trato muy atento durante toda la comida.", a: "Reseña local" },
  { t: "Raciones generosas y ambiente tranquilo para ir en familia.", a: "Cliente familiar" },
  { t: "Relación calidad-precio excelente en comparación con la zona.", a: "Cliente frecuente" },
  { t: "El personal fue amable y nos recomendaron platos que acertaron al 100%.", a: "Primera visita" },
  { t: "Nos atendieron rápido y salimos encantados con los postres caseros.", a: "Cliente satisfecho" },
  { t: "Sitio de confianza para comer bien en Alcorcón, repetimos a menudo.", a: "Cliente de barrio" },
];

const patrones = [
  "Trato cercano",
  "Comida abundante",
  "Servicio ágil",
  "Menú bien valorado",
  "Ambiente familiar",
  "Buena relación calidad-precio",
  "Intención de volver",
  "Cocina reconocible",
];

const Opiniones = () => (
  <Layout>
    <SEO
      title="Opiniones restaurante Las Tejas | Alcorcón"
      description="Opiniones reales de clientes del restaurante Las Tejas en Alcorcón. Lo que más valoran: trato cercano, raciones generosas y cocina tradicional."
      path="/opiniones"
    />

    <PageHero
      image={salaGrande}
      eyebrow="Opiniones"
      title="Opiniones reales de quienes nos visitan"
      subtitle="Lo que más valoran nuestros clientes habituales."
    />

    {/* ⭐ BLOQUE VALORACIÓN */}
    <section className="pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white border border-black/5 rounded-xl shadow-lg p-8 text-center">

          <div className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: GOLD }}>
            Valoración media
          </div>

          <div className="font-serif text-5xl text-primary">
            4,4 / 5
          </div>

          <p className="mt-2 text-muted-foreground">
            Basado en más de 2.200 reseñas reales de clientes.
          </p>
        </div>
      </div>
    </section>

    {/* 🔥 TAGS */}
    <section className="pb-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">
            Lo que más nos repiten
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {patrones.map((p) => (
            <span
              key={p}
              className="px-5 py-2.5 rounded-full bg-[#f4efe7] text-sm border border-black/5 hover:scale-105 transition"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* 💬 RESEÑAS */}
    <section className="section-padding bg-[#f8f5ef]">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opiniones.map((o, i) => (
            <div
              key={i}
              className="bg-white p-7 rounded-xl shadow-md border border-black/5 relative hover:-translate-y-2 hover:shadow-xl transition"
            >
              <Quote className="h-8 w-8 text-black/10 absolute top-5 right-5" />

              <div className="flex gap-0.5 mb-4" style={{ color: GOLD }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="text-primary/90 leading-relaxed italic">
                “{o.t}”
              </p>

              <div className="mt-5 text-sm text-muted-foreground">
                — {o.a}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    <CTASection />

  </Layout>
);

export default Opiniones;
