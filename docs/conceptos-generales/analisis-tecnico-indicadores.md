---
title: "Análisis técnico: indicadores de tendencia, momentum, volatilidad y volumen"
tema: conceptos-generales
tags: [analisis-tecnico, indicadores, rsi, macd, bollinger, medias-moviles]
nivel: avanzado
ultima_revision: 2026-07-20
---

# Análisis técnico: indicadores de tendencia, momentum, volatilidad y volumen

Los indicadores son cálculos matemáticos aplicados sobre el precio y/o el
volumen, que se grafican junto al precio (superpuestos) o debajo (en un
panel aparte, "oscilador"). Se agrupan habitualmente en cuatro categorías:
tendencia, momentum, volatilidad y volumen. Para los patrones visuales
(velas, soportes, chart patterns) ver
[Gráficos y patrones](analisis-tecnico-graficos-patrones.md); para el
marco teórico ver [Fundamentos](analisis-tecnico-fundamentos.md).

## Indicadores de tendencia

### Medias móviles simples (SMA)

Promedio aritmético del precio de cierre en una ventana de N períodos.

```
SMA(N) = (P₁ + P₂ + ... + Pₙ) / N
```

Ejemplo: SMA de 5 sesiones con cierres de $100, $102, $101, $105, $107 →
`(100+102+101+105+107) / 5 = 103`. Suaviza el ruido de corto plazo para
mostrar la dirección de fondo. Cuanto mayor el período, más suave y más
rezagada (*lagging*) es la señal: una SMA de 200 sesiones reacciona mucho
más lento a un cambio de precio que una SMA de 20.

### Medias móviles exponenciales (EMA)

Similar a la SMA pero da más peso a los precios recientes mediante un
factor de suavizado (*smoothing factor*, `k = 2/(N+1)`):

```
EMA_hoy = Precio_hoy × k + EMA_ayer × (1 − k)
```

Ejemplo: EMA de 10 períodos (`k = 2/11 ≈ 0,182`) con EMA anterior de $100
y precio de hoy de $106 → `106 × 0,182 + 100 × 0,818 ≈ 101,09`. Reacciona
más rápido a cambios de precio que la SMA, por lo que se prefiere en
marcos temporales cortos por su menor retraso.

### Cruces de medias móviles

Cuando una media corta cruza por encima de una media larga se conoce como
"cruce dorado" (*golden cross*), señal alcista; cuando cruza por debajo,
"cruce de la muerte" (*death cross*), señal bajista. El ejemplo más citado
es el cruce entre la media de 50 y la de 200 sesiones diarias, seguido
habitualmente en marcos de mediano-largo plazo. Es una señal *lagging*
por definición (se confirma después de que el movimiento ya empezó), por
lo que suele criticarse por llegar "tarde" tanto en la entrada como en la
salida.

### ADX (Average Directional Index)

Mide la *fuerza* de una tendencia (no su dirección) en una escala de 0 a
100, desarrollado por Wilder (1978) junto con RSI, Parabolic SAR y ATR.
Valores por encima de 25 suelen interpretarse como tendencia fuerte
(favorable para estrategias de seguimiento de tendencia); valores por
debajo de 20, como mercado sin tendencia clara (favorable para
estrategias de rango). Se calcula a partir de los indicadores direccionales
+DI y −DI (que sí indican dirección); el ADX es el promedio suavizado de
la diferencia normalizada entre ambos.

### Parabolic SAR

Serie de puntos por encima o por debajo del precio que indican la
dirección de la tendencia y se usan habitualmente como referencia dinámica
para *trailing stops* (ajustar el stop-loss a medida que la posición gana
a favor). El punto SAR se acelera a medida que la tendencia se mantiene,
haciendo que el stop se ajuste cada vez más cerca del precio actual.

### Ichimoku Kinko Hyo

