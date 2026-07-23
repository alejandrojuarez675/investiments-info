---
name: get-news-report
description: Busca 10 noticias variadas (2 de economía, 2 de política, 2 de deportes, 2 de policiales, 2 de espectáculos) de las últimas 24hs, cada una con su imagen, y las guarda como artículos tipo "news" en la base de datos (web/db).
---

# Get news report

Busca **10 noticias relevantes** publicadas en las últimas 24hs, repartidas
en 5 verticales temáticas (**2 noticias por vertical**: Economía, Política,
Deportes, Policiales/Sociedad, Espectáculos/Teleshow), y las inserta como
artículos individuales (tipo `news`) en la base de datos que usa `web/`
(tabla `articulos`).

## Antes de buscar

1. Confirmar la fecha y hora actual, para acotar la búsqueda a "últimas 24hs".
2. Si hace falta la cotización del dólar para dar contexto a alguna noticia,
   usar https://www.calculadoraya.click/calculadoras/dolar (ver CLAUDE.md).
3. Revisar `web/db/schema.sql` para confirmar el esquema vigente de
   `articulos` (columnas y constraint de `tipo`) antes de armar los INSERT,
   por si cambió desde la última corrida de esta skill.
4. Leer `docs/know-how/seo-redaccion-infobae.md` — define el patrón SEO
   (slugs, autoría, tono) que esta skill debe reproducir. Los pasos de
   redacción y de armado de `slug`/`autor` de más abajo se basan en ese
   documento.

## Búsqueda de noticias

1. Buscar noticias publicadas en las **últimas 24hs**, repartidas en 5
   verticales con **2 noticias cada una** (10 en total):
   - **Economía**: mercados, macro, tasas, dólar, cripto, empresas.
   - **Política**: gobierno, Congreso, funcionarios, proyectos de ley.
   - **Deportes**: resultados, selecciones, clubes, declaraciones.
   - **Policiales/Sociedad**: hechos de seguridad, investigaciones en curso.
   - **Espectáculos/Teleshow**: figuras públicas, entrevistas, anécdotas.

   Priorizar fuentes reconocidas por vertical (Ámbito, Infobae, Cronista,
   Bloomberg, Reuters, Página 12, Rio Times para economía/política; Olé,
   TyC Sports, ESPN para deportes; Infobae, Clarín, La Nación para
   policiales/espectáculos) y variedad de temas dentro de cada vertical —
   no repetir el mismo hecho en varias noticias.
2. Para cada una de las 10 noticias, reunir primero los **hechos crudos**
   (cifras, declaraciones, fechas, nombres) y la o las URLs de fuente — el
   contenido final en prosa se redacta después, en el paso de "Redacción"
   más abajo. Además de los hechos, reunir:
   - **Título** (propio, no necesariamente el titular original — puede
     reescribirse para claridad).
   - **Resumen** (1-2 frases).
   - **URL de una imagen representativa**, que NO sea la imagen destacada
     (og:image) del mismo medio del cual se toman los hechos/texto de la
     nota — evitar reutilizar el material gráfico propio de la fuente de
     la que "copiamos" el contenido. Preferir una foto genérica y libre de
     derechos (ej. Unsplash: buscar por tema como "dollar bills", "stock
     market chart", "stadium crowd", "red carpet", "police lights",
     "congress building", etc., y tomar la URL directa
     `images.unsplash.com/photo-...`, no el link a la página HTML de
     Unsplash). Si se usa una foto de un medio periodístico, que sea uno
     distinto al de la fuente principal del texto. Verificar que la URL
     devuelva un archivo de imagen accesible (HTTP 200), no una página HTML.
   - **Categoría/vertical** (`economia`, `politica`, `deportes`,
     `policiales`, `espectaculos`).
   - **Fecha de publicación** real de la noticia (no la fecha de hoy si son
     distintas).
3. No inventar datos ni URLs de imagen: si no se encuentra una imagen
   confiable para una noticia, buscar otra noticia candidata dentro de la
   misma vertical (el objetivo son 10 noticias con imagen real, 2 por
   vertical, no 10 noticias a toda costa).

## Redacción del contenido

El HTML de `contenido` no debe ser una lista de bullets sueltos: tiene que
leerse como una nota periodística real.

