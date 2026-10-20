# Implementación de la HOME — 20 de octubre de 2026

Implementación completada en `C:\Users\tadeo\Desktop\proyectos\portfolio-next-fidelidad-20261019`, rama `feat/home-prototipo-visual`, basada en el commit `323e20e` del portfolio original. El repositorio `C:\Users\tadeo\Desktop\portfolio` se conserva sin cambios. No se hicieron push ni deploy.

## Fuente visual y relevamiento

- ZIP y carpeta extraída: los 26 archivos coinciden por SHA-256, incluyendo HTML, CSS, JavaScript, README, assets y capturas de referencia.
- Next.js 16.3.4, React / React DOM 19.2.8, TypeScript 6.0.3, Tailwind 4.3.3 y Motion 13.2.0 existentes. No se añadieron dependencias ni se modificó el lockfile.
- App Router; rutas de casos conservadas: `/projects/camping-fossa-lupara` y `/projects/tower-hub`. Se conservan los datos, galería, metadata, sitemap, robots y Open Graph originales.
- Referencia: Segoe UI / Arial, Consolas / Courier New y Georgia puntual; negro #111310, lima #c2f970 y fondo claro #e8e9df. Se mantienen tamaños, espaciados, recortes, textos y breakpoints 1600, 1100, 800, 600 y 350 px.

## Implementación

- Secciones de la HOME como Server Components. Header, controles del diálogo y mejoras de scroll/animación son islas cliente; el provider recibe las secciones ya renderizadas por el servidor.
- HTML y CSS del prototipo trasladados sin rediseñar. Los estilos de la HOME y de los casos existentes quedan aislados mediante CSS `@scope`; Tailwind sigue procesando los estilos de los casos, incluidos sus anchos de contenedor.
- `next/image` con dimensiones originales y `unoptimized`, para servir los bytes originales sin recomprimir ni alterar el recorte. Retrato con carga eager y fetchPriority alta; imágenes de proyectos con lazy loading. CSS reserva sus áreas.
- IntersectionObserver: entrada de 550 ms, desplazamiento de 14 px, opacidad inicial 0,72 y stagger de 80 ms, preservando el movimiento base de la maqueta. Se aplica a contribuciones, proyectos, títulos, capacidades y relato. El contenido es visible sin JavaScript; se respeta movimiento reducido y sus cambios en tiempo real.
- Scroll nativo suave, padding de 100 px en escritorio y 24 px en móvil; desactivado con movimiento reducido. Las anclas reciben foco sin reemplazar el historial del navegador.
- Menú móvil no modal, como en el prototipo: apertura, Escape, ciclo de teclado, foco inicial, cierre por enlace/clic exterior/cambio de breakpoint. No bloquea el scroll porque no es una superposición modal.
- Diálogo nativo con contenido tipado por proyecto, ciclo de foco explícito, cierre por botón/Escape/fondo, devolución del foco y bloqueo del scroll. Transición de apertura/cierre de 200 ms, desactivada con movimiento reducido.
- El contenedor de la HOME usa `display: contents` para conservar el orden de pintado del fondo del prototipo. El diálogo en reposo no mantiene una transformación innecesaria.
- El enlace «Soluciones» de la navegación de los casos existentes apunta ahora a `/#capacidades`, evitando un destino que ya no existe en la HOME.

## Comparación visual realizada

Chrome instalado en Windows, modo headless, deviceScaleFactor 1 y movimiento reducido para comparar estados estables. Se abrieron ambos servidores HTTP locales; se esperó la carga y rasterización de las imágenes. Los PNG completos se compararon canal por canal, sin tolerancia.

| Ventana | Píxeles comparados | Píxeles distintos |
| --- | ---: | ---: |
| 1440 × 1000 | 10558080 | 0 |
| 1280 × 900 | 9409280 | 0 |
| 768 × 1024 | 4892928 | 0 |
| 390 × 844 | 3161730 | 0 |
| 320 × 800 | 2601600 | 0 |

Los cinco pares completos coinciden exactamente en este entorno. También se capturaron 50 comparaciones por sección: hero/fotografía, Further, Camping, Jésica Frías, TowerHub, Anotiva/Galia, capacidades, sobre mí, contacto y footer. No hay scroll horizontal en esos cinco anchos.

Se revisaron nueve combinaciones de proyecto/diálogo (1440, 390 y 320 px) y el menú móvil. Los tamaños y posiciones del diálogo, imagen y altura interior coinciden. Camping y TowerHub existentes se compararon contra la compilación anterior a 1440 y 390 px: dimensiones y posiciones de los encabezados coinciden en los cuatro casos.

La comparación estricta de los modales conserva pequeñas diferencias de color en el desenfoque junto al borde superior. La causa exacta de rasterización/composición no quedó aislada; no se declara igualdad píxel a píxel de los modales. Los valores siguientes corresponden a capturas finales de producción, sin estilos inyectados:

| Captura | Píxeles distintos | Diferencia máxima por canal (0–255) |
| --- | ---: | ---: |
| 1440-modal-camping-comparacion.png | 4991 | 7 |
| 1440-modal-pasteleria-comparacion.png | 4716 | 1 |
| 1440-modal-towerhub-comparacion.png | 6897 | 7 |
| 320-menu-comparacion.png | 0 | 0 |
| 320-modal-camping-comparacion.png | 0 | 0 |
| 320-modal-pasteleria-comparacion.png | 0 | 0 |
| 320-modal-towerhub-comparacion.png | 0 | 0 |
| 390-menu-comparacion.png | 0 | 0 |
| 390-modal-camping-comparacion.png | 1624 | 2 |
| 390-modal-pasteleria-comparacion.png | 0 | 0 |
| 390-modal-towerhub-comparacion.png | 0 | 0 |

