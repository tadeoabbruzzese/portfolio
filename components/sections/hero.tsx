import { ArrowRight, ArrowUpRight, Download, Whatsapp } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { PointerGlow } from "@/components/ui/pointer-glow";
import { Reveal } from "@/components/ui/reveal";
import { ProfileVisual } from "@/components/profile-visual";
import { whatsappUrl } from "@/lib/site";

const heroCapabilities = [
  { value: "Software", label: "a medida" },
  { value: "Web", label: "sitios y aplicaciones" },
  { value: "IA aplicada", label: "automatización de procesos" },
  { value: "Full stack", label: "del frontend a los datos" },
];

export function Hero() {
  return (
    <PointerGlow className="hero" >
      <section id="inicio" className="container hero-inner" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Reveal>
            <p className="availability"><span /> Disponible para proyectos y oportunidades</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="hero-name">Tadeo Abbruzzese</p>
            <h1 id="hero-title">
              Software que resuelve.<br />
              <span>IA que potencia.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="hero-role">AI Strategist & Full Stack Software Developer</p>
            <p className="hero-description">
              Desarrollo software a medida, automatizo procesos con inteligencia artificial y construyo productos digitales de principio a fin.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="hero-actions">
            <ButtonLink href="/#proyectos" icon={<ArrowRight />}>Ver proyectos</ButtonLink>
            <ButtonLink
              href={whatsappUrl}
              variant="secondary"
              external
              icon={<Whatsapp />}
              ariaLabel="Hablar con Tadeo por WhatsApp (abre en una nueva pestaña)"
            >
              Hablemos
            </ButtonLink>
            <ButtonLink href="/Tadeo-Abbruzzese-CV.pdf" variant="text" download icon={<Download />}>
              Descargar CV
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay={0.1} y={12}>
          <ProfileVisual />
        </Reveal>

        <Reveal className="hero-metrics" delay={0.22}>
          {heroCapabilities.map((metric, index) => (
            <div key={metric.label} className="hero-metric">
              <span className="metric-index">0{index + 1}</span>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
          <a href="#sobre-mi" className="hero-scroll" aria-label="Ir a Sobre mí">
            Explorar
            <ArrowUpRight width={16} height={16} />
          </a>
        </Reveal>
      </section>
    </PointerGlow>
  );
}
