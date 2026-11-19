
export function ExperienceSection() {
  return (
    <section className="experience section container" id="experiencia" aria-labelledby="experience-title">
      <div className="section-kicker">
        <p className="eyebrow">Experiencia profesional</p>
        <span className="mono">DE LA NECESIDAD A LA SOLUCIÓN</span>
      </div>
      <h2 id="experience-title" className="section-title">Del problema operativo<br />al software <span className="accent">funcional.</span>
      </h2>
      <div className="experience-layout">
        <aside className="company">
          <div className="company-emblem" aria-hidden="true">f<span>↗</span>
          </div>
          <h3>Further Corporate</h3>
          <p className="role">AI Implementation Strategist</p>
          <p className="date mono">Octubre 2025 — Octubre 2026</p>
          <p>Un rol técnico: desarrollo Full-Stack, integraciones y automatizaciones para necesidades académicas, administrativas y operativas.</p>
          <div className="concept" aria-label="Esquema conceptual: personas, aplicaciones y datos conectados">
            <span className="mono concept-label">LÓGICA DE TRABAJO / ILUSTRATIVO</span>
            <div className="concept-node">Personas <span>↘</span>
            </div>
            <div className="concept-node featured">Aplicaciones <span>↔</span>
            </div>
            <div className="concept-node">Datos y procesos <span>↗</span>
            </div>
          </div>
        </aside>
        <div className="contributions">
          <article className="contribution reveal">
            <span className="contribution-number">01</span>
            <div>
              <h3>Aplicaciones de<br />gestión interna</h3>
              <p>Funcionalidades y herramientas para organizar procesos administrativos y académicos.</p>
            </div>
            <span className="cross" aria-hidden="true">+</span>
          </article>
          <article className="contribution reveal">
            <span className="contribution-number">02</span>
            <div>
              <h3>Sistemas de presentismo</h3>
              <p>Registro y consulta de asistencia, incluyendo funcionalidades basadas en códigos QR.</p>
            </div>
            <span className="cross" aria-hidden="true">+</span>
          </article>
          <article className="contribution reveal">
            <span className="contribution-number">03</span>
            <div>
              <h3>Portales y experiencias<br />por perfil</h3>
              <p>Interfaces y funcionalidades para distintos tipos de usuarios y necesidades operativas.</p>
            </div>
            <span className="cross" aria-hidden="true">+</span>
          </article>
          <article className="contribution reveal">
            <span className="contribution-number">04</span>
            <div>
              <h3>Integraciones,<br />automatización e IA</h3>
              <p>Conexión de APIs, webhooks, servicios de inteligencia artificial y flujos de automatización.</p>
            </div>
            <span className="cross" aria-hidden="true">+</span>
          </article>
        </div>
      </div>
      <div className="stack">
        <span className="mono">HERRAMIENTAS EN CONTEXTO</span>
        <p>Next.js · React · TypeScript · Node.js · Tailwind · Firebase · Firestore · SQL/NoSQL · n8n · APIs de IA</p>
      </div>
    </section>
  );
}
