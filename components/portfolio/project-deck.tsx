'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import type { CaseId, PortfolioCase } from '@/data/home-cases';

type Props = {
  entries: [CaseId, PortfolioCase][];
  paused: boolean;
  onOpen: (id: CaseId, trigger: HTMLButtonElement) => void;
};

const TRANSITION_MS = 1100;
const INPUT_COOLDOWN_MS = 90;
const WHEEL_GESTURE_GAP_MS = 110;

export function ProjectDeck({ entries, paused, onOpen }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const destination = useRef(0);
  const animation = useRef(0);
  const velocity = useRef(0);
  const reduced = useReducedMotion();
  const count = entries.length;

  useEffect(() => {
    const region = root.current;
    const viewport = stage.current;
    if (!region || !viewport) return;
    let frame = 0;
    let lastActive = -1;
    const update = () => {
      frame = 0;
      const top = parseFloat(getComputedStyle(viewport).top) || 0;
      const distance = Math.max(1, region.offsetHeight - viewport.offsetHeight);
      const progress = Math.max(0, Math.min(count - 1, (top - region.getBoundingClientRect().top) / distance * (count - 1)));
      const current = Math.min(count - 1, Math.floor(progress + .88));
      if (current !== lastActive) { lastActive = current; activeRef.current = current; setActive(current); }
      cards.current.forEach((card, index) => {
        if (!card) return;
        const local = progress - index;
        const discard = Math.max(0, Math.min(1, local));
        const incoming = Math.max(0, Math.min(1, progress - index + 1));
        const still = reduced || paused;
        card.style.visibility = index < current - 1 || index > current + 1 ? 'hidden' : 'visible';
        card.style.opacity = still ? (index === current ? '1' : '0') : String(Math.max(0, 1 - Math.max(0, (discard - .82) / .18)));
        card.style.transform = still ? 'none' : local >= 0
          ? `translate3d(${-discard * 118}%,${-discard * 12}%,0) rotate(${-discard * 12}deg) scale(${1 - discard * .05})`
          : `translate3d(0,${(1 - incoming) * 5}%,0) scale(${.94 + incoming * .06})`;
        card.style.pointerEvents = index === current ? 'auto' : 'none';
        card.inert = index !== current;
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule); observer.observe(region); observer.observe(viewport);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
  }, [count, paused, reduced]);

  const cancelTransition = useCallback(() => {
    cancelAnimationFrame(animation.current);
    animation.current = 0;
    velocity.current = 0;
  }, []);

  useEffect(() => cancelTransition, [cancelTransition, count, paused, reduced]);

  const go = useCallback((index: number) => {
    if (!root.current || !stage.current) return;
    const previousVelocity = velocity.current;
    cancelTransition();
    destination.current = Math.max(0, Math.min(count - 1, index));
    const top = parseFloat(getComputedStyle(stage.current).top) || 0;
    const start = root.current.getBoundingClientRect().top + window.scrollY - top;
    const distance = root.current.offsetHeight - stage.current.offsetHeight;
    const from = window.scrollY;
    const to = start + distance * destination.current / Math.max(1, count - 1);
    const delta = to - from;
    if (reduced || paused || Math.abs(delta) < 1) {
      window.scrollTo({ top: to, behavior: 'instant' });
      return;
    }
    // Retarget from the current position and speed, without waiting for the
    // previous animation. Clamp the tangent to avoid overshooting on reversal.
    const tangent = Math.max(0, Math.min(3, previousVelocity * TRANSITION_MS / delta));
    const started = performance.now();
    const tick = (now: number) => {
      if (document.querySelector('dialog[open]')) { cancelTransition(); return; }
      const t = Math.min(1, (now - started) / TRANSITION_MS);
      const progress = (-2 * t ** 3 + 3 * t ** 2) + (t ** 3 - 2 * t ** 2 + t) * tangent;
      velocity.current = delta / TRANSITION_MS * ((-6 * t ** 2 + 6 * t) + (3 * t ** 2 - 4 * t + 1) * tangent);
      window.scrollTo({ top: from + delta * progress, behavior: 'instant' });
      if (t < 1) animation.current = requestAnimationFrame(tick);
      else { animation.current = 0; velocity.current = 0; }
    };
    animation.current = requestAnimationFrame(tick);
  }, [cancelTransition, count, paused, reduced]);

  useEffect(() => {
    let lockedUntil = 0;
    let lastWheel = -Infinity;
    let touchX = 0, touchY = 0, touchConsumed = false;
    const isPinned = () => {
      if (!root.current || !stage.current || document.querySelector('dialog[open]')) return false;
      const bounds = root.current.getBoundingClientRect();
      const top = parseFloat(getComputedStyle(stage.current).top) || 0;
      return bounds.top <= top + 2 && bounds.bottom >= window.innerHeight - 2;
    };
    const currentDestination = () => animation.current ? destination.current : activeRef.current;
    const canAdvance = (direction: number) => direction > 0 ? currentDestination() < count - 1 : currentDestination() > 0;
    const advance = (direction: number) => {
      lockedUntil = performance.now() + INPUT_COOLDOWN_MS;
      go(currentDestination() + direction);
    };
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || !event.deltaY || !isPinned()) return;
      const now = performance.now();
      const continuous = now - lastWheel < WHEEL_GESTURE_GAP_MS;
      lastWheel = now;
      if (now < lockedUntil || continuous) { event.preventDefault(); return; }
      const direction = Math.sign(event.deltaY);
      if (!canAdvance(direction)) { if (animation.current) event.preventDefault(); return; }
      event.preventDefault();
      advance(direction);
    };
    const touchStart = (event: TouchEvent) => {
      touchConsumed = false;
      touchX = event.touches[0]?.clientX ?? 0;
      touchY = event.touches[0]?.clientY ?? 0;
    };
    const touchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1 || !isPinned()) return;
      const dy = touchY - event.touches[0].clientY;
      const dx = touchX - event.touches[0].clientX;
      if (Math.abs(dx) > Math.abs(dy)) return;
      if (touchConsumed || performance.now() < lockedUntil) { event.preventDefault(); return; }
      if (!canAdvance(Math.sign(dy))) { if (animation.current) event.preventDefault(); return; }
      event.preventDefault();
      if (Math.abs(dy) > 30) { touchConsumed = true; advance(Math.sign(dy)); }
    };
    const key = (event: KeyboardEvent) => {
      if (!isPinned() || event.altKey || event.ctrlKey || event.metaKey) return;
      const element = event.target as HTMLElement;
      if (element.closest('input, textarea, select, [contenteditable="true"]')) return;
      const direction = event.key === 'PageDown' || event.key === 'ArrowDown' || (event.key === ' ' && !event.shiftKey) ? 1 : event.key === 'PageUp' || event.key === 'ArrowUp' || (event.key === ' ' && event.shiftKey) ? -1 : 0;
      if (!direction || (event.key === ' ' && element.closest('button, a'))) return;
      if (event.repeat || performance.now() < lockedUntil) { event.preventDefault(); return; }
      if (!canAdvance(direction)) { if (animation.current) event.preventDefault(); return; }
      event.preventDefault(); advance(direction);
    };
    window.addEventListener('wheel', wheel, { passive: false });
    window.addEventListener('touchstart', touchStart, { passive: true });
    window.addEventListener('touchmove', touchMove, { passive: false });
    window.addEventListener('keydown', key);
    return () => {
      window.removeEventListener('wheel', wheel);
      window.removeEventListener('touchstart', touchStart);
      window.removeEventListener('touchmove', touchMove);
      window.removeEventListener('keydown', key);
    };
  }, [count, go, paused, reduced]);

  return <div className="p-deck" ref={root} style={{ '--project-count': count } as React.CSSProperties} aria-label="Recorrido de proyectos">
    <div className="p-deck-stage" ref={stage}>
      <div className="p-deck-cards">
        {entries.map(([id, item], index) => <article key={id} ref={el => { cards.current[index] = el; }} className={`p-deck-card p-deck-${id}`} style={{ zIndex: count - index }} aria-label={item.title} inert={index !== active}>
          <div className="p-deck-visual"><button className="p-deck-preview" onClick={e => onOpen(id, e.currentTarget)} aria-label={`Conocer proyecto: ${item.title}`} aria-haspopup="dialog"><div className="p-deck-window" aria-hidden="true"><span>● ● ●</span><span>{item.category === 'Demos de rediseño' ? 'DEMO DE REDISEÑO' : 'DISEÑO + DESARROLLO'}</span><span>+</span></div><Image src={item.image} alt={item.alt} width={1432} height={1000} unoptimized /><span className="p-deck-image-action">Ver la historia <b aria-hidden="true">+</b></span></button></div>
          <div className="p-deck-copy"><div className="p-deck-category">{item.category}</div><span className="p-deck-status">{item.status}</span><h3>{item.title}</h3><p>{item.summary}</p><div className="p-deck-features">{item.features.slice(0, 3).map(feature => <span key={feature}>{feature}</span>)}</div><div className="p-deck-actions"><button onClick={e => onOpen(id, e.currentTarget)} aria-haspopup="dialog" className="p-deck-story">Conocer el proyecto <span aria-hidden="true">+</span></button>{item.url && <a href={item.url} target="_blank" rel="noopener noreferrer">{item.category === 'Demos de rediseño' ? 'Visitar demo' : 'Visitar sitio'}</a>}</div></div>
        </article>)}
      </div>
      <div className="p-deck-controls"><div className="p-deck-position" aria-live="polite"><span>{String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span><span>{entries[active]?.[1].title}</span></div><span className="p-deck-hint">Seguí bajando para descubrir el siguiente</span><div className="p-deck-buttons"><button disabled={active === 0} onClick={() => go((animation.current ? destination.current : activeRef.current) - 1)}>Anterior</button><button disabled={active === count - 1} onClick={() => go((animation.current ? destination.current : activeRef.current) + 1)}>Siguiente</button><a href="#enfoque" onClick={cancelTransition}>Salir del recorrido</a></div></div>
    </div>
  </div>;
}
