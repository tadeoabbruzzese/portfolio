export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    company: "Further Corporate",
    role: "AI Strategist",
    period: "Octubre 2025 — Actualidad",
    summary:
      "Desarrollo y evolución de productos internos, combinando ingeniería full stack, automatización e inteligencia artificial para resolver procesos de negocio concretos.",
    highlights: [
      "Participo en el desarrollo de sistemas internos de Further Corporate utilizados por más de 1.700 alumnos de la organización y de herramientas para su equipo de más de 80 docentes.",
      "Propuse y ejecuté una migración de Firestore a PostgreSQL junto con una nueva capa backend, reduciendo hasta un 90% ciertos tiempos de procesamiento.",
      "Diseño automatizaciones, integraciones y aplicaciones internas para reducir tareas manuales y conectar procesos de la organización.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Fastify",
      "Firebase",
      "Docker",
      "n8n",
    ],
  },
];
