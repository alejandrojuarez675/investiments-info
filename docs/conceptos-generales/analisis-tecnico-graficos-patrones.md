---
title: "Análisis técnico: gráficos, velas y patrones de precio"
tema: conceptos-generales
tags: [analisis-tecnico, graficos, velas, patrones, soportes-resistencias]
nivel: intermedio
ultima_revision: 2026-07-20
---

# Análisis técnico: gráficos, velas y patrones de precio

Este documento cubre las herramientas visuales del análisis técnico: tipos
de gráficos, patrones de velas japonesas, patrones gráficos de mayor
escala, soportes/resistencias y estructura de tendencia. Para el marco
teórico y la crítica académica ver
[Análisis técnico: fundamentos](analisis-tecnico-fundamentos.md); para los
indicadores calculados matemáticamente ver
[Indicadores técnicos](analisis-tecnico-indicadores.md).

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

El más usado en trading moderno. Origen histórico en el mercado de arroz
japonés del siglo XVIII (atribuido a Munehisa Homma), popularizado en
Occidente por Nison (1991). Cada vela representa un período (1 minuto, 5
minutos, 1 hora, 1 día, 1 semana, según el marco temporal elegido) y se
compone de:

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

### Gráfico de Heikin-Ashi

Variante del candlestick que suaviza el ruido de corto plazo mediante un
cálculo modificado: la apertura de cada vela es el promedio entre apertura
y cierre de la vela anterior, y el cierre es el promedio de apertura,
cierre, máximo y mínimo del período actual. El resultado son velas más
"limpias" que facilitan ver la tendencia de fondo, a costa de distorsionar
el precio real de apertura/cierre (no debe usarse para calcular niveles
exactos de entrada/salida, solo para lectura visual de tendencia).

### Marco temporal (timeframe)

El mismo activo puede analizarse en distintos marcos temporales: 1 minuto
y 5 minutos (usados en scalping), 15 minutos a 1 hora (day trading), 4
horas y diario (swing trading), semanal y mensual (inversión de largo
plazo o análisis de tendencia macro) — ver
[estrategias de trading](estrategias-trading.md) para el detalle de cada
modalidad. Una práctica habitual es el **análisis multi-timeframe**:
revisar un marco temporal mayor para identificar la tendencia de fondo, y
uno menor para afinar el punto de entrada. Es común que un mismo activo
muestre señales alcistas en un timeframe y bajistas en otro
simultáneamente, lo cual no es una contradicción sino un reflejo de que la
tendencia depende del horizonte que se esté observando.

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
patrón. Bulkowski (2005) documentó estadísticamente que la tasa de éxito
real de muchos patrones de velas es sustancialmente menor a la que sugiere
la literatura tradicional cuando se mide de forma rigurosa sobre datos
históricos amplios.

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
- **Confluencia**: un nivel gana fiabilidad cuando coincide con otras
  herramientas técnicas al mismo tiempo (ej. un soporte horizontal que
  además coincide con una media móvil de 200 períodos y un retroceso de
  Fibonacci del 61,8%); a mayor cantidad de señales independientes que
  apuntan al mismo nivel, mayor la probabilidad subjetiva que le asignan
  los analistas técnicos.

Estos niveles se usan tanto para anticipar rebotes como para el
[breakout trading](estrategias-trading.md#breakout-trading-ruptura-de-rangos),
donde la ruptura confirmada de un soporte o resistencia (idealmente con
volumen elevado) se interpreta como señal de continuación en esa
dirección.

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
  antes de retomar la dirección original. Los porcentajes provienen de
  relaciones matemáticas de la secuencia de Fibonacci (cada número es la
  suma de los dos anteriores: 0, 1, 1, 2, 3, 5, 8, 13, 21...), donde 61,8%
  es la razón inversa de la "razón áurea" (≈1,618). Ejemplo de uso: si un
  activo sube de $100 a $200 y luego empieza a corregir, el retroceso al
  61,8% ubicaría un posible soporte en $100 + (1 − 0,618) × $100 = $138,2.
  Es una de las herramientas más discutidas del análisis técnico en
  cuanto a su validez predictiva, dado que no hay un mecanismo causal
  claro por el cual el mercado "debería" respetar proporciones
  matemáticas específicas.
- **Extensiones de Fibonacci**: variante que proyecta niveles más allá del
  100% del movimiento original (habitualmente 127,2%, 161,8%), usada para
  estimar objetivos de precio en la continuación de una tendencia, no solo
  en su corrección.

## Patrones gráficos (chart patterns)

Formaciones que se identifican a partir de varias velas o de la forma
general del gráfico en un período más extenso, en lugar de una sola vela.
Se dividen habitualmente en patrones de reversión y de continuación.

### Patrones de reversión

- **Cabeza y hombros (head and shoulders)**: en tendencia alcista, tres
  máximos consecutivos donde el central (cabeza) es más alto que los
  laterales (hombros), que son de altura similar entre sí. La línea que
  conecta los dos mínimos entre picos se llama "línea clavicular"
  (neckline); la ruptura confirmada de esa línea hacia abajo se interpreta
  como confirmación del patrón y señal de reversión bajista. La proyección
  de precio objetivo habitual es la distancia entre la cabeza y la línea
  clavicular, proyectada hacia abajo desde el punto de ruptura. Ejemplo:
  si la cabeza está en $150 y la línea clavicular en $120 (distancia de
  $30), y el precio rompe la clavicular en $118, el objetivo proyectado
  sería $118 − $30 = $88.
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
  de agotamiento (sesgo bajista pese a la pendiente alcista de las
  líneas); una cuña descendente en tendencia bajista se interpreta de
  forma análoga como posible señal alcista.

Para todos estos patrones, la literatura de análisis técnico (Bulkowski,
2005) advierte que su tasa de éxito histórica varía significativamente
según el activo, el marco temporal y la confirmación con volumen, y que
ninguno funciona de forma consistente el 100% de las veces. Ver
[fundamentos del análisis técnico](analisis-tecnico-fundamentos.md#curve-fitting-sobreoptimización)
para las limitaciones de fiabilidad de estos patrones cuando no se validan
con backtesting riguroso.

## Fuentes

Conceptos estándar de análisis técnico. No requiere cita de datos vigentes.

- Murphy, John J. *Technical Analysis of the Financial Markets* (1999).
  Referencia estándar de patrones de velas, gráficos e indicadores.
- Nison, Steve. *Japanese Candlestick Charting Techniques* (1991).
  Referencia estándar de patrones de velas japonesas.
- Bulkowski, Thomas N. *Encyclopedia of Chart Patterns* (2005). Estudio
  estadístico de fiabilidad de patrones gráficos.
- [Investopedia — Technical Analysis](https://www.investopedia.com/terms/t/technicalanalysis.asp)
