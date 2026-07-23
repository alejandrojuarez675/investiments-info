# Know-how SEO: patrón editorial de Infobae

Análisis de 5 notas reales de Infobae (23/07/2026), comparando el HTML crudo
de cada una, para extraer el patrón técnico y editorial que usan y aplicarlo
a la redacción de artículos en este proyecto (`web/`, tabla `articulos`).

Notas analizadas:

| Nota | Sección | URL |
|---|---|---|
| Carta de Infantino | Deportes | `/deportes/2026/07/23/la-carta-de-gianni-infantino-...` |
| Asalto en Wilde | Sociedad/Policiales | `/sociedad/policiales/2026/07/23/veinte-segundos-de-terror-...` |
| Cathy Fulop | Teleshow | `/teleshow/2026/07/23/cathy-fulop-recordo-el-flechazo-...` |
| Bullrich/Sturzenegger | Política | `/politica/2026/07/23/optimismo-en-la-casa-rosada-...` |
| Crédito hipotecario | Economía | `/economia/2026/07/23/cuanto-se-debe-ganar-...` |

## 1. Capa técnica: 100% uniforme (CMS corporativo)

Estos elementos son idénticos en las 5 notas, sin importar sección ni autor.
Es una plantilla fija, no depende del redactor — por eso conviene resolverla
a nivel de código/skill una sola vez, no repetirla en cada redactor:

- **Title**: titular completo + ` - Infobae`.
- **Meta description**: 1-2 frases, redactadas a mano (no autogeneradas por
  truncado del cuerpo), a menudo con un gancho final ("El video del hecho").
- **Canonical**: siempre autoreferencial, sin parámetros.
- **Open Graph completo**: `og:title`, `og:description`, `og:url`,
  `og:type=article`, `og:site_name`, `og:locale`, `og:image` en 1200×630.
- **Twitter Cards**: `summary_large_image` + título/descripción/imagen.
- **Robots**: `index, follow` + `max-image-preview:large` (clave para
  aparecer con imagen grande en Google Discover/News).
- **JSON-LD `NewsArticle`**: `headline`, `description`, `datePublished`,
  `dateModified`, `articleSection`, `keywords`, `image` en **3 proporciones**
  (16:9, 4:3, 1:1 — cubre distintos placements de Google), `articleBody`,
  `isAccessibleForFree: true`.
- **JSON-LD `NewsMediaOrganization`**: entidad de publisher con `sameAs` a
  redes sociales (refuerza autoridad de dominio).
- **JSON-LD `BreadcrumbList`**: sitio > sección.
- **Alt text de imágenes**: siempre descriptivo y contextual, nunca vacío ni
  genérico ("imagen1.jpg"). En notas con video/CCTV, llega a describir la
  escena en detalle (útil para accesibilidad y para Google Images/Discover).

**Aplicación a este proyecto**: replicar esta capa en el layout/template de
artículo de `web/` (metadata de Next.js, JSON-LD embebido) para que **todas**
las notas insertadas por cualquier skill (`get-news-report`, etc.) hereden
esto automáticamente, sin que cada redactor tenga que pensarlo.

## 2. Patrón de URLs (slugs): el titular completo, sin recortar

Infobae **no** acorta el slug a 4-6 palabras clave como recomiendan muchas
guías genéricas de SEO. Usa el **titular completo transliterado a
kebab-case**, incluyendo stopwords (de, la, el, que, a, en, con, y):

| Sección | Palabras en el slug |
|---|---|
| Deportes | 18 |
| Sociedad/Policiales | 22 |
| Teleshow | 20 |
| Política | 21 |
| Economía | 19 |

Ejemplo real (Economía):

```
/economia/2026/07/23/cuanto-se-debe-ganar-para-acceder-a-un-credito-hipotecario-de-usd-75000-y-cual-es-la-cuota-inicial/
```

Reglas observadas:

1. **Estructura**: `/{sección}/{año}/{mes}/{día}/{slug-completo}/` — a veces
   con subsección (`/sociedad/policiales/...`). La fecha en la URL ubica
   temporalmente la nota y evita colisión de slugs entre notas con títulos
   parecidos en distintos días.
2. **El slug = titular completo normalizado**: minúsculas, sin tildes/ñ
   transliteradas (o removidas), espacios → guiones, sin stopwords
   removidas, números y montos incluidos tal cual (`usd-75000`, `2026`).
3. **No hay acortamiento ni keyword-stuffing artificial**: no repiten
   keywords fuera del titular natural. La keyword principal cae temprano en
   el slug porque cae temprano en el titular (ver punto 3).
4. **Barra final (`/`) siempre presente** — consistente con canonical.

