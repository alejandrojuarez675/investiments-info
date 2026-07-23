---
name: get-news-report
description: Busca 10 noticias económicas de las últimas 24hs, cada una con su imagen, y las guarda como artículos tipo "news" en la base de datos (web/db).
---

# Get news report

Busca **10 noticias económicas/financieras relevantes** publicadas en las
últimas 24hs, y las inserta como artículos individuales (tipo `news`) en la
base de datos que usa `web/` (tabla `articulos`).

## Antes de buscar

1. Confirmar la fecha y hora actual, para acotar la búsqueda a "últimas 24hs".
2. Si hace falta la cotización del dólar para dar contexto a alguna noticia,
   usar https://www.calculadoraya.click/calculadoras/dolar (ver CLAUDE.md).
3. Revisar `web/db/schema.sql` para confirmar el esquema vigente de
   `articulos` (columnas y constraint de `tipo`) antes de armar los INSERT,
   por si cambió desde la última corrida de esta skill.

## Búsqueda de noticias

1. Buscar noticias económicas/financieras (mercados, macro, tasas, dólar,
   empresas, política económica) publicadas en las **últimas 24hs**.
   Priorizar fuentes reconocidas (Ámbito, Infobae, Cronista, Bloomberg,
   Reuters, Página 12, Rio Times, etc.) y variedad de temas — no repetir el
   mismo hecho en varias noticias.
2. Para cada una de las 10 noticias, reunir:
   - **Título** (propio, no necesariamente el titular original — puede
     reescribirse para claridad).
   - **Resumen** (1-2 frases).
   - **Contenido** en HTML (igual formato que `web/db/seed.sql`: `<h2>`,
     `<p>`, `<ul>`, etc., con una sección de fuentes al final con el link
     original).
   - **URL de una imagen representativa**. Preferir la imagen destacada de
     la nota original (og:image) o una imagen libre de derechos relacionada
     al tema (ej. Unsplash). Debe ser una URL directa a un archivo de
     imagen accesible públicamente, no un link a una página HTML.
   - **Categoría** (ej. `dolar`, `mercados`, `empresas`, `macro`, `cripto`).
   - **Fecha de publicación** real de la noticia (no la fecha de hoy si son
     distintas).
3. No inventar datos ni URLs de imagen: si no se encuentra una imagen
   confiable para una noticia, buscar otra noticia candidata en su lugar
   (el objetivo son 10 noticias con imagen real, no 10 noticias a toda
   costa).

## Guardado en la base de datos

1. Generar un `slug` único por noticia (kebab-case, descriptivo, sin
   fecha redundante si ya es obvio por el contexto — seguir el estilo de
   los slugs existentes en `web/db/seed.sql`).
2. Insertar cada noticia como una fila en `articulos` con:
   - `tipo = 'news'`
   - `imagen_url` con la URL de la imagen encontrada
   - `autor = 'Redacción'` (salvo indicación contraria)
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
