---
title: "Trading con gráficos: análisis técnico"
tema: conceptos-generales
tags: [analisis-tecnico, graficos, velas, indicadores, patrones]
nivel: intermedio
ultima_revision: 2026-07-20
---

# Trading con gráficos: análisis técnico

El análisis técnico es el estudio del precio y volumen histórico de un
activo, representado en gráficos, para intentar anticipar movimientos
futuros. Es la base sobre la que se apoyan la mayoría de las
[estrategias de trading de corto plazo](estrategias-trading.md) (scalping,
day trading, swing trading). Se contrapone al análisis fundamental, que
evalúa el valor de un activo a partir de datos económicos o financieros
subyacentes (resultados de una empresa, tasas de interés, etc.).

## Tipos de gráficos

- **Gráfico de líneas**: une los precios de cierre en el tiempo. Es el más
  simple, útil para ver la tendencia general pero pierde información
  intradía.
- **Gráfico de barras (OHLC)**: muestra apertura, máximo, mínimo y cierre
  de cada período mediante una barra vertical con marcas laterales.
- **Gráfico de velas japonesas (candlestick)**: el más usado en trading.
  Cada vela representa un período (minuto, hora, día) y muestra apertura,
  cierre, máximo y mínimo mediante un cuerpo y mechas ("sombras"). El color
  del cuerpo indica si el cierre fue mayor (vela alcista) o menor (vela
  bajista) que la apertura.

## Patrones de velas

Formaciones de una o pocas velas que sugieren posibles cambios o
continuaciones de tendencia. Algunos de los más citados:

- **Doji**: apertura y cierre casi iguales, indica indecisión del mercado.
- **Martillo (hammer) / Martillo invertido**: cuerpo pequeño con mecha
  larga, suele aparecer al final de una tendencia bajista como posible
  señal de reversión.
- **Envolvente alcista/bajista (engulfing)**: una vela cuyo cuerpo cubre
  por completo el cuerpo de la vela anterior, en dirección contraria a la
  tendencia previa.
- **Estrella fugaz (shooting star)**: similar al martillo invertido pero
  en el techo de una tendencia alcista, posible señal de reversión bajista.

Estos patrones son probabilísticos, no determinísticos: su fiabilidad
depende del contexto (tendencia previa, volumen, nivel donde aparecen) y
no garantizan el resultado de una operación.

## Soportes y resistencias

- **Soporte**: nivel de precio donde históricamente la demanda ha sido
  suficiente para frenar una caída.
- **Resistencia**: nivel de precio donde históricamente la oferta ha
  frenado una suba.

Estos niveles se usan tanto para anticipar rebotes como para el
[breakout trading](estrategias-trading.md), donde la ruptura confirmada de
un soporte o resistencia se interpreta como señal de continuación.

## Líneas y canales de tendencia

Trazado de líneas que conectan mínimos ascendentes (tendencia alcista) o
máximos descendentes (tendencia bajista). Un canal se forma trazando una
línea paralela adicional que conecta los extremos opuestos, delimitando
una zona donde el precio suele oscilar mientras la tendencia se mantiene.

## Indicadores técnicos habituales

- **Medias móviles (SMA/EMA)**: promedio del precio en una ventana de
  tiempo, suaviza el ruido para identificar la dirección de la tendencia.
  Los cruces entre medias de distinto período (ej. media de 50 y 200
  sesiones) se usan como señales de cambio de tendencia ("cruce dorado" /
  "cruce de la muerte").
- **RSI (Relative Strength Index)**: mide la velocidad y magnitud de
  cambios de precio en una escala de 0 a 100, usado para identificar
  condiciones de sobrecompra (habitualmente >70) o sobreventa
  (habitualmente <30).
- **MACD (Moving Average Convergence Divergence)**: mide la relación entre
  dos medias móviles exponenciales, usado para detectar cambios de
  momentum y posibles cruces de tendencia.
- **Bandas de Bollinger**: banda superior e inferior calculadas a partir
  de la desviación estándar del precio respecto a una media móvil, se
  expanden y contraen según la volatilidad del activo.
- **Volumen**: cantidad de unidades negociadas en un período. Se usa para
  confirmar la fuerza de un movimiento: una ruptura con volumen alto se
  considera más confiable que una con volumen bajo.

## Patrones gráficos (chart patterns)

Formaciones que se identifican a partir de varias velas o de la forma
general del gráfico, en lugar de una sola vela:

- **Cabeza y hombros / cabeza y hombros invertido**: patrón de reversión
  con tres máximos (o mínimos) donde el central es más pronunciado.
- **Doble techo / doble piso**: dos máximos (o mínimos) similares
  consecutivos, señal de posible reversión.
- **Triángulos (ascendente, descendente, simétrico)**: consolidación del
  precio entre líneas de tendencia convergentes, suele resolverse con una
  ruptura hacia uno de los lados.
- **Banderas y banderines (flags/pennants)**: consolidaciones cortas
  después de un movimiento fuerte, interpretadas como pausa dentro de la
  tendencia previa antes de continuar en la misma dirección.

## Pros y contras del análisis técnico

- **Pros**: aplicable a cualquier activo líquido con historial de precios
  (acciones, [crypto](../crypto/bitcoin-ethereum.md), forex, índices);
  no requiere acceso a información financiera detallada del emisor;
  permite definir puntos de entrada, salida y stop-loss de forma
  objetiva y sistemática.
- **Contras**: es interpretativo, distintos analistas pueden leer el mismo
  gráfico de forma distinta; muchos patrones son efecto de sesgo de
  confirmación (se "ven" patrones donde hay ruido aleatorio); la evidencia
  académica sobre la efectividad predictiva del análisis técnico puro es
  mixta y no concluyente; ignora información fundamental que puede mover
  el precio de forma abrupta (resultados corporativos, noticias
  regulatorias).

## Relación con la gestión de riesgo

El análisis técnico define puntos de entrada y salida, pero no reemplaza
una gestión de riesgo adecuada: tamaño de posición, stop-loss y relación
riesgo-retorno definida de antemano siguen siendo necesarios (ver
[relación riesgo-retorno](riesgo-retorno.md) y los "elementos comunes a
toda estrategia" en
[estrategias de trading](estrategias-trading.md#elementos-comunes-a-toda-estrategia-de-trading)).

## Fuentes

Conceptos estándar de análisis técnico. No requiere cita de datos vigentes.

- Murphy, John J. *Technical Analysis of the Financial Markets* (1999).
  Referencia estándar de patrones de velas, gráficos e indicadores.
- Nison, Steve. *Japanese Candlestick Charting Techniques* (1991).
  Referencia estándar de patrones de velas japonesas.
- Bulkowski, Thomas N. *Encyclopedia of Chart Patterns* (2005). Estudio
  estadístico de fiabilidad de patrones gráficos.
- [Investopedia — Technical Analysis](https://www.investopedia.com/terms/t/technicalanalysis.asp)
