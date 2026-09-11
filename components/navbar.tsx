"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Download, Close, Menu } from "@/components/ui/icons";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={cn("site-header", scrolled && "site-header-scrolled")}>
      <div className="nav-shell">
        <Link href="/#inicio" className="brand" aria-label="Tadeo Abbruzzese — Inicio">
          <span className="brand-mark">TA</span>
          <span className="brand-name">Tadeo Abbruzzese</span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="nav-cv" href="/Tadeo-Abbruzzese-CV.pdf" download>
          <span>Descargar CV</span>
          <Download width={16} height={16} />
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div id="mobile-navigation" className={cn("mobile-menu", open && "mobile-menu-open")}>
        <nav aria-label="Navegación móvil">
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <a href="/Tadeo-Abbruzzese-CV.pdf" download onClick={() => setOpen(false)}>
            <Download width={18} height={18} />
            Descargar CV
          </a>
        </nav>
      </div>
    </header>
  );
}
