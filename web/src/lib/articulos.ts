import { pool } from "./db";

export type TipoArticulo = "daily-report" | "reporte-semanal" | "analisis" | "news";

export type Articulo = {
  id: number;
  slug: string;
  titulo: string;
  resumen: string;
  contenido: string;
  tipo: TipoArticulo;
  categoria: string;
  imagen_url: string | null;
  autor: string;
  publicado_en: Date;
  actualizado_en: Date;
};

export async function listarArticulos(limit = 20, offset = 0): Promise<Articulo[]> {
  const { rows } = await pool.query<Articulo>(
    `SELECT id, slug, titulo, resumen, contenido, tipo, categoria, imagen_url, autor, publicado_en, actualizado_en
     FROM articulos
     WHERE publicado_en <= now()
     ORDER BY publicado_en DESC
     LIMIT $1 OFFSET $2`,
    [limit, offset]
  );
  return rows;
}

export async function obtenerArticuloPorSlug(slug: string): Promise<Articulo | null> {
  const { rows } = await pool.query<Articulo>(
    `SELECT id, slug, titulo, resumen, contenido, tipo, categoria, imagen_url, autor, publicado_en, actualizado_en
     FROM articulos
     WHERE slug = $1 AND publicado_en <= now()
     LIMIT 1`,
    [slug]
  );
  return rows[0] ?? null;
}

export async function obtenerRelacionados(id: number): Promise<Articulo[]> {
  const columnas = `id, slug, titulo, resumen, contenido, tipo, categoria, imagen_url, autor, publicado_en, actualizado_en`;

  const [ultima, anterior, siguiente] = await Promise.all([
    pool.query<Articulo>(
      `SELECT ${columnas} FROM articulos
       WHERE publicado_en <= now() AND id != $1
       ORDER BY id DESC
       LIMIT 1`,
      [id]
    ),
    pool.query<Articulo>(
      `SELECT ${columnas} FROM articulos
       WHERE publicado_en <= now() AND id < $1
       ORDER BY id DESC
       LIMIT 1`,
      [id]
    ),
    pool.query<Articulo>(
      `SELECT ${columnas} FROM articulos
       WHERE publicado_en <= now() AND id > $1
       ORDER BY id ASC
       LIMIT 1`,
      [id]
    ),
  ]);

  const relacionados = [ultima.rows[0], anterior.rows[0], siguiente.rows[0]];
  const vistos = new Set<number>();
  return relacionados.filter((articulo): articulo is Articulo => {
    if (!articulo || vistos.has(articulo.id)) return false;
    vistos.add(articulo.id);
    return true;
  });
}

export async function listarArticulosPorTipo(
  tipo: TipoArticulo,
  limit = 10
): Promise<Articulo[]> {
  const { rows } = await pool.query<Articulo>(
    `SELECT id, slug, titulo, resumen, contenido, tipo, categoria, imagen_url, autor, publicado_en, actualizado_en
     FROM articulos
     WHERE tipo = $1 AND publicado_en <= now()
     ORDER BY publicado_en DESC
     LIMIT $2`,
    [tipo, limit]
  );
  return rows;
}

export async function listarArticulosPorCategoria(
  categoria: string | string[],
  limit = 20,
  offset = 0
): Promise<Articulo[]> {
  const categorias = Array.isArray(categoria) ? categoria : [categoria];
  const { rows } = await pool.query<Articulo>(
    `SELECT id, slug, titulo, resumen, contenido, tipo, categoria, imagen_url, autor, publicado_en, actualizado_en
     FROM articulos
     WHERE categoria = ANY($1::text[]) AND publicado_en <= now()
     ORDER BY publicado_en DESC
     LIMIT $2 OFFSET $3`,
    [categorias, limit, offset]
  );
  return rows;
}

const MIN_NOTAS_POR_SECCION = 2;

/**
 * Agrupa las notas de otras categorías (excluyendo la del artículo actual)
 * en bloques de "sección", replicando el patrón de columnas por categoría
 * de docs/know-how/layout-detalle-nota-infobae.md. Cada categoría necesita
 * al menos MIN_NOTAS_POR_SECCION notas para calificar como columna.
 */
