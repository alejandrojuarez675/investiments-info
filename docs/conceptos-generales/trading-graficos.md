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
futuros. Parte de tres premisas clásicas (Murphy, 1999):

1. **El precio lo descuenta todo**: toda la información disponible
   (fundamentales, expectativas, sentimiento del mercado) ya está reflejada
   en el precio actual, por lo que basta con estudiar el precio.
2. **El precio se mueve en tendencias**: una vez establecida, una
   tendencia tiene más probabilidad de continuar que de revertirse, hasta
   que aparece una señal clara de agotamiento.
3. **La historia tiende a repetirse**: los patrones de precio se repiten a
   lo largo del tiempo porque reflejan comportamientos psicológicos
   recurrentes de los participantes del mercado (miedo, codicia, FOMO).

Es la base sobre la que se apoyan la mayoría de las
[estrategias de trading de corto plazo](estrategias-trading.md) (scalping,
day trading, swing trading). Se contrapone al análisis fundamental, que
evalúa el valor de un activo a partir de datos económicos o financieros
subyacentes (resultados de una empresa, tasas de interés, balances,
flujos de caja). En la práctica, muchos participantes del mercado combinan
ambos enfoques: el análisis fundamental para decidir *qué* activo
comprar, y el análisis técnico para decidir *cuándo* entrar o salir.

## Tipos de gráficos

### Gráfico de líneas

Une los precios de cierre de cada período mediante una línea continua. Es
el más simple de leer y el que menos "ruido" visual genera, por lo que es
útil para identificar la tendencia general de largo plazo de un vistazo.
Su limitación principal es que descarta toda la información intradía
(apertura, máximo, mínimo), por lo que no permite ver la volatilidad
dentro de cada período ni patrones de velas.

### Gráfico de barras (OHLC)

Cada barra vertical representa un período y muestra cuatro datos: una
marca a la izquierda indica el precio de apertura (Open), una marca a la
derecha el precio de cierre (Close), y los extremos superior e inferior de
la barra indican el máximo (High) y el mínimo (Low). Da la misma
información que una vela japonesa pero es visualmente más difícil de leer
rápido, por lo que hoy es menos usado que el candlestick.

### Gráfico de velas japonesas (candlestick)

El más usado en trading moderno. Cada vela representa un período (1
minuto, 5 minutos, 1 hora, 1 día, 1 semana, según el marco temporal
elegido) y se compone de:

- **Cuerpo**: rectángulo entre el precio de apertura y el de cierre. Si el
  cierre es mayor que la apertura, la vela es alcista (tradicionalmente
  verde o blanca); si el cierre es menor, es bajista (tradicionalmente
  roja o negra).
- **Mechas o sombras (wicks/shadows)**: líneas finas por encima y por
  debajo del cuerpo que marcan el máximo y el mínimo alcanzados durante el
  período.

La ventaja frente al gráfico de barras es que el color y tamaño del
cuerpo comunican de forma inmediata quién dominó el período (compradores
o vendedores) y con qué fuerza, lo que facilita reconocer patrones de un
vistazo.

### Marco temporal (timeframe)

El mismo activo puede analizarse en distintos marcos temporales: 1
minuto y 5 minutos (usados en scalping), 15 minutos a 1 hora (day
trading), 4 horas y diario (swing trading), semanal y mensual (inversión
de largo plazo o análisis de tendencia macro). Una práctica habitual es el
**análisis multi-timeframe**: revisar un marco temporal mayor para
identificar la tendencia de fondo, y uno menor para afinar el punto de
entrada. Es común que un mismo activo muestre señales alcistas en un
timeframe y bajistas en otro simultáneamente, lo cual no es una
contradicción sino un reflejo de que la tendencia depende del horizonte
que se esté observando.

## Patrones de velas

Formaciones de una o pocas velas que sugieren posibles cambios o
continuaciones de tendencia. Se interpretan siempre en relación al
contexto (tendencia previa, nivel del gráfico donde aparecen, volumen que
las acompaña), nunca de forma aislada.

### Patrones de una sola vela

