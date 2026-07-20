---
title: "Dollar-Cost Averaging (DCA)"
tema: conceptos-generales
tags: [estrategia, largo-plazo, aportes-periodicos, lump-sum]
nivel: intermedio
ultima_revision: 2026-07-20
---

# Dollar-Cost Averaging (DCA)

Estrategia que consiste en invertir un monto fijo de dinero a intervalos
regulares (ej. mensual), en lugar de invertir todo el capital disponible de
una sola vez, independientemente del precio del activo en cada momento.

## Cómo funciona

Al aportar un monto fijo periódicamente:

- Cuando el precio está alto, ese monto fijo compra menos unidades.
- Cuando el precio está bajo, ese mismo monto compra más unidades.

El resultado es que el costo promedio por unidad tiende a ser menor que si
se hubiera comprado siempre al mismo precio inicial, siempre que haya
volatilidad en el camino.

## Ejemplo numérico completo

Aporte fijo de $100.000 mensual durante 6 meses, en un activo con precio
variable:

| Mes | Precio | Unidades compradas |
|---|---|---|
| 1 | $100 | 1.000 |
| 2 | $80 | 1.250 |
| 3 | $70 | 1.429 |
| 4 | $90 | 1.111 |
| 5 | $110 | 909 |
| 6 | $120 | 833 |

```
Total invertido = $600.000
Total de unidades = 1.000+1.250+1.429+1.111+909+833 ≈ 6.532
Costo promedio por unidad = 600.000 / 6.532 ≈ $91,85
```

El precio promedio simple de las 6 cotizaciones fue `(100+80+70+90+110+120)/6
≈ $95`, mayor al costo promedio efectivo de $91,85 obtenido con DCA. La
diferencia se debe a que se compraron más unidades en los meses de precio
bajo (mes 3: 1.429 unidades) que en los de precio alto (mes 6: 833
unidades), lo cual es automático por construcción del método, sin
necesidad de predecir el momento óptimo de compra.

## DCA vs. lump sum: comparación ilustrativa

Con los mismos $600.000 invertidos de una sola vez en el mes 1 (a $100),
se habrían comprado 6.000 unidades. Al precio del mes 6 ($120), esa
posición valdría `6.000 × $120 = $720.000` (+20%), mientras que la
posición armada con DCA valdría `6.532 × $120 = $783.840` (+30,6%) en este
ejemplo específico, porque el precio cayó fuerte a mitad de camino antes
de recuperarse. Si en cambio el precio hubiera subido de forma sostenida
desde el mes 1 sin la caída intermedia, el lump sum inicial habría
superado al DCA, porque todo el capital habría estado invertido desde el
precio más bajo del período. Este contraste ilustra por qué, en promedio
histórico sobre mercados con tendencia alcista de largo plazo, lump sum
suele superar a DCA (ver limitaciones más abajo), pero DCA reduce la
dispersión de resultados posibles (menor riesgo de "mala suerte" al
invertir todo justo antes de una caída).

## Value averaging: una variante de DCA

En vez de aportar un monto fijo cada período, el *value averaging* ajusta
el aporte para que el **valor total** de la cartera crezca en una
trayectoria predefinida. Si la cartera creció menos de lo planeado (o
cayó), se aporta más ese mes; si creció más de lo planeado, se aporta
menos (o incluso se retira el excedente). El efecto es una versión más
agresiva del mismo principio de DCA: se compra proporcionalmente más
cuando el precio está bajo. Es más compleja de ejecutar manualmente (exige
recalcular el aporte cada período) y puede requerir aportes muy variables
o incluso ventas en meses de fuerte suba, lo que la hace menos popular que
el DCA de monto fijo para inversores individuales.

## Ventajas

- Reduce el riesgo de invertir todo el capital justo antes de una caída
  fuerte ("market timing" involuntario).
- Quita la necesidad de predecir el mejor momento para entrar al mercado,
  algo que ni siquiera profesionales logran de forma consistente.
- Favorece la disciplina de inversión periódica, que combinada con
  `interes-compuesto.md`, beneficia el largo plazo.
- Reduce el impacto emocional de la volatilidad de corto plazo.

## Limitaciones

- Si el mercado sube de forma sostenida, invertir todo el capital de una
  vez ("lump sum") suele dar mejor resultado que DCA, en promedio
  histórico. DCA es una estrategia de gestión de riesgo, no de
  maximización de retorno esperado.
- Tiene sentido sobre todo cuando el capital se va generando con el tiempo
  (ej. de un sueldo), no cuando ya se dispone de todo el capital de
  entrada.

## Aplicación práctica

DCA se aplica típicamente sobre instrumentos diversificados y de largo
plazo, como ETFs que replican índices amplios (ver
[ETFs que replican el S&P 500](../sp500/etfs-sp500.md)), para evitar además
el riesgo específico de una sola empresa.

## Fuentes

Estrategia estándar de finanzas personales. No requiere cita de datos
vigentes.
