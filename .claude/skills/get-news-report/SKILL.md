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
     market chart", "oil rig", "bitcoin", "central bank building", "wheat
     field", etc., y tomar la URL directa `images.unsplash.com/photo-...`,
     no el link a la página HTML de Unsplash). Si se usa una foto de un
     medio periodístico, que sea uno distinto al de la fuente principal
     del texto. Verificar que la URL devuelva un archivo de imagen
     accesible (HTTP 200), no una página HTML.
   - **Categoría** (ej. `dolar`, `mercados`, `empresas`, `macro`, `cripto`).
   - **Fecha de publicación** real de la noticia (no la fecha de hoy si son
     distintas).
3. No inventar datos ni URLs de imagen: si no se encuentra una imagen
   confiable para una noticia, buscar otra noticia candidata en su lugar
   (el objetivo son 10 noticias con imagen real, no 10 noticias a toda
   costa).

## Redacción del contenido

El HTML de `contenido` no debe ser una lista de bullets sueltos: tiene que
leerse como una nota periodística real.

1. Delegar la redacción de las 10 notas a un subagente redactor (Task tool,
   `general-purpose`), pasándole para cada noticia únicamente los **hechos
   crudos** reunidos en el paso anterior (cifras, declaraciones, fechas) y
   las URLs de fuente — nunca pedirle que busque o "complete" datos por su
   cuenta ni que invente contexto no verificado.
2. Pedirle explícitamente el formato: 4-6 párrafos en `<p>` (lede +
   desarrollo + por qué importa), con `<h2>` como separadores de sección
   opcionales, una `<ul>` corta solo si hay datos tabulares (cotizaciones,
   cifras comparables), y siempre una sección final `<h2>Fuentes</h2>` con
   los mismos links de origen (sin inventar URLs nuevas).
3. Revisar el resultado del subagente contra los hechos crudos antes de
   usarlo: si agregó alguna cifra, cita o dato que no estaba en el material
   provisto, corregirlo o quitarlo.

## Guardado en la base de datos

1. Generar un `slug` único por noticia (kebab-case, descriptivo, sin
   fecha redundante si ya es obvio por el contexto — seguir el estilo de
   los slugs existentes en `web/db/seed.sql`).
2. Insertar cada noticia como una fila en `articulos` con:
   - `tipo = 'news'`
   - `contenido` con el HTML redactado en el paso anterior (ya revisado)
   - `imagen_url` con la URL de la imagen genérica encontrada
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
