import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoBlanco from "@/assets/photos/logo-las-tejas-HOME-blanco.png";
import { GOLD } from "@/lib/constants";

const NAV = [
  { to: "/quienes-somos", label: "Quiénes somos" },
  { to: "/carta", label: "Carta" },
  { to: "/menu-del-dia", label: "Menú del día" },
  { to: "/especialidades", label: "Especialidades" },
  { to: "/opiniones", label: "Opiniones" },
  { to: "/contacto", label: "Contacto" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-500 ${
        scrolled
          ? "bg-[#7e252e]/95 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "bg-gradient-to-b from-black/55 to-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between px-4 md:px-6 transition-all duration-500 ${
          scrolled ? "h-20 md:h-24" : "h-24 md:h-28"
        }`}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logoBlanco}
            alt="Mesón Restaurante Las Tejas"
            className={`object-contain transition-all duration-500 ${
              scrolled ? "h-[3.2rem] md:h-[3.6rem]" : "h-[3.8rem] md:h-[4.4rem]"
            }`}
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-[var(--gold)] after:transition-all after:duration-300 ${
                  isActive
                    ? "text-white after:w-full"
                    : "text-white/75 hover:text-white after:w-0 hover:after:w-full"
                }`
              }
              style={{ ["--gold" as string]: GOLD }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white hover:text-primary"
          >
            <a href="tel:+34916108007" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Llamar
            </a>
          </Button>

          <Button
            asChild
            size="sm"
            className="text-black font-semibold shadow-lg transition-transform hover:scale-105"
            style={{ backgroundColor: GOLD }}
          >
            <Link to="/contacto#reserva">Reservar mesa</Link>
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden p-2 -mr-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-[#7e252e] text-white border-t border-white/10">
          <div className="container mx-auto px-4 py-5 flex flex-col gap-2">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 px-3 text-base font-medium text-white/85 hover:text-white"
              >
                {item.label}
              </NavLink>
            ))}

            <div className="grid grid-cols-2 gap-3 mt-4">
              <Button asChild variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-primary">
                <a href="tel:+34916108007">
                  <Phone className="h-4 w-4 mr-2" />
                  Llamar
                </a>
              </Button>

              <Button asChild className="text-black font-semibold" style={{ backgroundColor: GOLD }}>
                <Link to="/contacto#reserva" onClick={() => setOpen(false)}>
                  Reservar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
