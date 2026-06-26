import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { photos } from "@/assets/photos";
import { Clock, Utensils } from "lucide-react";
import { GOLD } from "@/lib/constants";

const MenuDelDia = () => (
  <Layout>
    <SEO
      title="Menú del día en Alcorcón | Las Tejas"
      description="Menú del día completo en Alcorcón con cocina casera, propuesta diaria equilibrada y servicio ágil. Restaurante Las Tejas."
      path="/menu-del-dia"
    />

    <PageHero
      image={photos.huevosRotos}
      eyebrow="Menú del día"
      title="Menú del día equilibrado y cocina casera"
      subtitle="Pensado para comidas diarias. Rapidez, sabor y regularidad."
    />

    {/* CONTENIDO */}
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* TEXTO */}
        <div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
            Cada día una propuesta diferente
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Cada día se prepara una propuesta equilibrada orientada a quienes valoran rapidez, sabor y regularidad.
            Una opción ideal para la comida del mediodía en Alcorcón, con primeros caseros,
            segundos contundentes y postres tradicionales.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <div className="p-5 bg-muted/50 rounded-lg flex gap-3">
              <Clock className="h-5 w-5 text-secondary mt-1" />
              <div>
                <div className="font-medium">Horario</div>
                <div className="text-sm text-muted-foreground">
                  Consulta el horario diario llamando al 916 10 80 07.
                </div>
              </div>
            </div>

            <div className="p-5 bg-muted/50 rounded-lg flex gap-3">
              <Utensils className="h-5 w-5 text-secondary mt-1" />
              <div>
                <div className="font-medium">Precio</div>
                <div className="text-sm text-muted-foreground">
                  Precio actualizado disponible por teléfono.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TARJETA MENÚ */}
        <div className="bg-card border border-border rounded-xl shadow-xl p-8 md:p-10">

          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.3em]" style={{ color: GOLD }}>
              Hoy en Las Tejas
            </div>

            <h3 className="font-serif text-3xl md:text-4xl text-primary mt-3">
              Menú del día
            </h3>

            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-border" />
              <span style={{ color: GOLD }}>●</span>
              <span className="h-px w-10 bg-border" />
            </div>
          </div>

          {[
            {
              t: "Primeros",
              items: [
                "Selección de primeros caseros del día",
                "Plato de cuchara tradicional",
                "Opciones según mercado",
              ],
            },
            {
              t: "Segundos",
              items: [
                "Carnes y pescados del día",
                "Elaboraciones a la plancha y guisos",
                "Guarnición incluida",
              ],
            },
            {
              t: "Postres y bebida",
              items: [
                "Postres caseros",
                "Pan y bebida",
                "Consulta disponibilidad diaria",
              ],
            },
          ].map((b) => (
            <div key={b.t} className="mb-8 last:mb-0">
              <h4 className="font-serif text-xl mb-4" style={{ color: GOLD }}>
                {b.t}
              </h4>

              <ul className="space-y-2 text-muted-foreground">
                {b.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span style={{ color: GOLD }}>·</span> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-6 pt-5 border-t border-border text-xs text-muted-foreground italic text-center">
            Menú sujeto a disponibilidad y cambios diarios.
          </div>
        </div>
      </div>
    </section>

    {/* GALERÍA */}
    <section className="section-padding bg-muted/40">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <img src={photos.calamares} alt="Calamares en Las Tejas" className="w-full h-44 object-cover rounded-lg" />
        <img src={photos.cordero} alt="Cordero asado en Las Tejas" className="w-full h-44 object-cover rounded-lg" />
        <img src={photos.flan} alt="Flan casero Las Tejas" className="w-full h-44 object-cover rounded-lg" />
        <img src={photos.escalibada} alt="Escalibada Las Tejas" className="w-full h-44 object-cover rounded-lg" />
      </div>
    </section>

    <CTASection />

  </Layout>
);

export default MenuDelDia;
