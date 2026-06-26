import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { photos } from "@/assets/photos";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Cachopo = () => (
  <Layout>
    <SEO
      title="Cachopo en Alcorcón | Las Tejas"
      description="Especialidad de cachopo en Restaurante Las Tejas, Alcorcón. Cachopo asturiano abundante, bien relleno y elaborado como tradicionalmente."
      path="/especialidades/cachopo"
    />

    <PageHero
      image={photos.cachopoAbierto}
      eyebrow="Especialidad asturiana"
      title="Cachopo en Alcorcón elaborado como verdadera especialidad"
      subtitle="Uno de los platos más reconocidos por quienes visitan el restaurante."
    />

    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={photos.cachopo01}
          alt="Cachopo asturiano en Las Tejas Alcorcón"
          className="w-full h-[520px] object-cover rounded-lg shadow-warm"
        />

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
            Receta tradicional
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance leading-tight">
            Un cachopo de los de verdad
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            En Las Tejas preparamos el cachopo como manda la tradición asturiana:
            dos finas láminas de carne envolviendo un relleno generoso,
            empanado dorado y crujiente, servido con una guarnición que acompaña
            sin quitar protagonismo al plato.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Es una de las especialidades más pedidas por quienes nos visitan.
            Abundante, sabroso y muy reconocible dentro de una cocina donde
            el cliente sabe perfectamente lo que viene a buscar.
          </p>

          <ul className="mt-6 space-y-2 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-accent">●</span>
              Carne tierna y bien empanada
            </li>

            <li className="flex gap-3">
              <span className="text-accent">●</span>
              Relleno generoso con jamón y queso
            </li>

            <li className="flex gap-3">
              <span className="text-accent">●</span>
              Ración generosa, pensada para compartir
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
          src={photos.cachopo01}
          alt=""
          className="w-full h-64 object-cover rounded-md shadow-soft"
        />

        <img
          src={photos.cachopo02}
          alt=""
          className="w-full h-64 object-cover rounded-md shadow-soft"
        />

        <img
          src={photos.cachopoAbierto}
          alt=""
          className="w-full h-64 object-cover rounded-md shadow-soft col-span-2 md:col-span-1"
        />
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Cachopo;
