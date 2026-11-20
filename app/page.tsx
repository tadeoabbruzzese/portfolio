import type { Metadata, Viewport } from 'next';
import { Portfolio } from '@/components/portfolio/portfolio';
import '@/components/portfolio/portfolio.css';
import '@/components/portfolio/project-deck.css';
import '@/components/portfolio/hero-projects.css';
export const metadata: Metadata = {
  title: { absolute: 'Tadeo Abbruzzese — Diseño, desarrollo y experiencias digitales' },
  description: 'Sitios que cuentan historias. Aplicaciones que resuelven problemas. Conocé los proyectos, la experiencia y el trabajo de Tadeo Abbruzzese, desarrollador Full-Stack.',
};
export const viewport: Viewport = { themeColor: '#0b0c10' };
export default function HomePage() { return <Portfolio />; }
