---
title: "Renta fija internacional: bonos del Tesoro y corporativos"
tema: conceptos-generales
tags: [renta-fija, bonos, duracion, curva-rendimientos, tesoro-eeuu]
nivel: intermedio
ultima_revision: 2026-07-22
---

# Renta fija internacional: bonos del Tesoro y corporativos

Más allá de los [bonos argentinos](../merval/bonos-argentinos.md) y las
[ONs](../merval/obligaciones-negociables.md), la renta fija internacional
—principalmente bonos del Tesoro de EE.UU. y corporate bonds— es una
clase de activo central en cualquier cartera global diversificada, por su
combinación de previsibilidad de flujos y menor volatilidad relativa
frente a la renta variable (ver [tipos de activos](tipos-de-activos.md)).

## Bonos del Tesoro de EE.UU.

- Considerados el activo "libre de riesgo" de referencia global, porque el
  riesgo de default del gobierno de EE.UU. se percibe como mínimo (aunque
  no nulo: existe riesgo de tasa y de inflación).
- Se emiten en distintos plazos: **T-Bills** (hasta 1 año), **T-Notes**
  (2 a 10 años) y **T-Bonds** (más de 10 años, hasta 30 años).
- Su tasa de rendimiento (yield) es la referencia con la que se comparan
  todos los demás activos de renta fija del mundo: un bono corporativo o
  soberano de otro país rinde "Tesoro + spread", donde el spread refleja
  el riesgo adicional percibido.

## Bonos corporativos (corporate bonds)

- Emitidos por empresas privadas, de forma análoga a las
  [ONs](../merval/obligaciones-negociables.md) argentinas pero en el
  mercado internacional.
- Se clasifican por calidad crediticia según calificadoras (Moody's, S&P,
  Fitch):
  - **Investment grade**: calificación alta (BBB-/Baa3 o superior), menor
    riesgo de default, menor rendimiento.
  - **High yield ("bonos basura")**: calificación por debajo de investment
    grade, mayor riesgo de default, mayor rendimiento como compensación.
- El spread de un corporate bond frente al Tesoro de plazo comparable
  refleja el riesgo de crédito específico de la empresa, con la misma
  lógica que el spread de una ON frente a un bono soberano argentino (ver
  [spread ON vs. soberano](../merval/obligaciones-negociables.md#spread-de-rendimiento-on-vs-bono-soberano)).

## Curva de rendimientos

La curva de rendimientos grafica la tasa de interés de los bonos del
Tesoro contra su plazo (2, 5, 10, 30 años). Su forma es una de las señales
macroeconómicas más observadas:

- **Curva normal (ascendente)**: plazos más largos rinden más que los
  cortos, lo habitual, porque el inversor exige compensación por
  inmovilizar el dinero más tiempo.
- **Curva invertida**: los plazos cortos rinden más que los largos.
  Históricamente se la asoció con expectativas de recesión, aunque no es
  una relación mecánica ni garantiza el resultado.

## Duración: la medida clave de riesgo de tasa

La **duración** mide la sensibilidad del precio de un bono a cambios en
las tasas de interés. Aproximadamente, indica cuánto varía el precio del
bono ante un movimiento de 1 punto porcentual en las tasas:

```
Variación de precio ≈ −Duración × Δ tasa de interés
```

**Ejemplo numérico ilustrativo**: un bono con duración de 7 años, ante una
suba de tasas de 1 punto porcentual, vería su precio caer
aproximadamente un 7% (`−7 × 1% = −7%`). Un bono de duración 2 años, ante
el mismo movimiento de tasa, caería solo cerca de un 2%. Por eso, los
bonos de plazo más largo son más volátiles ante cambios de tasas que los
de plazo corto, incluso siendo ambos de la misma calidad crediticia.

## Riesgos y consideraciones

- **Riesgo de tasa de interés**: cuando suben las tasas de referencia
  (por ejemplo, decisiones de la Reserva Federal), el precio de los bonos
  ya emitidos baja, y viceversa — es una relación inversa.
- **Riesgo de crédito**: en corporativos, el riesgo de que el emisor no
  pueda pagar; se mitiga diversificando entre muchos emisores (por
  ejemplo, vía un fondo o ETF de bonos en vez de bonos individuales).
- **Riesgo cambiario**: para un inversor argentino, la exposición a renta
  fija internacional suele estar en dólares, lo que agrega el
  componente cambiario peso-dólar sobre el resultado en moneda local.
- **Acceso**: la compra directa de bonos individuales internacionales
  suele requerir montos mínimos altos y brokers con acceso a mercados
  externos; una alternativa más accesible es un ETF de bonos (ej. de
  Tesoro o corporativos), que diversifica automáticamente entre muchas
  emisiones.

## Fuentes

Descripción general de renta fija internacional con fines educativos. Para
tasas y curvas vigentes, consultar el sitio del Tesoro de EE.UU.
(treasurydirect.gov) o proveedores de datos de mercado. No constituye
asesoramiento financiero personalizado.
