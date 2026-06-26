import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/site/SEO";
import { PageHero } from "@/components/site/PageHero";
import { photos } from "@/assets/photos";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  CalendarCheck,
  Navigation,
} from "lucide-react";
import { toast } from "sonner";
import { GOLD } from "@/lib/constants";

const Contacto = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      toast.success("Solicitud enviada. Te contactaremos para confirmar tu reserva.");
      setSending(false);
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <Layout>
      <SEO
        title="Contacto y reservas | Mesón Restaurante Las Tejas, Alcorcón"
        description="Reserva en Mesón Restaurante Las Tejas, desde 1978: Av. del Alcalde José Aranda 49 (posterior), Alcorcón. Teléfono 916 10 80 07."
        path="/contacto"
      />

      <PageHero
        image={photos.fachada02}
        eyebrow="Contacto y reservas"
        title="Contacto y reservas"
        subtitle="Información práctica para visitarnos o reservar mesa."
      />

      {/* CONTENIDO */}
      <section className="pt-12 pb-16 bg-[#f8f5ef]">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-3 gap-10">

          {/* INFO */}
          <div className="space-y-6">
            {[
              {
                i: MapPin,
                t: "Dirección",
                v: "Av. del Alcalde José Aranda 49 (posterior)",
                e: "28924 Alcorcón, Madrid",
              },
              {
                i: Phone,
                t: "Teléfono",
                v: "916 10 80 07",
                e: "Reservas inmediatas por teléfono",
              },
              {
                i: Clock,
                t: "Horario",
                v: "Consulta horario actualizado",
                e: "Te confirmamos en llamada",
              },
              {
                i: Mail,
                t: "Email",
                v: "info@restaurantelastejas.es",
                e: "Consultas y eventos",
              },
            ].map(({ i: Icon, t, v, e }) => (
              <div key={t} className="bg-white border border-black/5 rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">

                  <div className="p-3 rounded-md" style={{ backgroundColor: "#f4efe7", color: GOLD }}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {t}
                    </div>

                    <div className="font-medium text-primary mt-1">
                      {t === "Teléfono" ? (
                        <a href="tel:+34916108007">{v}</a>
                      ) : t === "Email" ? (
                        <a href="mailto:info@restaurantelastejas.es">{v}</a>
                      ) : (
                        v
                      )}
                    </div>

                    <div className="text-sm text-muted-foreground mt-0.5">
                      {e}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button
                asChild
                className="text-black"
                style={{ backgroundColor: GOLD }}
              >
                <a href="tel:+34916108007">
                  <Phone className="h-4 w-4 mr-2" />
                  Llamar
                </a>
              </Button>

              <Button asChild variant="outline">
                <a
                  href="https://maps.google.com/?q=Av.+del+Alcalde+José+Aranda+49,+28924+Alcorcón,+Madrid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Maps
                </a>
              </Button>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="lg:col-span-2 bg-white border border-black/5 rounded-xl shadow-lg p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <CalendarCheck className="h-6 w-6" style={{ color: GOLD }} />
              <h2 className="font-serif text-3xl text-primary">Reservar mesa</h2>
            </div>

            <p className="text-muted-foreground mb-7">
              Rellena el formulario y te confirmaremos disponibilidad.
            </p>

            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">

              <div>
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" name="nombre" required />
              </div>

              <div>
                <Label htmlFor="telefono">Teléfono</Label>
                <Input id="telefono" name="telefono" type="tel" required />
              </div>

              <div>
                <Label htmlFor="fecha">Fecha</Label>
                <Input id="fecha" name="fecha" type="date" required />
              </div>

              <div>
                <Label htmlFor="personas">Nº personas</Label>
                <Input id="personas" name="personas" type="number" min="1" defaultValue="2" required />
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="comentarios">Comentarios</Label>
                <Textarea id="comentarios" name="comentarios" rows={4} />
              </div>

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={sending}
                  className="text-black"
                  style={{ backgroundColor: GOLD }}
                >
                  {sending ? "Enviando..." : "Solicitar reserva"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="pb-0">
        <div className="w-full h-[420px]">
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
