import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";

import logoBlanco from "@/assets/photos/logo-las-tejas-blanco.png";
import { GOLD } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">

      {/* BLOQUE PRINCIPAL */}
      <div className="container mx-auto px-4 md:px-6 py-16">

        <div className="grid gap-14 lg:grid-cols-3">

          {/* MARCA */}
          <div>
            <img
              src={logoBlanco}
              alt="Mesón Restaurante Las Tejas"
              className="h-20 md:h-24 mb-6"
            />

            <h3 className="font-serif text-2xl leading-tight">
              Cocina de siempre en Alcorcón
            </h3>

            <p className="mt-5 text-white/70 max-w-sm leading-relaxed">
              Cocina tradicional, comida casera y especialidades asturianas.
              Un restaurante de confianza desde 1978.
            </p>

            <div className="flex gap-5 mt-6">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>

              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <h4 className="font-serif text-xl mb-6" style={{ color: GOLD }}>
              Navegación
            </h4>

            <ul className="space-y-4 text-white/70">
              {[
                { to: "/carta", label: "Carta" },
                { to: "/menu-del-dia", label: "Menú del día" },
                { to: "/especialidades", label: "Especialidades" },
                { to: "/opiniones", label: "Opiniones" },
                { to: "/contacto", label: "Contacto" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" style={{ color: GOLD }} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="font-serif text-xl mb-6" style={{ color: GOLD }}>
              Contacto
            </h4>

            <ul className="space-y-5 text-white/70">

              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-1" style={{ color: GOLD }} />
                <span>
                  Avenida Alcalde José Aranda 49 posterior
                  <br />
                  28924 Alcorcón · Madrid
                </span>
              </li>

              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-1" style={{ color: GOLD }} />
                <a href="tel:+34916108007" className="hover:text-white">
                  916 10 80 07
                </a>
              </li>

              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-1" style={{ color: GOLD }} />
                <a href="mailto:info@restaurantelastejas.es" className="hover:text-white">
                  info@restaurantelastejas.es
                </a>
              </li>

              <li className="flex gap-3">
                <Clock className="h-4 w-4 mt-1" style={{ color: GOLD }} />
                <span>
                  07:00 - 19:00 · sábado y domingo
                </span>
              </li>

            </ul>

            {/* CTA FOOTER */}
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-black rounded-md"
              style={{ backgroundColor: GOLD }}
            >
              Reservar mesa
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

        </div>

      </div>

      {/* LÍNEA INFERIOR */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-6 text-xs text-white/60 flex flex-col md:flex-row justify-between gap-3">

          <div>
            © {new Date().getFullYear()} Mesón Restaurante Las Tejas
          </div>

          <div className="text-center">
            Cocina tradicional · Comida casera · Especialidades asturianas
          </div>

          <div>
            Diseño web:{" "}
            <a
              href="https://www.elgordoyelflaco.es/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              elgordoyelflaco.es
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
};
