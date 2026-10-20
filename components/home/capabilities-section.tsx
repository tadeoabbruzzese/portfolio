
export function CapabilitiesSection() {
  return (
    <section className="capabilities section" id="capacidades" aria-labelledby="capabilities-title">
      <div className="container">
        <p className="eyebrow">03 — Capacidades y enfoque</p>
        <div className="capabilities-layout">
          <div>
            <h2 className="section-title" id="capabilities-title">Entender.<br />Conectar.<br />
              <span>Construir.</span>
            </h2>
            <p className="capabilities-intro">El stack es una herramienta.<br />El punto de partida es el problema.</p>
            <div className="scope-mark mono" aria-hidden="true">[ PENSAR → HACER → APRENDER ]</div>
          </div>
          <div className="capability-list">
            <article>
              <span className="mono">01 / INTERFAZ</span>
              <h3>Frontend y experiencia de usuario</h3>
              <p>Convertir información en recorridos claros, con interfaces adaptables y atención al detalle.</p>
              <a href="#proyectos">En práctica: Camping, Jésica Frías y TowerHub <span aria-hidden="true">↗</span>
              </a>
            </article>
            <article>
              <span className="mono">02 / LÓGICA</span>
              <h3>Backend y gestión de datos</h3>
              <p>Conectar las interfaces con la lógica de negocio y organizar la información que necesitan.</p>
              <a href="#experiencia">En práctica: herramientas de gestión en Further <span aria-hidden="true">↗</span>
              </a>
            </article>
            <article>
              <span className="mono">03 / CONEXIONES</span>
              <h3>APIs, integraciones y automatización</h3>
              <p>Vincular servicios y procesos mediante APIs, webhooks y flujos de automatización.</p>
              <a href="#experiencia">En práctica: integraciones, n8n y APIs de IA <span aria-hidden="true">↗</span>
              </a>
            </article>
            <article>
              <span className="mono">04 / PRODUCTO</span>
              <h3>Desarrollo y resolución de problemas</h3>
              <p>Traducir necesidades en funcionalidades y trabajar de forma incremental sobre una solución.</p>
              <a href="#proyectos">En práctica: negocios reales y Anotiva en desarrollo <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
