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

-- Migración para bases creadas antes de agregar la columna `tipo`.
ALTER TABLE articulos ADD COLUMN IF NOT EXISTS tipo TEXT;
UPDATE articulos SET tipo = 'analisis' WHERE tipo IS NULL;
ALTER TABLE articulos ALTER COLUMN tipo SET NOT NULL;
ALTER TABLE articulos DROP CONSTRAINT IF EXISTS articulos_tipo_check;
ALTER TABLE articulos ADD CONSTRAINT articulos_tipo_check
  CHECK (tipo IN ('daily-report', 'reporte-semanal', 'analisis'));
CREATE INDEX IF NOT EXISTS idx_articulos_tipo ON articulos (tipo);