- **Doji**: apertura y cierre casi idénticos, formando una cruz o "+".
  Indica indecisión: ni compradores ni vendedores lograron imponerse
  durante el período. Su significado cambia según dónde aparece: un doji
  después de una tendencia fuerte (alcista o bajista) suele leerse como
  posible señal de agotamiento; en medio de un rango lateral no tiene
  mayor relevancia. Variantes: doji "piernas largas" (mechas largas a
  ambos lados), doji "lápida" (mecha larga solo hacia arriba) y doji
  "libélula" (mecha larga solo hacia abajo).
- **Martillo (hammer)**: cuerpo pequeño en la parte superior del rango del
  período, con una mecha inferior larga (al menos el doble del cuerpo) y
  mecha superior mínima o inexistente. Aparece al final de una tendencia
  bajista: sugiere que durante el período el precio cayó fuerte pero los
  compradores lo empujaron de vuelta hacia arriba, señal de posible
  reversión alcista.
- **Hombre colgado (hanging man)**: misma forma que el martillo, pero
  aparece al final de una tendencia alcista. La lectura es opuesta: la
  presión vendedora logró empujar el precio hacia abajo durante el
  período pese a que cerró cerca de la apertura, advirtiendo un posible
  agotamiento de la suba.
- **Martillo invertido (inverted hammer)**: cuerpo pequeño en la parte
  inferior del rango, con mecha superior larga. Aparece en tendencia
  bajista, sugiere presión compradora entrando aunque no haya logrado
  sostener el máximo del período.
- **Estrella fugaz (shooting star)**: misma forma que el martillo
  invertido, pero en el techo de una tendencia alcista. Señal de posible
  reversión bajista.
- **Marubozu**: vela sin mechas (o casi sin mechas), donde el cuerpo ocupa
  todo el rango del período. Indica dominio total de compradores
  (marubozu alcista) o vendedores (marubozu bajista) durante todo el
  período, sin ningún tipo de indecisión.

### Patrones de dos velas

- **Envolvente alcista (bullish engulfing)**: en tendencia bajista, una
  vela bajista pequeña es seguida por una vela alcista cuyo cuerpo cubre
  por completo el cuerpo de la vela anterior. Señal de que los
  compradores tomaron el control de forma abrupta.
- **Envolvente bajista (bearish engulfing)**: lo inverso, en tendencia
  alcista.
- **Piercing line (línea penetrante)**: en tendencia bajista, una vela
  bajista es seguida por una vela alcista que abre por debajo del cierre
  anterior pero cierra por encima del punto medio del cuerpo previo.
  Versión "parcial" de la envolvente alcista.
- **Nube negra (dark cloud cover)**: versión bajista de la piercing line,
  en tendencia alcista.
- **Tweezer top / tweezer bottom (pinzas)**: dos velas consecutivas con
  máximos (tweezer top) o mínimos (tweezer bottom) prácticamente
  idénticos, sugiriendo que el precio encontró un techo o piso que dos
  intentos consecutivos no lograron superar.

### Patrones de tres velas

- **Estrella de la mañana (morning star)**: en tendencia bajista, una
  vela bajista grande, seguida de una vela pequeña (de indecisión, tipo
  doji) que abre con un gap hacia abajo, y luego una vela alcista grande
  que cierra dentro del cuerpo de la primera vela. Patrón clásico de
  reversión alcista.
- **Estrella de la noche (evening star)**: la versión bajista, en
  tendencia alcista.
- **Tres cuervos negros (three black crows)**: tres velas bajistas
  consecutivas, cada una abriendo dentro del cuerpo de la anterior y
  cerrando en un mínimo cada vez más bajo. Señal fuerte de continuación o
  inicio bajista.
- **Tres soldados blancos (three white soldiers)**: la versión alcista.

Estos patrones son probabilísticos, no determinísticos: su fiabilidad
depende del contexto (tendencia previa, volumen, nivel donde aparecen) y
no garantizan el resultado de una operación. La mayoría de los analistas
recomienda esperar una "vela de confirmación" adicional antes de actuar
sobre un patrón de reversión, en lugar de operar apenas se completa el
patrón.

