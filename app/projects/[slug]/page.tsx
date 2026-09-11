import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectMedia } from "@/components/projects/project-media";
import { ButtonLink } from "@/components/ui/button-link";
import { Check, ArrowLeft, ArrowRight, ArrowUpRight, Whatsapp } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { getProject, projects } from "@/data/projects";
import { getSiteUrl, whatsappUrl } from "@/lib/site";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const siteUrl = getSiteUrl();

  return {
    title: project.name,
    description: project.summary,
    ...(siteUrl ? { alternates: { canonical: `/projects/${project.slug}` } } : {}),
    openGraph: {
      title: `${project.name} — Case study`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const nextProject = projects.find((item) => item.slug !== project.slug)!;

  return (
    <article className={`case-study case-study-${project.accent}`}>
      <header className="case-hero">
        <div className="container">
          <Reveal>
            <Link className="back-link" href="/#proyectos"><ArrowLeft /> Volver a proyectos</Link>
          </Reveal>
          <div className="case-hero-grid">
            <Reveal className="case-title">
              <p className="eyebrow"><span aria-hidden="true" /> {project.eyebrow}</p>
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <div className="case-actions">
                <ButtonLink
                  href={project.url}
                  external
                  icon={<ArrowUpRight />}
                  ariaLabel={`${project.cta} (abre en una nueva pestaña)`}
                >
                  {project.cta}
                </ButtonLink>
                <span>{project.year} · Producto publicado</span>
              </div>
            </Reveal>
            <Reveal className="case-facts" delay={0.08}>
              <div><span>Tipo</span><strong>{project.eyebrow.split(" · ")[0]}</strong></div>
              <div><span>Rol</span><strong>Diseño & desarrollo</strong></div>
              <div><span>Alcance</span><strong>Producto end-to-end</strong></div>
            </Reveal>
          </div>
        </div>
      </header>

      <div className="container case-cover">
        <Reveal><ProjectMedia project={project} priority /></Reveal>
      </div>

      <section className="case-section container case-summary" aria-labelledby="summary-title">
        <Reveal className="case-section-label"><span>01</span><p>Resumen</p></Reveal>
        <Reveal className="case-intro" delay={0.05}>
          <h2 id="summary-title">Una solución pensada alrededor de una necesidad concreta.</h2>
          <p>{project.summary}</p>
        </Reveal>
      </section>

      <section className="case-section container case-duo" aria-label="Desafío y solución">
        <Reveal className="case-text-block">
          <span>02 / El desafío</span>
          <h2>Partir del problema, no de la tecnología.</h2>
          <p>{project.challenge}</p>
        </Reveal>
        <Reveal className="case-text-block case-text-highlight" delay={0.08}>
          <span>03 / La solución</span>
          <h2>Convertir complejidad en una experiencia simple.</h2>
          <p>{project.solution}</p>
        </Reveal>
      </section>

      <section className="case-section case-role-section">
        <div className="container case-role-grid">
          <Reveal className="case-role-copy">
            <p className="eyebrow"><span aria-hidden="true" /> 04 · Mi rol</p>
            <h2>Responsabilidad completa sobre el producto.</h2>
            <p>{project.role}</p>
          </Reveal>
          <Reveal className="case-tech" delay={0.08}>
            <p>Tecnologías</p>
            <div>{project.stack.map((technology) => <span key={technology}>{technology}</span>)}</div>
          </Reveal>
        </div>
      </section>

      <section className="case-section container case-detail-grid" aria-label="Características y resultados">
        <Reveal>
          <span className="case-detail-number">05</span>
          <h2>Características</h2>
          <ul>
            {project.features.map((feature) => <li key={feature}><Check />{feature}</li>)}
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <span className="case-detail-number">06</span>
          <h2>Resultados</h2>
          <ul>
            {project.results.map((result) => <li key={result}><Check />{result}</li>)}
          </ul>
        </Reveal>
      </section>

      <section className="case-section case-gallery" aria-labelledby="gallery-title">
        <div className="container">
          <Reveal className="case-gallery-heading">
            <p className="eyebrow"><span aria-hidden="true" /> 07 · Galería</p>
            <h2 id="gallery-title">El producto, en contexto.</h2>
          </Reveal>
          <div className="gallery-grid">
            {project.galleryPaths.map((imagePath, index) => (
              <Reveal key={imagePath} delay={index * 0.05} className={index === 0 ? "gallery-wide" : undefined}>
                <ProjectMedia project={project} pathOverride={imagePath} index={index + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section container case-final-cta">
        <Reveal>
          <span className="case-final-kicker">¿Construimos algo juntos?</span>
          <h2>Si tenés un proyecto que necesita avanzar, hablemos.</h2>
          <div>
            <ButtonLink
              href={whatsappUrl}
              external
              icon={<Whatsapp />}
              ariaLabel="Contactar a Tadeo por WhatsApp (abre en una nueva pestaña)"
            >
              Contame tu proyecto
            </ButtonLink>
            <ButtonLink href={project.url} external variant="secondary" icon={<ArrowUpRight />}>
              Ver proyecto online
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      <Link className="next-project" href={`/projects/${nextProject.slug}`}>
        <span>Siguiente proyecto</span>
        <strong>{nextProject.name}</strong>
        <ArrowRight />
      </Link>
    </article>
  );
}
