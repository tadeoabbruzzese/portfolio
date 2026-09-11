"use client";

import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function PointerGlow({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!ref.current || event.pointerType === "touch") return;
    const bounds = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    ref.current.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  }

  return (
    <div ref={ref} className={cn("pointer-glow", className)} onPointerMove={handlePointerMove}>
      {children}
    </div>
  );
}
