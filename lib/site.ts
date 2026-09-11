export const siteConfig = {
  name: "Tadeo Abbruzzese",
  role: "AI Strategist & Full Stack Software Developer",
  location: "Buenos Aires, Argentina",
  email: "tadeoabbruzzese@gmail.com",
  linkedin: "https://www.linkedin.com/in/tadeo-abbruzzese/",
  github: "https://github.com/tadeoabbruzzese",
  phone: "541123221907",
  whatsappMessage:
    "Hola Tadeo, vi tu portfolio y me gustaría hablar con vos sobre un proyecto u oportunidad.",
  description:
    "Portfolio de Tadeo Abbruzzese, AI Strategist y Full Stack Software Developer especializado en desarrollo web, software a medida, automatización e inteligencia artificial.",
};

export const whatsappUrl = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;

export const navItems = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Servicios", href: "/#servicios" },
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
