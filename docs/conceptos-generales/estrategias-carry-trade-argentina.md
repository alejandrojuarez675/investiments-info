---
title: "Estrategias de carry trade y trading cambiario en Argentina"
tema: conceptos-generales
tags: [carry-trade, dolar, devaluacion, tasa-de-interes, trading, especulacion, argentina]
nivel: avanzado
ultima_revision: 2026-07-22
---

# Estrategias de carry trade y trading cambiario en Argentina

Este documento profundiza en el **carry trade** y en estrategias
emparentadas que buscan explotar el diferencial entre la tasa de interés
en pesos y la devaluación esperada del dólar en Argentina. Son estrategias
de perfil especulativo, con riesgo asimétrico y que requieren seguimiento
activo; no son una extensión del ahorro tradicional en plazo fijo o
dólares. Para el marco general de por qué Argentina es bimonetaria y qué
se compra en cada moneda, ver [Argentina y el
dólar](argentina-y-el-dolar.md).

## Carry trade: mecánica

El **carry trade** consiste en tomar una posición en la moneda o
instrumento de menor rendimiento nominal (o directamente endeudarse en esa
moneda) para invertir el capital en la moneda o instrumento de mayor
rendimiento nominal, ganando la diferencia de tasas ("carry") siempre que
el tipo de cambio no se mueva en contra en una magnitud mayor a esa
diferencia.

En el contexto argentino, la variante más citada es el **"carry trade en
pesos"**:

1. Un inversor (local o extranjero) vende dólares y compra instrumentos en
   pesos que pagan una tasa de interés nominal alta (Lecaps, plazo fijo,
   bonos en pesos, cauciones).
2. Mantiene esa posición durante el plazo del instrumento, cobrando la
   tasa en pesos.
3. Al vencimiento, vuelve a comprar dólares con el capital más los
   intereses acumulados en pesos.
4. La ganancia en dólares del carry trade es, aproximadamente:

```
Ganancia en USD ≈ (1 + tasa en pesos del período) / (1 + devaluación del período) − 1
```

**Ejemplo numérico ilustrativo**: un inversor convierte USD 10.000 a pesos
al tipo de cambio $1.000 (recibe $10.000.000), los coloca en un instrumento
en pesos a una tasa efectiva del 8% en 90 días, y al cabo de ese plazo el
tipo de cambio subió solo a $1.030 (3% de devaluación en el período):

```
Capital en pesos al vencimiento = 10.000.000 × 1,08 = $10.800.000
Dólares recomprados = 10.800.000 / 1.030 ≈ USD 10.485
Ganancia en dólares ≈ 4,85% en 90 días
```

Si en cambio el tipo de cambio hubiera saltado a $1.100 (10% de
devaluación) en el mismo período, el resultado en dólares habría sido
negativo pese a haber cobrado una tasa nominal en pesos positiva:

```
Dólares recomprados = 10.800.000 / 1.100 ≈ USD 9.818
Resultado ≈ −1,8% en dólares, a pesar del 8% de interés cobrado en pesos
```

### Por qué el carry trade es una apuesta cambiaria, no un arbitraje

El carry trade **no es una ganancia libre de riesgo**: es apostar a que el
tipo de cambio se mantendrá relativamente estable (o "atrasado" respecto a
la inflación) durante el plazo de la inversión, algo que en la práctica
depende de la política cambiaria y monetaria del momento (esquema de banda
cambiaria o flotación, nivel de reservas del BCRA, expectativas
electorales, entre otros factores). Cuando ese esquema se sostiene, el
carry trade rinde bien en dólares; cuando el tipo de cambio se corrige
abruptamente (una devaluación), el carry trade puede generar pérdidas en
dólares pese a haber cobrado una tasa nominal en pesos alta.

