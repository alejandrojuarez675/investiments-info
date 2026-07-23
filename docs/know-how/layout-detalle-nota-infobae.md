# Know-how de layout: qué rodea a una nota en Infobae

Análisis de una captura de pantalla del **final del detalle de una nota** de
Infobae (23/07/2026), enfocado no en el contenido editorial sino en la
**estructura visual y de UI** alrededor del artículo: qué bloques hay, cómo
se organizan, y dónde entrarían anuncios. Complementa
[seo-redaccion-infobae.md](seo-redaccion-infobae.md), que cubre la capa SEO/
técnica y editorial.

**Limitación del análisis**: la captura corresponde solo al tramo final de la
página (relacionadas + footer). No incluye el header, el cuerpo del artículo
ni la zona superior, donde probablemente hay más publicidad (banner
horizontal bajo el header, sidebar lateral junto al cuerpo, interstitial
entre párrafos). Lo que sigue describe únicamente lo visible.

## 1. Bloque "seguí leyendo" (relacionadas en lista simple)

Justo después del cuerpo de la nota (o de otro módulo no visible en el
recorte), aparecen **3 notas relacionadas** en formato lista horizontal:

- Layout: imagen a la derecha (thumbnail ~250×140px aprox.), texto a la
  izquierda.
- Cada ítem tiene: **título** (bold, 2 líneas máx.) + **bajada/copete** (1
  línea gris, texto secundario).
- Sin autor, sin fecha, sin sección visible en este nivel — solo
  título+bajada+imagen.
- Separador fino (línea horizontal) entre cada ítem.
- No hay publicidad intercalada entre estos 3 ítems: es un bloque compacto y
  continuo.

**Función**: retener al lector dentro del sitio (reduce bounce rate) sin
interrumpir con ads — la monetización de este tramo se delega al bloque
siguiente.

