import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectMediaProps = {
  project: Project;
  pathOverride?: string;
  priority?: boolean;
  className?: string;
  index?: number;
};

export function ProjectMedia({
  project,
  pathOverride,
  priority = false,
  className,
  index = 0,
}: ProjectMediaProps) {
  const imagePath = pathOverride ?? project.coverPath;
  const hasImage = existsSync(path.join(process.cwd(), "public", imagePath.replace(/^\//, "")));

  return (
    <div className={cn("project-media", `project-media-${project.mediaKey}`, className)}>
      {hasImage ? (
        <Image
          src={imagePath}
          alt={`Vista de ${project.name}${index ? ` — detalle ${index}` : ""}`}
          fill
          priority={priority}
          sizes="(max-width: 767px) 100vw, 75vw"
          className="project-screenshot"
        />
      ) : (
        <ProjectPlaceholder project={project} index={index} />
      )}
    </div>
  );
}

function ProjectPlaceholder({ project, index }: { project: Project; index: number }) {
  if (project.mediaKey === "camping") {
    return (
      <div className={cn("browser-mock browser-camping", index > 0 && `browser-detail-${index}`)}>
        <BrowserBar label="campingfossalupara.com" />
        <div className="camping-canvas">
          <div className="camping-nav"><b>FOSSA</b><span>Camping · Natura · Relax</span></div>
          <div className="camping-copy">
            <span>VALLE DEL TORO · ITALIA</span>
            <strong>{index === 2 ? "Vivi la natura" : index === 3 ? "Il tuo soggiorno" : "Respira. Sei arrivato."}</strong>
            <i />
          </div>
          <div className="camping-landscape"><span /><span /><span /></div>
          <div className="placeholder-note">SCREENSHOT {index ? `0${index}` : "PRINCIPAL"} · REEMPLAZAR</div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("browser-mock browser-tower", index > 0 && `browser-detail-${index}`)}>
      <BrowserBar label="towerhub.online" />
      <div className="tower-canvas">
        <aside><b>TH</b><i /><i /><i /><i /></aside>
        <div className="tower-content">
          <div className="tower-top"><span>TOWER HUB</span><i /></div>
          <strong>{index === 2 ? "Simulacra" : index === 3 ? "Guides & builds" : "Todo lo que buscás, en un solo lugar."}</strong>
          <div className="tower-cards"><i /><i /><i /></div>
          <div className="placeholder-note">SCREENSHOT {index ? `0${index}` : "PRINCIPAL"} · REEMPLAZAR</div>
        </div>
      </div>
    </div>
  );
}

function BrowserBar({ label }: { label: string }) {
  return (
    <div className="browser-bar">
      <span /><span /><span />
      <div>{label}</div>
    </div>
  );
}
