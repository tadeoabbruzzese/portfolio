import { experiences } from "@/data/experience";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="section experience-section" aria-labelledby="experience-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="experience-title"
            eyebrow="Experiencia"
            title="Sistemas reales. Impacto medible."
            description="Desarrollo productos que acompañan operaciones reales, conectan equipos y simplifican procesos dentro de las organizaciones."
            align="split"
          />
        </Reveal>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={index * 0.08}>
              <article className="experience-card">
                <div className="experience-rail">
                  <span>0{index + 1}</span>
                  <i aria-hidden="true" />
                </div>
                <div className="experience-heading">
                  <div>
                    <p>{experience.company}</p>
                    <h3>{experience.role}</h3>
                  </div>
                  <time>{experience.period}</time>
                </div>
                <div className="experience-body">
                  <p className="experience-summary">{experience.summary}</p>
                  <ul>
                    {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <div className="tag-list" aria-label="Tecnologías y capacidades">
                    {experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
