"use client";

import { useEffect } from "react";

export function HomeEnhancements() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".portfolio-home");
    if (!root) return;
    const anchors = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link || !root.contains(link)) return;
      const target = document.getElementById(link.hash.slice(1));
      if (!target) return;
      const oldTabIndex = target.getAttribute("tabindex");
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      target.addEventListener("blur", () => {
        if (oldTabIndex === null) target.removeAttribute("tabindex");
        else target.setAttribute("tabindex", oldTabIndex);
      }, { once: true });
    };
    root.addEventListener("click", anchors);

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(root.querySelectorAll<HTMLElement>(".reveal, .section-title, .capability-list article, .about-copy, .trajectory"));
    let observer: IntersectionObserver | undefined;
    const seen = new WeakSet<Element>();
    const motion = () => {
      observer?.disconnect();
      elements.forEach(element => element.classList.remove("is-entering"));
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(entries => {
        let index = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting || seen.has(entry.target)) continue;
          const element = entry.target as HTMLElement;
          element.style.setProperty("--reveal-delay", `${Math.min(index++, 3) * 80}ms`);
          element.classList.add("reveal", "is-entering");
          seen.add(element);
          observer?.unobserve(element);
        }
      }, { threshold: 0.08 });
      elements.forEach(element => { if (!seen.has(element)) observer?.observe(element); });
    };
    const animationEnd = (event: AnimationEvent) => {
      if (event.animationName === "enter" && event.target instanceof HTMLElement) event.target.classList.remove("is-entering");
    };
    root.addEventListener("animationend", animationEnd);
    motion();
    preference.addEventListener("change", motion);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", motion);
      root.removeEventListener("click", anchors);
      root.removeEventListener("animationend", animationEnd);
      elements.forEach(element => {
        element.classList.remove("is-entering");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
