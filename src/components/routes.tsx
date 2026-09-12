import type { RouteRecord } from "vite-react-ssg";
import App from "./App";
import Index from "./pages/Index";
import QuienesSomos from "./pages/QuienesSomos";
import Carta from "./pages/Carta";
import MenuDelDia from "./pages/MenuDelDia";
import Especialidades from "./pages/Especialidades";
import Cachopo from "./pages/Cachopo";
import Fabada from "./pages/Fabada";
import Carnes from "./pages/Carnes";
import Opiniones from "./pages/Opiniones";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <App />,
    entry: "src/App.tsx",
    children: [
      { index: true, Component: Index },
      { path: "quienes-somos", Component: QuienesSomos },
      { path: "carta", Component: Carta },
      { path: "menu-del-dia", Component: MenuDelDia },
      { path: "especialidades", Component: Especialidades },
      { path: "especialidades/cachopo", Component: Cachopo },
      { path: "especialidades/fabada", Component: Fabada },
      { path: "especialidades/carnes", Component: Carnes },
      { path: "opiniones", Component: Opiniones },
      { path: "contacto", Component: Contacto },
      { path: "*", Component: NotFound },
    ],
  },
];
