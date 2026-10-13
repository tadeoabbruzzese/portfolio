import Image from "next/image";
import { projects } from "@/data/projects";
import { ProjectsCarousel } from "@/components/projects/projects-carousel";
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
        <ProjectsCarousel names={projects.map(project => highlights[project.slug].name)}>
          {projects.map((project, index) => {
            const detail = highlights[project.slug];
            return (
              <article key={project.slug} className={`project-banner project-banner-${project.accent}`} role="group" aria-roledescription="diapositiva" aria-label={`${detail.name}, ${index + 1} de ${projects.length}`}>
                <Image src={detail.image} alt={`Captura actual de ${detail.name}`} fill loading="lazy" sizes="(max-width: 1440px) 100vw, 1240px" className="project-banner-image" />
                <div className="project-banner-content">
                  <div className="project-banner-meta"><span>{detail.type}</span><span>{detail.period}</span></div>
                  <h3>{detail.name}</h3>
                  <p className="project-banner-headline">{detail.headline}</p>
                  <p className="project-banner-summary">{detail.summary}</p>
                  <div className="tag-list" aria-label={`Tecnologías de ${detail.name}`}>
                    {detail.stack.map(technology => <span key={technology}>{technology}</span>)}
                  </div>
                  <div className="project-banner-actions">
                    <ButtonLink href={`/projects/${project.slug}`} icon={<ArrowRight />}>Ver caso de estudio</ButtonLink>
                    <ButtonLink href={detail.url} external variant="secondary" icon={<ArrowUpRight />} ariaLabel={`Abrir ${detail.name} (abre en una nueva pestaña)`}>Abrir sitio</ButtonLink>
                  </div>
                  <ul className="project-banner-features">
                    {detail.features.map(feature => <li key={feature.title}>{feature.title}</li>)}
                  </ul>
                  {project.mediaKey === "tower" && <p className="project-banner-attribution">Tower of Fantasy: personajes y arte de sus respectivos titulares.</p>}
                </div>
              </article>
            );
          })}
        </ProjectsCarousel>
      </div>
    </section>
  );
}
