
export function AboutSection() {
  return (
    <section className="about section container" id="sobre-mi" aria-labelledby="about-title">
      <p className="eyebrow">Un poco sobre mí</p>
      <div className="about-layout">
        <h2 id="about-title" className="section-title">Curiosidad para<br />entender. <br />
          <span className="accent">Criterio para<br />construir.</span>
        </h2>
        <div className="about-copy">
          <p className="about-lead">Me interesa lo que sucede entre una necesidad y una aplicación que alguien puede usar.</p>
          <p>Mi formación en desarrollo fue el punto de partida. Los primeros proyectos me permitieron convertir lo aprendido en experiencias concretas; en Further Corporate, ese recorrido se amplió al software empresarial y sus necesidades operativas.</p>
          <p>Trabajar con negocios reales sumó otra perspectiva: entender el contexto importa tanto como escribir el código. Hoy también desarrollo productos propios, como Anotiva.</p>
          <p>Quiero seguir creciendo dentro de equipos técnicos, aportar desde la práctica y aprender de las personas con las que construyo.</p>
          <div className="signature">Tadeo Abbruzzese <span className="mono">DESARROLLADOR FULL-STACK</span>
          </div>
        </div>
      </div>
      <div className="trajectory mono">
        <span>FORMACIÓN</span>
        <i aria-hidden="true">→</i>
        <span>PRIMEROS PROYECTOS</span>
        <i aria-hidden="true">→</i>
        <span>EXPERIENCIA EMPRESARIAL</span>
        <i aria-hidden="true">→</i>
        <span>PRODUCTOS PROPIOS</span>
      </div>
    </section>
  );
}
