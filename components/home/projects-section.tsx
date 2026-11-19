'use client';

import Image from 'next/image';
import { useState } from 'react';
import { caseEntries } from '@/data/home-cases';
import { CaseTrigger } from './case-preview-dialog';

const filters = ['Todos', 'Webs para negocios', 'Aplicaciones', 'Demos de rediseño'] as const;

export function ProjectsSection() {
  const [filter, setFilter] = useState<typeof filters[number]>('Todos');
  const visible = caseEntries.filter(([, item]) => filter === 'Todos' || item.category === filter);
  return <section className="work-library section" id="proyectos" aria-labelledby="projects-title">
    <div className="container">
      <div className="section-kicker"><p className="eyebrow">Portfolio de proyectos</p><span className="mono">DISEÑO + DESARROLLO + CRITERIO</span></div>
      <div className="section-heading work-heading"><h2 id="projects-title" className="section-title">El trabajo habla.<br /><span className="accent">Conocé cada proyecto.</span></h2><p>Webs para negocios, herramientas propias y propuestas de rediseño. En cada caso: el contexto, mi aporte y lo que se puede explorar.</p></div>
      <div className="work-toolbar"><div className="work-filters" role="group" aria-label="Filtrar proyectos">{filters.map(value => <button key={value} aria-pressed={filter === value} onClick={() => setFilter(value)}>{value}<span>{value === 'Todos' ? caseEntries.length : caseEntries.filter(([, item]) => item.category === value).length}</span></button>)}</div><p role="status" aria-live="polite">{visible.length} proyectos</p></div>
      {filter === 'Demos de rediseño' && <p className="demo-explainer">Las demos son exploraciones independientes de diseño y funcionamiento. No implican una contratación ni reemplazan los sitios oficiales.</p>}
      <div className="work-grid">{visible.map(([id, item]) => <article key={id} className={`work-card${id === 'camping' ? ' work-featured' : ''}`}>
        <CaseTrigger caseId={id} className="work-image" aria-label={`Ver proyecto: ${item.title}`}><Image src={item.image} alt={item.alt} width={1440} height={1000} sizes={id === 'camping' ? '(max-width: 700px) 100vw, 800px' : '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw'} /><span className="work-image-action">Explorar proyecto</span></CaseTrigger>
        <div className="work-copy"><div className="work-meta"><span>{item.category}</span><span className={item.category === 'Demos de rediseño' ? 'concept-label' : ''}>{item.status}</span></div><h3>{item.title}</h3><p>{item.summary}</p><ul className="work-tags" aria-label="Funcionalidades">{item.features.slice(0, 3).map(feature => <li key={feature}>{feature}</li>)}</ul><div className="work-actions"><CaseTrigger caseId={id} className="text-link">Ver proyecto</CaseTrigger>{item.url && <a href={item.url} target="_blank" rel="noopener noreferrer">{item.category === 'Demos de rediseño' ? 'Abrir demo' : 'Visitar sitio'}</a>}</div></div>
      </article>)}</div>
      <div className="work-closing"><p>¿Ves algo que podría servir para tu negocio?</p><a className="text-link" href="#contacto">Hablemos de tu idea</a></div>
    </div>
  </section>;
}
