import { SolutionsCarousel } from "@/components/solutions-carousel";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Whatsapp } from "@/components/ui/icons";
import { whatsappUrl } from "@/lib/site";

export function Solutions() {
  return (
    <section id="soluciones" className="section solutions-section" aria-labelledby="solutions-title">
      <span id="servicios" className="solutions-anchor" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeading
            id="solutions-title"
            eyebrow="Soluciones"
            title="Soluciones para tu negocio"
            description="Desarrollo herramientas digitales para presentar tu negocio, organizar información y simplificar procesos. Cada solución se adapta a lo que realmente necesitás."
            align="left"
          />
        </Reveal>
        <p className="solutions-visual-note">Visuales conceptuales de servicios.</p>
        <SolutionsCarousel />
        <Reveal className="solutions-cta">
          <p>¿Tenés una idea, un proceso manual o un producto que necesita avanzar?</p>
          <ButtonLink
            href={whatsappUrl}
            external
            icon={<Whatsapp />}
            ariaLabel="Contarle un proyecto a Tadeo por WhatsApp (abre en una nueva pestaña)"
          >
            Contame tu proyecto
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
