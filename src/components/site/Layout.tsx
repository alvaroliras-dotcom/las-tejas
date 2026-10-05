import { ReactNode, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MotionProvider } from "./MotionProvider";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main ref={mainRef} className="flex-1">{children}</main>
      <Footer />
      <MotionProvider scopeRef={mainRef} pathname={pathname} />
    </div>
  );
};
