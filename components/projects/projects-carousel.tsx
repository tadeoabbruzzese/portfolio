"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "@/components/ui/icons";

export function ProjectsCarousel({ children, names }: { children: ReactNode; names: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);
  const [manualRevision, setManualRevision] = useState(0);

  const nearest = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const slides = Array.from(track.children) as HTMLElement[];
    return slides.reduce((best, slide, index) => Math.abs(slide.offsetLeft - track.scrollLeft) < Math.abs(slides[best].offsetLeft - track.scrollLeft) ? index : best, 0);
  }, []);

  const moveTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (index + names.length) % names.length;
    track.scrollTo({ left: (track.children[next] as HTMLElement).offsetLeft, behavior: reducedMotion === false ? "smooth" : "instant" });
  }, [names.length, reducedMotion]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(preference.matches);
    updateMotion();
    preference.addEventListener("change", updateMotion);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.intersectionRatio >= .35), { threshold: [.35] });
    observer.observe(track);
    const visibility = () => setTabVisible(!document.hidden);
    visibility();
    document.addEventListener("visibilitychange", visibility);
    const resize = new ResizeObserver(() => setActive(nearest()));
    resize.observe(track);
    return () => {
      observer.disconnect();
      resize.disconnect();
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [nearest]);

  useEffect(() => {
    Array.from(trackRef.current?.children ?? []).forEach((slide, index) => {
      (slide as HTMLElement).inert = index !== active;
      slide.setAttribute("aria-hidden", String(index !== active));
    });
  }, [active]);

  const rotating = reducedMotion === false && visible && tabVisible && !hovered && !focused && !dragging;
  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => moveTo(nearest() + 1), 6000);
    return () => clearInterval(timer);
  }, [rotating, moveTo, nearest, manualRevision]);

  const manualMove = (index: number) => {
    setManualRevision(value => value + 1);
    moveTo(index);
  };

  return (
    <div className="project-banners-carousel" role="region" aria-roledescription="carrusel" aria-label="Proyectos destacados" onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }} onPointerEnter={event => { if (event.pointerType === "mouse") setHovered(true); }} onPointerLeave={() => { setHovered(false); setDragging(false); }}>
      <div ref={trackRef} className="project-banners-track" tabIndex={0} aria-label="Proyectos: deslizá o usá las flechas para explorar" onScroll={() => setActive(nearest())} onPointerDown={() => setDragging(true)} onPointerUp={() => { setDragging(false); setManualRevision(value => value + 1); }} onPointerCancel={() => setDragging(false)} onKeyDown={event => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          manualMove(nearest() + (event.key === "ArrowRight" ? 1 : -1));
        }
        if (event.key === "Home" || event.key === "End") {
          event.preventDefault();
          manualMove(event.key === "Home" ? 0 : names.length - 1);
        }
      }}>
        {children}
      </div>
      <div className="project-banners-controls">
        <div className="project-banners-dots" role="group" aria-label="Seleccionar proyecto">
          {names.map((name, index) => <button key={name} type="button" className="project-banners-dot" aria-label={`Mostrar ${name}`} aria-current={active === index ? "true" : undefined} onClick={() => manualMove(index)} />)}
        </div>
        <div className="project-banners-arrows">
          <button type="button" className="project-banners-arrow" aria-label="Proyecto anterior" onClick={() => manualMove(nearest() - 1)}><ArrowLeft /></button>
          <button type="button" className="project-banners-arrow" aria-label="Proyecto siguiente" onClick={() => manualMove(nearest() + 1)}><ArrowRight /></button>
        </div>
      </div>
      <p className="project-banners-caption">Capturas de los sitios publicados.</p>
      <p className="project-banners-status" aria-live={rotating ? "off" : "polite"} aria-atomic="true">{names[active]}</p>
    </div>
  );
}