No confundir con el "carry trade" internacional clásico (ej. tomar deuda
en yenes a tasa baja para invertir en instrumentos en dólares a tasa
alta): la lógica es la misma (ganar la diferencia de tasas), pero en el
caso argentino la contraparte de la apuesta es, específicamente, la
política cambiaria doméstica.

## Ventajas del carry trade

- **Retorno en dólares superior al de simplemente comprar y mantener
  dólares**, cuando el esquema cambiario se sostiene: en el ejemplo
  anterior, el carry trade rindió 4,85% en dólares en 90 días frente al
  0% de quien se quedó con los billetes quietos.
- **Tasas nominales en pesos altas en términos relativos**: en episodios
  de esquema cambiario administrado o con banda, el Tesoro y el BCRA
  suelen convalidar tasas en pesos elevadas para sostener la demanda de
  instrumentos en moneda local, lo que hace atractivo el diferencial de
  tasas frente a la devaluación esperada.
- **Instrumentos líquidos y de plazos cortos**: Lecaps, cauciones y
  plazos fijos permiten armar y desarmar la posición en plazos de días a
  pocos meses, sin la iliquidez de otros activos en pesos (ver [Cauciones
  bursátiles](../merval/cauciones-bursatiles.md)).
- **Efecto sobre las reservas y el tipo de cambio**: para el propio
  esquema cambiario, la entrada de capitales que hacen carry trade puede
  aportar oferta de dólares y contener la cotización en el corto plazo,
  lo que retroalimenta (mientras dura) la previsibilidad que el carry
  trade necesita para sostenerse.

## Desventajas y riesgos del carry trade

- **Riesgo cambiario asimétrico**: la ganancia máxima está acotada por la
  tasa en pesos cobrada, pero la pérdida potencial ante un salto cambiario
  abrupto no tiene un techo comparable, como muestra el segundo ejemplo
  numérico de arriba (devaluación del 10% revirtiendo una tasa positiva
  del 8%).
- **Dependencia de la política económica**: el resultado no depende de
  fundamentos de una empresa o de un mercado, sino de decisiones de
  política cambiaria y monetaria (nivel de reservas del BCRA, ritmo de
  devaluación del esquema vigente, contexto electoral), que pueden
  cambiar sin aviso previo.
- **Riesgo de reversión súbita ("unwind")**: cuando muchos inversores
  hacen carry trade al mismo tiempo y deciden salir simultáneamente (por
  ejemplo, ante un cambio de expectativas), la demanda de dólares que
  genera esa salida puede presionar el tipo de cambio justo en el momento
  en que la posición se está deshaciendo, amplificando la pérdida de
  quienes salen más tarde.
- **Requiere seguimiento activo**: a diferencia de una estrategia de
  largo plazo de comprar y mantener, el carry trade exige monitorear
  tasas, reservas del BCRA y señales de la política cambiaria de forma
  recurrente para decidir cuándo entrar y, sobre todo, cuándo salir.
- **No apto para todo perfil de inversor**: por el riesgo asimétrico y la
  necesidad de gestión activa, es una estrategia más adecuada para un
  perfil [especulativo o de trading](tipos-de-inversores.md) que para un
  ahorrista con horizonte largo y baja tolerancia a pérdidas en dólares
  (ver [relación riesgo-retorno](riesgo-retorno.md)).

## Cuándo conviene hacer carry trade (y cuándo no)

- **Tiende a convenir** cuando: el esquema cambiario ofrece cierta
  previsibilidad de corto plazo (tipo de cambio administrado o con banda
  con techo conocido), las tasas en pesos son claramente superiores a la
  devaluación esperada para el mismo plazo, y las reservas del BCRA dan
  margen para sostener ese esquema durante el horizonte de la operación.
- **Tiende a no convenir** (o a ser directamente riesgoso) cuando: se
  acerca un evento de alta incertidumbre cambiaria (elecciones, cambio de
  esquema monetario, vencimientos de deuda relevantes), las reservas del
  BCRA están en niveles bajos o en descenso, o ya circulan señales de
  mercado de que el tipo de cambio real está "atrasado" y con expectativa
  de corrección.
