# Capa de movimiento — Las Tejas

Capa añadida sobre la web existente. **No rediseña, no reescribe copy, no cambia
la estructura.** Añade el movimiento como una capa aparte que se puede quitar.

## Cómo está montada

| Archivo | Qué hace |
| --- | --- |
| `index.html` | Script del `<head>` que pone la clase `js-motion` antes del primer pintado y la retira sola si la capa no arranca en 2,5 s. |
| `src/index.css` | El *gate* (estados iniciales ocultos, solo con JS) y el tacto de la interfaz: curvas, duraciones, `.press`, `.lift`, `.zoom`, `.nudge`. |
| `src/lib/motion.ts` | Tokens: curvas, duraciones, escalonados, punto de disparo. |
| `src/lib/motion-runtime.ts` | El motor. Lee los `data-*` del DOM y monta GSAP + ScrollTrigger. |
| `src/components/site/MotionProvider.tsx` | Carga GSAP en cliente (import dinámico) y monta/desmonta el motor en cada ruta. |
| `src/components/site/Layout.tsx` | Le pasa el `<main>` de la página y la ruta actual. |

## Cómo se declara movimiento en una página

No se escribe GSAP en las páginas. Se marca la intención con atributos:

| Atributo | Efecto |
| --- | --- |
| `data-reveal="up\|left\|right\|scale\|mask"` | Se revela al entrar en pantalla. `mask` descubre la foto de abajo arriba. |
| `data-reveal-delay="120"` | Retardo en ms. |
| `data-reveal-group` | Sus hijos directos con `data-reveal` entran en cascada (comprimida a medio segundo como máximo). |
| `data-parallax="0.15"` | Recorrido parallax atado al scroll. El valor es la fracción del alto del elemento; la capa necesita sangrado (`-inset-[8%]`). |
| `data-split` | El titular se parte en líneas reales y cada una sube desde detrás de su máscara. |
| `data-dial` | Una cifra (el teléfono) entra dígito a dígito, como al marcar. Solo en Contacto. |
| `data-hero` / `data-hero-item` | Entrada orquestada al cargar, respetando el orden del DOM. |
| `data-hero-fade` | El bloque se retira al salir el hero de plano. |
| `data-pin` + `data-pin-layer="1"` | Sección clavada con scrub. **Solo a partir de 1024 px.** |

El componente `<Reveal>` y el hook `useParallax` siguen existiendo con la misma
API: ahora solo dejan la marca y el motor hace el trabajo.

## Reglas que no se saltan

- **Sin JS la web se ve entera.** Los estados ocultos viven detrás de
  `.js-motion`; el HTML prerenderizado sale visible y con el texto completo.
- **`prefers-reduced-motion`**: ni parallax, ni pin, ni Ken Burns, ni recorridos.
  Solo un fundido de 200 ms.
- **Solo se animan `transform` y `opacity`** (y `clip-path` en los revelados de
  foto). Nada de animar alto, ancho ni posición.
- **El botón de reservar no se mueve con el scroll.** Si la web vende, manda la
  conversión.
- Al terminar de entrar, cada elemento suelta su marca y sus estilos en línea:
  no quedan capas de composición vivas ni hovers pisados.

## Antes de desplegar

`gsap` es dependencia nueva (`^3.13.0`). El repo trae `bun.lockb` y
`package-lock.json`: se instaló con **npm**, así que si el despliegue usa bun,
conviene ejecutar `bun add gsap` para dejar su lockfile al día.

Coste: ~46 KB gzip de GSAP + ScrollTrigger, en chunks aparte y cargados solo en
cliente, después del primer pintado.
