# Registro de tasas

`tasas.csv` es un log **append-only** de tasas y cotizaciones encontradas
durante el análisis de inversiones. Cada fila es una observación puntual
en el tiempo, no un valor "vigente" a actualizar — para ver la tasa más
reciente de un instrumento, filtrar por `instrumento` y tomar la fecha
máxima.

## Columnas

| Columna | Descripción |
|---|---|
| `fecha` | Fecha de la observación (`YYYY-MM-DD`), no la fecha en que se registra si son distintas. |
| `instrumento` | Identificador corto y estable en minúsculas, de la lista cerrada en [Instrumentos válidos](#instrumentos-válidos). Reusar siempre el mismo id para el mismo instrumento; no inventar variantes. |
| `moneda` | Moneda de denominación (`ARS`, `USD`). |
| `tasa_tipo` | Qué tipo de tasa es: `TIREA` (Tasa Interna de Retorno Efectiva Anual), `TEM` (Tasa Efectiva Mensual), `TNA` (Tasa Nominal Anual), `tipo_de_cambio` (para cotizaciones, no tasas), `retorno_esperado`, etc. |
| `tasa_valor` | Valor numérico en formato decimal (0.30 = 30%), o el valor de la cotización si `tasa_tipo` es `tipo_de_cambio`. |
| `plazo_dias` | Plazo del instrumento en días, si aplica (vacío si no corresponde, ej. cotizaciones spot). |
| `fuente_url` | URL de donde se obtuvo el dato. |
| `notas` | Contexto libre breve (vencimiento, margen de corte, condiciones de la observación). |

## Instrumentos válidos

Usar exactamente uno de estos ids en la columna `instrumento`. Si aparece
un instrumento nuevo que no encaja en la lista, agregarlo acá primero (con
una línea que explique qué es) y recién después usarlo en `tasas.csv`.

| id | Descripción |
|---|---|
| `lecap` | Letra del Tesoro capitalizable en pesos. |
| `boncap` | Bono del Tesoro capitalizable en pesos. |
| `tamar` | Letra/instrumento atado a tasa TAMAR (Tasa Mayorista Argentina). |
| `plazo_fijo` | Plazo fijo tradicional en pesos. |
| `caucion` | Caución bursátil. |
| `fci_money_market` | Fondo Común de Inversión money market en pesos. |
| `dolar_oficial` | Tipo de cambio oficial (BNA/BCRA). |
| `dolar_mep` | Tipo de cambio dólar MEP. |
| `dolar_ccl` | Tipo de cambio dólar CCL (Contado con Liquidación). |
| `dolar_blue` | Tipo de cambio dólar blue/informal. |
| `sp500` | Índice S&P 500 (retorno esperado o histórico, no tasa de interés). |

## Convenciones

- No editar ni borrar filas existentes: es un historial. Si un dato estaba
  mal, agregar una fila nueva corregida en vez de sobreescribir.
- Un instrumento puede tener múltiples filas en la misma fecha si hay
  distintos plazos (ej. Lecaps a 90 y a 180 días).
- Al usar estos datos en un reporte (`reports/`), citar la fila de origen
  (fecha + instrumento) además de la fuente URL.

## Cómo agregar una observación

Simplemente añadir una línea nueva al final de `tasas.csv` siguiendo el
esquema de columnas. No hace falta ordenar por fecha.
