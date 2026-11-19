export type PortfolioCase = {
  title: string;
  category: 'Webs para negocios' | 'Aplicaciones' | 'Demos de rediseño';
  context: string;
  image: string;
  alt: string;
  summary: string;
  challenge: string;
  approach: string;
  role: string;
  features: string[];
  status: string;
  url?: string;
  disclaimer?: string;
};

export const homeCases = {
  camping: {
    title: 'Camping Fossa Lupara', category: 'Webs para negocios',
    context: 'Proyecto freelance · Turismo en Italia', image: '/home-assets/camping.jpg',
    alt: 'Sitio de Camping Fossa Lupara, con fotografías del camping y su entorno.',
    summary: 'Una web renovada para descubrir el camping, consultar información y planificar una estadía.',
    challenge: 'Actualizar una web de 2010 y darle a la clienta herramientas para mantener precios e imágenes sin depender del código.',
    approach: 'Diseño adaptable a celulares, contenido en distintos idiomas y un recorrido que conecta alojamiento, servicios y consultas.',
    role: 'Relevamiento directo con la clienta, diseño, desarrollo con Next.js y Firebase e iteraciones sobre el producto.',
    features: ['Contenido en distintos idiomas', 'Gestión de precios e imágenes', 'Reseñas con moderación', 'Diseño adaptable'],
    status: 'Sitio publicado', url: 'https://www.campingfossalupara.com/'
  },
  pasteleria: {
    title: 'Pastelería Jésica Frías', category: 'Webs para negocios',
    context: 'Emprendimiento familiar · Pastelería', image: '/home-assets/pasteleria.jpg',
    alt: 'Web de Pastelería Jésica Frías con fotografía de una torta y su presentación de marca.',
    summary: 'La historia de una marca artesanal, un catálogo visual y una forma más directa de consultar por sus productos.',
    challenge: 'Mostrar la identidad del emprendimiento y ayudar a elegir entre sus elaboraciones antes de hacer una consulta.',
    approach: 'Presentación editorial, fotografías protagonistas, galerías y consultas personalizadas por WhatsApp desde las fichas.',
    role: 'Diseño de la experiencia, organización del contenido e implementación del sitio.',
    features: ['Catálogo visual', 'Galerías de productos', 'Consultas por WhatsApp', 'Identidad de marca'],
    status: 'Sitio publicado', url: 'https://pasteleriajesicafrias.vercel.app/'
  },
  towerhub: {
    title: 'TowerHub', category: 'Aplicaciones', context: 'Proyecto personal · Plataforma de consulta',
    image: '/home-assets/towerhub.jpg', alt: 'Catálogo de personajes de Tower of Fantasy en TowerHub.',
    summary: 'Un universo de información convertido en catálogos, filtros y herramientas interactivas.',
    challenge: 'Organizar personajes, reliquias y sus características para facilitar su consulta.',
    approach: 'Búsqueda, filtros, fichas detalladas y una tier list interactiva con información persistida en Firestore.',
    role: 'Definición del producto y desarrollo de interfaz, navegación y persistencia de datos.',
    features: ['Búsqueda y filtros', 'Fichas de personajes', 'Tier list interactiva', 'Firebase / Firestore'],
    status: 'Aplicación publicada', url: 'https://www.towerhub.online/'
  },
  crm: {
    title: 'CRM personal', category: 'Aplicaciones', context: 'Herramienta propia · Gestión y seguimiento',
    image: '/home-assets/crm-concept.svg', alt: 'Esquema ilustrativo del CRM con etapas, propuestas y próximos contactos. No contiene datos reales.',
    summary: 'Postulaciones, contactos profesionales y propuestas freelance reunidos en un espacio de trabajo.',
    challenge: 'Llevar el seguimiento de distintos contactos sin perder el contexto de cada conversación ni confundir intentos con resultados.',
    approach: 'Fichas con estados explícitos, próximos pasos, filtros y un historial de actividad. Acceso privado con Firebase.',
    role: 'Diseño y desarrollo con Next.js, TypeScript y Firebase; implementación de reglas de acceso y seguimiento comercial.',
    features: ['Panel de seguimiento', 'Contactos y networking', 'Propuestas freelance', 'Historial y acceso privado'],
    status: 'Herramienta de uso privado', disclaimer: 'Vista ilustrativa con datos ficticios. La aplicación y sus registros personales no se comparten públicamente.'
  },
  anotiva: {
    title: 'Anotiva', category: 'Aplicaciones', context: 'Producto propio · Android · En desarrollo',
    image: '/home-assets/anotiva-concept.svg', alt: 'Composición conceptual de Anotiva: ofertas, historial y herramientas para conductores.',
    summary: 'Un producto para ayudar a conductores de Uber y DiDi a interpretar ofertas y organizar información de su actividad.',
    challenge: 'Convertir información de trabajo cotidiano en herramientas de consulta útiles para el conductor.',
    approach: 'Desarrollo incremental para Android, lectura local mediante OCR, historial por cuenta y validación en un entorno de pruebas.',
    role: 'Definición del producto, desarrollo e iteraciones de interfaz y funcionamiento.',
    features: ['Aplicación Android', 'OCR local', 'Historial por cuenta', 'Validación incremental'],
    status: 'En desarrollo', disclaimer: 'Producto todavía no lanzado comercialmente. La imagen es una composición conceptual, no una captura de producción.'
  },
  cofer: {
    title: 'Aceros Cofer', category: 'Demos de rediseño', context: 'Propuesta conceptual · Industria del acero',
    image: '/home-assets/cofer.jpg', alt: 'Demo de Aceros Cofer con estética industrial y visualización interactiva de piezas de acero.',
    summary: 'Una identidad industrial más expresiva y un recorrido claro por materiales, procesos y consultas.',
    challenge: 'Explorar cómo presentar un catálogo técnico con una experiencia más visual y legible.',
    approach: 'Fotografías de la empresa, explorador de materiales, animación interactiva, galería y acceso a reseñas de Google.',
    role: 'Diseño y desarrollo de la propuesta visual e interacciones.',
    features: ['Explorador de materiales', 'Animación interactiva', 'Galería de fotografías', 'Consulta de productos'],
    status: 'Demo conceptual', url: 'https://aceros-cofer-demo.vercel.app',
    disclaimer: 'Propuesta independiente de rediseño. No es el sitio oficial ni un trabajo contratado por la empresa.'
  },
  cambiasso: {
    title: 'Ingeniero Cambiasso', category: 'Demos de rediseño', context: 'Propuesta conceptual · Servicios industriales',
    image: '/home-assets/cambiasso.jpg', alt: 'Demo de Ingeniero Cambiasso con fotografías de transformadores y presentación de servicios.',
    summary: 'Servicios técnicos y trabajos en campo presentados con jerarquía, fotografías y navegación clara.',
    challenge: 'Dar protagonismo a la experiencia técnica de una empresa de transformadores.',
    approach: 'Composición editorial, servicios organizados, fotos de trabajos y animaciones que acompañan el recorrido.',
    role: 'Diseño y desarrollo de la demo institucional.',
    features: ['Servicios organizados', 'Fotografías de trabajos', 'Interactividad', 'Diseño adaptable'],
    status: 'Demo conceptual', url: 'https://ingeniero-cambiasso-demo.vercel.app',
    disclaimer: 'Propuesta independiente de rediseño. No es el sitio oficial ni un trabajo contratado por la empresa.'
  },
  freire: {
    title: 'Ferretería Freire', category: 'Demos de rediseño', context: 'Propuesta conceptual · Comercio',
    image: '/home-assets/freire.jpg', alt: 'Demo de Ferretería Freire con imágenes del local, productos y buscador.',
    summary: 'Un catálogo más fácil de recorrer, con filtros y una lista para preparar una consulta.',
    challenge: 'Ayudar al visitante a encontrar productos y explicar lo que necesita desde el celular.',
    approach: 'Buscador, filtros por rubro, fichas y selección de productos, integrados en una identidad visual ligada al local.',
    role: 'Diseño de la experiencia comercial y desarrollo del catálogo demostrativo.',
    features: ['Buscador de productos', 'Filtros por rubro', 'Lista de consulta', 'Fotografías del local'],
    status: 'Demo conceptual', url: 'https://ferreteria-freire-demo.vercel.app',
    disclaimer: 'Propuesta independiente, no contratada. La demo no envía consultas ni confirma stock o precios.'
  },
  resortecnica: {
    title: 'Resortécnica', category: 'Demos de rediseño', context: 'Propuesta conceptual · Fabricación industrial',
    image: '/home-assets/resortecnica.jpg', alt: 'Vista previa de Resortécnica con una animación de resorte y catálogo industrial.',
    summary: 'Un catálogo industrial con buscador, filtros y un resorte que responde a la interacción.',
    challenge: 'Explicar una oferta técnica y hacer más accesible la exploración de sus familias de productos.',
    approach: 'Fotografías propias de la empresa, catálogo filtrable y una animación de resorte que se puede comprimir y estirar.',
    role: 'Diseño y desarrollo del prototipo local.',
    features: ['Catálogo filtrable', 'Buscador', 'Resorte interactivo', 'Fotografías de productos'],
    status: 'Prototipo local', disclaimer: 'Propuesta independiente no contratada, todavía sin demo pública. La animación es visual, no un cálculo técnico.'
  },
  galia: {
    title: 'Estudio Galia', category: 'Demos de rediseño', context: 'Exploración visual · Sitio de estudio',
    image: '/home-assets/galia.jpg', alt: 'Demo visual de Estudio Galia.',
    summary: 'Una exploración de identidad, composición editorial y presentación de servicios.',
    challenge: 'Construir una presencia visual coherente para un estudio y ordenar su presentación.',
    approach: 'Jerarquía tipográfica, secciones de servicios, filosofía de trabajo y contacto.',
    role: 'Diseño y desarrollo de la exploración visual.',
    features: ['Identidad visual', 'Presentación de servicios', 'Proceso de trabajo', 'Diseño adaptable'],
    status: 'Demo visual', url: 'https://estudio-galia.vercel.app/', disclaimer: 'Exploración de diseño; no se presenta como un cliente contratado.'
  },
  aura: {
    title: 'Aura Beauty Studio', category: 'Demos de rediseño', context: 'Exploración visual · Belleza',
    image: '/home-assets/aura.jpg', alt: 'Prototipo de Aura Beauty Studio para presentar servicios de cejas y pestañas.',
    summary: 'Una landing de servicios de belleza con galería, beneficios y un recorrido hacia la consulta.',
    challenge: 'Presentar servicios de cejas y pestañas en una experiencia visual cuidada.',
    approach: 'Secciones de servicios, galería y explicación del proceso, con llamadas al contacto.',
    role: 'Desarrollo de la landing demostrativa con Next.js.',
    features: ['Servicios de belleza', 'Galería visual', 'Proceso de atención', 'Diseño adaptable'],
    status: 'Prototipo local', disclaimer: 'Exploración de diseño con imágenes de referencia; no se presenta como un cliente contratado. Sin enlace público verificado.'
  }
} satisfies Record<string, PortfolioCase>;

export type CaseId = keyof typeof homeCases;
export const caseEntries = Object.entries(homeCases) as [CaseId, PortfolioCase][];
