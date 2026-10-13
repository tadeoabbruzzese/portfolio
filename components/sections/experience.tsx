import { experiences } from "@/data/experience";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight, Download } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="section experience-section experience-section-compact" aria-labelledby="experience-title">
      <div className="container">
        <Reveal className="experience-brief">
          <p className="eyebrow"><span aria-hidden="true" /> Experiencia</p>
          <div className="experience-brief-copy">
            <h2 id="experience-title">Experiencia en desarrollo de software</h2>
            <p>{experiences[0].summary}</p>
            <div className="experience-brief-links">
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Consultar experiencia completa en LinkedIn (abre en una nueva pestaña)">
                Experiencia completa en LinkedIn <ArrowUpRight />
              </a>
              <a href="/Tadeo-Abbruzzese-CV.pdf" download>
                Descargar CV <Download />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
