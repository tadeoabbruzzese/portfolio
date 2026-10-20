import Image from "next/image";
import { CaseTrigger } from "./case-preview-dialog";

export function ProjectsSection() {
  return (
    <section className="projects section" id="proyectos" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-kicker">
          <p className="eyebrow">02 — Trabajo seleccionado</p>
          <span className="mono">NEGOCIOS REALES / EXPLORACIÓN / PRODUCTO</span>
        </div>
        <div className="section-heading">
          <h2 id="projects-title" className="section-title">Ideas que toman<br />forma en <span className="accent">software.</span>
          </h2>
          <p>Distintos contextos.<br />Una misma intención: construir algo útil.</p>
        </div>

        <article className="project camping reveal">
          <CaseTrigger className="project-visual camping-visual" caseId="camping" aria-label="Ver caso de Camping Fossa Lupara">
            <Image unoptimized src="/home-assets/camping.jpg" width={1432} height={1000} alt="Captura del sitio Camping Fossa Lupara: bienvenida al camping de Sestri Levante." loading="lazy" />
            <span className="image-index mono">SESTRI LEVANTE, ITALIA</span>
            <span className="image-arrow" aria-hidden="true">↗</span>
          </CaseTrigger>
          <div className="project-info">
            <div>
              <p className="eyebrow">01 / Cliente real · Turismo</p>
              <h3>Camping <br />Fossa Lupara</h3>
            </div>
            <div>
              <p>Una experiencia digital para descubrir el camping, explorar su propuesta y encontrar información en distintos idiomas.</p>
              <p className="project-skills mono">DESARROLLO WEB · UX · INTERNACIONALIZACIÓN</p>
              <CaseTrigger className="text-link" caseId="camping">Ver caso <span aria-hidden="true">↗</span>
              </CaseTrigger>
            </div>
          </div>
        </article>

        <article className="project pastry reveal">
          <div className="pastry-copy">
            <p className="eyebrow">02 / Emprendimiento familiar</p>
            <h3>Una historia<br />hecha a mano.<br />
              <span>Jésica Frías.</span>
            </h3>
            <p>Rediseño comercial con storytelling, un catálogo visual y consultas personalizadas por WhatsApp.</p>
            <p className="project-skills mono">REDISEÑO · CATÁLOGO · EXPERIENCIA COMERCIAL</p>
            <CaseTrigger className="text-link" caseId="pasteleria">Ver caso <span aria-hidden="true">↗</span>
            </CaseTrigger>
          </div>
          <CaseTrigger className="project-visual pastry-visual" caseId="pasteleria" aria-label="Ver caso de Pastelería Jésica Frías">
            <Image unoptimized src="/home-assets/pasteleria.jpg" width={1425} height={990} alt="Captura de la nueva web de Pastelería Jésica Frías, con fotografía de torta y el mensaje Algo rico para compartir los buenos momentos." loading="lazy" />
            <span className="image-arrow" aria-hidden="true">↗</span>
          </CaseTrigger>
        </article>

        <article className="project tower reveal">
          <CaseTrigger className="project-visual tower-visual" caseId="towerhub" aria-label="Ver caso de TowerHub">
            <Image unoptimized src="/home-assets/towerhub.jpg" width={1432} height={1000} alt="Captura de TowerHub, archivo de personajes e información de Tower of Fantasy." loading="lazy" />
            <span className="image-arrow" aria-hidden="true">↗</span>
          </CaseTrigger>
          <div className="tower-copy">
            <p className="eyebrow">03 / Aplicación personal</p>
            <h3>TowerHub</h3>
            <p>Dar estructura a un universo de información. Interfaces, datos organizados y funcionalidades interactivas en una experiencia de exploración.</p>
            <p className="project-skills mono">INTERFACES · INFORMACIÓN · INTERACCIÓN</p>
            <CaseTrigger className="text-link" caseId="towerhub">Ver caso <span aria-hidden="true">↗</span>
            </CaseTrigger>
          </div>
        </article>

        <article className="anotiva reveal">
          <div className="anotiva-title">
            <p className="mono">
              <span className="signal" aria-hidden="true">
              </span> PRODUCTO PROPIO / EN DESARROLLO</p>
            <h3>Anotiva<span>_</span>
            </h3>
          </div>
          <div className="anotiva-copy">
            <span className="sprint mono">SPRINT 02</span>
            <p>De construir proyectos<br />a desarrollar un producto propio.</p>
            <span className="anotiva-note">SaaS en desarrollo. Todavía no lanzado comercialmente.</span>
          </div>
          <div className="anotiva-glyph" aria-hidden="true">↗</div>
        </article>

        <a className="exploration" href="https://estudio-galia.vercel.app/" target="_blank" rel="noopener noreferrer">
          <Image unoptimized src="/home-assets/galia.jpg" width={1265} height={712} alt="Vista de la demo visual de Estudio Galia." loading="lazy" />
          <div>
            <p className="mono">EXPLORACIONES VISUALES / DEMO</p>
            <h3>Estudio Galia</h3>
            <p>Una exploración de identidad, composición y experiencia visual.</p>
          </div>
          <span className="exploration-action">Visitar demo <span aria-hidden="true">↗</span>
          </span>
        </a>
      </div>
    </section>
  );
}