Sistema japonés que combina varias medias y una "nube" (*kumo*) proyectada
hacia adelante para mostrar de un vistazo tendencia, momentum y niveles de
soporte/resistencia dinámicos. Componentes principales: Tenkan-sen
(conversión, promedio de máximo y mínimo de 9 períodos), Kijun-sen (base,
igual cálculo a 26 períodos), Senkou Span A y B (que forman los bordes de
la nube, proyectados 26 períodos hacia adelante) y Chikou Span (línea
rezagada, el cierre actual proyectado 26 períodos hacia atrás). Más
complejo de interpretar que una media móvil simple, pero condensa varias
señales en un solo indicador: el precio por encima de la nube se
interpreta como tendencia alcista, por debajo como bajista, y dentro de
la nube como indecisión.

## Indicadores de momentum

### RSI (Relative Strength Index)

Mide la velocidad y magnitud de los cambios de precio recientes en una
escala de 0 a 100, desarrollado por Wilder (1978). Se calcula a partir de
la relación entre subas y bajas promedio en un período (habitualmente 14
sesiones):

```
RS = Promedio de subas / Promedio de bajas
RSI = 100 − [100 / (1 + RS)]
```

Ejemplo simplificado: si en 14 sesiones el promedio de subas fue 1,2% y
el promedio de bajas fue 0,8% → `RS = 1,2/0,8 = 1,5` →
`RSI = 100 − 100/2,5 = 60`. Valores por encima de 70 suelen interpretarse
como sobrecompra (posible corrección a la baja); por debajo de 30, como
sobreventa (posible rebote alcista). También se usa para detectar
**divergencias**: si el precio marca un máximo más alto pero el RSI marca
un máximo más bajo (divergencia bajista), se interpreta como
debilitamiento del momentum pese a que el precio sigue subiendo,
advertencia de posible reversión.

### MACD (Moving Average Convergence Divergence)

Se calcula restando una EMA larga (habitualmente 26 períodos) de una EMA
corta (habitualmente 12 períodos), dando la "línea MACD":

```
MACD = EMA(12) − EMA(26)
Línea de señal = EMA(9) de la línea MACD
Histograma = MACD − Línea de señal
```

Se opera el cruce entre ambas líneas (cruce alcista cuando MACD supera a
la señal, bajista cuando cae por debajo) y el histograma (la diferencia
entre ambas líneas) para medir la aceleración del momentum: un histograma
creciente indica que el momentum se está acelerando en la dirección
vigente, uno decreciente sugiere pérdida de fuerza aunque el precio siga
en la misma dirección.

### Estocástico (stochastic oscillator)

Compara el precio de cierre actual con el rango de precios (máximo-mínimo)
de un período reciente, también en escala 0-100:

```
%K = 100 × (Cierre − Mínimo_N) / (Máximo_N − Mínimo_N)
```

donde N es habitualmente 14 períodos; %D es una media móvil de 3 períodos
de %K, usada como línea de señal. Igual que el RSI, se usa para
identificar sobrecompra (>80) y sobreventa (<20), y es especialmente
sensible en mercados laterales, donde genera más señales que en mercados
fuertemente tendenciales.

### Momentum / Rate of Change (ROC)

Mide el porcentaje de cambio del precio actual respecto al precio de N
períodos atrás:

```
ROC = [(Precio_hoy − Precio_hace_N_períodos) / Precio_hace_N_períodos] × 100
```

Indica si la velocidad del movimiento se está acelerando o desacelerando;
un ROC que se achica mientras el precio sigue subiendo es una forma
simple de detectar pérdida de momentum sin calcular un oscilador más
complejo.

## Indicadores de volatilidad

### Bandas de Bollinger

Una media móvil central (habitualmente SMA de 20 períodos) con dos bandas
trazadas a una distancia de N desviaciones estándar (habitualmente 2) por
encima y por debajo:

```
Banda superior = SMA(20) + 2 × σ(20)
Banda inferior = SMA(20) − 2 × σ(20)
```

