---
name: get-weekly-shorted-report
description: Genera el reporte semanal de mercado (dónde conviene invertir), en Markdown, corto (máx. ~2 hojas), guardado en reports/.
---

# Reporte semanal de mercado

Genera un reporte semanal, en Markdown, con una lectura del mercado y en qué
conviene invertir. Debe ser **corto**: el objetivo es que no ocupe más de dos
hojas de un PDF (aprox. 700-900 palabras en total). Priorizar concisión por
sobre cobertura exhaustiva — es mejor recortar una sección que superar el
límite de extensión.

## Antes de escribir

1. Consultar la cotización del dólar vigente en
   https://www.calculadoraya.click/calculadoras/dolar (ver CLAUDE.md).
2. Revisar `data/tasas/tasas.csv` y `data/cotizaciones/*.csv`, y quedarte
   con la fila más reciente por instrumento/ticker (filtrar y tomar la
   fecha máxima). Si algún dato clave (tasas Lecap/TAMAR, dólar,
   cotizaciones que vayan a citarse en el reporte) tiene más de 24hs de
   antigüedad, correr la skill `actualizar-cotizaciones` antes de escribir
   el reporte en vez de buscar el dato puntualmente.
3. Si hace falta contexto conceptual (carry trade, S&P 500, etc.), usar los
   documentos en `docs/` en vez de investigar desde cero.

## Secciones del reporte (v1)

Usar exactamente estas secciones, en este orden. Cada una debe ser breve
(2-5 líneas o una tabla chica) — nada de párrafos largos.

1. **Front-matter YAML**: `title`, `fecha` (fecha de generación), `tema:
   reporte-semanal`, `tags`.
2. **Resumen ejecutivo**: 2-3 líneas con la conclusión principal de la
   semana (qué hacer, en una frase).
3. **Panorama de la semana**: 3-5 bullets con los datos/eventos más
   relevantes (cotización dólar, tasas de referencia, algún evento
   macro/político si aplica). Cada dato con su fecha.
4. **Tasas y cotizaciones clave**: tabla chica con los valores más recientes
   relevantes (dólar oficial/MEP/CCL si difieren, Lecap/TAMAR, etc.), citando
   fecha y fuente.
5. **Dónde conviene invertir esta semana**: recomendación concreta y
   acotada (ej. mezcla carry trade / S&P 500 / otro), con el razonamiento
   en 3-4 líneas. Sin asesoramiento personalizado, marco educativo.
6. **Riesgos a vigilar**: 2-3 bullets de qué podría cambiar la recomendación
   (ej. salto cambiario, dato de inflación, decisión de tasa).
7. **Advertencia**: disclaimer estándar (no es asesoramiento financiero
   personalizado, datos con fecha de referencia).
8. **Fuentes**: links usados.

## Al finalizar

- Guardar el archivo en `reports/` con nombre
  `YYYYMMDD-reporte-semanal-mercado.md` (fecha de generación).
- Si se agregaron filas a `data/tasas/tasas.csv`, mencionarlo en la
  respuesta al usuario.
- No repetir contenido extenso de `docs/`: linkear en vez de copiar.
