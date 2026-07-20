---
title: "Estrategias de trading de corto plazo"
tema: conceptos-generales
tags: [trading, corto-plazo, especulacion, analisis-tecnico, gestion-de-riesgo]
nivel: avanzado
ultima_revision: 2026-07-20
---

# Estrategias de trading de corto plazo

El trading es la práctica de comprar y vender activos en horizontes cortos
(de segundos a semanas) buscando aprovechar movimientos de precio, en
contraste con la inversión de largo plazo, que busca capturar la
revalorización de un activo a lo largo de años (ver
`estrategias-inversion-largo-plazo.md`). Requiere más tiempo dedicado,
tolerancia al riesgo y, en general, conlleva mayores costos por comisiones y
mayor carga impositiva por rotación frecuente.

## Scalping

Consiste en abrir y cerrar posiciones en cuestión de segundos a minutos,
buscando ganancias pequeñas mediante un volumen alto de operaciones.
Depende de baja latencia de ejecución, spreads reducidos y comisiones bajas,
porque el margen por operación es mínimo. Es la modalidad más demandante en
tiempo y atención, y la más sensible a costos de transacción.

## Day trading (trading intradía)

Las posiciones se abren y cierran dentro del mismo día, sin dejar
exposición abierta de una jornada a otra (evita el riesgo de gaps
overnight). Técnicas habituales:

- **Ruptura de rango de apertura (opening range breakout)**: operar la
  ruptura del rango de precio formado en los primeros minutos de la sesión.
- **Retroceso a medias móviles cortas**: comprar o vender cuando el precio
  retrocede hacia una media móvil de corto plazo dentro de una tendencia
  intradía.
- **Zonas de liquidez**: identificar niveles donde se concentran órdenes
  (soportes/resistencias) para entradas y salidas.

## Swing trading

Busca capturar movimientos de precio que se desarrollan en un lapso de
varios días a pocas semanas, apoyándose en análisis técnico (patrones de
precio, medias móviles, indicadores de momentum) combinado con el contexto
de tendencia de mediano plazo. Requiere menos dedicación horaria que el day
trading o el scalping, ya que las posiciones se mantienen abiertas de una
sesión a otra.

## Trend trading (seguimiento de tendencia)

Consiste en identificar la dirección dominante del precio (alcista,
bajista o lateral) y operar a favor de esa dirección hasta que aparezcan
señales de agotamiento o reversión. Puede aplicarse en horizontes que van
de días a varios meses. Suele combinarse con indicadores de tendencia
(medias móviles, ADX) y una relación riesgo-retorno definida de antemano
(ver `riesgo-retorno.md`).

## Breakout trading (ruptura de rangos)

Se opera cuando el precio rompe un nivel relevante (soporte, resistencia o
rango de consolidación) con volumen que confirme la ruptura, bajo la
premisa de que el movimiento va a continuar en esa dirección. El riesgo
principal son las "falsas rupturas" (breakouts que se revierten
rápidamente), por lo que suele usarse junto con una orden de stop-loss
ajustada.

## Trading algorítmico

Ejecución de estrategias (cualquiera de las anteriores u otras) mediante
programas que abren y cierran posiciones automáticamente según reglas
predefinidas, sin intervención manual en cada operación. Permite mayor
velocidad de ejecución y elimina el sesgo emocional, pero requiere
validar la estrategia con datos históricos (backtesting) antes de
operarla con capital real, y sigue expuesta a cambios de régimen de
mercado que invaliden las reglas programadas.

## Análisis técnico como base operativa

Todas las modalidades anteriores se apoyan, en mayor o menor medida, en el
análisis técnico para decidir puntos de entrada y salida. Ver
[Análisis técnico: fundamentos](analisis-tecnico-fundamentos.md) para el
marco teórico, [gráficos y patrones](analisis-tecnico-graficos-patrones.md)
para las herramientas visuales (velas, soportes, chart patterns) e
[indicadores técnicos](analisis-tecnico-indicadores.md) para las
herramientas de cálculo (medias móviles, RSI, MACD, Bandas de Bollinger,
entre otros).

## Gestión de riesgo y position sizing

La gestión de riesgo por operación es, según la literatura de trading
(Elder, 1993; Schwager, 1989 y secuelas), el factor que más diferencia a
un trader que sobrevive en el largo plazo de uno que no, incluso por
encima de la calidad de las señales de entrada.

### Regla del 1-2% por operación

Práctica estándar: no arriesgar más de un 1-2% del capital total de la
cuenta en una sola operación (entendiendo por "riesgo" la pérdida
potencial si se toca el stop-loss, no el tamaño nominal de la posición).
El tamaño de posición se deriva de esa regla, no al revés:

```
Tamaño de posición = (Capital total × % de riesgo) / (Precio de entrada − Precio de stop-loss)
```

**Ejemplo numérico**: cuenta de $10.000.000 (pesos o cualquier moneda),
riesgo del 1% por operación ($100.000), entrada en $500 con stop-loss en
$480 (distancia de riesgo de $20 por unidad):

```
Tamaño de posición = $100.000 / $20 = 5.000 unidades
Valor nominal de la posición = 5.000 × $500 = $2.500.000 (25% del capital)
```

Nótese que el riesgo real (1% del capital) es mucho menor que el tamaño
nominal de la posición (25% del capital): la posición completa no se
pierde salvo un evento extremo (gap, falta de liquidez), pero el marco de
gestión de riesgo se calcula sobre la pérdida esperada al stop-loss, no
sobre el capital comprometido.