**Mezcla de formatos sin diferenciar**: el primer ítem de la lista ("La
Libertad Avanza celebra el Día de la Unidad") usa una imagen de otro formato
(vertical, estilo story/video, con texto overlay "DÍA DE LA UNIDAD") frente a
los otros dos ítems que tienen foto horizontal estándar — sugiere que ese
slot mezcla video/contenido multimedia con notas de texto en la misma lista,
sin badge ni etiqueta que lo distinga como "Video". No hay indicador de tipo
de contenido (VIDEO, EN VIVO, OPINIÓN) en ningún ítem de este bloque ni de la
grilla de la sección 2 — si existe, es solo un ícono de play discreto sobre
la imagen, no un badge textual. Es un patrón a mejorar si este proyecto suma
contenido multimedia: un badge simple evita la confusión de un thumbnail que
"no pega" con el resto de la lista.

## 2. Grilla de 3 columnas por sección (el bloque más denso de la página)

Debajo del bloque anterior arranca una grilla de **3 secciones en paralelo**:
Deportes, Teleshow, Infobae América (la selección de secciones parece fija o
curada editorialmente, no necesariamente relacionada con el tema de la nota
que se está leyendo).

Estructura de cada columna (idéntica en las 3):

1. **Header de columna**: nombre de la sección en mayúsculas + un ícono de
   flecha circular (link a "ver toda la sección"), con un filete de color
   distintivo por sección debajo (verde en Deportes, rojo en Teleshow,
   naranja en Infobae América) — es el único uso de color de marca por
   sección en todo este tramo de la página.
2. **Nota destacada** (1 sola, la primera de la columna): imagen grande
   (ocupa todo el ancho de la columna, ~400×260px) con el **título
   superpuesto** en blanco sobre un degradado oscuro en la parte inferior de
   la imagen (no hay bajada en la destacada, solo título).
3. **3-4 notas en texto plano** debajo de la destacada: solo título en
   negro/oscuro, sin imagen, sin bajada, separadas por un filete horizontal
   fino. Es la forma más "barata" en espacio de listar más notas sin cargar
   más imágenes.

**Función editorial**: cada columna actúa como una mini-portada de sección,
pensada para cross-selling entre verticales (un lector de política ve acá
ganchos hacia deportes/espectáculos/internacional) sin necesidad de que el
usuario navegue al home.

**Relevancia para publicidad**: esta grilla de 3 columnas es exactamente el
ancho típico de un slot de banner de 3 columnas — sugiere que, si hay
publicidad nativa o un cuarto bloque patrocinado, iría como una "4ª columna"
con el mismo layout (header + destacada + lista), camuflada como sección
editorial. No se ve en esta captura, pero es el patrón más probable dado el
grid.

**Alturas de card desiguales entre columnas**: aunque las 3 columnas
comparten la misma estructura, la cantidad de líneas que ocupa cada título en
la lista de texto plano varía (algunos títulos cortan en 2 líneas, otros en
3), y el número de ítems visibles por columna no está perfectamente
alineado entre sí. Esto indica que **no hay un line-clamp estricto ni una
altura de card forzada** — el layout tolera que las 3 columnas terminen a
alturas ligeramente distintas en vez de recortar títulos con ellipsis para
mantenerlas parejas. Es una decisión de simplicidad: prioriza mostrar el
título completo (o casi) sobre la simetría pixel-perfect del grid.

## 3. Cómo se llena el ancho completo en desktop (sin sidebar fijo)

Un punto clave de este tramo de la página: **no hay una columna lateral fija
(sidebar) que acompañe al contenido de arriba a abajo**, como sí es común en
otros medios (ej. un rail derecho pegajoso con "más leídas" + banner
publicitario vertical que sigue el scroll). Infobae resuelve el ancho de
desktop con un layout **apilado en secciones horizontales de ancho
completo**, cada una con su propia subdivisión interna:

1. **Bloque "seguí leyendo"** (sección 1): ancho completo, pero cada ítem
   internamente se divide en 2 columnas (texto + imagen) — es una fila
   horizontal, no una grilla de tarjetas.
2. **Bloque de 3 secciones** (sección 2): acá es donde el ancho de desktop se
   reparte en **3 columnas iguales** (Deportes / Teleshow / Infobae América),
   cada una con margen/gutter entre sí. Esto es lo que en mobile
   probablemente colapsa a 1 columna apilada (las 3 secciones una debajo de
   la otra) — es un grid responsivo, no un sidebar fijo.
3. **Footer** (sección 4): vuelve a ancho completo con fondo oscuro, y
   internamente se subdivide en 5 bloques horizontales (logo+redes + 4
   columnas de links) distribuidos con espaciado uniforme.

**Por qué importa para este proyecto**: si `web/` va a decidir cómo ocupar el
ancho de escritorio en la página de detalle de nota, el patrón de Infobae
sugiere **no** reservar un sidebar vertical continuo (columna derecha fija
con ads que scrollea junto al artículo), sino resolverlo con **bloques
horizontales de ancho completo que internamente usan grid** (2, 3 o N
columnas según el bloque). Esto simplifica el layout responsivo: cada bloque
decide su propio número de columnas sin afectar a los demás, y en mobile cada
uno colapsa independientemente a columna única.

## 4. Footer

Bloque final, fondo oscuro (contraste fuerte con el resto de la página, que
es fondo blanco):

- **Logo** "infobae" arriba a la izquierda + bloque "Seguinos" con 6 íconos
  circulares de redes sociales (Facebook, X, Instagram, YouTube, Telegram,
  LinkedIn) en 2 filas de 3.
- **4 columnas de links de texto**, cada una con un header en bold:
  - **Secciones**: listado largo de países/regiones (América, Colombia,
    España, Estados Unidos, México, Perú, Centroamérica) + "Últimas
    Noticias" + "RSS" al final — mezcla secciones geográficas con utilidad
    (RSS).
  - **Contáctenos**: Redacción, Empleo.
  - **Contacto comercial**: repite la lista de países/regiones + "Media
    Kit" al final — esto es la puerta de entrada para anunciantes
    (self-service o contacto directo por país).
  - **Legales**: Términos y Condiciones, Política de Privacidad.
- **Línea de copyright** centrada al pie: "Todos los Derechos Reservados ©
  2026 Infobae".

**Reutilización de datos, no solo de UI**: la lista de países/regiones se
repite **literalmente igual** entre "Secciones" y "Contacto comercial" —
mismos 7 nombres, mismo orden, solo cambia el destino del link (portada
regional vs. contacto comercial de esa región). Técnicamente esto es una
sola fuente de datos (array de países) renderizada dos veces con dos
templates de URL distintos, no dos listas mantenidas por separado. Vale la
pena replicar esa idea si `web/` termina teniendo listas repetidas en el
footer (ej. categorías del sitio): un único array de categorías puede
alimentar tanto "Secciones" como, el día de mañana, un futuro bloque de
"Anunciá en la sección X".

**Nota de negocio**: la existencia de "Media Kit" como link propio en el
footer (separado de "Contáctenos") indica que Infobae trata la venta de
publicidad como un flujo de producto propio, no un mail genérico — vale la
pena, si este proyecto llega a monetizar con ads, tener un equivalente
("Anunciá con nosotros" / media kit) accesible desde el footer.

## 5. Resumen operativo: qué replicar en `web/`

Si `web/src/app/[categoria]/[anio]/[mes]/[dia]/[slug]/page.tsx` va a sumar un
tramo "después del cuerpo de la nota", el orden observado es:

1. **Relacionadas simples** (3 ítems, imagen+título+bajada, sin ads
   intercalados) — usar notas de la misma categoría o tags compartidos.
2. **Grilla de N columnas por sección** (destacada con imagen+título
   superpuesto + lista de solo-título debajo) — buen lugar candidato para
   insertar, en el futuro, un slot publicitario nativo del mismo ancho que
   una columna, sin romper el grid.
3. **Footer** con: redes sociales, columnas de navegación (secciones,
   contacto, contacto comercial/Media Kit, legales), copyright.

No se observó publicidad explícita (banners, native ads marcados como
"Publicidad"/"Patrocinado") en este tramo — para completar el mapa de
monetización haría falta una captura del header y del cuerpo de la nota.