## Soportes y resistencias

- **Soporte**: nivel de precio donde históricamente la demanda ha sido
  suficiente para frenar una caída, porque suficientes compradores
  consideran ese precio "barato" y suficientes vendedores dejan de vender.
- **Resistencia**: nivel de precio donde históricamente la oferta ha
  frenado una suba, por el mecanismo inverso.

Algunas ideas adicionales sobre cómo se usan en la práctica:

- **Polaridad (role reversal)**: una resistencia que es rota de forma
  confirmada suele convertirse en un soporte a futuro (y viceversa), bajo
  la lógica de que quienes compraron justo en la ruptura defienden ese
  nivel si el precio vuelve a testearlo.
- **Niveles psicológicos**: números redondos (ej. USD 100, USD 50.000)
  suelen actuar como soportes/resistencias informales, simplemente porque
  muchos participantes colocan órdenes alrededor de esos valores.
- **Zonas, no líneas exactas**: en la práctica, soportes y resistencias
  rara vez son un precio exacto; se tratan como una zona o rango, ya que
  distintos participantes reaccionan en niveles ligeramente distintos.
- **Fuerza del nivel**: un soporte o resistencia se considera más fuerte
  cuantas más veces fue testeado sin romperse y cuanto mayor haya sido el
  volumen operado en esos testeos.

Estos niveles se usan tanto para anticipar rebotes como para el
[breakout trading](estrategias-trading.md), donde la ruptura confirmada de
un soporte o resistencia (idealmente con volumen elevado) se interpreta
como señal de continuación en esa dirección.

## Líneas, canales y estructura de tendencia

- **Línea de tendencia alcista**: se traza conectando dos o más mínimos
  ascendentes. Mientras el precio se mantenga por encima de esa línea, se
  interpreta que la tendencia alcista sigue vigente; una ruptura por debajo
  suele leerse como advertencia de cambio de tendencia.
- **Línea de tendencia bajista**: análoga, conectando máximos
  descendentes.
- **Canal de tendencia**: se forma trazando una segunda línea paralela a
  la línea de tendencia, que conecta los extremos opuestos (máximos en un
  canal alcista, mínimos en uno bajista). Define una zona dentro de la
  cual el precio suele oscilar mientras la tendencia se mantiene; el
  precio tocando el borde superior del canal suele interpretarse como
  zona de venta táctica, y el borde inferior como zona de compra táctica,
  dentro de la tendencia dominante.
- **Estructura de máximos y mínimos**: forma más elemental de identificar
  tendencia sin trazar ninguna línea. Una secuencia de máximos y mínimos
  cada vez más altos define una tendencia alcista; una secuencia de
  máximos y mínimos cada vez más bajos define una tendencia bajista; la
  ausencia de una secuencia clara (máximos y mínimos que no progresan en
  una dirección) define un rango o mercado lateral. El primer indicio
  técnico de que una tendencia alcista puede estar terminando suele ser
  la aparición de un mínimo que no logra superar al mínimo anterior
  (rompiendo la secuencia ascendente).
- **Retrocesos de Fibonacci**: herramienta que traza niveles horizontales
  (habitualmente 23,6%, 38,2%, 50%, 61,8% y 78,6%) entre un máximo y un
  mínimo relevantes, bajo la premisa de que los movimientos de corrección
  dentro de una tendencia tienden a detenerse cerca de esas proporciones
  antes de retomar la dirección original. Es una de las herramientas más
  discutidas del análisis técnico en cuanto a su validez predictiva.

## Indicadores técnicos

Los indicadores son cálculos matemáticos aplicados sobre el precio y/o el
volumen, que se grafican junto al precio (superpuestos) o debajo
(en un panel aparte, "oscilador"). Se agrupan habitualmente en cuatro
categorías: tendencia, momentum, volatilidad y volumen.

### Indicadores de tendencia

