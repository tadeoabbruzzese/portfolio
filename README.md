# Portfolio — Tadeo Abbruzzese

Portfolio profesional de Tadeo Abbruzzese, AI Strategist & Full Stack Software Developer. Está construido con Next.js, TypeScript, Tailwind CSS y Motion, preparado para desplegarse en Vercel.

## Ejecutar localmente

Requiere Node.js 20.9 o superior.

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

Checks de calidad:

```bash
npm run lint
npm run typecheck
npm run build
```

## Estructura

```text
app/                    Rutas, metadata, sitemap, robots y OG image
components/             Componentes compartidos
components/sections/    Secciones de la homepage
components/projects/    Visuales reutilizables de proyectos
components/ui/          Primitivas visuales e interacción
data/                   Proyectos, experiencia, servicios y stack
lib/                    Configuración general y utilidades
public/                 Foto, CV, ícono y screenshots
```

La homepage se encuentra en `/`. Los case studies se generan en:

- `/projects/camping-fossa-lupara`
- `/projects/tower-hub`

## Contenido editable

- Datos personales, enlaces, WhatsApp y email: `lib/site.ts`.
- Experiencia profesional: `data/experience.ts`.
- Proyectos y contenido de los case studies: `data/projects.ts`.
- Servicios y tecnologías: `data/skills.ts`.

El link de WhatsApp se genera automáticamente a partir del teléfono y el mensaje configurados en `lib/site.ts`.

## Assets pendientes

El portfolio ya funciona sin estos archivos y muestra placeholders diseñados para el layout. Para publicar la versión final, agregá:

### Foto profesional

```text
public/tadeo-profile.jpg
```

Recomendación: JPG vertical, al menos 1200 × 1600 px. El encuadre se adapta automáticamente al marco editorial del hero.

### CV

```text
public/Tadeo-Abbruzzese-CV.pdf
```

Todos los botones “Descargar CV” ya apuntan a ese archivo y usan el atributo `download`.

### Screenshots de Camping Fossa Lupara

```text
public/projects/camping/cover.jpg
public/projects/camping/detail-01.jpg
public/projects/camping/detail-02.jpg
public/projects/camping/detail-03.jpg
```

### Screenshots de Tower Hub

```text
public/projects/tower/cover.jpg
public/projects/tower/detail-01.jpg
public/projects/tower/detail-02.jpg
public/projects/tower/detail-03.jpg
```

Recomendación: imágenes JPG o WebP de 1800 px de ancho o más. `cover.jpg` debería ser horizontal, idealmente cerca de 16:9. Los placeholders desaparecen automáticamente al detectar cada archivo.

## URLs y dominio

Las URLs de proyectos y redes se cambian en `data/projects.ts` y `lib/site.ts`.

No hay un dominio falso hardcodeado. Cuando tengas la URL final, creá `.env.local` a partir de `.env.example`:

```bash
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

Esta variable activa canonical, sitemap y URLs absolutas de metadata. No agregues una barra al final. En Vercel, la aplicación también reconoce automáticamente las variables de URL que aporta la plataforma; `NEXT_PUBLIC_SITE_URL` sigue siendo la opción explícita recomendada para un dominio propio. En desarrollo se usa `localhost` únicamente como base local de metadata.

## Open Graph y SEO

La imagen social se genera mediante `app/opengraph-image.tsx`, por lo que no necesita un asset externo. La metadata principal está centralizada en `app/layout.tsx`; las páginas de proyecto generan su propia metadata.

## Deploy en Vercel

1. Subí el repositorio a GitHub, GitLab o Bitbucket.
2. Importalo desde el dashboard de Vercel.
3. Vercel detectará Next.js y configurará el build automáticamente.
4. Agregá `NEXT_PUBLIC_SITE_URL` en **Project Settings → Environment Variables** cuando tengas el dominio definitivo.
5. Hacé un nuevo deploy después de configurar la variable.

No se requiere backend, base de datos ni configuración adicional para este portfolio.
