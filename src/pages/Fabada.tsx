import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { photos } from "@/assets/photos";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Fabada = () => (
  <Layout>
    <SEO
      title="Fabada asturiana en Alcorcón | Las Tejas"
      description="Fabada asturiana tradicional en Las Tejas: plato de cuchara elaborado a fuego lento y con receta de toda la vida."
      path="/especialidades/fabada"
    />

    <PageHero
      image={photos.fabada}
      eyebrow="Especialidad asturiana"
      title="Fabada asturiana elaborada como plato de referencia"
      subtitle="Uno de los sabores clásicos de la casa, cocinado con tiempo y sin atajos."
    />

    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={photos.fabada}
          alt="Fabada asturiana de Las Tejas en Alcorcón"
          className="w-full h-[520px] object-cover rounded-lg shadow-warm"
        />

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
            Receta tradicional
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance leading-tight">
            Fabada cocinada como manda la tradición
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Nuestra fabada se prepara con cocción lenta y una receta de siempre,
            respetando el tiempo que exige un plato que no admite prisas.
            La textura de la alubia, el compango y el equilibrio del caldo forman
            parte de una elaboración que sigue siendo una referencia dentro de la casa.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Es uno de esos platos que definen una forma de cocinar:
            contundente, reconocible y pensado para quien sigue valorando
            la cocina de cuchara hecha con criterio.
          </p>

          <ul className="mt-6 space-y-2 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-accent">●</span>
              Cocción lenta y punto cuidado
            </li>

            <li className="flex gap-3">
              <span className="text-accent">●</span>
              Receta fiel al estilo asturiano
            </li>

            <li className="flex gap-3">
              <span className="text-accent">●</span>
              Plato de cuchara con carácter
            </li>
          </ul>

          <div className="mt-8 flex gap-3">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contacto">Reservar mesa</Link>
            </Button>

            <Button asChild variant="outline">
              <Link to="/especialidades">
                Otras especialidades
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-muted/40 py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-3 gap-3">
        <img
          src={photos.fabada}
          alt=""
          className="w-full h-64 object-cover rounded-md shadow-soft"
        />

        <img
          src={photos.fabadaHero}
          alt=""
          className="w-full h-64 object-cover rounded-md shadow-soft"
        />

        <img
          src={photos.comedorLasTejas}
          alt=""
          className="w-full h-64 object-cover rounded-md shadow-soft col-span-2 md:col-span-1"
        />
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Fabada;