**Por qué funciona**: un slug largo que reproduce el titular completo actúa
como coincidencia exacta de long-tail para búsquedas conversacionales
("cuánto hay que ganar para un crédito hipotecario de 75000 dólares"), que es
como buscan los usuarios reales y como cada vez más responde Google
Discover/SGE. Sacrifica "prolijidad" de URL corta a cambio de cobertura de
intención de búsqueda.

**Aplicación a este proyecto**: en el paso de generación de `slug` (ver
`get-news-report/SKILL.md`), dejar de acortar a 4-6 palabras. Generar el slug
a partir del **titular completo** en kebab-case (sin fecha redundante si ya
va en la URL por columnas separadas, o incluyéndola si el slug es la única
parte variable). Mantenerlo re-legible pero no editorializarlo de más.

**Implementado**: `web/` ya arma la URL final con el patrón
`/{categoria}/{yyyy}/{mm}/{dd}/{slug}/`, combinando la columna `categoria`,
la fecha de `publicado_en` y el `slug` de la nota (ruta dinámica en
`web/src/app/[categoria]/[anio]/[mes]/[dia]/[slug]/page.tsx`, helper
`urlArticulo()` en `web/src/lib/articulos.ts`). Esto significa que **el
`slug` generado al redactar una nota no es, por sí solo, la URL completa**
— solo identifica unívocamente al artículo en la base (columna `slug` UNIQUE).
La categoría (columna `categoria`, ej. `dolar`, `macro`, `mercados`,
`cripto`, `daily-report`, `reporte-semanal`, `reporte`) y la fecha de
publicación determinan el resto del path, así que conviene que la categoría
elegida al insertar la nota ya esté en minúsculas y sin espacios (apta para
URL tal cual), como ya se hace en `web/db/seed.sql`.

## 3. Patrón editorial: la autoría varía según el tipo de nota (no la sección)

Este es el hallazgo central del análisis. El JSON-LD `author` alterna entre:

- **`Person`** (nombre + link a `/autor/...`, con foto de perfil como imagen
  con alt = nombre del periodista): en la nota de **Teleshow** (Cathy Fulop,
  autor Sebastián Volterri) y en la de **Política** (Bullrich/Sturzenegger,
  autora Sofía Rojas).
- **`Organization` ("INFOBAE")** genérica: en **Deportes** (Infantino),
  **Policiales** (Wilde) y **Economía** (crédito hipotecario).

La variable que separa un grupo del otro **no es la sección temática**, sino
el tipo de cobertura:

| Tipo de nota | Autoría | Ejemplos |
|---|---|---|
| Crónica/columna con seguimiento propio, análisis o contactos del cronista | `Person` con bio | Espectáculos con historia/entrevista; política con cobertura de una negociación en curso |
| Breaking news de guardia / hecho puntual sin interpretación | `Organization` | Policiales de último momento, resultado deportivo |
| Explicador utilitario / service journalism (guías, cálculos, "cuánto necesitás para...") | `Organization` | Economía práctica (créditos, cuotas, tasas) |

Segunda variable observada: **`dateModified` ≠ `datePublished`** aparece en
notas sobre **eventos aún en desarrollo** (la reunión Bullrich/Sturzenegger
sigue en curso; la carta de Infantino tuvo una corrección posterior),
independientemente de si el autor es `Person` u `Organization`. Las notas
"cerradas" (un hecho ya consumado: el asalto, el crédito, el recuerdo de
Fulop) no tienen edición posterior.

Tercera variable: **riqueza de `keywords`** (5-9 tags temáticos ricos vs. 2
genéricos) depende más del criterio del editor de sección al taggear que del
tipo de autor — no se encontró correlación limpia.

**Aplicación a este proyecto**: cuando el flujo de redacción sepa que una
nota es una crónica/columna con voz propia (opinión, entrevista, seguimiento
de un tema), asignarle autoría de un "redactor" con nombre fijo y no
`Redacción` genérico — y viceversa para breaking news o explicadores.

## 4. Perfiles de redactor por tema

A partir de lo anterior, se definen 5 perfiles de redactor para usar en los
skills de generación de contenido. Cada uno resume: tono, tipo de autoría
recomendada, tags/keywords típicos y checklist SEO propio del tema.

### Economía (`redactor-economia`)

- **Tono**: explicador, service journalism. Objetivo = responder una
  pregunta concreta del lector ("cuánto necesito para...", "qué pasa si...").
- **Autoría**: `Organization` (Redacción) salvo que sea un análisis de mercado
  con firma editorial propia.
- **Estructura**: lede con la respuesta directa a la pregunta del título,
  luego desarrollo con cifras/tablas, cierre con contexto (tasas, plazos,
  comparación histórica).
- **Keywords típicos**: instrumento financiero, moneda, tasa/plazo, público
  objetivo (ej. `Préstamo, Crédito hipotecario, Cuotas, Ingresos, UVAs,
  Salarios, Tasas`).
