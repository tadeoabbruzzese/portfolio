import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const coreStack = ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "OpenAI API", "Docker"];

export function About() {
  return (
    <section id="sobre-mi" className="section about-section" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="about-title"
            eyebrow="Sobre mí"
            title="Pienso en el producto completo, no sólo en la pantalla."
            description="Ingeniería con criterio de negocio, comunicación clara y atención por los detalles que hacen que una solución funcione de verdad."
            align="split"
          />
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-statement">
            <p>
              Construyo productos digitales de extremo a extremo: desde una landing hasta sistemas internos, automatizaciones y plataformas completas.
            </p>
            <p>
              Actualmente trabajo como <strong>AI Strategist y Full Stack Software Developer</strong>, combinando desarrollo tradicional con inteligencia artificial para resolver problemas concretos.
            </p>
            <p>
              También tuve experiencia en formación y creación de contenidos sobre IA en Krew Hub. Esa etapa fortaleció mi capacidad para explicar conceptos técnicos de forma clara.
            </p>
          </Reveal>

          <Reveal className="about-principles" delay={0.08}>
            <div className="principle">
              <span>01</span>
              <div><strong>Entender antes de construir</strong><p>La mejor solución empieza por el problema correcto.</p></div>
            </div>
            <div className="principle">
              <span>02</span>
              <div><strong>Del concepto a producción</strong><p>Producto, interfaz, backend, datos y despliegue.</p></div>
            </div>
            <div className="principle">
              <span>03</span>
              <div><strong>Simple donde importa</strong><p>Menos fricción para usuarios y equipos.</p></div>
            </div>
          </Reveal>
        </div>

        <Reveal className="core-stack" delay={0.12}>
          <span>Stack principal</span>
          <div>
            {coreStack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