- **Medias móviles simples (SMA)**: promedio aritmético del precio de
  cierre en una ventana de N períodos (ej. SMA de 20, 50 o 200 sesiones).
  Suaviza el ruido de corto plazo para mostrar la dirección de fondo.
  Cuanto mayor el período, más suave y más rezagada (lagging) es la señal.
- **Medias móviles exponenciales (EMA)**: similar a la SMA pero da más
  peso a los precios recientes, por lo que reacciona más rápido a cambios
  de precio. Preferida en marcos temporales cortos por su menor retraso.
- **Cruces de medias móviles**: cuando una media corta cruza por encima
  de una media larga se conoce como "cruce dorado" (golden cross),
  señal alcista; cuando cruza por debajo, "cruce de la muerte" (death
  cross), señal bajista. El ejemplo más citado es el cruce entre la media
  de 50 y la de 200 sesiones diarias, seguido habitualmente en marcos de
  mediano-largo plazo.
- **ADX (Average Directional Index)**: mide la *fuerza* de una tendencia
  (no su dirección) en una escala de 0 a 100. Valores por encima de 25
  suelen interpretarse como tendencia fuerte (favorable para estrategias
  de seguimiento de tendencia); valores por debajo de 20, como mercado sin
  tendencia clara (favorable para estrategias de rango).
- **Parabolic SAR**: serie de puntos por encima o por debajo del precio
  que indican la dirección de la tendencia y se usan habitualmente como
  referencia dinámica para trailing stops (ajustar el stop-loss a medida
  que la posición gana a favor).
- **Ichimoku Kinko Hyo**: sistema japonés que combina varias medias y una
  "nube" (kumo) proyectada hacia adelante para mostrar de un vistazo
  tendencia, momentum y niveles de soporte/resistencia dinámicos. Más
  complejo de interpretar que una media móvil simple, pero condensa
  varias señales en un solo indicador.

### Indicadores de momentum

- **RSI (Relative Strength Index)**: mide la velocidad y magnitud de los
  cambios de precio recientes en una escala de 0 a 100, calculado a
  partir de la relación entre subas y bajas promedio en un período
  (habitualmente 14 sesiones). Valores por encima de 70 suelen
  interpretarse como sobrecompra (posible corrección a la baja); por
  debajo de 30, como sobreventa (posible rebote alcista). También se usa
  para detectar **divergencias**: si el precio marca un máximo más alto
  pero el RSI marca un máximo más bajo (divergencia bajista), se
  interpreta como debilitamiento del momentum pese a que el precio sigue
  subiendo, advertencia de posible reversión.
- **MACD (Moving Average Convergence Divergence)**: se calcula restando
  una EMA larga (habitualmente 26 períodos) de una EMA corta
  (habitualmente 12 períodos), dando la "línea MACD"; sobre esa línea se
  calcula otra EMA (habitualmente 9 períodos) llamada "línea de señal". Se
  opera el cruce entre ambas líneas (cruce alcista cuando MACD supera a la
  señal, bajista cuando cae por debajo) y el histograma (la diferencia
  entre ambas líneas) para medir la aceleración del momentum.
- **Estocástico (stochastic oscillator)**: compara el precio de cierre
  actual con el rango de precios (máximo-mínimo) de un período reciente,
  también en escala 0-100. Igual que el RSI, se usa para identificar
  sobrecompra (>80) y sobreventa (<20), y es especialmente sensible en
  mercados laterales.
- **Momentum / Rate of Change (ROC)**: mide el porcentaje de cambio del
  precio actual respecto al precio de N períodos atrás, indicando si la
  velocidad del movimiento se está acelerando o desacelerando.

### Indicadores de volatilidad

- **Bandas de Bollinger**: una media móvil central (habitualmente SMA de
  20 períodos) con dos bandas trazadas a una distancia de N desviaciones
  estándar (habitualmente 2) por encima y por debajo. Las bandas se
  expanden cuando la volatilidad sube y se contraen cuando baja. Una
  contracción marcada ("squeeze") suele preceder a un movimiento fuerte
  de precio (sin indicar de antemano la dirección); el precio tocando la
  banda superior o inferior no es automáticamente señal de venta o
  compra, sino que debe leerse junto con la tendencia de fondo.