1. Para cada noticia, invocar al **redactor de su vertical**
   (`.claude/agents/`) — mapeo directo 1:1, sin ambigüedad:
   - Economía → `redactor-economia`
   - Política → `redactor-politica`
   - Deportes → `redactor-deportes`
   - Policiales/Sociedad → `redactor-policiales`
   - Espectáculos/Teleshow → `redactor-espectaculos`

   Cada redactor ya conoce su tono, estructura y criterio de
   `keywords`/autoría propios (documentados en
   `docs/know-how/seo-redaccion-infobae.md`), así que no hace falta
   repetírselo en el prompt — solo pasarle los hechos crudos de su noticia.
   Se puede invocar a los 5 redactores en paralelo (Task tool, una llamada
   por noticia) ya que son independientes entre sí.
2. Al invocar al redactor (Task tool), pasarle para cada noticia únicamente
   los **hechos crudos** reunidos en el paso anterior (cifras, declaraciones,
   fechas) y las URLs de fuente — nunca pedirle que busque o "complete" datos
   por su cuenta ni que invente contexto no verificado.
3. Pedirle explícitamente el formato: 4-6 párrafos en `<p>` (lede +
   desarrollo + por qué importa), con `<h2>` como separadores de sección
   opcionales, una `<ul>` corta solo si hay datos tabulares (cotizaciones,
   cifras comparables), y siempre una sección final `<h2>Fuentes</h2>` con
   los mismos links de origen (sin inventar URLs nuevas).
4. Revisar el resultado del subagente contra los hechos crudos antes de
   usarlo: si agregó alguna cifra, cita o dato que no estaba en el material
   provisto, corregirlo o quitarlo.

## Guardado en la base de datos

1. Generar un `slug` único por noticia a partir del **título completo**, en
   kebab-case, **sin acortarlo** a 4-6 palabras clave (ver sección 2 de
   `docs/know-how/seo-redaccion-infobae.md`: Infobae usa el titular entero
   como slug, incluyendo stopwords, y le funciona para long-tail SEO). Solo
   remover caracteres no válidos para URL (tildes, signos de puntuación) y
   verificar que no colisione con un slug existente (agregar sufijo si hace
   falta, no truncar el título para "resolver" la colisión).
   - La URL final que ve el usuario **no es solo el slug**: `web/` la arma
     como `/{categoria}/{yyyy}/{mm}/{dd}/{slug}/`, combinando la columna
     `categoria` de este INSERT y la fecha `publicado_en` (ver sección 2 del
     know-how). Por eso la `categoria` de cada noticia debe quedar en
     minúsculas y sin espacios: usar la vertical (`economia`, `politica`,
     `deportes`, `policiales`, `espectaculos`), igual de formato que las
     categorías ya usadas en `web/db/seed.sql` (`dolar`, `macro`, etc.).
2. Insertar cada noticia como una fila en `articulos` con:
   - `tipo = 'news'`
   - `contenido` con el HTML redactado en el paso anterior (ya revisado)
   - `imagen_url` con la URL de la imagen genérica encontrada
   - `autor`: según el criterio de autoría de la sección 3/4 del know-how —
     `'Redacción'` para breaking news o explicadores utilitarios (economía,
     deportes de resultado, policiales), y un nombre de redactor fijo para
     crónicas de seguimiento con voz propia (política, espectáculos). No
     inventar un nombre nuevo por noticia: usar el mismo nombre para todas
     las notas de política de esta corrida, y el mismo (distinto) nombre
     para todas las de espectáculos, manteniendo consistencia.
   - `publicado_en` con la fecha real de la noticia
3. Ejecutar el/los INSERT contra la base de datos configurada en
   `DATABASE_URL` (ver `web/.env.local` o el entorno). Usar `psql` si está
   disponible, o un script Node/TS puntual con el paquete `pg` ya presente
   en `web/`. Usar `ON CONFLICT (slug) DO NOTHING` para que la skill sea
   re-ejecutable sin duplicar filas.
4. No editar ni borrar artículos existentes — solo insertar los nuevos.

## Al finalizar

Resumir al usuario: cuántas noticias se insertaron, sus títulos y, si
alguna quedó afuera por no encontrar imagen confiable, mencionarlo.
