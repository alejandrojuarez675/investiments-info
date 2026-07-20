---
title: "Interés compuesto"
tema: conceptos-generales
tags: [largo-plazo, retorno, matematica-financiera]
nivel: basico
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

## Relación con otros conceptos

- El interés compuesto es la base matemática detrás de por qué el
  `dollar-cost-averaging.md` funciona mejor cuanto antes se empieza.
- Se aplica tanto a instrumentos de renta fija (bonos que pagan cupones
  reinvertidos) como a acciones (dividendos reinvertidos) o índices
  (ver `../sp500/que-es-sp500.md`).
- El mismo mecanismo funciona en contra en el endeudamiento (deuda que
  capitaliza intereses).

## Fuentes

Concepto matemático estándar de finanzas. No requiere cita de datos
vigentes; los porcentajes usados en los ejemplos son ilustrativos, no
proyecciones de mercado.
