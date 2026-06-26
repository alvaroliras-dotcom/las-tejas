import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { photos } from "@/assets/photos";
import { GOLD } from "@/lib/constants";

interface Dish {
  name: string;
  desc: string;
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
    title: "Entrantes",
    intro: "Para empezar, sabores reconocibles y producto bien tratado.",
    dishes: [
      { name: "Pulpo a la gallega", desc: "Pulpo cocido en su punto con pimentón y aceite de oliva.", price: "18€", img: photos.pulpo02 },
      { name: "Calamares", desc: "Calamares frescos rebozados en su punto justo.", price: "15€", img: photos.calamares },
      { name: "Jamón y queso", desc: "Tabla de productos seleccionados.", price: "17€", img: photos.jamonQueso },
      { name: "Escalibada", desc: "Verduras asadas, sencillez y sabor.", price: "12€", img: photos.escalibada },
      { name: "Huevos rotos", desc: "Con patatas y guarnición a elegir.", price: "14€", img: photos.huevosRotos },
      { name: "Oreja a la plancha", desc: "Crujiente por fuera, melosa por dentro.", price: "13€", img: photos.oreja },
    ],
  },
  {
    title: "Carnes",
    intro: "Producto, cocción cuidada y raciones contundentes.",
    dishes: [
      { name: "Entrecot", desc: "A la brasa, en su punto.", price: "22€", img: photos.entrecot },
      { name: "Cordero", desc: "Asado tradicional, jugoso y sabroso.", price: "20€", img: photos.cordero },
      { name: "Cachopo", desc: "Especialidad de la casa, abundante y bien relleno.", price: "24€", img: photos.cachopo01 },
    ],
  },
  {
    title: "Pescados",
    dishes: [
      { name: "Pulpo a la brasa", desc: "Tierno, con un toque ahumado.", price: "21€", img: photos.pulpo01 },
      { name: "Pescado del día", desc: "Consultar disponibilidad.", price: "19€" },
    ],
  },
  {
    title: "Platos tradicionales",
    intro: "Cocina de cuchara y recetas de toda la vida.",
    dishes: [
      { name: "Fabada asturiana", desc: "Plato de cuchara con receta tradicional.", price: "16€", img: photos.fabada },
      { name: "Cocido madrileño", desc: "Receta casera tradicional, contundente y muy reconocible.", price: "15€", img: photos.cocido },
    ],
  },
  {
    title: "Postres",
    dishes: [
      { name: "Flan casero", desc: "Hecho en casa, textura suave.", price: "6€", img: photos.flan },
      { name: "Pudding", desc: "Postre tradicional muy valorado.", price: "6€", img: photos.puding },
      { name: "Selección de postres", desc: "Pregunta por las opciones del día.", price: "7€", img: photos.postres },
    ],
  },
];

const Carta = () => (
  <Layout>
    <SEO
      title="Carta restaurante en Alcorcón | Las Tejas"
      description="Consulta la carta de Las Tejas: cocina tradicional, carnes, platos caseros y especialidades asturianas en Alcorcón."
      path="/carta"
    />

    <PageHero
      image={photos.entrecot}
      eyebrow="Carta"
      title="Carta de cocina tradicional y especialidades de la casa"
      subtitle="Platos reconocibles y especialidades muy valoradas por clientes habituales."
    />

    <div className="section-padding">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-24">

        {sections.map((s) => (
          <section key={s.title}>
            <div className="mb-12 text-center">
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

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {s.dishes.map((d) => (
                <div
                  key={d.name}
                  className="flex gap-4 pb-6 border-b border-border/60 transition hover:opacity-80"
                >
                  {d.img && (
                    <img
                      src={d.img}
                      alt={d.name}
                      className="w-24 h-24 object-cover rounded-md shadow-soft flex-shrink-0"
                    />
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

                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="text-center text-sm text-muted-foreground italic max-w-xl mx-auto">
          La carta puede variar según temporada y disponibilidad de producto.
        </div>

      </div>
    </div>

    <CTASection />

  </Layout>
);

export default Carta;