- **Regla práctica de horizonte**: cuanto más corto el plazo del
  instrumento en pesos elegido, menor la ventana de exposición a un
  salto cambiario inesperado; por eso el carry trade suele armarse con
  instrumentos cortos (cauciones, Lecaps de pocos meses) en vez de bonos
  largos, priorizando la posibilidad de salir rápido si cambian las
  condiciones.
- En cualquier caso, es una estrategia que **apuesta contra la historia
  cambiaria reciente de Argentina** (devaluaciones abruptas recurrentes),
  por lo que conviene dimensionarla como una porción acotada del capital
  y no como la estrategia central de un ahorro de largo plazo.

## Otras estrategias emparentadas de trading cambiario

Estas variantes comparten con el carry trade la lógica de especular sobre
el recorrido del tipo de cambio o de la brecha cambiaria, pero con
mecánicas distintas:

- **Arbitraje MEP-CCL ("puré")**: comprar dólar MEP y vender
  simultáneamente CCL (o viceversa) cuando la brecha entre ambos se
  ensancha más de lo habitual, buscando capturar esa diferencia. Requiere
  operar con volumen y rapidez, y la ganancia por operación suele ser
  pequeña en términos porcentuales, por lo que se apalanca en el volumen
  operado. Ver el mecanismo de cada tipo de dólar en [Dólar en
  Argentina](../merval/dolar-argentina.md).
- **Trading de brecha cambiaria**: tomar posición en dólares (blue, MEP o
  CCL) anticipando una ampliación de la brecha frente al oficial ante
  expectativas de mayor emisión monetaria, restricciones cambiarias o
  incertidumbre política, y deshacer la posición si la brecha se
  contrae. Es una apuesta direccional, no una estrategia de tasa como el
  carry trade.
- **Cobertura con dólar futuro (Rofex/A3)**: en vez de vender dólares
  físicos para hacer carry trade en pesos, algunos inversores cubren el
  riesgo cambiario de esa posición comprando contratos de dólar futuro,
  fijando de antemano el tipo de cambio al que recomprarán dólares al
  vencimiento. Esto reduce el riesgo asimétrico del carry trade "a
  descubierto", a costa de la tasa implícita que cobra el mercado de
  futuros por esa cobertura (ver [derivados y
  cobertura](derivados-cobertura.md) para la lógica general de
  instrumentos de cobertura).
- **Carry trade apalancado con cauciones**: tomar pesos prestados vía
  caución bursátil (dando en garantía una cartera de títulos) para
  ampliar el monto destinado a instrumentos en pesos de mayor tasa,
  amplificando tanto la ganancia como la pérdida potencial frente al
  carry trade "sin apalancar" (ver el uso apalancado de cauciones en
  [Cauciones bursátiles](../merval/cauciones-bursatiles.md)).

Todas estas variantes comparten los mismos riesgos de fondo del carry
trade: dependen de que el esquema cambiario y la política monetaria se
sostengan durante el horizonte de la operación, y pueden revertirse
abruptamente ante un cambio de expectativas o un salto cambiario.

## Fuentes

Descripción general con fines educativos del carry trade y estrategias
de trading cambiario en Argentina. Los ejemplos numéricos son
ilustrativos, no proyecciones. No constituye asesoramiento financiero
personalizado; verificar el esquema cambiario, las tasas y las
condiciones de mercado vigentes antes de considerar cualquiera de estas
estrategias, dado que son de riesgo elevado y cambian con frecuencia en
Argentina.

- Banco Central de la República Argentina (bcra.gob.ar) — tasas de
  política monetaria y esquema cambiario vigente.
- [Calculadora de dólar - CalculadoraYa](https://www.calculadoraya.click/calculadoras/dolar)
  — cotización de referencia para conversiones peso/dólar.