donde σ(20) es el desvío estándar del precio en los últimos 20 períodos
(ver [cálculo de volatilidad](riesgo-retorno.md#cómo-se-calcula-la-volatilidad-en-la-práctica)).
Las bandas se expanden cuando la volatilidad sube y se contraen cuando
baja. Una contracción marcada (*squeeze*) suele preceder a un movimiento
fuerte de precio (sin indicar de antemano la dirección); el precio
tocando la banda superior o inferior no es automáticamente señal de venta
o compra, sino que debe leerse junto con la tendencia de fondo (en una
tendencia alcista fuerte, el precio puede "caminar" pegado a la banda
superior durante un tiempo prolongado sin que eso signifique sobrecompra
inminente).

### ATR (Average True Range)

Mide la volatilidad promedio del activo en términos absolutos (no
direccionales). El "rango verdadero" (*True Range*) de un período es el
mayor entre: máximo menos mínimo del período, máximo menos cierre
anterior, y cierre anterior menos mínimo; el ATR es su media móvil
(habitualmente 14 períodos). Es útil sobre todo para calibrar el tamaño de
los stop-loss de forma proporcional a cuánto se mueve el activo
habitualmente, en lugar de usar un porcentaje fijo arbitrario. Ejemplo: si
el ATR(14) de un activo es $5 y el precio actual es $100, un stop-loss a
"2×ATR" ubicaría la salida en $90 en lugar de un genérico "5% por debajo"
que ignoraría si ese activo suele moverse mucho o poco día a día — ver
también [position sizing](estrategias-trading.md#gestión-de-riesgo-y-position-sizing).

## Indicadores de volumen

### Volumen

Cantidad de unidades (acciones, contratos, criptomonedas) negociadas en un
período. Se usa para confirmar la fuerza de un movimiento: una ruptura de
resistencia con volumen alto se considera más confiable que una con
volumen bajo, porque refleja participación real del mercado y no un
movimiento aislado de pocos operadores.

### OBV (On-Balance Volume)

Acumula el volumen sumándolo en días alcistas y restándolo en días
bajistas:

```
Si Cierre_hoy > Cierre_ayer:  OBV = OBV_ayer + Volumen_hoy
Si Cierre_hoy < Cierre_ayer:  OBV = OBV_ayer − Volumen_hoy
Si Cierre_hoy = Cierre_ayer:  OBV = OBV_ayer
```

Genera una línea que se usa para detectar divergencias entre volumen y
precio (ej. precio subiendo con OBV plano o bajando, señal de que la suba
no está acompañada por volumen real y podría ser menos sostenible).

### VWAP (Volume Weighted Average Price)

Precio promedio ponderado por volumen a lo largo de la sesión:

```
VWAP = Σ(Precio_i × Volumen_i) / Σ(Volumen_i)
```

Muy usado en day trading como referencia de "precio justo" intradía:
operar por encima del VWAP se interpreta como sesgo comprador, por debajo
como sesgo vendedor. A diferencia de una media móvil, el VWAP se reinicia
cada sesión (no es acumulativo entre días), lo que lo hace específico para
el trading intradía.

## Combinar indicadores: evitar la redundancia

Un error común es apilar muchos indicadores de la misma categoría (ej.
RSI + Estocástico + ROC, los tres de momentum), que tienden a dar señales
redundantes porque miden fenómenos similares con fórmulas parecidas. Una
práctica más robusta es combinar indicadores de categorías distintas —por
ejemplo, un indicador de tendencia (media móvil) para definir el sesgo
general, uno de momentum (RSI o MACD) para el timing de entrada, y uno de
volumen para confirmar la fuerza del movimiento— en lugar de sumar
indicadores redundantes que en la práctica no agregan información nueva y
solo generan una falsa sensación de "confirmación múltiple".

## Fuentes

Conceptos y fórmulas estándar de análisis técnico. No requiere cita de
datos vigentes; los ejemplos numéricos son ilustrativos.

- Wilder, J. Welles. *New Concepts in Technical Trading Systems* (1978).
  Origen del RSI, ADX, Parabolic SAR y ATR.
- Murphy, John J. *Technical Analysis of the Financial Markets* (1999).
  Referencia estándar de indicadores técnicos.
- [Investopedia — Technical Indicators](https://www.investopedia.com/terms/t/technicalindicator.asp)
