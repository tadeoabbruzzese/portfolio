"use client";

import Image from "next/image";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { homeCases, type CaseId } from "@/data/home-cases";

type OpenCase = (id: CaseId, trigger: HTMLButtonElement) => void;
const CaseContext = createContext<OpenCase | null>(null);

export function CaseTrigger({ caseId, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { caseId: CaseId }) {
  const open = useContext(CaseContext);
  return <button {...props} type="button" data-case={caseId} aria-haspopup="dialog" onClick={event => open?.(caseId, event.currentTarget)}>{children}</button>;
}

export function CasePreviewProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<CaseId | null>(null);
  const [closing, setClosing] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const item = selected ? homeCases[selected] : null;

  useEffect(() => {
    if (!selected || !dialog.current) return;
    dialog.current.showModal();
    dialog.current.scrollTop = 0;
    closeButton.current?.focus();
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [selected]);

  const restore = () => {
    setSelected(null);
    setClosing(false);
    trigger.current?.focus({ preventScroll: true });
  };
  const close = () => {
    if (closing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dialog.current?.close();
      return;
    }
    setClosing(true);
    timer.current = setTimeout(() => dialog.current?.close(), 200);
  };

  return <CaseContext.Provider value={(id, element) => {
    trigger.current = element;
    setSelected(id);
  }}>
    {children}
    <dialog ref={dialog} className={`case-dialog${closing ? " is-closing" : ""}`} aria-labelledby="case-title" onClose={restore} onCancel={event => { event.preventDefault(); close(); }} onKeyDown={event => {
      if (event.key !== "Tab") return;
      const controls = event.currentTarget.querySelectorAll<HTMLElement>('button, a[href]');
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close();
    }}>
      <div className="dialog-top">
        <span className="mono">VISTA PREVIA DEL CASO · PROTOTIPO</span>
        <button ref={closeButton} className="close-dialog" type="button" aria-label="Cerrar vista previa" onClick={close}>Cerrar <span aria-hidden="true">×</span>
        </button>
      </div>
      {item && <>
        <Image unoptimized className="case-image" src={item.image} alt={item.alt} width={selected === "pasteleria" ? 1425 : 1432} height={selected === "pasteleria" ? 990 : 1000} />
        <div className="dialog-body">
          <p className="eyebrow" id="case-context">{item.context}</p>
          <h2 id="case-title">{item.title}</h2>
          <p id="case-summary">{item.summary}</p>
          <div className="case-details">
            <div>
              <span className="mono">CONTEXTO</span>
              <p id="case-challenge">{item.challenge}</p>
            </div>
            <div>
              <span className="mono">ENFOQUE</span>
              <p id="case-approach">{item.approach}</p>
            </div>
          </div>
          <p className="case-disclaimer">Síntesis para evaluar el diseño de la home. El caso de estudio completo queda para una próxima etapa.</p>
          <a className="button primary" id="case-live" href={item.url} target="_blank" rel="noopener noreferrer">Visitar proyecto <span aria-hidden="true">↗</span>
          </a>
        </div>
      </>}
    </dialog>
  </CaseContext.Provider>;
}