La única diferencia de estilo computado en las mediciones de la HOME es `color: transparent` que Next Image aplica al elemento de imagen; no afecta los píxeles visibles ni el encuadre.

Abrir `../portfolio-home-qa/comparaciones.html` para recorrer la galería. Las imágenes originales y de Next.js se conservan por separado, además de los pares.

## Pruebas técnicas y funcionales

| Comprobación | Resultado |
| --- | --- |
| `npm run typecheck` | Pasa |
| `npm run lint` | Pasa, sin advertencias |
| `npm run build -- --webpack` | Pasa; HOME prerenderizada y ambos casos generados |
| `npm run build` con Turbopack | Falló en este entorno al iniciar el proceso de PostCSS; se validó producción con Webpack |
| Contenido visible sin JavaScript | Pasa |
| Menú móvil y teclado | Pasa |
| Seis disparadores de proyectos | Pasa; título, imagen y datos correspondientes |
| Diálogo, Escape, botón, fondo y foco | Pasa |
| Anclas, scroll suave y reduced motion | Pasa |
| Entrada de 550 ms y cierre animado | Pasa |
| Descarga real del CV | Pasa; PDF descargado con SHA-256 idéntico |
| Rutas de casos, regreso a HOME y 404 | Pasa |
| Errores JavaScript en navegador | 0 |
| Advertencias/errores inesperados de consola | 0 |

La respuesta 404 deliberada al probar una ruta inexistente se considera esperada. No se prueba el envío de email ni mensajes de WhatsApp.

## Enlaces y limitaciones pendientes

- Camping, Jésica Frías, TowerHub, Galia y GitHub: HTTP 200. Camping redirige a su versión italiana.
- WhatsApp: enlace y redirección HTTP 200 a la página de contacto; no se envió ningún mensaje ni se verificó la disponibilidad de la cuenta receptora.
- Email: coincide con el del prototipo y la configuración existente. No se envió ningún correo.
- LinkedIn devuelve HTTP 999 a la comprobación automatizada. Se conserva la URL aprobada y coincidente con el repositorio; su disponibilidad necesita comprobación manual.
- Las cinco capturas completas de la HOME y sus 50 comparaciones por sección coinciden píxel a píxel. Queda la diferencia residual del desenfoque de los modales documentada arriba. No se declara equivalencia universal en navegadores/sistemas operativos distintos ni se realizó una auditoría exhaustiva WCAG o prueba en dispositivos físicos.
- Los textos «PROTOTIPO VISUAL · 2026», «VISTA PREVIA DEL CASO · PROTOTIPO» y el aviso de síntesis se conservan deliberadamente porque la instrucción exige no reescribir el contenido aprobado.
- El camino de compilación verificado es Webpack. No se cambiaron scripts ni versiones para ocultar el fallo de Turbopack.

## Ejecutar localmente

```powershell
Set-Location 'C:\Users\tadeo\Desktop\proyectos\portfolio-next-fidelidad-20261019'
npm run build -- --webpack
npm run start -- --port 3100
```

Para desarrollo, ante el mismo fallo de Turbopack: `npm run dev -- --webpack`.

## Archivos modificados

- `app/globals.css`
- `app/layout.tsx`
- `app/not-found.tsx`
- `app/page.tsx`
- `lib/site.ts`

## Archivos incorporados

- `IMPLEMENTACION-HOME.md`
- `app/projects/layout.tsx`
- `components/home/about-section.tsx`
- `components/home/capabilities-section.tsx`
- `components/home/case-preview-dialog.tsx`
- `components/home/contact-section.tsx`
- `components/home/context-band.tsx`
- `components/home/experience-section.tsx`
- `components/home/footer.tsx`
- `components/home/header.tsx`
- `components/home/hero.tsx`
- `components/home/home-enhancements.tsx`
- `components/home/home.css`
- `components/home/projects-section.tsx`
- `components/legacy-shell.tsx`
- `data/home-cases.ts`
- `public/home-assets/Tadeo-Abbruzzese-CV.pdf`
- `public/home-assets/camping.jpg`
- `public/home-assets/favicon.svg`
- `public/home-assets/galia.jpg`
- `public/home-assets/pasteleria.jpg`
- `public/home-assets/tadeo-retrato.png`
- `public/home-assets/towerhub.jpg`

Los 7 assets incorporados son copias binarias idénticas a los aprobados. Hash del retrato: `634E0C6CC2FB82F3770D99399CC5AF3102EE5BE801404888AA38EBDC6D836F5F`. Hash del CV: `7573FFAAC96B616865700E721526D1AF49FA97D187BD18010C15B0D650DCF164`.

## Evidencias reproducibles

- `resultados.json`: cinco comparaciones completas y pruebas funcionales.
- `comparaciones-secciones.json`: conteo de diferencias de los pares de secciones, menús y diálogos.
- `dialogos.json`, `casos-existentes.json`: geometrías comparadas.
- `enlaces.json`: estados HTTP y redirecciones.
- `zip-verificado.json`, `assets-verificados.json`: integridad binaria.
- `validate.cjs`, `dialog-qa.cjs`, `legacy-qa.cjs`, `serve-prototype.cjs`: scripts de revisión. Usan Playwright y Sharp del runtime local ya instalado; no son nuevas dependencias del portfolio.
