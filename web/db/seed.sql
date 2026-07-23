INSERT INTO articulos (slug, titulo, resumen, contenido, categoria, autor, publicado_en)
VALUES
  (
    'bienvenida-al-sitio',
    'Bienvenidos a nuestro sitio de noticias financieras',
    'Arrancamos un nuevo espacio de noticias sobre mercados, inversiones y economía.',
    'Este es el primer artículo de ejemplo. El contenido completo puede incluir varios párrafos en texto plano o Markdown según cómo se decida renderizarlo más adelante.',
    'general',
    'Redacción',
    now()
  ),
  (
    'como-leer-el-mercado-esta-semana',
    'Cómo leer el mercado esta semana',
    'Un repaso de los principales indicadores y qué esperar en los próximos días.',
    'Contenido de ejemplo para la segunda noticia, pensado para probar el listado y el detalle de artículo.',
    'mercados',
    'Redacción',
    now() - interval '1 day'
  )
ON CONFLICT (slug) DO NOTHING;
