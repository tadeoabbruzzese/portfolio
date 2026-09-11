import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const impact = [
  {
    value: "90%",
    kicker: "menos tiempo de procesamiento",
    description: "Reducción de hasta un 90% en determinados procesos internos tras rediseñar la capa de datos y backend.",
  },
  {
    value: "1.700+",
    kicker: "usuarios de sistemas internos",
    description: "Alumnos de Further Corporate que utilizan plataformas en cuyo desarrollo y evolución participo como desarrollador.",
  },
  {
    value: "80+",
    kicker: "docentes con herramientas del equipo",
    description: "Docentes de Further Corporate que utilizan herramientas desarrolladas por nuestro equipo de software.",
  },
];

export function Impact() {
  return (
    <section className="section impact-section" aria-labelledby="impact-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="impact-title"
            eyebrow="Impacto · Further Corporate"
            title="El alcance de los sistemas en los que trabajo."
            description="Estas cifras reflejan el uso de plataformas y herramientas de la organización, desarrolladas en equipo, y mejoras en sus procesos internos."
            align="split"
          />
        </Reveal>
        <div className="impact-grid">
          {impact.map((item, index) => (
            <Reveal key={item.value} className="impact-card" delay={index * 0.06}>
              <span className="impact-index">0{index + 1}</span>
              <strong>{item.value}</strong>
              <h3>{item.kicker}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
        <p className="impact-note">Mi aporte: desarrollo de software, evolución de plataformas y optimización de procesos junto al equipo de Further Corporate.</p>
      </div>
    </section>
  );
}
