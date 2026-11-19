"use client";

import { useEffect, useRef, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const navigation = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    navigation.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const close = () => setOpen(false);
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        toggle.current?.focus();
      }
      if (event.key !== "Tab") return;
      const last = navigation.current?.querySelector<HTMLAnchorElement>("a:last-child");
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        toggle.current?.focus();
      } else if (event.shiftKey && document.activeElement === toggle.current) {
        event.preventDefault();
        last?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) close();
    };
    const narrow = window.matchMedia("(max-width: 600px)");
    document.addEventListener("keydown", keyboard);
    document.addEventListener("pointerdown", outside);
    narrow.addEventListener("change", close);
    return () => {
      document.removeEventListener("keydown", keyboard);
      document.removeEventListener("pointerdown", outside);
      narrow.removeEventListener("change", close);
    };
  }, [open]);

  // This is the prototype's nonmodal disclosure, not a full-screen overlay.
  return (
    <header className="header" ref={header}>
      <a className="identity" href="#inicio" aria-label="Tadeo Abbruzzese, inicio">
        <span className="monogram">ta<span>↗</span>
        </span>
        <span>Tadeo<br />Abbruzzese</span>
      </a>
      <button className="menu-toggle" ref={toggle} type="button" aria-controls="navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>Menú</span>
        <span className="menu-icon" aria-hidden="true" />
      </button>
      <nav id="navigation" ref={navigation} className={open ? "is-open" : undefined} aria-label="Navegación principal" onClick={event => {
        if ((event.target as HTMLElement).closest("a")) setOpen(false);
      }}>
        <a href="#proyectos">Proyectos</a>
        <a href="#servicios">Servicios</a>
        <a href="#experiencia">Experiencia</a>
        <a className="nav-contact" href="#contacto">Conversemos
        </a>
      </nav>
    </header>
  );
}
