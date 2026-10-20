import type { Metadata, Viewport } from "next";
import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { ContextBand } from "@/components/home/context-band";
import { ExperienceSection } from "@/components/home/experience-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { Footer } from "@/components/home/footer";
import { CasePreviewProvider } from "@/components/home/case-preview-dialog";
import { HomeEnhancements } from "@/components/home/home-enhancements";
import "@/components/home/home.css";

export const metadata: Metadata = {
  title: { absolute: "Tadeo Abbruzzese — Desarrollo con propósito" },
  description: "Tadeo Abbruzzese. Desarrollo Full-Stack, aplicaciones empresariales, integraciones y productos digitales.",
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
        <ExperienceSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <AboutSection />
        <ContactSection />
      </main>
    </CasePreviewProvider>
    <Footer />
    <HomeEnhancements />
  </div>;
}
