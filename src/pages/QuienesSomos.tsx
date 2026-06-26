import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { photos } from "@/assets/photos";
import salaGrande from "@/assets/photos/restaurante-las-tejas-alcorcon-sala-grande.jpeg";
import { Heart, Users, Clock, Utensils } from "lucide-react";
import { GOLD } from "@/lib/constants";

const QuienesSomos = () => (
  <Layout>
    <SEO
      title="Restaurante tradicional en Alcorcón con más de 40 años | Las Tejas"
      description="Restaurante tradicional en Alcorcón con más de 40 años de historia. Cocina casera, trato cercano y una forma de trabajar que se mantiene desde 1978."
      path="/quienes-somos"
    />

    {/* HERO */}
    <PageHero
      image={photos.interior03}
      eyebrow="Quiénes somos"
      title="Restaurante tradicional en Alcorcón con más de 40 años de historia"
      subtitle="Cocina casera, trato cercano y una forma de trabajar que se mantiene desde 1978."
    />

    {/* HISTORIA */}
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
            Desde hace décadas
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
            Formando parte de Alcorcón
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            La identidad del restaurante se construye sobre una cocina estable,
            un trato directo y una clientela fiel que vuelve sabiendo lo que va a encontrar.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            En Las Tejas creemos que un buen restaurante de barrio se mide por la regularidad:
            el sabor que se mantiene, las raciones que llenan y la confianza de quien ya ha venido muchas veces.
            Somos un restaurante en Alcorcón donde la cocina de siempre sigue siendo la base de todo.
          </p>
        </div>

        <img
          src={salaGrande}
          alt="Comedor principal del restaurante tradicional Las Tejas en Alcorcón"
          className="w-full h-[520px] object-cover rounded-xl shadow-2xl"
        />
      </div>
    </section>

    {/* VALORES */}
    <section className="section-padding bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
            Nuestra forma de trabajar
          </div>

          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Una forma de cocinar donde importa la regularidad en cada servicio
          </h2>

          <p className="mt-4 text-white/70">
            La experiencia del cliente se basa en encontrar siempre el mismo nivel de calidad y atención.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { i: Heart, t: "Trato cercano", d: "Conocemos a nuestros clientes habituales por su nombre." },
            { i: Utensils, t: "Cocina casera", d: "Recetas tradicionales sin atajos ni concesiones." },
            { i: Users, t: "Ambiente familiar", d: "Un sitio cómodo para comer en familia o entre amigos." },
            { i: Clock, t: "Regularidad", d: "Siempre el mismo sabor, la misma calidad." },
          ].map(({ i: Icon, t, d }) => (
            <div
              key={t}
              className="bg-white/5 backdrop-blur-md p-7 rounded-xl border border-white/10 shadow-xl"
            >
              <Icon className="h-8 w-8 mb-4" style={{ color: GOLD }} />
              <h3 className="font-serif text-xl">{t}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                {d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* GALERÍA */}
    <section className="section-padding bg-[#f8f5ef]">
      <div className="container mx-auto px-4 md:px-6 text-center">

        <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
          Nuestro espacio
        </div>

        <h2 className="font-serif text-4xl md:text-5xl text-primary">
          Una casa donde apetece quedarse
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          <img
            src={photos.interior}
            alt="Interior del restaurante Las Tejas en Alcorcón"
            className="h-72 w-full object-cover rounded-xl shadow-soft"
          />
          <img
            src={photos.interior02}
            alt="Barra del restaurante tradicional en Alcorcón"
            className="h-72 w-full object-cover rounded-xl shadow-soft md:mt-12"
          />
          <img
            src={photos.interior03}
            alt="Comedor de Las Tejas con ambiente familiar"
            className="h-72 w-full object-cover rounded-xl shadow-soft"
          />
        </div>
      </div>
    </section>

    <CTASection />

  </Layout>
);

export default QuienesSomos;
