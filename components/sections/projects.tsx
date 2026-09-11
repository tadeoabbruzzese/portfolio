import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectMedia } from "@/components/projects/project-media";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="projects-title"
            eyebrow="Proyectos seleccionados"
            title="Productos construidos para ser usados."
            description="Una selección breve y honesta: trabajo para clientes reales y productos personales que llegaron a usuarios reales."
            align="split"
          />
        </Reveal>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article key={project.slug} className={`project-row project-row-${project.accent}`}>
              <Reveal className="project-media-wrap" y={24}>
                <Link href={`/projects/${project.slug}`} aria-label={`Ver caso de estudio de ${project.name}`}>
                  <ProjectMedia project={project} priority={index === 0} />
                </Link>
              </Reveal>
              <Reveal className="project-info" delay={0.08}>
                <div className="project-meta">
                  <span>{project.eyebrow}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="tag-list">
                  {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <div className="project-links">
                  <Link href={`/projects/${project.slug}`}>
                    Ver case study <ArrowRight />
                  </Link>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.cta} (abre en una nueva pestaña)`}
                  >
                    {project.cta} <ArrowUpRight />
                  </a>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
