import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { photos } from "@/assets/photos";
import { ArrowRight } from "lucide-react";
import { GOLD } from "@/lib/constants";

const items = [
  {
    to: "/especialidades/cachopo",
    title: "Cachopo",
    img: photos.cachopoAbierto,
    desc: "Especialidad asturiana, abundante, con relleno generoso y empanado crujiente.",
  },
  {
    to: "/especialidades/fabada",
    title: "Fabada",
    img: photos.fabada,
    desc: "Plato de cuchara con receta tradicional. Cocina lenta y producto.",
  },
  {
    to: "/especialidades/carnes",
    title: "Carnes",
    img: photos.entrecot,
    desc: "Producto seleccionado, cocción cuidada y raciones contundentes.",
  },
];

const Especialidades = () => (
  <Layout>
    <SEO
      title="Especialidades del restaurante | Las Tejas Alcorcón"
      description="Descubre las especialidades más reconocidas de Las Tejas: cachopo, fabada y carnes. Cocina tradicional asturiana y española en Alcorcón."
      path="/especialidades"
    />

    <PageHero
      image={photos.cachopo02}
      eyebrow="Especialidades"
      title="Especialidades que representan nuestra cocina"
      subtitle="Platos que concentran la identidad del restaurante."
    />

    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">

        {/* INTRO */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aquí se agrupan las elaboraciones especialmente reconocidas por quienes nos visitan con frecuencia.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 gap-10">
          {items.map((it) => (
            <Link
              key={it.title}
              to={it.to}
              className="group block bg-card rounded-xl overflow-hidden border border-border/60 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h2 className="font-serif text-3xl text-primary leading-tight">
                  {it.title}
                </h2>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {it.desc}
                </p>

                <div
                  className="mt-6 inline-flex items-center text-sm font-medium"
                  style={{ color: GOLD }}
                >
                  Ver especialidad
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>

    <CTASection />

  </Layout>
);

export default Especialidades;
