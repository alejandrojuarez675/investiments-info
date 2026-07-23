# web

Sitio de noticias financieras construido con Next.js (App Router), orientado
a SEO. El contenido se sirve desde una base de datos PostgreSQL.

## Requisitos

- Node.js 20+
- Una base de datos PostgreSQL accesible (RDS, Neon, Supabase, local, etc.)

## Configuración

1. Copiar `.env.example` a `.env.local` y completar:
   - `DATABASE_URL`: cadena de conexión a Postgres.
   - `NEXT_PUBLIC_SITE_URL`: URL pública del sitio (se usa en metadata, Open Graph, sitemap y robots.txt).
2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Aplicar el esquema (tabla `articulos`) y, opcionalmente, cargar datos de ejemplo:

   ```bash
   npm run db:migrate
   npm run db:seed
   ```

4. Levantar el entorno de desarrollo:

   ```bash
   npm run dev
   ```

   Abrir [http://localhost:3000](http://localhost:3000).

## Estructura

- `src/app/page.tsx` — home con el listado de artículos publicados.
- `src/app/articulo/[slug]/page.tsx` — detalle de artículo, con `generateMetadata` (Open Graph, Twitter Card, canonical) y datos estructurados `NewsArticle` (JSON-LD).
- `src/app/sitemap.ts` / `src/app/robots.ts` — generación dinámica de sitemap y robots.txt a partir de la DB.
- `src/lib/db.ts` — pool de conexión a Postgres (`pg`).
- `src/lib/articulos.ts` — queries de acceso a la tabla `articulos`.
- `db/schema.sql` / `db/seed.sql` — esquema y datos de ejemplo.
- `scripts/migrate.ts` — aplica `schema.sql` (y `seed.sql` con `--seed`) contra `DATABASE_URL`.

## SEO

- Metadata dinámica por artículo (title, description, canonical, Open Graph, Twitter Card).
- `sitemap.xml` generado dinámicamente incluyendo todos los artículos publicados.
- `robots.txt` apuntando al sitemap.
- JSON-LD `NewsArticle` en cada página de artículo.
- Solo se listan/sirven artículos con `publicado_en <= now()` (permite programar publicaciones a futuro).

## Deploy

Cualquier plataforma compatible con Next.js (Vercel, contenedor en ECS/Amplify, etc.). Asegurarse de definir `DATABASE_URL` y `NEXT_PUBLIC_SITE_URL` en el entorno de producción.
