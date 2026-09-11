import { services } from "@/data/skills";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowUpRight, Whatsapp } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { whatsappUrl } from "@/lib/site";

export function Services() {
  return (
    <section id="servicios" className="section services-section" aria-labelledby="services-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow="Servicios"
            title="¿Qué puedo construir para vos?"
            description="Trabajo de forma directa, desde entender la necesidad hasta poner la solución en producción."
            align="split"
          />
        </Reveal>

        <div className="services-list">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.05}>
              <article className="service-card">
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <ArrowUpRight className="service-arrow" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="services-cta">
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
