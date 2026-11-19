export const siteConfig = {
  name: "Tadeo Abbruzzese",
  role: "Desarrollo web y soluciones a medida",
  location: "Buenos Aires, Argentina",
  email: "tadeoabbruzzese@gmail.com",
  linkedin: "https://www.linkedin.com/in/tadeo-abbruzzese/",
  github: "https://github.com/tadeoabbruzzese",
  phone: "541123221907",
  whatsappMessage:
    "Hola Tadeo, vi tu portfolio y me gustaría hablar con vos sobre un proyecto u oportunidad.",
  description:
    "Sitios web, catálogos y aplicaciones a medida. Proyectos y demos de Tadeo Abbruzzese, desarrollador Full-Stack de Buenos Aires.",
};

export const whatsappUrl = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;

export const navItems = [
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Soluciones", href: "/#servicios" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Contacto", href: "/#contacto" },
];

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  const value = (configuredUrl || (vercelUrl ? `https://${vercelUrl}` : "")).replace(/\/$/, "");
  if (!value) return null;

  try {
    return new URL(value);
  } catch {
    return null;
  }
}

export function getMetadataBase() {
  return getSiteUrl() ?? new URL("http://localhost:3000");
}