- **Checklist SEO propio**:
  - Título con la pregunta o el dato concreto (monto, tasa, plazo) — igual
    que hace Infobae con "Cuánto se debe ganar para...".
  - Usar la cotización de referencia de `CLAUDE.md`
    (calculadoraya.click) cuando haya conversión ARS/USD.
  - Slug = titular completo, sin acortar (ver sección 2).
  - Si hay datos tabulares, usar una tabla o lista corta, no solo prosa.

### Política (`redactor-politica`)

- **Tono**: crónica de seguimiento, con interpretación del clima
  político/negociación en curso.
- **Autoría**: `Person` con nombre de cronista fijo — refuerza E-E-A-T porque
  es contenido de seguimiento continuo de un tema.
- **Estructura**: lede con el hecho + expectativa ("optimismo por...",
  "tensión por..."), desarrollo con antecedentes y actores, cierre con
  próximos pasos/fecha clave.
- **Keywords típicos**: funcionarios/legisladores por nombre, institución
  (Congreso, Senado), proyecto de ley (ej. `Gobierno, Patricia Bullrich,
  Javier Milei, Federico Sturzenegger, Congreso, Cámara de Senadores`).
- **Checklist SEO propio**:
  - Marcar `dateModified` distinto si la nota se actualiza durante el día
    (evento en desarrollo) — coherente con el patrón real de Infobae.
  - Nombrar siempre a los actores por nombre completo la primera vez.

### Deportes (`redactor-deportes`)

- **Tono**: breaking news o crónica de resultado, directo, sin relleno.
- **Autoría**: `Organization` para resultados/breaking news; `Person` si es
  columna de análisis táctico o entrevista.
- **Estructura**: lede con el resultado/hecho central, cita textual si la
  hay (declaración, carta, comunicado), cierre con contexto del certamen.
- **Keywords típicos**: equipo/selección, competición, jugadores/DT
  mencionados, hashtag del evento (ej. `Selección Argentina, Selección
  Argentina Mundial 2026, Lionel Scaloni, Lionel Messi, FIFA, Mundial 2026`).
- **Checklist SEO propio**:
  - Título con resultado + contexto temporal ("tras perder la final...").
  - Si hay transcripción de un documento (carta, comunicado), reproducirlo
    completo en el cuerpo — ayuda a longitud de contenido y a citas
    textuales indexables.

### Sociedad/Policiales (`redactor-policiales`)

- **Tono**: hecho puntual, objetivo, sin especulación no verificada
  ("investigan si..." en vez de afirmar causa).
- **Autoría**: `Organization` (guardia/redacción), salvo cobertura judicial
  de seguimiento largo con cronista fijo.
- **Estructura**: lede con qué/cuándo/dónde, desarrollo con estado de la
  investigación, cierre con contexto de seguridad de la zona si aplica.
- **Keywords típicos**: tipo de delito, ubicación (barrio/partido/provincia)
  (ej. `Robos, Inseguridad, Wilde, Avellaneda`).
- **Checklist SEO propio**:
  - Alt text de imágenes/capturas de cámaras de seguridad muy descriptivo
    (quién hace qué, dónde) — patrón confirmado en la nota de Wilde.
  - Evitar keyword-stuffing de morbo; mantener el tag genérico
    "Últimas noticias" solo como catch-all, no como keyword principal.

### Espectáculos/Teleshow (`redactor-espectaculos`)

- **Tono**: cercano, narrativo, con anécdota o cita de la fuente.
- **Autoría**: `Person` con nombre de cronista fijo — el patrón más fuerte de
  autoría individual de las 5 notas analizadas.
- **Estructura**: lede con el gancho emocional/narrativo, desarrollo
  cronológico de la anécdota, cierre con la cita o el estado actual del
  protagonista.
- **Keywords típicos**: nombres propios de los protagonistas, poco más (ej.
  `Catherine Fulop, Ova Sabatini`) — no hace falta sobre-taggear.
- **Checklist SEO propio**:
  - Meta description con contexto temporal concreto (año, lugar) + gancho
    narrativo — es la meta description más rica de las 5 analizadas.
  - Aprovechar el link de autor (`/autor/nombre-apellido/`) si el proyecto
    llega a tener páginas de autor propias.

## 5. Resumen operativo

1. La capa técnica (Open Graph, canonical, robots, JSON-LD base) se resuelve
   **una sola vez** a nivel de template/layout de artículo — no depende del
   redactor ni del tema.
2. El **slug** se genera siempre a partir del titular completo, sin
   acortarlo (sección 2).
3. La **autoría** (`Person` vs `Redacción`/`Organization`) se decide según si
   la nota es crónica/columna con voz propia o breaking news/explicador
   utilitario (sección 3), no según la sección per se.
4. Cada redactor por tema (sección 4) aplica su propio tono, estructura de
   párrafos y criterio de `keywords`, pero todos heredan las reglas 1-3.
