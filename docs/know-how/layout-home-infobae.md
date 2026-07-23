# Know-how de layout: la home de Infobae

Análisis de una captura de pantalla completa de la **home** de Infobae
(23/07/2026), enfocado no en el contenido editorial sino en la
**estructura visual y de UI**: qué bloques hay, en qué orden aparecen, y
dónde entra la publicidad. Complementa
[layout-detalle-nota-infobae.md](layout-detalle-nota-infobae.md) (mismo
enfoque, aplicado al detalle de nota) y
[seo-redaccion-infobae.md](seo-redaccion-infobae.md) (capa SEO/editorial).

**Limitación del análisis**: la captura es una imagen larga de escritorio
(scroll completo, 1360×8192px). No cubre el comportamiento responsivo real
(mobile), ni interacciones (hover, menús desplegables, autocompletado del
buscador) — solo lo que se ve en un instante estático.

## 1. Header: 3 franjas apiladas antes de cualquier noticia

El header de Infobae no es una sola barra, son **3 franjas horizontales
distintas**, cada una con una función propia:

1. **Barra utilitaria** (la más fina, arriba de todo): fecha del día +
   selector de país/edición (Argentina, Estados Unidos, Colombia, España,
   México, Perú) + ícono de buscador + botones de sesión ("Iniciar sesión" /
   suscripción). Es la única franja con links de "housekeeping" (no
   editorial).
2. **Logo**: "infobae" grande, centrado, solo. Ninguna otra cosa comparte
   esta franja — el logo tiene su propio espacio dedicado, no comparte fila
   con nav ni buscador (a diferencia de patrones más compactos de otros
   sitios).
3. **Nav de secciones**: fila horizontal de links a las secciones
   principales, debajo del logo.

**Por qué separar en 3 franjas y no una sola barra combinada**: prioriza
legibilidad del logo (aire propio) sobre densidad — cuesta más alto de
header a cambio de una marca más prominente. La barra utilitaria queda
"fuera" del área de marca, como metadata de la sesión del usuario.

## 2. Ticker de cotizaciones: dato financiero como bloque fijo, antes de la primera noticia

Justo debajo del nav de secciones, **antes de cualquier título de nota**,
hay una franja angosta con cotizaciones en vivo (dólar oficial/blue/MEP/CCL,
cripto) en formato de fila horizontal compacta, con fondo distintivo
(contraste con el resto de la página).

**Relevancia directa para este proyecto**: es exactamente el tipo de
componente que ya se construye acá (cotizaciones ARS/USD, ver
`CLAUDE.md` — calculadoraya.click). Confirma que un ticker de cotizaciones
fijo bajo el header, antes del contenido editorial, es un patrón validado en
medios financieros/generalistas grandes, no una idea exótica.

## 3. Primer banner publicitario: inmediatamente bajo el header, antes del ticker

Hay un banner de ancho completo (marca "ISADORA" en la captura) ubicado
**entre el nav de secciones y el ticker de cotizaciones**. Es el primer slot
publicitario de la página, ubicado antes de cualquier contenido editorial —
la posición de mayor visibilidad garantizada (above the fold en la mayoría
de resoluciones de escritorio).

## 4. Bloque de apertura: 1 nota principal + 2 secundarias en la misma fila

La primera pieza de contenido editorial es una fila con:

- **Nota principal** (columna izquierda, más ancha): título grande, bajada,
  imagen, autor — la jerarquía tipográfica más alta de toda la home.
- **2 notas secundarias** (columna derecha, más angosta, apiladas
  verticalmente): imagen más chica + título + autor, **sin bajada** — el
  mismo patrón de "recortar la bajada para ganar densidad" que ya se vio en
  la grilla de columnas del detalle de nota.

Es el mismo principio de jerarquía por tamaño de card que ya documentamos
(la nota destacada de cada columna en el detalle), aplicado acá a nivel de
toda la portada: 1 elemento grande = mayor peso editorial, N elementos
chicos alrededor = refuerzo sin competir por atención.

## 5. Segundo banner + bloque mixto contenido patrocinado / nota editorial

Después de la apertura hay otro banner de ancho completo, y luego una fila
con dos elementos de **jerarquía visual idéntica pero naturaleza distinta**:

- Un bloque de fondo oscuro con foto grande y el título "Los
  'fake-fluencers' copan las redes" — por el tratamiento visual (fondo
  distintivo, letras grandes en mayúscula) parece **contenido patrocinado /
  branded content**, no una nota editorial más.
- A su lado, en la misma fila y con el mismo tamaño de card, una nota
  editorial normal (Embraer/avión militar).

**Punto de atención de UX/negocio**: branded content mezclado en la misma
fila y con el mismo tratamiento de card que contenido editorial, sin un
badge visible tipo "Publicidad" o "Contenido patrocinado" distinguible a
simple vista en la captura. Vale la pena, si este proyecto suma contenido
patrocinado en el futuro, decidir explícitamente si se etiqueta o no —
Infobae en este caso no lo hace de forma obvia.

