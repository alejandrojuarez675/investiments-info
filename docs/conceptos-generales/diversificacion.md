---
title: "Diversificación"
tema: conceptos-generales
tags: [riesgo, portafolio, asignacion-de-activos, correlacion, rebalanceo]
nivel: intermedio
ultima_revision: 2026-07-20
---

# Diversificación

La diversificación es la práctica de distribuir el capital entre distintos
activos, sectores, geografías o clases de activo, con el objetivo de reducir
el riesgo específico (idiosincrático) de cualquier posición individual.

## Idea central

El riesgo total de un activo se puede separar en dos componentes:

- **Riesgo sistemático (o de mercado)**: afecta a todos los activos de una
  clase, no se elimina diversificando (ej: una recesión global).
- **Riesgo no sistemático (o específico)**: propio de una empresa, sector o
  país (ej: un fraude contable, una regulación local). Este componente sí se
  reduce al combinar activos poco correlacionados entre sí.

Cuantos menos correlacionados estén los activos de un portafolio, mayor es
el beneficio de diversificar, porque las caídas de unos se compensan
parcialmente con el comportamiento de otros.

## Correlación: cómo se mide

La correlación entre dos activos se mide con el **coeficiente de
correlación** (ρ), que va de −1 a +1:

- **ρ = +1**: los activos se mueven exactamente igual (correlación
  perfecta positiva). Combinarlos no reduce el riesgo.
- **ρ = 0**: no hay relación lineal entre sus movimientos.
- **ρ = −1**: los activos se mueven exactamente al revés (correlación
  perfecta negativa). Es el caso ideal para diversificar, aunque muy poco
  común en la práctica entre activos financieros "normales".

En la práctica, la mayoría de los pares de activos de una cartera
diversificada tienen correlación positiva pero menor a 1 (ej. 0,3 a 0,7
entre acciones de distintos sectores), lo suficiente para reducir el
riesgo total sin eliminarlo.

## Varianza de un portafolio de dos activos

Para un portafolio con dos activos A y B, con pesos `wA` y `wB`
(`wA + wB = 1`), la varianza del portafolio (medida de riesgo) es:

```
σ²portafolio = wA² × σA² + wB² × σB² + 2 × wA × wB × σA × σB × ρ(A,B)
```

**Ejemplo numérico**: dos activos con volatilidad (desvío estándar) anual
del 20% cada uno (`σA = σB = 0,20`), pesos iguales (`wA = wB = 0,5`):

- Si `ρ = 1` (perfectamente correlacionados):
  `σ²portafolio = 0,25×0,04 + 0,25×0,04 + 2×0,5×0,5×0,20×0,20×1 = 0,04` →
  volatilidad del portafolio = 20% (igual que cada activo individual, sin
  beneficio de diversificar).
- Si `ρ = 0` (sin correlación):
  `σ²portafolio = 0,01 + 0,01 + 0 = 0,02` → volatilidad del portafolio
  ≈ 14,1% (menor que cualquiera de los dos activos individuales, pese a
  tener el mismo retorno esperado combinado).

Este ejemplo numérico ilustra por qué la diversificación reduce riesgo sin
sacrificar necesariamente retorno esperado, siempre que los activos
combinados no estén perfectamente correlacionados.

## Ratio de Sharpe: medir el retorno ajustado por riesgo

Una forma de evaluar si diversificar realmente mejoró una cartera es
comparar el **ratio de Sharpe** antes y después (ver también
[relación riesgo-retorno](riesgo-retorno.md#sharpe-ratio-cómo-se-calcula)):
a igual retorno esperado, una cartera diversificada con menor volatilidad
tiene un Sharpe ratio más alto, lo que refleja de forma cuantitativa el
beneficio de la diversificación más allá de la intuición.

## Rebalanceo de cartera

Con el tiempo, los distintos activos de una cartera crecen a tasas
distintas, alejando los pesos reales de los pesos objetivo originales (ej.
una cartera 60% acciones / 40% bonos puede terminar siendo 75%/25% tras
un año alcista en acciones). El rebalanceo consiste en vender parte de lo
que subió más y comprar lo que subió menos (o quedó rezagado), para
volver a la asignación objetivo. Dos enfoques comunes:

- **Rebalanceo por calendario**: se revisa y ajusta la cartera en
  fechas fijas (ej. cada 6 o 12 meses), independientemente de cuánto se
  hayan desviado los pesos.
- **Rebalanceo por bandas**: se ajusta solo cuando un activo se desvía más
  de un umbral definido de antemano (ej. ±5 puntos porcentuales respecto
  al peso objetivo), sin importar cuánto tiempo pasó.

El rebalanceo por bandas suele generar menos operaciones innecesarias en
mercados estables, mientras que el rebalanceo por calendario es más simple
de ejecutar sin necesidad de monitoreo constante. Ambos enfoques tienen el
efecto de forzar de forma sistemática "vender caro y comprar barato"
relativo a la propia cartera, aunque también generan costos de transacción
y, según la jurisdicción, eventos impositivos por la venta de la porción
sobreponderada.

## Formas comunes de diversificar

- **Por clase de activo**: acciones, bonos, efectivo, real estate, crypto.
- **Por geografía**: mercado local vs. desarrollado vs. emergente.
- **Por sector**: tecnología, energía, salud, consumo, financiero.
- **Por tiempo**: aportes periódicos en vez de una inversión única (ver
  `dollar-cost-averaging.md`).

## Límites de la diversificación

- No elimina el riesgo de mercado: en crisis sistémicas (ej. 2008, marzo
  2020), la correlación entre activos tiende a subir y la diversificación
  protege menos de lo esperado.
- Sobrediversificar (cientos de posiciones pequeñas) puede diluir retornos
  sin reducir riesgo de forma proporcional, y aumenta costos de seguimiento.
- Un índice amplio (ej. S&P 500, ver [Qué es el S&P 500](../sp500/que-es-sp500.md)) ya provee
  diversificación interna entre ~500 empresas y sectores.

## Fuentes

Concepto estándar de teoría de portafolios (Markowitz, 1952). No requiere
cita de datos vigentes.
