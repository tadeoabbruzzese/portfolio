'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { homeCases, type CaseId } from '@/data/home-cases';

const highlights = [
  { id: 'camping', label: 'Una web', benefit: 'De descubrir un lugar a planificar una estadía.' },
  { id: 'towerhub', label: 'Una aplicación', benefit: 'De información dispersa a respuestas claras.' },
  { id: 'cofer', label: 'Un rediseño', benefit: 'Una nueva forma de presentar una industria.' },
] satisfies { id: CaseId; label: string; benefit: string }[];

export function HeroProjects({ paused, onOpen }: {
  paused: boolean;
  onOpen: (id: CaseId, trigger: HTMLButtonElement) => void;
}) {
  const [selected, setSelected] = useState(0);
  const reduced = useReducedMotion();
  const highlight = highlights[selected];
  const project = homeCases[highlight.id];
  const still = paused || reduced;

  return <div className="p-hero-showcase">
    <div className="p-showcase-heading"><span>IDEAS CON FORMA PROPIA</span><span>Diseñadas y desarrolladas por mí</span></div>
    <div className="p-showcase-frame">
      <div className="p-showcase-outline" aria-hidden="true" />
      <AnimatePresence initial={false} mode="wait">
        <motion.div key={highlight.id} className={`p-showcase-project p-showcase-${highlight.id}`}
          initial={{ opacity: 0, y: still ? 0 : 18, rotate: still ? 0 : 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, y: still ? 0 : -12, rotate: still ? 0 : -1 }}
          transition={{ duration: still ? 0 : .32, ease: [.22, 1, .36, 1] }}>
          <div className="p-showcase-browser"><span aria-hidden="true">● ● ●</span><span>{project.title}</span><span className="p-showcase-status">{project.status}</span></div>
          <button className="p-showcase-image" onClick={e => onOpen(highlight.id, e.currentTarget)} aria-label={`Ver proyecto destacado: ${project.title}`} aria-haspopup="dialog">
            <Image src={project.image} alt={project.alt} width={1432} height={1000} priority={selected === 0} unoptimized />
            <span>Conocer el proyecto <b aria-hidden="true">+</b></span>
          </button>
          <div className="p-showcase-description"><span>{project.category}</span><p>{highlight.benefit}</p></div>
        </motion.div>
      </AnimatePresence>
    </div>
    <div className="p-showcase-select" role="group" aria-label="Explorar proyectos destacados">
      {highlights.map((entry, index) => <button key={entry.id} aria-pressed={selected === index} onClick={() => setSelected(index)}><span>{entry.label}</span><span>{homeCases[entry.id].title}</span></button>)}
    </div>
  </div>;
}
