import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechIcon } from "@/components/ui/tech-icon";

export function Skills() {
  return (
    <section className="section skills-section" aria-labelledby="skills-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="skills-title"
            eyebrow="Capacidades técnicas"
            title="Tecnología al servicio del producto."
            description="No trabajo desde una lista rígida: combino herramientas según el problema, la escala y el mantenimiento que necesita cada solución."
            align="split"
          />
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.name} className="skill-group" delay={index * 0.04}>
              <div className="skill-group-title">
                <span className="skill-group-icon"><TechIcon name={group.icon} /></span>
                <div>
                  <span className="skill-group-index">0{index + 1} / {group.label}</span>
                  <h3>{group.name}</h3>
                </div>
              </div>
              <p className="skill-group-description">{group.description}</p>
              <div className="skill-group-outcome">
                <span>Aplicado en</span>
                <strong>{group.outcome}</strong>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <TechIcon name={item.icon} />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