### Relación riesgo-retorno (R múltiplo)

Antes de entrar en una operación, se define cuánto se puede ganar frente
a cuánto se puede perder, expresado en "múltiplos de R" (donde R es la
distancia de riesgo definida arriba). Una operación con stop-loss a $20 de
distancia y objetivo de ganancia a $60 de distancia tiene una relación
riesgo-retorno de 1:3 (arriesga 1R para ganar 3R). Con una relación 1:3,
una estrategia puede ser rentable en el largo plazo incluso con una tasa
de acierto menor al 50%: por ejemplo, con 40% de aciertos, cada 10
operaciones se ganan en promedio `4 × 3R = 12R` y se pierden `6 × 1R = 6R`,
para un resultado neto de `+6R` cada 10 operaciones.

### Stop-loss y trailing stop

- **Stop-loss fijo**: orden que cierra la posición automáticamente si el
  precio llega a un nivel predefinido, limitando la pérdida máxima de la
  operación. Ver [ATR como referencia para calibrar la distancia del
  stop](analisis-tecnico-indicadores.md#atr-average-true-range) en lugar
  de un porcentaje arbitrario.
- **Trailing stop**: stop-loss que se ajusta automáticamente a favor de la
  posición a medida que el precio se mueve favorablemente, buscando
  proteger ganancias no realizadas sin cerrar la posición prematuramente.
  El [Parabolic SAR](analisis-tecnico-indicadores.md#parabolic-sar) es una
  herramienta común para calcular un trailing stop dinámico.

## Psicología del trading

La literatura de trading (Elder, 1993) identifica sesgos psicológicos
recurrentes que afectan el desempeño incluso de traders con buenas
estrategias técnicas:

- **Aversión a la pérdida**: tendencia a cerrar posiciones ganadoras
  demasiado pronto (por miedo a perder la ganancia) y mantener posiciones
  perdedoras demasiado tiempo (por negarse a aceptar la pérdida),
  invirtiendo la relación riesgo-retorno planeada.
- **Sobreoperar (overtrading)**: abrir operaciones por aburrimiento o
  necesidad de "estar en el mercado" en lugar de esperar setups que
  cumplan los criterios definidos de antemano, lo que incrementa costos de
  transacción sin mejorar el resultado esperado.
- **Revenge trading**: intentar recuperar una pérdida de forma inmediata
  con una operación de mayor tamaño o peor planificada, generalmente
  agravando la pérdida original.
- **Sesgo de recencia**: dar demasiado peso a las últimas operaciones
  (una racha ganadora genera exceso de confianza, una racha perdedora
  genera parálisis), en lugar de evaluar la estrategia sobre una muestra
  estadísticamente significativa de operaciones.

La forma estándar de mitigar estos sesgos es definir un **plan de
trading** por escrito (criterios de entrada, salida, tamaño de posición y
gestión de riesgo) antes de operar, y llevar un registro (*trading
journal*) de cada operación para evaluar el desempeño de forma objetiva en
lugar de por memoria selectiva.

## Elementos comunes a toda estrategia de trading

- **Gestión de riesgo por operación**: definir de antemano cuánto capital
  se arriesga en cada posición (habitualmente un porcentaje pequeño del
  capital total, ver regla del 1-2% arriba) y usar stop-loss.
- **Relación riesgo-retorno**: evaluar cuánto se puede ganar frente a
  cuánto se puede perder antes de entrar en una operación (ver
  `riesgo-retorno.md`).
- **Costos de transacción**: comisiones, spread y slippage impactan más
  cuanto mayor es la frecuencia de operaciones, y pueden erosionar
  estrategias que en el papel son rentables.

## Limitaciones generales del trading de corto plazo

- La evidencia empírica muestra que la mayoría de los traders minoristas
  pierde dinero de forma sostenida en el tiempo, especialmente en
  modalidades de alta frecuencia como scalping y day trading.
- Requiere dedicación de tiempo significativa y disciplina emocional para
  seguir el plan de trading pese a pérdidas.
- No es intercambiable con "invertir": el trading especula sobre
  movimientos de precio de corto plazo, mientras que la inversión de largo
  plazo busca capturar el crecimiento fundamental de un activo o negocio.

## Fuentes

Conceptos estándar de análisis técnico y trading. No requiere cita de
datos vigentes.

- Murphy, John J. *Technical Analysis of the Financial Markets* (1999).
  Referencia estándar de análisis técnico, tendencias y patrones de precio.
- Elder, Alexander. *Trading for a Living* (1993). Gestión de riesgo y
  psicología del trading de corto plazo.
- Schwager, Jack D. *Market Wizards* (1989) y secuelas. Entrevistas a
  traders profesionales sobre metodologías de trading.
- Barber, Brad M. y Odean, Terrance. *Trading Is Hazardous to Your Wealth*
  (Journal of Finance, 2000). Evidencia académica sobre el desempeño de
  traders minoristas.
- [Investopedia — Day Trading Strategies for Beginners](https://www.investopedia.com/articles/trading/06/daytradingretail.asp)
- [IG — Las mejores estrategias de trading para operar en 2026](https://www.ig.com/es/ideas-de-trading-y-noticias/las-mejores-estrategias-de-trading-para-operar-en-2026-260114)
