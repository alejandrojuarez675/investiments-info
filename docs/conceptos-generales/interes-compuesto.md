---
title: "Interés compuesto"
tema: conceptos-generales
tags: [largo-plazo, retorno, matematica-financiera, tna, tea]
nivel: intermedio
ultima_revision: 2026-07-20
---

# Interés compuesto

El interés compuesto es el efecto por el cual los rendimientos generados
por una inversión se reinvierten y a su vez generan nuevos rendimientos,
haciendo que el crecimiento del capital sea exponencial en vez de lineal.

## Fórmula básica

```
VF = VP × (1 + r)^n
```

- `VF`: valor futuro.
- `VP`: valor presente (capital inicial).
- `r`: tasa de retorno por período (ej. anual).
- `n`: cantidad de períodos.

Con aportes periódicos constantes (`A`) además del capital inicial, se usa
la fórmula de valor futuro de una anualidad:

```
VF = VP × (1 + r)^n + A × [((1 + r)^n − 1) / r]
```

## Por qué importa el tiempo más que el monto

Dado que el crecimiento es exponencial, el factor con mayor impacto en el
resultado final no es el monto inicial sino el **tiempo** que el capital
permanece invertido. Empezar antes, aunque sea con montos chicos, suele
superar a empezar más tarde con montos mayores, porque hay más períodos de
capitalización.

Ejemplo ilustrativo (no es una proyección real, solo para mostrar el
mecanismo): a una tasa constante del 7% anual, un capital se duplica
aproximadamente cada 10 años (regla del 72: `72 / 7 ≈ 10.3`).

## Regla del 72

Método rápido para estimar en cuántos años se duplica un capital a una
tasa fija anual `r` (en porcentaje):

```
años para duplicar ≈ 72 / r
```

Es una aproximación, más precisa para tasas entre 6% y 10% anual.

## Ejemplo numérico completo a 10, 20 y 30 años

Aporte inicial de $1.000.000 sin aportes adicionales, a una tasa constante
del 8% anual (ilustrativa):

| Años | Fórmula | Valor futuro |
|---|---|---|
| 10 | 1.000.000 × 1,08^10 | ≈ $2.158.925 |
| 20 | 1.000.000 × 1,08^20 | ≈ $4.660.957 |
| 30 | 1.000.000 × 1,08^30 | ≈ $10.062.657 |

El capital se multiplica por ~2,16 en 10 años, pero por ~10,06 en 30
años: el crecimiento entre el año 20 y el 30 (+$5.401.700) es más del
doble del crecimiento entre el año 0 y el 10 (+$1.158.925), pese a ser el
mismo lapso de tiempo, porque cada período compone sobre una base ya
mayor. Esto es lo que se conoce como el efecto "bola de nieve" del interés
compuesto.

Con un aporte mensual adicional de $50.000 sobre el mismo capital inicial
(usando la fórmula de anualidad de la sección anterior con `r` mensual
≈0,643% y `n` en meses), el valor a 30 años supera varias veces el
resultado sin aportes, ilustrando por qué el DCA sostenido en el tiempo
(ver [Dollar-Cost Averaging](dollar-cost-averaging.md)) potencia el efecto
del interés compuesto más que un capital inicial único, para la mayoría de
los ahorristas que no parten con un capital grande.

## TNA vs. TEA: por qué importa la frecuencia de capitalización

La **TNA (Tasa Nominal Anual)** es la tasa "de lista", sin considerar
cuántas veces al año se capitaliza el interés. La **TEA (Tasa Efectiva
Anual)** es el rendimiento real considerando la capitalización:

```
TEA = (1 + TNA/m)^m − 1
```

donde `m` es la cantidad de períodos de capitalización por año. Ejemplo
con TNA del 30%:

| Capitalización | m | TEA |
|---|---|---|
| Anual | 1 | 30,0% |
| Mensual | 12 | ≈ 34,5% |
| Diaria | 365 | ≈ 35,0% |

A mayor frecuencia de capitalización, mayor la TEA resultante para la
misma TNA nominal, porque los intereses generados empiezan a generar
interés antes. Esta diferencia es la razón por la cual, al comparar dos
instrumentos (ej. un [plazo fijo](../merval/plazo-fijo.md) tradicional
frente a un [FCI money market](../merval/fci-money-market.md) que
capitaliza diariamente), conviene comparar TEA y no TNA, ya que la TNA por
sí sola puede subestimar o igualar erróneamente el rendimiento real de
instrumentos con distinta frecuencia de capitalización.

## Interés compuesto vs. inflación compuesta en Argentina

La inflación también compone: una inflación mensual del 3% sostenida
durante 12 meses no equivale a 36% anual, sino a
`(1,03)^12 − 1 ≈ 42,6%` anual, por el mismo mecanismo matemático del
interés compuesto pero aplicado a la pérdida de poder adquisitivo. Esto
explica por qué, en contextos de alta inflación como el argentino, una
tasa nominal aparentemente alta en un
[plazo fijo](../merval/plazo-fijo.md) puede seguir representando una
pérdida en términos reales si la inflación compuesta del período fue
mayor, un punto desarrollado en detalle en ese documento.

## Relación con otros conceptos

- El interés compuesto es la base matemática detrás de por qué el
  [Dollar-Cost Averaging (DCA)](dollar-cost-averaging.md) funciona mejor
  cuanto antes se empieza.
- Se aplica tanto a instrumentos de renta fija (bonos que pagan cupones
  reinvertidos) como a acciones (dividendos reinvertidos) o índices
  (ver [Qué es el S&P 500](../sp500/que-es-sp500.md)).
- El mismo mecanismo funciona en contra en el endeudamiento (deuda que
  capitaliza intereses).

## Fuentes

Concepto matemático estándar de finanzas. No requiere cita de datos
vigentes; los porcentajes usados en los ejemplos son ilustrativos, no
proyecciones de mercado.