- **ATR (Average True Range)**: mide la volatilidad promedio del activo en
  términos absolutos (no direccionales), útil sobre todo para calibrar el
  tamaño de los stop-loss de forma proporcional a cuánto se mueve el
  activo habitualmente, en lugar de usar un porcentaje fijo arbitrario.

### Indicadores de volumen

- **Volumen**: cantidad de unidades (acciones, contratos, criptomonedas)
  negociadas en un período. Se usa para confirmar la fuerza de un
  movimiento: una ruptura de resistencia con volumen alto se considera
  más confiable que una con volumen bajo, porque refleja participación
  real del mercado y no un movimiento aislado de pocos operadores.
- **OBV (On-Balance Volume)**: acumula el volumen sumándolo en días
  alcistas y restándolo en días bajistas, generando una línea que se usa
  para detectar divergencias entre volumen y precio (ej. precio subiendo
  con OBV plano o bajando, señal de que la suba no está acompañada por
  volumen real).
- **VWAP (Volume Weighted Average Price)**: precio promedio ponderado por
  volumen a lo largo de la sesión, muy usado en day trading como
  referencia de "precio justo" intradía: operar por encima del VWAP se
  interpreta como sesgo comprador, por debajo como sesgo vendedor.

## Patrones gráficos (chart patterns)

Formaciones que se identifican a partir de varias velas o de la forma
general del gráfico en un período más extenso, en lugar de una sola vela.
Se dividen habitualmente en patrones de reversión y de continuación.

### Patrones de reversión

- **Cabeza y hombros (head and shoulders)**: en tendencia alcista, tres
  máximos consecutivos donde el central (cabeza) es más alto que los
  laterales (hombros), que son de altura similar entre sí. La línea que
  conecta los dos mínimos entre picos se llama "línea clavicular" (neckline);
  la ruptura confirmada de esa línea hacia abajo se interpreta como
  confirmación del patrón y señal de reversión bajista. La proyección de
  precio objetivo habitual es la distancia entre la cabeza y la línea
  clavicular, proyectada hacia abajo desde el punto de ruptura.
- **Cabeza y hombros invertido**: versión especular en tendencia bajista,
  señal de reversión alcista.
- **Doble techo (double top)**: dos máximos similares consecutivos con un
  mínimo intermedio, en tendencia alcista. La ruptura del mínimo
  intermedio confirma el patrón. Señal de reversión bajista.
- **Doble piso (double bottom)**: la versión especular, señal de
  reversión alcista.
- **Triple techo / triple piso**: variantes con tres máximos o mínimos en
  lugar de dos, generalmente interpretadas como señal más fuerte que la
  versión doble por la mayor cantidad de intentos fallidos de romper el
  nivel.
- **Techo/piso redondeado (rounding top/bottom)**: cambio de tendencia
  gradual, sin picos definidos, formando una curva. Suele desarrollarse en
  marcos temporales más largos que los patrones anteriores.

### Patrones de continuación

- **Triángulo simétrico**: consolidación entre una línea de resistencia
  descendente y una de soporte ascendente que convergen. No anticipa
  dirección por sí mismo; se opera la ruptura hacia el lado que finalmente
  ocurra, idealmente con aumento de volumen.
- **Triángulo ascendente**: resistencia horizontal con soporte ascendente,
  interpretado con sesgo alcista (los compradores van pagando precios
  cada vez más altos, presionando la resistencia).
- **Triángulo descendente**: soporte horizontal con resistencia
  descendente, sesgo bajista.
- **Banderas (flags)**: consolidación breve y en pendiente contraria al
  movimiento previo (ej. tras una suba fuerte, un pequeño canal
  descendente), interpretada como pausa antes de continuar la tendencia
  original.
- **Banderines (pennants)**: similar a la bandera pero con forma de
  pequeño triángulo simétrico en lugar de canal.
- **Rectángulo (trading range)**: el precio oscila entre un soporte y una
  resistencia horizontales durante un tiempo, sin una dirección clara,
  hasta que rompe hacia uno de los dos lados.
