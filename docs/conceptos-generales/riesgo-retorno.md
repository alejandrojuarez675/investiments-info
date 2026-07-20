---
title: "Relación riesgo-retorno"
tema: conceptos-generales
tags: [riesgo, volatilidad, portafolio, sharpe-ratio, beta, capm]
nivel: avanzado
ultima_revision: 2026-07-20
---

# Relación riesgo-retorno

Principio central de finanzas: a mayor retorno esperado, mayor riesgo
asumido. No existe (en mercados eficientes) un activo que ofrezca retornos
altos con riesgo bajo de forma sostenida; si pareciera existir, suele
implicar un riesgo oculto (de liquidez, de contraparte, de fraude) o ser
una anomalía temporal.

## Riesgo no es solo "volatilidad"

En finanzas se suele medir el riesgo como la volatilidad (desviación
estándar de los retornos), pero eso es una simplificación. Otras formas de
riesgo relevantes:

- **Riesgo de mercado**: el precio del activo cae por condiciones generales.
- **Riesgo de liquidez**: dificultad para vender el activo sin afectar su
  precio, o directamente no encontrar comprador.
- **Riesgo de crédito/contraparte**: quien te debe (un emisor de bonos, un
  exchange) no cumple.
- **Riesgo cambiario**: pérdida de valor por movimientos de tipo de cambio
  (muy relevante en Argentina, ver [Merval](../merval/)).
- **Riesgo de concentración**: tener gran parte del capital en un solo
  activo, sector o país.
- **Riesgo regulatorio**: cambios normativos que afectan al activo (ej.
  cepo cambiario, impuestos a las ganancias de crypto).

## Espectro típico de riesgo-retorno (orientativo, no determinístico)

De menor a mayor riesgo/retorno esperado, en términos generales:

1. Efectivo / plazo fijo en moneda estable.
2. Bonos soberanos de países desarrollados.
3. Bonos corporativos investment grade.
4. Acciones de mercados desarrollados (ej. S&P 500).
5. Bonos soberanos de mercados emergentes (ej. bonos argentinos).
6. Acciones de mercados emergentes (ej. Merval).
7. Crypto.

Este orden es una guía general, no una regla fija: dentro de cada
categoría hay instrumentos de riesgo muy distinto (un bono corporativo
"junk" puede ser más riesgoso que una acción de una empresa muy estable).

## Cómo se calcula la volatilidad en la práctica

La volatilidad se mide como el **desvío estándar** de los retornos
periódicos de un activo. Con una serie de retornos diarios (o mensuales,
anuales), el cálculo es:

```
σ = √[ Σ(rᵢ − r̄)² / (n − 1) ]
```

donde `rᵢ` es cada retorno individual, `r̄` es el retorno promedio de la
serie y `n` la cantidad de observaciones. **Ejemplo numérico simplificado**
con 5 retornos mensuales: +4%, −2%, +6%, +1%, −3% (promedio `r̄ = 1,2%`):

```
Desvíos al cuadrado: (4−1,2)²=7,84, (−2−1,2)²=10,24, (6−1,2)²=23,04,
(1−1,2)²=0,04, (−3−1,2)²=17,64
Suma = 58,8 → 58,8 / 4 = 14,7 → σ = √14,7 ≈ 3,83% mensual
```

Para anualizar una volatilidad mensual se multiplica por `√12`
(`3,83% × √12 ≈ 13,3%` anual), bajo el supuesto de que los retornos son
independientes entre períodos.

## Sharpe ratio: cómo se calcula

El **ratio de Sharpe** (Sharpe, 1966) mide el retorno obtenido por unidad
de riesgo asumido, permitiendo comparar activos o carteras con distinta
volatilidad de forma estandarizada:

```
Sharpe = (Retorno del activo − Tasa libre de riesgo) / Volatilidad del activo
```

**Ejemplo numérico**: un activo con retorno anual del 15%, volatilidad
anual del 20%, y una tasa libre de riesgo (ej. bonos del Tesoro de EE.UU.
a corto plazo) del 5%:

