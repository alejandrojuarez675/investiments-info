---
title: "Rebalanceo de portfolio"
tema: conceptos-generales
tags: [rebalanceo, asignacion-activos, diversificacion, disciplina]
nivel: intermedio
ultima_revision: 2026-07-22
---

# Rebalanceo de portfolio

El rebalanceo es el proceso de volver una cartera a su asignación de
activos objetivo (por ejemplo, 60% renta variable / 40% renta fija)
después de que los movimientos del mercado la hayan desviado de ese
objetivo. Es la contraparte práctica de la
[diversificación](diversificacion.md): diversificar define el mapa
inicial, rebalancear lo mantiene vigente en el tiempo.

## Por qué una cartera se desalinea sola

Los distintos activos de una cartera no suben ni bajan al mismo ritmo. Si
la renta variable sube mucho más que la renta fija durante un período, su
peso relativo en la cartera crece por encima del objetivo original, sin
que el inversor haya tomado ninguna decisión activa — simplemente ocurrió
por la revalorización.

**Ejemplo numérico**: una cartera arranca con 60% en un ETF accionario y
40% en un fondo de renta fija, sobre $1.000.000 ($600.000 y $400.000
respectivamente). Si en un año la porción accionaria sube 40% y la de
renta fija sube 5%:

```
Renta variable: 600.000 × 1,40 = 840.000
Renta fija:     400.000 × 1,05 = 420.000
Total:                           1.260.000
```

La nueva proporción es 840.000 / 1.260.000 ≈ 67% en renta variable y 33%
en renta fija — la cartera terminó más expuesta a la volatilidad
accionaria de lo que el inversor había decidido originalmente, sin que
mediara ninguna decisión consciente.

## Métodos de rebalanceo

- **Por calendario**: rebalancear en fechas fijas (por ejemplo, una vez
  al año o cada seis meses), independientemente de cuánto se haya
  desviado la cartera. Simple de ejecutar y de automatizar, pero puede
  rebalancear de más (cuando el desvío es chico) o de menos (si un
  movimiento fuerte ocurre justo después de la fecha de revisión).
- **Por bandas de desvío**: rebalancear solo cuando algún activo se
  desvía de su peso objetivo más allá de un umbral predefinido (por
  ejemplo, ±5 puntos porcentuales). Siguiendo el ejemplo anterior, un
  desvío de 60% a 67% (7 puntos) dispararía el rebalanceo con una banda
  de 5 puntos. Requiere revisar la cartera con más frecuencia que el
  método por calendario, pero reacciona mejor a movimientos bruscos.
- **Híbrido**: revisar en fechas fijas, pero solo actuar si se superó la
  banda de desvío en esa revisión — combina la simplicidad operativa del
  calendario con el criterio de las bandas.

## Cómo se ejecuta

- **Vendiendo lo que subió de más y comprando lo que quedó rezagado**,
  para volver a las proporciones objetivo. Es, por diseño, "vender caro y
  comprar barato" de forma sistemática, sin necesidad de predecir el
  mercado.
- **Con aportes nuevos**: si el inversor sigue aportando dinero
  periódicamente (ver [DCA](dollar-cost-averaging.md)), puede rebalancear
  simplemente dirigiendo los nuevos aportes hacia el activo rezagado, sin
  necesidad de vender nada — esto evita generar hechos imponibles por
  venta.

## Costos y fricciones a considerar

- **Impuestos**: vender una posición con ganancia para rebalancear puede
  generar un hecho imponible (ver [impuestos a las inversiones en
  Argentina](../merval/impuestos-inversiones-argentina.md) o [fiscalidad
  internacional](fiscalidad-internacional.md) según el instrumento),
  reduciendo el beneficio neto del rebalanceo frente a hacerlo con
  aportes nuevos.
- **Comisiones**: cada operación de compra/venta tiene un costo;
  rebalancear con demasiada frecuencia (bandas muy ajustadas o calendario
  muy seguido) puede erosionar el rendimiento con comisiones acumuladas.
- **Costo de no rebalancear**: el riesgo opuesto también existe — dejar
  que la cartera se desvíe indefinidamente puede resultar en una
  exposición al riesgo muy distinta a la que el inversor originalmente
  toleraba, justo cuando más importa (por ejemplo, si el mercado cae
  fuerte con la cartera sobreexpuesta a renta variable).

## Por qué es difícil de ejecutar en la práctica

Rebalancear implica vender el activo que mejor viene rindiendo y comprar
el que peor viene rindiendo, lo cual va en contra del sesgo psicológico
natural de "dejar correr las ganancias". Por eso, muchos inversores
individuales rebalancean menos de lo que su propio plan indica, o no lo
hacen en absoluto — la disciplina de seguir una regla predefinida (por
calendario o por banda) ayuda a que la decisión no dependa del estado de
ánimo del momento.

## Fuentes

Descripción general de rebalanceo de cartera con fines educativos, sin
recomendar una asignación de activos ni frecuencia específica — ambas
dependen del perfil de riesgo de cada inversor (ver [tipos de
inversores](tipos-de-inversores.md)). No constituye asesoramiento
financiero personalizado.
