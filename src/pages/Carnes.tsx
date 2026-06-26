import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { photos } from "@/assets/photos";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Carnes = () => (
  <Layout>
    <SEO
      title="Carnes en Alcorcón | Restaurante Las Tejas"
      description="Carnes seleccionadas y platos principales en Las Tejas, Alcorcón. Producto de calidad, cocción cuidada y raciones contundentes."
      path="/especialidades/carnes"
    />

    <PageHero
      image={photos.entrecot}
      eyebrow="Especialidad"
      title="Carnes con protagonismo real del producto"
      subtitle="Cantidad, cocción cuidada y regularidad."
    />

    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">

        <img
          src={photos.cordero}
          alt="Cordero asado en Las Tejas Alcorcón"
          className="w-full h-[520px] object-cover rounded-lg shadow-warm"
        />

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
            Producto y fuego
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance leading-tight">
            Cocina tradicional, platos contundentes
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            En la propuesta de carnes de Las Tejas pesa el producto.
            Seleccionamos cortes y piezas con criterio, cocinados en su punto
            y servidos en raciones generosas.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Entrecot, cordero asado y carnes clásicas de la casa:
            cocina reconocible, abundante y muy valorada por quien busca comer bien.
          </p>

          <ul className="mt-6 space-y-2 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-accent">●</span>
              Cortes seleccionados con regularidad
            </li>

            <li className="flex gap-3">
              <span className="text-accent">●</span>
              Cocción cuidada en cada servicio
            </li>

            <li className="flex gap-3">
              <span className="text-accent">●</span>
              Raciones generosas y producto reconocible
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
          src={photos.entrecot}
          alt="Entrecot Las Tejas"
          className="w-full h-64 object-cover rounded-md shadow-soft"
        />

        <img
          src={photos.cordero}
          alt="Cordero Las Tejas"
          className="w-full h-64 object-cover rounded-md shadow-soft"
        />

        <img
          src={photos.cachopo01}
          alt="Carnes Las Tejas"
          className="w-full h-64 object-cover rounded-md shadow-soft col-span-2 md:col-span-1"
        />

      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Carnes;
