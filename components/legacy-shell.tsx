import type { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function LegacyShell({ children }: { children: ReactNode }) {
  return <div className="legacy-site">
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <Navbar />
    <main id="contenido">{children}</main>
    <Footer />
  </div>;
}
