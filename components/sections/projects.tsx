import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectMedia } from "@/components/projects/project-media";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/button-link";

type ProjectHighlight = {
  name: string;
  type: string;
  period: string;
  headline: string;
  summary: string;
  image: string;
  url: string;
  domain: string;
  stack: string[];
  features: { title: string; description: string }[];
};

const highlights: Record<string, ProjectHighlight> = {
  "camping-fossa-lupara": {
    name: "Camping Fossa Lupara",
    type: "Freelance · Italia",
    period: "Abril–octubre de 2026",
    headline: "De una web obsoleta a una solución moderna y administrable.",
    summary: "De una web de 2010 a un sitio responsive con identidad visual a medida. Trabajé directamente con una clienta italiana e incorporé gestión de precios e imágenes y reseñas con moderación.",
    image: "/projects/camping/featured-20261012.jpg",
    url: "https://www.campingfossalupara.com/",
    domain: "campingfossalupara.com",
    stack: ["Next.js", "TypeScript", "Firebase"],
    features: [
      { title: "Administración", description: "Gestión de precios e imágenes." },
      { title: "Moderación", description: "Reseñas y comentarios." },
      { title: "Responsive", description: "Celulares, tablets y escritorio." },
    ],
  },
  "tower-hub": {
    name: "TowerHub",
    type: "Proyecto personal",
    period: "Febrero de 2026",
    headline: "De información dispersa a una aplicación de consulta interactiva.",
    summary: "Proyecto personal de Tower of Fantasy: catálogos de personajes y reliquias con búsqueda, filtros, fichas detalladas y una tier list interactiva. Información estructurada con persistencia en Firebase/Firestore.",
    image: "/projects/tower/featured-20261012.jpg",
    url: "https://www.towerhub.online/",
    domain: "towerhub.online",
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Firebase / Firestore"],
    features: [
      { title: "Catálogos", description: "Personajes y reliquias." },
      { title: "Búsqueda y filtros", description: "Consulta de información estructurada." },
      { title: "Tier list", description: "Exploración interactiva." },
    ],
  },
};

export function ProjectsSection() {
  return (
    <section id="proyectos" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="projects-title"
            eyebrow="Proyectos destacados"
            title="Productos construidos para ser usados."
            description="Un proyecto freelance y una aplicación propia. Explorá el producto real y el caso de cada desarrollo."
            align="split"
          />
        </Reveal>

        <div className="projects-list featured-projects-list">
          {projects.map((project, index) => {
            const detail = highlights[project.slug];
            return (
              <article key={project.slug} className={`featured-project featured-project-${project.accent}`}>
                <div className="featured-project-heading">
                  <span className="featured-project-number" aria-hidden="true">0{index + 1}</span>
                  <div className="featured-project-meta">
                    <span className="featured-project-type">{detail.type}</span>
                    <span>{detail.period}</span>
                  </div>
                  <span className="featured-project-status"><i aria-hidden="true" /> Publicado</span>
                </div>

                <Reveal className="featured-project-media project-media-wrap" y={24}>
                  <Link href={`/projects/${project.slug}`} aria-label={`Ver caso de estudio de ${detail.name}`}>
                    <ProjectMedia project={project} pathOverride={detail.image} />
                  </Link>
                  <div className="featured-project-caption">
                    <span>{detail.domain}</span>
                    <span>Captura del sitio actual <ArrowUpRight /></span>
                  </div>
                  {project.mediaKey === "tower" && <p className="featured-project-attribution">Tower of Fantasy: personajes y arte de sus respectivos titulares.</p>}
                </Reveal>

                <Reveal className="featured-project-copy" delay={0.08}>
                  <h3>{detail.name}</h3>
                  <p className="featured-project-headline">{detail.headline}</p>
                  <p className="featured-project-summary">{detail.summary}</p>
                  <div className="tag-list" aria-label="Tecnologías del proyecto">
                    {detail.stack.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                  <div className="featured-project-actions">
                    <ButtonLink href={`/projects/${project.slug}`} icon={<ArrowRight />}>Ver caso de estudio</ButtonLink>
                    <ButtonLink href={detail.url} external variant="secondary" icon={<ArrowUpRight />} ariaLabel={`Abrir ${detail.name} (abre en una nueva pestaña)`}>Abrir sitio</ButtonLink>
                  </div>
                </Reveal>

                <div className="featured-project-features">
                  {detail.features.map((feature) => (
                    <div key={feature.title}>
                      <span aria-hidden="true" />
                      <div><strong>{feature.title}</strong><p>{feature.description}</p></div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