- **Cuña (wedge)**: similar al triángulo pero con ambas líneas (soporte y
  resistencia) inclinadas en la misma dirección. Una cuña ascendente
  dentro de una tendencia alcista se interpreta habitualmente como señal
  de agotamiento (sesgo bajista pese a la pendiente alcista de las líneas);
  una cuña descendente en tendencia bajista se interpreta de forma
  análoga como posible señal alcista.

Para todos estos patrones, la literatura de análisis técnico (Bulkowski,
2005) advierte que su tasa de éxito histórica varía significativamente
según el activo, el marco temporal y la confirmación con volumen, y que
ninguno funciona de forma consistente el 100% de las veces.

## Pros y contras del análisis técnico

- **Pros**: aplicable a cualquier activo líquido con historial de precios
  (acciones, [crypto](../crypto/bitcoin-ethereum.md), forex, índices);
  no requiere acceso a información financiera detallada del emisor;
  permite definir puntos de entrada, salida y stop-loss de forma
  objetiva y sistemática; es fácilmente automatizable (ver
  [trading algorítmico](estrategias-trading.md#trading-algorítmico));
  funciona igual de bien en cualquier mercado y marco temporal, lo que
  permite aplicar el mismo marco de análisis a activos muy distintos.
- **Contras**: es interpretativo, distintos analistas pueden leer el
  mismo gráfico de forma distinta y llegar a conclusiones opuestas;
  muchos patrones son efecto de sesgo de confirmación (se "ven" patrones
  donde en realidad hay ruido aleatorio, un fenómeno conocido como
  pareidolia aplicada a gráficos de precios); la evidencia académica
  sobre la efectividad predictiva del análisis técnico puro es mixta y no
  concluyente, y contrasta con la hipótesis del mercado eficiente, que
  sostiene que los precios ya reflejan toda la información pública
  disponible y por lo tanto los patrones pasados no deberían predecir
  movimientos futuros; ignora información fundamental que puede mover el
  precio de forma abrupta e imprevisible (resultados corporativos,
  noticias regulatorias, eventos macroeconómicos); un mismo indicador
  puede dar señales contradictorias según el período elegido (fenómeno
  conocido como "curve fitting" cuando se optimiza en exceso sobre datos
  históricos).

## Relación con la gestión de riesgo

El análisis técnico define puntos de entrada y salida, pero no reemplaza
una gestión de riesgo adecuada: tamaño de posición, stop-loss y relación
riesgo-retorno definida de antemano siguen siendo necesarios (ver
[relación riesgo-retorno](riesgo-retorno.md) y los "elementos comunes a
toda estrategia" en
[estrategias de trading](estrategias-trading.md#elementos-comunes-a-toda-estrategia-de-trading)).
En la práctica, muchos traders ubican el stop-loss en un nivel técnico
relevante (por debajo de un soporte, por encima de una resistencia, o a
una distancia calculada con el ATR) en lugar de un porcentaje fijo
arbitrario, de modo que la salida esté justificada por la propia
estructura del gráfico.

## Fuentes

Conceptos estándar de análisis técnico. No requiere cita de datos vigentes.

- Murphy, John J. *Technical Analysis of the Financial Markets* (1999).
  Referencia estándar de patrones de velas, gráficos e indicadores.
- Nison, Steve. *Japanese Candlestick Charting Techniques* (1991).
  Referencia estándar de patrones de velas japonesas.
- Bulkowski, Thomas N. *Encyclopedia of Chart Patterns* (2005). Estudio
  estadístico de fiabilidad de patrones gráficos.
- Wilder, J. Welles. *New Concepts in Technical Trading Systems* (1978).
  Origen del RSI, ADX, Parabolic SAR y ATR.
- Malkiel, Burton G. *A Random Walk Down Wall Street* (1973 y ediciones
  posteriores). Exposición clásica de la hipótesis del mercado eficiente
  y su crítica al análisis técnico.
- [Investopedia — Technical Analysis](https://www.investopedia.com/terms/t/technicalanalysis.asp)
