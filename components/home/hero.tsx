import Image from 'next/image';

export function Hero() {
  return <section className="hero container" id="inicio" aria-labelledby="hero-title">
    <div className="hero-copy"><p className="eyebrow">Tadeo Abbruzzese · Desarrollador Full-Stack</p>
      <h1 id="hero-title">Tu negocio tiene<br />mucho para mostrar.<br /><span className="accent">Tu web también.</span></h1>
      <p className="hero-description">Diseño y desarrollo sitios web, catálogos y herramientas a medida. Te ayudo a presentar mejor lo que hacés y a convertir procesos complejos en experiencias simples.</p>
      <div className="hero-actions"><a className="button primary" href="#proyectos">Conocé mis proyectos</a><a className="button secondary" href="#contacto">Hablemos de tu web</a></div>
      <p className="hero-note">De Buenos Aires a negocios en otros lugares.<br />Trato directo, desde la primera charla hasta la publicación.</p>
    </div>
    <figure className="hero-portrait"><Image src="/home-assets/tadeo-retrato.png" width={1159} height={1357} sizes="(max-width: 700px) 100vw, 50vw" alt="Retrato de Tadeo frente a una computadora, en una escena de oficina compuesta con IA." priority /><figcaption><span>Diseño con intención.<br />Desarrollo con criterio.</span><span className="mono">BUENOS AIRES · AR</span></figcaption></figure>
    <div className="hero-bottom mono"><span>WEBS · CATÁLOGOS · APLICACIONES</span><a href="#experiencia">Conocé mi experiencia profesional</a></div>
  </section>;
}
