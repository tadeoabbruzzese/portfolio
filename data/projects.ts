export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  year: string;
  url: string;
  cta: string;
  headline: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  role: string;
  stack: string[];
  features: string[];
  results: string[];
  mediaKey: "camping" | "tower";
  coverPath: string;
  galleryPaths: string[];
  accent: "lime" | "blue";
};

export const projects: Project[] = [
  {
    slug: "camping-fossa-lupara",
    name: "Camping Fossa Lupara",
    eyebrow: "Proyecto freelance · Italia",
    year: "Abril–octubre de 2026",
    url: "https://www.campingfossalupara.com/",
    cta: "Visitar sitio",
    headline: "De una web obsoleta a una solución moderna y administrable.",
    summary:
      "Modernicé el sitio de un camping italiano con un diseño responsive a medida, gestión de precios e imágenes y reseñas con moderación. El sitio está en funcionamiento y permite administrar parte del contenido sin modificar el código.",
    description:
      "Una clienta italiana necesitaba renovar la presencia digital de su camping. Trabajé directamente con ella para transformar su sitio de 2010 en una web moderna y administrable.",
    challenge:
      "El sitio anterior databa de 2010 y no ofrecía una experiencia adecuada para celulares y tabletas. La clienta necesitaba modernizar su presencia digital y contar con herramientas para gestionar precios e imágenes.",
    solution:
      "Relevé las necesidades directamente con la clienta, renové el diseño y desarrollé un sitio responsive con una identidad visual personalizada. Incorporé herramientas administrativas para gestionar precios e imágenes y un sistema de reseñas y comentarios con moderación.",
    role:
      "Me ocupé del relevamiento, el rediseño, la implementación con Next.js, TypeScript y Firebase y las iteraciones con la clienta, desde abril hasta octubre de 2026.",
    stack: ["Next.js", "TypeScript", "Firebase"],
    features: [
      "Sitio responsive para celulares, tabletas y escritorio",
      "Diseño e identidad visual personalizados",
      "Herramientas administrativas para gestionar precios e imágenes",
      "Sistema de reseñas y comentarios con moderación",
      "Iteraciones a partir del feedback directo de la clienta",
    ],
    results: [
      "Sitio web moderno publicado y en funcionamiento",
      "Gestión de precios e imágenes sin modificar el código",
      "Experiencia adaptada a celulares, tabletas y escritorio",
    ],
    mediaKey: "camping",
    coverPath: "/projects/camping/cover.webp",
    galleryPaths: [
      "/projects/camping/detail-01.jpg",
      "/projects/camping/detail-02.jpg",
      "/projects/camping/detail-03.jpg",
    ],
    accent: "lime",
  },
  {
    slug: "tower-hub",
    name: "TowerHub",
    eyebrow: "Proyecto personal · Aplicación web",
    year: "Febrero de 2026",
    url: "https://www.towerhub.online/",
    cta: "Visitar proyecto",
    headline: "De información dispersa a una aplicación de consulta interactiva.",
    summary:
      "TowerHub es una aplicación personal para organizar y consultar información de Tower of Fantasy. Reúne catálogos de personajes y reliquias, búsqueda, filtros, fichas detalladas y una tier list interactiva.",
    description:
      "Desarrollé TowerHub en febrero de 2026 como un proyecto personal para organizar y consultar información de Tower of Fantasy desde una aplicación web.",
    challenge:
      "Decidí abordar la consulta de información dispersa de Tower of Fantasy, reuniendo personajes y reliquias en una aplicación propia con información estructurada y navegación interactiva.",
    solution:
      "Construí catálogos de personajes y reliquias con búsqueda, filtros, fichas detalladas y una tier list interactiva. Utilicé Next.js, React, JavaScript y Tailwind CSS para la interfaz, con Firebase/Firestore para la persistencia de datos.",
    role:
      "Definí y desarrollé la aplicación como un proyecto personal: organicé la información, construí las interfaces de consulta e implementé la navegación interactiva y la persistencia de datos en Firebase/Firestore.",
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Firebase / Firestore"],
    features: [
      "Catálogos de personajes y reliquias",
      "Búsqueda y filtros para consultar información",
      "Fichas detalladas",
      "Tier list interactiva",
      "Información estructurada y navegación interactiva",
    ],
    results: [
      "Aplicación propia publicada para consultar información de Tower of Fantasy",
      "Experiencia práctica organizando información estructurada y construyendo interfaces de consulta",
      "Funcionalidades transferibles a catálogos comerciales, directorios y portales especializados",
    ],
    mediaKey: "tower",
    coverPath: "/projects/tower/cover.webp",
    galleryPaths: [
      "/projects/tower/detail-01.jpg",
      "/projects/tower/detail-02.jpg",
      "/projects/tower/detail-03.jpg",
    ],
    accent: "blue",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
