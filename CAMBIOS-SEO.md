# Las Tejas — Correcciones SEO local (auditoría Matías)

Repo dejado listo para indexación. Construir con `npm install && npm run build`
(genera HTML estático por ruta en /dist). Subir a GitHub y desplegar en Vercel.

## CRÍTICOS resueltos
1. **Pre-render (era SPA pura).** Migrado a `vite-react-ssg`. Ahora cada ruta
   genera su HTML estático con el contenido, el H1 y los meta YA en el HTML
   (antes el crawler solo veía un <div id="root"> vacío).
   - Nuevos: `src/main.tsx`, `src/routes.tsx`, `src/App.tsx` reescritos.
2. **Canonical apuntaba a otro dominio** (lastejas-alcorcon.com). Corregido a
   `https://www.restaurantelastejas.es` y ahora se genera bien POR PÁGINA vía
   `src/components/site/SEO.tsx` (componente <Head>).
3. **No había sitemap.xml.** Creado `public/sitemap.xml` con las 10 URLs y
   referenciado en `public/robots.txt`.

## IMPORTANTES resueltos
4. **Schema incompleto.** `index.html` ahora lleva un `Restaurant` completo:
   address (street/locality/region/CP/país), telephone, email, url, image, geo
   (40.34330, -3.82235), servesCuisine, priceRange, acceptsReservations, hasMenu.
5. **og:image temporal de Lovable.** Sustituida por `public/og-image.jpg`
   (alojada en el propio dominio).
6. **Doble H1 en la home.** El de móvil pasó a <p>; queda un único H1 semántico.
7. **Title/description estáticos** retirados de `index.html` para que NO pisen a
   los de cada página.

## CONFIG DE DESPLIEGUE (importante)
- `vercel.json`: cleanUrls activado. NO añadir rewrite catch-all a /index.html
  (eso serviría la home en todas las rutas y anularía el pre-render).
- En Vercel: Build Command = `npm run build`, Output = `dist`.

## PENDIENTE (requiere dato real, no inventado)
- `openingHoursSpecification` en el schema: faltan los horarios reales (la web dice
  "consulta horario"). En cuanto los tengas, se añaden al schema y a la web.
- Menu/MenuSection/MenuItem schema en /carta: requiere platos + precios.
- `sameAs` (Facebook/Instagram): añadir las URLs reales de las redes.
- Coordenadas geo: cotejar con el pin exacto de la ficha de Google.

---

## MOVIMIENTO / ANIMACIÓN (Jean Paul)
- **Slider de platos** en la home, justo bajo el hero. Autoplay (3,2 s), loop,
  pausa al pasar el ratón, arrastrable, con bullets de navegación.
  8 platos: cocido, cachopo, fabada, pulpo, entrecot, cordero, oreja, pudin.
  - Nuevo: `src/components/site/DishCarousel.tsx` (embla + autoplay).
  - Editar platos/fotos: array `DISHES` dentro de ese archivo.
- **Zoom suave en hover** sobre las fotos del slider. Utilidad reutilizable
  `.img-zoom` en `index.css`: pon la clase en cualquier contenedor con la imagen
  dentro y la hereda automáticamente.
- **Fade-up al hacer scroll**: componente `src/components/site/Reveal.tsx`.
  Envuelve cualquier bloque en `<Reveal>...</Reveal>` (admite `delay` en ms para
  escalonar). Ahora mismo envuelve el slider; replicable en más secciones.
- Todo respeta `prefers-reduced-motion` (accesibilidad).
