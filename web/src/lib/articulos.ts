import { pool } from "./db";

export type Articulo = {
  id: number;
  slug: string;
  titulo: string;
  resumen: string;
  contenido: string;
  categoria: string;
  imagen_url: string | null;
  autor: string;
  publicado_en: Date;
  actualizado_en: Date;
};

export async function listarArticulos(limit = 20, offset = 0): Promise<Articulo[]> {
  const { rows } = await pool.query<Articulo>(
    `SELECT id, slug, titulo, resumen, contenido, categoria, imagen_url, autor, publicado_en, actualizado_en
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
    `SELECT id, slug, titulo, resumen, contenido, categoria, imagen_url, autor, publicado_en, actualizado_en
     FROM articulos
     WHERE slug = $1 AND publicado_en <= now()
     LIMIT 1`,
    [slug]
  );
  return rows[0] ?? null;
}

export async function listarSlugs(): Promise<{ slug: string; actualizado_en: Date }[]> {
  const { rows } = await pool.query<{ slug: string; actualizado_en: Date }>(
    `SELECT slug, actualizado_en FROM articulos WHERE publicado_en <= now() ORDER BY publicado_en DESC`
  );
  return rows;
}
