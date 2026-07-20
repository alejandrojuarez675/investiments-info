---
title: "ETFs que replican el S&P 500 (VOO, SPY, IVV) y el Nasdaq-100 (QQQ)"
tema: sp500
tags: [etf, voo, spy, ivv, qqq, nasdaq-100, mercado-usa, expense-ratio, fiscalidad]
nivel: intermedio
ultima_revision: 2026-07-20
---

# ETFs que replican el S&P 500 y el Nasdaq-100

Los ETFs (Exchange Traded Funds) indexados son la forma más común de
obtener exposición a un índice sin comprar cada acción por separado. Este
documento cubre los principales ETFs del S&P 500 y también QQQ, el ETF de
referencia del Nasdaq-100, un índice distinto pero muy usado en conjunto
con el S&P 500 para exposición al mercado de EE.UU.

## Principales ETFs

| Ticker | Proveedor       | Lanzamiento | Característica distintiva |
|--------|-----------------|-------------|----------------------------|
| SPY    | State Street    | 1993        | El ETF más antiguo y de mayor volumen de trading; estructura legal de "Unit Investment Trust" (no reinvierte dividendos automáticamente dentro del fondo). |
| IVV    | BlackRock (iShares) | 2000    | Estructura de fondo abierto; ratio de gastos (expense ratio) históricamente algo menor que SPY. |
| VOO    | Vanguard        | 2010        | Estructura de fondo abierto; históricamente uno de los expense ratios más bajos entre los tres. |

Los expense ratios y volúmenes cambian con el tiempo: antes de decidir,
verificar los valores vigentes en la web del proveedor o en un
comparador financiero, no asumir que los datos de esta tabla siguen
siendo precisos.

## QQQ: el ETF del Nasdaq-100

| Ticker | Proveedor | Lanzamiento | Característica distintiva |
|--------|-----------|--------------|----------------------------|
| QQQ | Invesco | 1999 | Replica el Nasdaq-100, no el S&P 500; fuerte concentración en tecnología. Existe también QQQM, misma exposición con expense ratio más bajo pensado para tenencia de largo plazo. |

- El **Nasdaq-100** es un índice distinto al S&P 500: agrupa las 100
  mayores empresas no financieras que cotizan en el Nasdaq, con un peso
  mucho más alto en tecnología (Apple, Microsoft, Nvidia, Amazon, Meta,
  etc. suelen concentrar una porción grande del índice).
- Por esa concentración sectorial, QQQ históricamente tuvo mayor
  volatilidad que los ETFs del S&P 500: puede subir o bajar más en
  proporción ante noticias del sector tecnológico.
- Es común combinar SPY/VOO/IVV (más diversificado por sector) con QQQ
  (más concentrado en tech) en una misma cartera, entendiendo que hay
  superposición: varias de las empresas más grandes del Nasdaq-100
  también son las de mayor peso en el S&P 500.

## Diferencias prácticas entre ellos

- Los tres replican el mismo índice subyacente, por lo que su desempeño
  bruto es prácticamente idéntico; las diferencias relevantes son de
  costo (expense ratio), liquidez/volumen y tratamiento fiscal según el
  país del inversor.
- SPY suele preferirse para trading activo por su liquidez (opciones,
  spreads más ajustados). VOO/IVV suelen preferirse para tenencia de
  largo plazo por menor costo.

## Cómo acceder desde Argentina

Un inversor argentino puede acceder a estos ETFs de dos formas
principales:

1. **Cuenta en un bróker internacional** que permita comprar ETFs
   listados en bolsas de EE.UU. directamente en dólares.
2. **CEDEARs** de estos mismos ETFs, que cotizan en pesos en el mercado
   local (ver [CEDEARs](../merval/cedears.md)). El CEDEAR replica el precio del
   ETF subyacente ajustado por tipo de cambio, pero no es un instrumento
   idéntico legalmente (implica riesgo y tratamiento distintos).

## Impacto del expense ratio a largo plazo: ejemplo numérico

El *expense ratio* es el costo anual que cobra el ETF, expresado como
porcentaje de los activos administrados, y se descuenta automáticamente
del valor del fondo (no se paga aparte). Aunque la diferencia entre
0,03% y 0,09% anual parece insignificante, compuesta a lo largo de
décadas tiene un impacto medible:

**Ejemplo numérico**: inversión inicial de $10.000.000 sin aportes
adicionales, retorno bruto del 8% anual antes de costos, a 20 años:

```
Con expense ratio de 0,03% (retorno neto 7,97%):
10.000.000 × (1,0797)^20 ≈ $44.180.000

Con expense ratio de 0,09% (retorno neto 7,91%):
10.000.000 × (1,0791)^20 ≈ $43.640.000

Diferencia acumulada ≈ $540.000 (≈1,2% del capital final)
```

La diferencia crece con el tiempo y con el capital invertido: sobre
montos mayores o horizontes más largos (30-40 años), la brecha entre un
expense ratio bajo y uno "moderadamente más alto" puede representar una
porción significativa del capital final, pese a que la diferencia anual
nominal parezca pequeña. Este es el argumento central a favor de priorizar
el expense ratio como criterio de selección entre ETFs que replican el
mismo índice subyacente.

## Tratamiento fiscal para un inversor argentino: ETF directo vs. CEDEAR

- **ETF comprado directamente** (vía bróker internacional, en dólares):
  sujeto a normativa fiscal de EE.UU. para no residentes (ej. retención
  sobre dividendos) además de la normativa argentina sobre bienes en el
  exterior (Bienes Personales) y ganancias de capital.
- **CEDEAR del mismo ETF** (comprado en pesos en Byma): sujeto a
  normativa argentina; a los fines de Bienes Personales se computa según
  el valor en dólares del activo subyacente, no el valor nominal en
  pesos del CEDEAR. El tratamiento de ganancias de capital y dividendos
  también sigue la normativa argentina vigente para CEDEARs, distinta a
  la de un ETF operado directamente en el exterior.
- En ambos casos, la normativa fiscal argentina sobre inversiones en el
  exterior y en instrumentos dolarizados cambió con frecuencia en los
  últimos años; verificar la situación vigente (AFIP/ARCA) antes de
  operar, ya que no constituye asesoramiento impositivo.

## Riesgos específicos de los ETFs

- **Tracking error**: pequeña diferencia entre el retorno del ETF y el
  retorno real del índice, por costos y método de replicación.
- **Riesgo de custodia/broker**: el ETF en sí es sólido, pero el acceso
  depende de la solidez del bróker o plataforma utilizada.
- **Riesgo cambiario**: para quien invierte desde fuera de EE.UU., el
  retorno final en moneda local depende también del tipo de cambio.

## Fuentes

Información general de estructura de producto, pública en los sitios de
los proveedores (ssga.com para SPY, ishares.com para IVV, vanguard.com
para VOO, invesco.com para QQQ). Verificar expense ratios y AUM vigentes
en esas fuentes antes de tomar decisiones.
