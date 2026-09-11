export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  year: string;
  url: string;
  cta: string;
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
    eyebrow: "Cliente real · Desarrollo end-to-end",
    year: "2025",
    url: "https://campingfossalupara.com",
    cta: "Visitar sitio",
    summary:
      "El sitio oficial de un camping italiano, desarrollado de punta a punta para facilitar el descubrimiento, la consulta y las reservas desde cualquier dispositivo.",
    description:
      "Una presencia digital clara, cálida y funcional para un negocio real. El proyecto combinó producto, diseño y desarrollo en contacto directo con el cliente.",
    challenge:
      "Convertir la experiencia del camping en un sitio fácil de explorar, con información dinámica y un recorrido de reserva claro, especialmente desde mobile.",
    solution:
      "Diseñé y desarrollé una experiencia responsive conectada a Supabase, organizando el contenido y las funcionalidades de reserva alrededor de las necesidades concretas de huéspedes y administradores.",
    role:
      "Me ocupé del proyecto completo: relevamiento, decisiones de UX, arquitectura, frontend, integración backend, accesibilidad, performance e iteraciones con el cliente.",
    stack: ["React", "Vite", "TypeScript", "Supabase", "PostCSS"],
    features: [
      "Experiencia responsive y mobile-first",
      "Flujos relacionados con reservas",
      "Contenido dinámico conectado a Supabase",
      "Iteración directa a partir del feedback del cliente",
      "Buenas prácticas de accesibilidad y performance",
    ],
    results: [
      "Sitio oficial publicado y operativo",
      "Un canal digital propio para consultas y reservas",
      "Experiencia consistente en desktop y mobile",
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
    name: "Tower Hub",
    eyebrow: "Proyecto personal · Plataforma web",
    year: "2023",
    url: "https://www.towerhub.online/",
    cta: "Visitar proyecto",
    summary:
      "Una plataforma comunitaria que centraliza información útil de Tower of Fantasy y convierte contenido disperso en una experiencia ordenada y fácil de consultar.",
    description:
      "Un producto personal nacido de detectar una fricción real dentro de una comunidad de jugadores y construir una solución completa alrededor de ella.",
    challenge:
      "La información que necesitaban los jugadores estaba repartida entre múltiples fuentes, con formatos inconsistentes y recorridos de consulta poco prácticos.",
    solution:
      "Construí una plataforma full stack que organiza el contenido en una interfaz clara, con una arquitectura preparada para administrar y ampliar la información disponible.",
    role:
      "Definí el producto y desarrollé tanto la experiencia frontend como el backend y el modelo de datos, desde la idea inicial hasta su publicación y uso real.",
    stack: ["React", "Node.js", "MongoDB"],
    features: [
      "Biblioteca centralizada de información",
      "Navegación pensada para consultas rápidas",
      "Contenido estructurado y escalable",
      "Arquitectura full stack",
      "Diseño orientado a una comunidad específica",
    ],
    results: [
      "Utilizada por cientos de usuarios",
      "Validación de una necesidad real de la comunidad",
      "Experiencia práctica construyendo y operando un producto propio",
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
