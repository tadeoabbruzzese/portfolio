import Image from "next/image";

export function Hero() {
  return (
    <section className="hero container" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="signal" aria-hidden="true">
          </span> Full-Stack Software Developer</p>
        <h1 id="hero-title">
          <span className="hello">Soy Tadeo.</span>Desarrollo aplicaciones que conectan <span className="accent">personas, datos y procesos.</span>
        </h1>
        <p className="hero-description">Soy desarrollador Full-Stack con experiencia en aplicaciones empresariales, sistemas de gestión e integraciones. Combino frontend, lógica de negocio y criterio de producto para crear software útil y centrado en sus usuarios.</p>
        <div className="hero-actions">
          <a className="button primary" href="#experiencia">Ver mi experiencia <span aria-hidden="true">↓</span>
          </a>
          <a className="button secondary" href="/home-assets/Tadeo-Abbruzzese-CV.pdf" download>Descargar CV <span aria-hidden="true">↙</span>
          </a>
        </div>
        <a className="text-link explore" href="#proyectos">Explorar proyectos <span aria-hidden="true">↗</span>
        </a>
      </div>
      <figure className="hero-portrait">
        <Image unoptimized src="/home-assets/tadeo-retrato.png" width={1159} height={1357} alt="Retrato de Tadeo trabajando frente a una computadora, en una escena de oficina compuesta con IA." fetchPriority="high" loading="eager" />
        <div className="portrait-mark" aria-hidden="true">TA / DEV</div>
        <figcaption>
          <span>Desarrollo con propósito.</span>
          <span className="mono">Buenos Aires · AR</span>
        </figcaption>
      </figure>
      <div className="hero-bottom mono">
        <span>Personas primero. Software con criterio.</span>
        <span aria-hidden="true">SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
