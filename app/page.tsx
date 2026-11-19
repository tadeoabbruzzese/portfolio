import type { Metadata, Viewport } from "next";
import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { ContextBand } from "@/components/home/context-band";
import { ExperienceSection } from "@/components/home/experience-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ServicesSection } from "@/components/home/services-section";
import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { Footer } from "@/components/home/footer";
import { CasePreviewProvider } from "@/components/home/case-preview-dialog";
import { HomeEnhancements } from "@/components/home/home-enhancements";
import "@/components/home/home.css";
import "@/components/home/portfolio-refinement.css";

export const metadata: Metadata = {
  title: { absolute: "Tadeo Abbruzzese — Desarrollo web y soluciones a medida" },
  description: "Renovación de sitios web, catálogos y aplicaciones a medida. Conocé los proyectos y demos de Tadeo Abbruzzese, desarrollador Full-Stack de Buenos Aires.",
  icons: { icon: [{ url: "/home-assets/favicon.svg", type: "image/svg+xml" }] },
};
export const viewport: Viewport = { themeColor: "#111310" };

export default function HomePage() {
  return <div className="portfolio-home">
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <Header />
    <CasePreviewProvider>
      <main id="contenido">
        <Hero />
        <ContextBand />
        <ProjectsSection />
        <ServicesSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
    </CasePreviewProvider>
    <Footer />
    <HomeEnhancements />
  </div>;
}
