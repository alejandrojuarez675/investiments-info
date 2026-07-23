---
name: get-daily-report
description: Genera un daily report en Markdown, corto (~media hoja), con eventos financieros y noticias relevantes para el día actual, guardado en reports/.
---

# Daily report

Genera un reporte diario, en Markdown, con las cosas más interesantes que van
a pasar (o pasaron) ese día en materia financiera y de noticias generales.
Debe ser **muy corto**: el objetivo es media hoja (aprox. 150-250 palabras en
total). Priorizar concisión — es mejor recortar una sección o un bullet que
superar el límite de extensión.

## Antes de escribir

1. Confirmar la fecha del día actual.
2. Buscar eventos económicos/financieros relevantes para hoy: publicaciones de
   datos (inflación, empleo, PBI), decisiones de tasas, vencimientos de
   instrumentos, feriados de mercado, resultados corporativos relevantes.
3. Buscar noticias generales relevantes del día que puedan impactar en
   mercados o inversiones (macro, política, geopolítica).
4. Si hace falta la cotización del dólar, consultar
   https://www.calculadoraya.click/calculadoras/dolar (ver CLAUDE.md).
5. Si el reporte va a citar datos de `data/cotizaciones/` o
   `data/tasas/tasas.csv`, revisar la fecha de la fila más reciente del
   instrumento correspondiente. Si tiene más de 24hs de antigüedad, correr
   la skill `actualizar-cotizaciones` antes de usar ese dato en el reporte.
6. No hace falta investigación exhaustiva: priorizar 3-5 ítems realmente
   relevantes por sobre cobertura completa.

## Secciones del reporte

Usar exactamente estas secciones, en este orden. Todo el reporte debe caber
en media hoja — bullets cortos, sin párrafos largos.

1. **Front-matter YAML**: `title`, `fecha` (fecha del día), `tema:
   daily-report`, `tags`.
2. **Agenda del día**: 3-5 bullets con los eventos financieros/económicos más
   relevantes de hoy (con horario si es conocido).
3. **Noticias a tener en cuenta**: 2-3 bullets con noticias generales
   relevantes del día que puedan impactar en el mercado.
4. **Fuentes**: links usados.

No incluir recomendaciones de inversión ni análisis extenso — este reporte es
solo informativo/agenda, no un reporte de mercado (para eso existe
`get-weekly-shorted-report`).

## Al finalizar

- Guardar el archivo en `reports/` con nombre `YYYYMMDD-daily-report.md`
  (fecha del día).
- No repetir contenido de otros reportes: si algo ya está cubierto en el
  reporte semanal reciente, no duplicar el análisis, solo mencionar el hecho.
