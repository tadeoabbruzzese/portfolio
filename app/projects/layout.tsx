import type { ReactNode } from "react";
import { LegacyShell } from "@/components/legacy-shell";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <LegacyShell>{children}</LegacyShell>;
}
