export const homeCases = {
  "camping": {
    "title": "Camping Fossa Lupara",
    "context": "Cliente real · Sestri Levante, Italia",
    "image": "/home-assets/camping.jpg",
    "alt": "Sitio público del Camping Fossa Lupara.",
    "summary": "Desarrollo web para un camping en Italia, con foco en la experiencia del visitante, las funcionalidades comerciales y la internacionalización.",
    "challenge": "Presentar la propuesta de un negocio turístico real y facilitar el acceso a su información.",
    "approach": "Un recorrido visual por el camping, contenidos en distintos idiomas y acceso a información y consultas.",
    "url": "https://campingfossalupara.com/"
  },
  "pasteleria": {
    "title": "Pastelería Jésica Frías",
    "context": "Emprendimiento familiar real · Rediseño",
    "image": "/home-assets/pasteleria.jpg",
    "alt": "Nueva versión del sitio de Pastelería Jésica Frías.",
    "summary": "Una nueva presencia digital que conecta la historia de la marca con su propuesta de pastelería.",
    "challenge": "Transmitir la identidad del emprendimiento y facilitar consultas sobre sus elaboraciones.",
    "approach": "Storytelling, catálogo visual y consultas personalizadas por WhatsApp desde las fichas de producto.",
    "url": "https://pasteleriajesicafrias.vercel.app/"
  },
  "towerhub": {
    "title": "TowerHub",
    "context": "Aplicación personal · Exploración de información",
    "image": "/home-assets/towerhub.jpg",
    "alt": "Interfaz pública de TowerHub.",
    "summary": "Una aplicación personal que reúne información de Tower of Fantasy en una experiencia de consulta y exploración.",
    "challenge": "Organizar un universo de personajes e información para que sea más fácil recorrerlo.",
    "approach": "Interfaces de exploración, organización de datos y funcionalidades interactivas.",
    "url": "https://www.towerhub.online/"
  }
} as const;

export type CaseId = keyof typeof homeCases;
