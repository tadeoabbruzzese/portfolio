
export function ContactSection() {
  return (
    <section className="contact section" id="contacto" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-kicker">
          <p className="eyebrow">05 — Próximo capítulo</p>
          <span className="mono">HABLEMOS DE TU EQUIPO</span>
        </div>
        <div className="contact-heading">
          <h2 id="contact-title">El próximo desafío,<br />
            <span>en equipo.</span>
          </h2>
          <a className="contact-arrow" href="mailto:tadeoabbruzzese@gmail.com" aria-label="Enviar un email a Tadeo">
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-bottom">
          <div>
            <p>¿Buscás un desarrollador que conecte<br />tecnología, producto y personas?</p>
            <a className="email-link" href="mailto:tadeoabbruzzese@gmail.com">tadeoabbruzzese@gmail.com <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/tadeo-abbruzzese/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/tadeoabbruzzese" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href="/home-assets/Tadeo-Abbruzzese-CV.pdf" download>Descargar CV <span aria-hidden="true">↙</span>
            </a>
            <a className="whatsapp" href="https://wa.me/541123221907" target="_blank" rel="noopener noreferrer">También por WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
