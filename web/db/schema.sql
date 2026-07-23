CREATE TABLE IF NOT EXISTS articulos (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  titulo TEXT NOT NULL,
  resumen TEXT NOT NULL,
  contenido TEXT NOT NULL,
  categoria TEXT NOT NULL,
  imagen_url TEXT,
  autor TEXT NOT NULL DEFAULT 'Redacción',
  publicado_en TIMESTAMPTZ NOT NULL DEFAULT now(),
  actualizado_en TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_articulos_publicado_en ON articulos (publicado_en DESC);
CREATE INDEX IF NOT EXISTS idx_articulos_categoria ON articulos (categoria);
