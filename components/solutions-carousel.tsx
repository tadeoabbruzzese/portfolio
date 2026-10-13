"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { solutions } from "@/data/solutions";
import { ArrowLeft, ArrowRight } from "@/components/ui/icons";

export function SolutionsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionsRef = useRef<number[]>([0]);
  const [positions, setPositions] = useState<number[]>([0]);
  const [active, setActive] = useState(0);
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [manualRevision, setManualRevision] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);

  const nearest = useCallback(() => {
    const left = trackRef.current?.scrollLeft ?? 0;
    return positionsRef.current.reduce((best, position, index, all) =>
      Math.abs(position - left) < Math.abs(all[best] - left) ? index : best, 0);
  }, []);

  const moveTo = useCallback((index: number) => {
    const all = positionsRef.current;
    const next = (index + all.length) % all.length;
    trackRef.current?.scrollTo({ left: all[next], behavior: reducedMotion !== false ? "instant" : "smooth" });
  }, [reducedMotion]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const max = Math.max(0, track.scrollWidth - track.clientWidth);
      const first = (track.firstElementChild as HTMLElement | null)?.offsetLeft ?? 0;
      const next: number[] = [];
      Array.from(track.children).forEach((child) => {
        const left = Math.min(max, (child as HTMLElement).offsetLeft - first);
        if (!next.some(position => Math.abs(position - left) < 1)) next.push(left);
      });
      positionsRef.current = next.length ? next : [0];
      setPositions(previous => previous.length === next.length && previous.every((v, i) => Math.abs(v - next[i]) < 1) ? previous : positionsRef.current);
      setActive(nearest());
    };
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(preference.matches);
    updateMotion();
    preference.addEventListener("change", updateMotion);
    measure();
    const resize = new ResizeObserver(measure);
    resize.observe(track);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.intersectionRatio >= .35), { threshold: [.35] });
    observer.observe(track);
    const visibility = () => setTabVisible(!document.hidden);
    visibility();
    document.addEventListener("visibilitychange", visibility);
    return () => {
      preference.removeEventListener("change", updateMotion);
      resize.disconnect();
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [nearest]);

  const rotating = !focused && !dragging && reducedMotion === false && visible && tabVisible && !hovered && positions.length > 1;
  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => moveTo(nearest() + 1), 6000);
    return () => window.clearInterval(timer);
  }, [rotating, moveTo, nearest, manualRevision]);

  const manualMove = (index: number) => {
    setManualRevision(value => value + 1);
    moveTo(index);
  };

  return (
    <div className="solutions-carousel" role="region" aria-roledescription="carrusel" aria-label="Soluciones para tu negocio" onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div
        ref={trackRef}
        className="solutions-track"
        tabIndex={0}
        aria-label="Soluciones: deslizá o usá las flechas para explorar"
        onScroll={() => setActive(nearest())}
        onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
        onPointerLeave={() => { setHovered(false); setDragging(false); }}
        onPointerDown={() => setDragging(true)}
        onPointerUp={() => { setDragging(false); setManualRevision(value => value + 1); }}
        onPointerCancel={() => setDragging(false)}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            manualMove(nearest() + (event.key === "ArrowRight" ? 1 : -1));
          }
          if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            manualMove(event.key === "Home" ? 0 : positions.length - 1);
          }
        }}
      >
        {solutions.map((solution, index) => (
          <div key={solution.id} className="solution-slide" role="group" aria-roledescription="diapositiva" aria-label={`${index + 1} de ${solutions.length}`}>
            <article className="solution-card" aria-labelledby={`${solution.id}-solution-title`}>
              <div className="solution-visual">
                <Image src={solution.image} alt={solution.alt} fill loading="lazy" sizes="(max-width: 767px) 92vw, (max-width: 1440px) 45vw, 590px" className="solution-image" />
              </div>
              <div className="solution-copy">
                <span className="solution-kind"><span aria-hidden="true">0{index + 1} / </span>{solution.kind}</span>
                <h3 id={`${solution.id}-solution-title`}>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
      <div className="solutions-carousel-controls">
        <div className="solutions-pagination" role="group" aria-label="Vistas del carrusel">
          {positions.map((_, index) => (
            <button key={index} type="button" className="solutions-dot" aria-label={`Mostrar vista ${index + 1} de ${positions.length}`} aria-current={active === index ? "true" : undefined} onClick={() => manualMove(index)} />
          ))}
        </div>
        <div className="solutions-carousel-actions">
          <span className="solutions-counter" aria-hidden="true">{active + 1} / {positions.length}</span>
          <button type="button" className="solutions-control" aria-label="Vista anterior" onClick={() => manualMove(nearest() - 1)}><ArrowLeft /></button>
          <button type="button" className="solutions-control" aria-label="Vista siguiente" onClick={() => manualMove(nearest() + 1)}><ArrowRight /></button>
        </div>
      </div>
      <p className="solutions-carousel-status" aria-live={rotating ? "off" : "polite"} aria-atomic="true">Vista {active + 1} de {positions.length}</p>
    </div>
  );
}