```
Sharpe = (15% − 5%) / 20% = 0,5
```

Un Sharpe ratio más alto indica mejor retorno ajustado por riesgo. Como
regla orientativa (no una convención universal): valores por debajo de 1
se consideran mediocres, entre 1 y 2 buenos, y por encima de 2 muy buenos,
aunque el valor de referencia depende del tipo de activo y del período
analizado. Es la métrica estándar para evaluar si el beneficio de
[diversificar una cartera](diversificacion.md#ratio-de-sharpe-medir-el-retorno-ajustado-por-riesgo)
se refleja en un mejor retorno ajustado por riesgo, no solo en un menor
riesgo nominal.

## Beta: sensibilidad respecto al mercado

El **beta** (β) mide cuánto se mueve un activo en relación al mercado en
su conjunto (habitualmente representado por un índice amplio como el
[S&P 500](../sp500/que-es-sp500.md)):

- **β = 1**: el activo se mueve, en promedio, igual que el mercado.
- **β > 1**: el activo amplifica los movimientos del mercado (más
  volátil que el promedio; ej. muchas acciones tecnológicas de alto
  crecimiento).
- **β < 1**: el activo es menos volátil que el mercado (ej. sectores
  defensivos como utilities o consumo básico).
- **β negativo**: el activo tiende a moverse en dirección opuesta al
  mercado (poco común entre activos tradicionales).

Ejemplo: un activo con β = 1,5 tiende a subir 15% cuando el mercado sube
10%, y a caer 15% cuando el mercado cae 10% (en promedio, no de forma
exacta en cada movimiento puntual).

## CAPM: retorno esperado a partir del riesgo sistemático

El **CAPM (Capital Asset Pricing Model)**, desarrollado por Sharpe (1964)
y Lintner (1965), estima el retorno esperado de un activo a partir de su
beta:

```
Retorno esperado = Tasa libre de riesgo + β × (Retorno esperado del mercado − Tasa libre de riesgo)
```

**Ejemplo numérico**: tasa libre de riesgo del 5%, retorno esperado del
mercado del 10% (prima de riesgo de mercado = 5%), activo con β = 1,3:

```
Retorno esperado = 5% + 1,3 × (10% − 5%) = 5% + 6,5% = 11,5%
```

El CAPM es el marco teórico estándar detrás de la idea de que solo el
riesgo sistemático (no diversificable, medido por beta) debería ser
compensado con mayor retorno esperado, mientras que el riesgo específico
de un activo individual puede eliminarse diversificando (ver
[diversificación](diversificacion.md)) y por lo tanto el mercado no
debería "pagar" por asumirlo. Es un modelo con limitaciones empíricas
documentadas (no siempre predice bien los retornos observados en la
práctica), pero sigue siendo la base conceptual de gran parte de las
finanzas modernas.

## Horizonte temporal y tolerancia al riesgo

El riesgo "aceptable" depende del horizonte de inversión y de la
necesidad de liquidez del inversor:

- Horizontes cortos (menos de 2-3 años) suelen tolerar menos volatilidad,
  porque hay menos tiempo para recuperarse de una caída.
- Horizontes largos (10+ años) pueden tolerar más volatilidad a cambio de
  mayor retorno esperado, porque históricamente los mercados de acciones
  amplios tienden a recuperarse con el tiempo (esto no es una garantía).

## Fuentes

Principios estándar de teoría financiera (relación riesgo-retorno, CAPM).
No requiere cita de datos vigentes; los ejemplos numéricos son
ilustrativos.

- Sharpe, William F. *Capital Asset Prices: A Theory of Market Equilibrium
  under Conditions of Risk* (Journal of Finance, 1964). Formulación
  original del CAPM.
- Sharpe, William F. *Mutual Fund Performance* (Journal of Business,
  1966). Origen del ratio de Sharpe.
- [Investopedia — Sharpe Ratio](https://www.investopedia.com/terms/s/sharperatio.asp)
- [Investopedia — Beta](https://www.investopedia.com/terms/b/beta.asp)
