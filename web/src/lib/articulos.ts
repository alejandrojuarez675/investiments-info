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

export async function listarSlugs(): Promise<
  { slug: string; actualizado_en: Date; imagen_url: string | null }[]
> {
  const { rows } = await pool.query<{
    slug: string;
    actualizado_en: Date;
    imagen_url: string | null;
  }>(
    `SELECT slug, actualizado_en, imagen_url FROM articulos WHERE publicado_en <= now() ORDER BY publicado_en DESC`
  );
  return rows;
}
