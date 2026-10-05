import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { photos } from "@/assets/photos";
import { GOLD } from "@/lib/constants";

// Carta basada en el cartel de precios que tienen colgado en el local.
// Solo aparece lo que figura en el cartel. Los platos sin foto se muestran sin imagen.

interface Dish {
  name: string;
  desc?: string;
  price: string;
  img?: string;
}

interface Section {
  title: string;
  intro?: string;
  dishes: Dish[];
}

const sections: Section[] = [
  {
    title: "Raciones",
    intro: "Para compartir en la mesa o en la barra.",
    dishes: [
      { name: "Pulpo gallego", desc: "Pulpo cocido con pimentón y aceite de oliva.", price: "28€", img: photos.pulpo02 },
      { name: "Gulas al ajillo", desc: "En cazuela de barro, con ajo y guindilla.", price: "15€", img: photos.gulasAjillo },
      { name: "Gambas a la plancha", desc: "A la plancha, con sal gruesa.", price: "30€", img: photos.gambasPlancha },
      { name: "Gambón al ajillo", desc: "En cazuela de barro, con ajo y guindilla.", price: "24€", img: photos.gambonAjillo },
      { name: "Almejas a la marinera", desc: "En cazuela, a la marinera.", price: "30€", img: photos.almejasMarinera },
      { name: "Sepia a la plancha", desc: "Troceada, con ajo y perejil.", price: "18€", img: photos.sepiaPlancha },
      { name: "Calamares", desc: "Anillas rebozadas y fritas.", price: "18€", img: photos.calamares },
      { name: "Oreja", desc: "Crujiente por fuera, melosa por dentro.", price: "15€", img: photos.oreja },
      { name: "Morcilla", desc: "Frita, en rodajas.", price: "15€", img: photos.morcilla },
      { name: "Huevos rotos con jamón", desc: "Con patatas y jamón.", price: "22€", img: photos.huevosRotos },
      { name: "Patatas cabrales", desc: "Con salsa de queso cabrales.", price: "12€", img: photos.patatasCabrales },
      { name: "Patatas bravas", desc: "Con salsa brava.", price: "12€", img: photos.patatasBravas },
      { name: "Patatas alioli", desc: "Con salsa alioli.", price: "12€", img: photos.patatasAlioli },
      { name: "Ensaladilla rusa", price: "15€", img: photos.ensaladillaRusa },
      { name: "Chorizo", desc: "Frito, en rodajas.", price: "15€", img: photos.chorizo },
      { name: "Revuelto de morcilla", desc: "Huevos revueltos con morcilla.", price: "17€", img: photos.revueltoMorcilla },
      { name: "Croquetas caseras", desc: "Doradas por fuera, cremosas por dentro.", price: "18€", img: photos.croquetasCaseras },
      { name: "Cachopo de Las Tejas", desc: "Especialidad de la casa, abundante y bien relleno.", price: "48€", img: photos.cachopo01 },
      { name: "Mollejas", desc: "Fritas y doradas.", price: "18€", img: photos.mollejas },
      { name: "Bonito con tomate", desc: "Bonito en salsa de tomate.", price: "18€", img: photos.bonitoTomate },
      { name: "Lacón gallego", desc: "Con pimentón y aceite de oliva.", price: "18€", img: photos.laconGallega },
      { name: "Boquerones fritos", desc: "Fritos y crujientes.", price: "12€", img: photos.boquerones },
      { name: "Lomo ibérico", desc: "Cortado en lonchas finas.", price: "27€", img: photos.lomoIberico },
      { name: "Jamón ibérico", desc: "Cortado en lonchas finas.", price: "27€", img: photos.jamonQueso },
      { name: "Queso", price: "17€" },
    ],
  },
  {
    title: "Bocadillos",
    dishes: [
      { name: "Pepito de ternera", price: "9€", img: photos.bocadilloPepito },
      { name: "Bocadillo de calamares", price: "8€", img: photos.bocadilloCalamares },
      { name: "Bocadillo de lacón", price: "8€", img: photos.bocadilloLacon },
      { name: "Bocadillo de morcilla", price: "8€", img: photos.bocadilloMorcilla },
      { name: "Bocadillo de chorizo", price: "8€", img: photos.bocadilloChorizo },
      { name: "Bocadillo de tortilla", price: "6€", img: photos.bocadilloTortilla },
      { name: "Bocadillo de jamón", price: "8€", img: photos.bocadilloJamon },
      { name: "Bocadillo de lomo", price: "8€", img: photos.bocadilloLomo },
      { name: "Bocadillo de queso", price: "8€", img: photos.bocadilloQueso },
      { name: "Bocadillo de bacon", price: "8€" },
    ],
  },
  {
    title: "Montados",
    dishes: [
      { name: "Montado de lomo", price: "5€" },
      { name: "Montado de jamón", price: "5€" },
      { name: "Montado de queso", price: "5€" },
      { name: "Montado de chorizo", price: "5€" },
    ],
  },
  {
    title: "Pinchos",
    dishes: [
      { name: "Pincho de tortilla", price: "4€", img: photos.pinchoTortilla },
    ],
  },
];

const Carta = () => (
  <Layout>
    <SEO
      title="Carta restaurante en Alcorcón | Las Tejas"
      description="Carta de Las Tejas con precios: raciones, bocadillos, montados y pinchos de cocina tradicional en Alcorcón."
      path="/carta"
    />

    <PageHero
      image={photos.pulpo02}
      eyebrow="Carta"
      title="Carta de cocina tradicional y especialidades de la casa"
      subtitle="Raciones, bocadillos, montados y pinchos de siempre."
    />

    <div className="section-padding">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-24">

        {sections.map((s) => (
          <section key={s.title}>
            <div data-reveal className="mb-12 text-center">
              <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
                {s.title}
              </h2>

              {s.intro && (
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                  {s.intro}
                </p>
              )}

              <div className="mt-6 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-secondary/40" />
                <span style={{ color: GOLD }}>●</span>
                <span className="h-px w-12 bg-secondary/40" />
              </div>
            </div>

            <div data-reveal-group className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {s.dishes.map((d) => (
                <div
                  key={d.name}
                  data-reveal="up"
                  className="zoom flex gap-4 pb-6 border-b border-border/60"
                >
                  {d.img && (
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md shadow-soft">
                      <img
                        src={d.img}
                        alt={d.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-serif text-xl text-primary">
                        {d.name}
                      </h3>

                      <span className="flex-1 border-b border-dotted border-border" />

                      <span className="text-sm text-muted-foreground">
                        {d.price}
                      </span>
                    </div>

                    {d.desc && (
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {d.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div data-reveal className="text-center text-sm text-muted-foreground italic max-w-xl mx-auto">
          La carta puede variar según temporada y disponibilidad de producto.
        </div>

      </div>
    </div>

    <CTASection />

  </Layout>
);

export default Carta;