export async function obtenerSeccionesRelacionadas(
  categoriaActual: string,
  maxCategorias = 3,
  maxNotasPorCategoria = 5
): Promise<{ categoria: string; articulos: Articulo[] }[]> {
  const { rows: categorias } = await pool.query<{ categoria: string }>(
    `SELECT categoria
     FROM articulos
     WHERE publicado_en <= now() AND categoria != $1
     GROUP BY categoria
     HAVING COUNT(*) >= $2
     ORDER BY COUNT(*) DESC, MAX(publicado_en) DESC
     LIMIT $3`,
    [categoriaActual, MIN_NOTAS_POR_SECCION, maxCategorias]
  );

  if (categorias.length === 0) {
    return [];
  }

  const nombresCategorias = categorias.map((c) => c.categoria);

  const { rows: articulos } = await pool.query<Articulo>(
    `SELECT id, slug, titulo, resumen, contenido, tipo, categoria, imagen_url, autor, publicado_en, actualizado_en
     FROM (
       SELECT *, ROW_NUMBER() OVER (
         PARTITION BY categoria ORDER BY publicado_en DESC
       ) AS rn
       FROM articulos
       WHERE publicado_en <= now() AND categoria = ANY($1::text[])
     ) sub
     WHERE rn <= $2
     ORDER BY categoria, rn`,
    [nombresCategorias, maxNotasPorCategoria]
  );

  return nombresCategorias.map((categoria) => ({
    categoria,
    articulos: articulos.filter((a) => a.categoria === categoria),
  }));
}

/**
 * Igual que obtenerSeccionesRelacionadas, pero sin excluir ninguna
 * categoría — para armar el feed de la home, que no parte de una nota
 * puntual.
 */
export async function obtenerSeccionesHome(
  maxCategorias = 4,
  maxNotasPorCategoria = 6
): Promise<{ categoria: string; articulos: Articulo[] }[]> {
  const { rows: categorias } = await pool.query<{ categoria: string }>(
    `SELECT categoria
     FROM articulos
     WHERE publicado_en <= now()
     GROUP BY categoria
     HAVING COUNT(*) >= $1
     ORDER BY COUNT(*) DESC, MAX(publicado_en) DESC
     LIMIT $2`,
    [MIN_NOTAS_POR_SECCION, maxCategorias]
  );

  if (categorias.length === 0) {
    return [];
  }

  const nombresCategorias = categorias.map((c) => c.categoria);

  const { rows: articulos } = await pool.query<Articulo>(
    `SELECT id, slug, titulo, resumen, contenido, tipo, categoria, imagen_url, autor, publicado_en, actualizado_en
     FROM (
       SELECT *, ROW_NUMBER() OVER (
         PARTITION BY categoria ORDER BY publicado_en DESC
       ) AS rn
       FROM articulos
       WHERE publicado_en <= now() AND categoria = ANY($1::text[])
     ) sub
     WHERE rn <= $2
     ORDER BY categoria, rn`,
    [nombresCategorias, maxNotasPorCategoria]
  );

  return nombresCategorias.map((categoria) => ({
    categoria,
    articulos: articulos.filter((a) => a.categoria === categoria),
  }));
}

export async function listarSlugs(): Promise<
  {
    slug: string;
    categoria: string;
    publicado_en: Date;
    actualizado_en: Date;
    imagen_url: string | null;
  }[]
> {
  const { rows } = await pool.query<{
    slug: string;
    categoria: string;
    publicado_en: Date;
    actualizado_en: Date;
    imagen_url: string | null;
  }>(
    `SELECT slug, categoria, publicado_en, actualizado_en, imagen_url FROM articulos WHERE publicado_en <= now() ORDER BY publicado_en DESC`
  );
  return rows;
}

const REGEX_SECCION_FUENTES = /<h2>\s*Fuentes\s*<\/h2>[\s\S]*$/i;

/**
 * Quita la sección final "Fuentes" (h2 + lista de links de origen) que los
 * redactores incluyen en el HTML por criterio editorial interno, pero que
 * no está pensada para mostrarse en el detalle de nota.
 */
export function quitarSeccionFuentes(contenidoHtml: string): string {
  return contenidoHtml.replace(REGEX_SECCION_FUENTES, "").trimEnd();
}

/**
 * Arma la URL de un artículo con el formato /{categoria}/{yyyy}/{mm}/{dd}/{slug}/,
 * usando la fecha de publicación (no de actualización) para que la URL no cambie
 * si el artículo se edita después.
 */
export function urlArticulo(articulo: {
  slug: string;
  categoria: string;
  publicado_en: Date;
}): string {
  const fecha = new Date(articulo.publicado_en);
  const anio = fecha.getUTCFullYear();
  const mes = String(fecha.getUTCMonth() + 1).padStart(2, "0");
  const dia = String(fecha.getUTCDate()).padStart(2, "0");
  return `/${articulo.categoria}/${anio}/${mes}/${dia}/${articulo.slug}/`;
}