## 6. Widgets de servicio embebidos en medio del feed editorial

Aparecen recuadros chicos, con su propio marco visual (caja delimitada,
distinta a una card de noticia), con herramientas/servicios de terceros:
un buscador de "Rutinas de ejercicios" (con input de texto) más adelante en
la página, y un banner cuadrado "TODOMODA". No son noticias ni banners
publicitarios anchos — son un tercer tipo de bloque, más chico y con forma
de widget/tool, intercalado entre bloques de noticias.

**Función**: variar el tipo de interacción de la página (no todo es
"leer/hacer clic en una noticia") y, en el caso de "TODOMODA", es otro slot
publicitario más, pero de formato cuadrado/widget en vez de banner
horizontal — sugiere que hay al menos 2 formatos de ad estandarizados
(banner ancho completo + cuadrado tipo widget) reutilizados varias veces a
lo largo del scroll.

## 7. Grilla densa de notas en 3 columnas, repetida como patrón base del feed

El grueso de la home es una grilla de **3 columnas** de notas, repetida
varias veces con distintos títulos de sección (`H2`) intercalados
("El dólar subió por segundo día...", etc.). Dentro de cada bloque de 3
columnas:

- Algunas filas muestran **solo texto** (título + autor, sin imagen) — el
  mismo patrón "barato en espacio" que ya se vio en las listas de la grilla
  de columnas del detalle de nota.
- Otras filas alternan con **imagen + título + autor**, dando variedad
  visual cada cierta cantidad de ítems en vez de mantener todo el bloque
  homogéneo.

**Función**: evita que un bloque largo de solo texto se sienta monótono,
sin llegar a la carga de imagen de mostrar foto en cada nota (impacto en
performance/peso de página).

## 8. Títulos de sección (`H2`) como separadores editoriales, no solo estéticos

Cada bloque de 3 columnas está precedido por un título de sección en texto
grande (ej. "El dólar subió por segundo día y los financieros tocaron
máximos en nueve meses"), que actúa como **nota ancla del bloque**: agrupa
temáticamente las notas que siguen debajo, más parecido a un mini-header de
sección que a un H2 genérico. Es un patrón editorial (curaduría humana
agrupando por tema del día), no solo una convención tipográfica.

## 9. Carrusel de "Videos destacados": formato distinto al resto del feed

Un bloque identificado con un título en mayúsculas ("VIDEOS DESTACADOS")
contiene un **carrusel horizontal** de thumbnails cuadrados con ícono de
play superpuesto — el único lugar de toda la home donde se ve un indicador
explícito de tipo de contenido (play = video), a diferencia del detalle de
nota donde notamos la ausencia de este tipo de badge. Layout de scroll
horizontal, distinto de la grilla vertical de 3 columnas del resto de la
página.

## 10. Patrón de repetición de slots publicitarios

A lo largo del scroll aparecen banners de ancho completo (ISADORA, Chevrolet
Tracker) y widgets cuadrados (Rutinas de ejercicios, TODOMODA) intercalados
entre bloques editoriales, con una cadencia aproximada de **cada 2-3
bloques de contenido**. No están todos pegados al principio ni al final:
se reparten a lo largo de todo el scroll, lo que sugiere un patrón de
"1 slot de ad cada N bloques de noticias" más que posiciones fijas
hardcodeadas por scroll absoluto.

## 11. Resumen operativo: qué replicar en `web/`

Si `web/src/app/page.tsx` (home) evoluciona para parecerse más a este
patrón, el orden observado de arriba a abajo es:

1. **Header en franjas separadas**: barra utilitaria (fecha, selector,
   sesión) → logo solo → nav de secciones. Ya existe `Header.tsx`/
   `Footer.tsx` componentizados en el proyecto — evaluar si conviene
   separar en sub-bloques en vez de una sola barra.
2. **Ticker de cotizaciones** fijo bajo el header, antes del feed editorial
   — encaja directo con el uso ya dado a la cotización ARS/USD del
   `CLAUDE.md` del proyecto.
3. **Slot de banner** ancho completo antes del primer contenido editorial.
4. **Apertura con jerarquía por tamaño**: 1 nota destacada grande + N
   secundarias chicas sin bajada — mismo principio ya aplicado en
   `ArticuloCard` (prop `destacado`) y en `SeccionColumna`, reutilizable acá
   a nivel de portada completa.
5. **Grilla de 3 columnas** como cuerpo principal del feed, alternando
   filas con y sin imagen, agrupada bajo títulos de sección (`H2`)
   editoriales.
6. **Slots publicitarios repetidos** (banner ancho + widget cuadrado)
   intercalados cada 2-3 bloques de contenido, no solo al principio/final.
7. **Carrusel horizontal** como formato alternativo para contenido
   multimedia (videos), distinto de la grilla vertical del resto.

No se observó ningún badge de "Publicidad"/"Patrocinado" en el bloque mixto
de branded content de la sección 5 — si este proyecto suma contenido
patrocinado, vale la pena decidir explícitamente (a diferencia de Infobae)
si se etiqueta, por transparencia con el lector.
