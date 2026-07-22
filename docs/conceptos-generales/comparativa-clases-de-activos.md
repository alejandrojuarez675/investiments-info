---
title: "Comparativa transversal de clases de activos"
tema: conceptos-generales
tags: [comparativa, clases-de-activos, liquidez, volatilidad, resumen]
nivel: intermedio
ultima_revision: 2026-07-22
---

# Comparativa transversal de clases de activos

Este documento no reemplaza el desarrollo en profundidad de cada
instrumento (disponible en su documento específico, enlazado en cada
fila), sino que ofrece una vista comparativa rápida entre las principales
clases de activos cubiertas en este repositorio, para ubicar cada una en
relación a las demás antes de profundizar.

## Tabla comparativa general

| Instrumento | Liquidez | Volatilidad típica | Horizonte razonable | Moneda | Complejidad fiscal (AR) |
|---|---|---|---|---|---|
| [Plazo fijo](../merval/plazo-fijo.md) | Baja (plazo fijo, sin rescate anticipado) | Ninguna (nominal) | Corto | Pesos | Baja |
| [FCI money market](../merval/fci-money-market.md) | Muy alta (rescate en 24-48hs) | Muy baja | Muy corto | Pesos | Baja |
| [Cauciones bursátiles](../merval/cauciones-bursatiles.md) | Alta (plazos de 1-120 días) | Muy baja | Muy corto | Pesos | Baja |
| [Bonos argentinos](../merval/bonos-argentinos.md) | Media-alta (según especie) | Alta (riesgo país) | Medio-largo | Pesos o dólares | Media |
| [ONs argentinas](../merval/obligaciones-negociables.md) | Media (menor que bonos soberanos) | Media-alta (riesgo crediticio) | Medio-largo | Pesos o dólares | Media |
| [Acciones argentinas](../merval/acciones-argentinas.md) | Media (desigual por panel) | Muy alta | Largo | Pesos | Media |
| [CEDEARs](../merval/cedears.md) | Alta | Alta (subyacente + tipo de cambio) | Largo | Pesos (subyacente en USD) | Media |
| [Renta fija internacional](renta-fija-internacional.md) | Alta (vía ETF) | Media (según duración) | Medio-largo | Dólares | Alta |
| [ETFs S&P 500 / Nasdaq](../sp500/etfs-sp500.md) | Alta | Alta | Largo | Dólares | Alta |
| [ETFs UCITS (Europa)](../sp500/etfs-ucits-europa.md) | Alta | Alta | Largo | Dólares/euros | Alta |
| [FCI renta fija/variable/mixtos](../merval/fondos-comunes-inversion.md) | Media-alta (según fondo) | Variable según categoría | Medio-largo | Pesos | Media |
| [Inmueble directo](inversion-inmobiliaria-directa.md) | Muy baja | Baja (valuación poco frecuente) | Muy largo | Dólares (venta) / pesos (renta) | Media-alta |
| [FCI inmobiliario / REIT](real-estate-fci-inmobiliario.md) | Media (FCI) / alta (REIT) | Media | Largo | Pesos (FCI) / dólares (REIT) | Media |
| [Bitcoin / Ethereum](../crypto/bitcoin-ethereum.md) | Alta | Muy alta | Largo (especulativo) | Dólares (referencia) | Media-alta |
| [Stablecoins](../crypto/stablecoins-defi.md) | Alta | Muy baja (si el respaldo es sólido) | Corto-medio | Dólares (referencia) | Media-alta |
| [Derivados (opciones/futuros)](derivados-cobertura.md) | Variable | Muy alta (apalancamiento) | Corto (especulación) o cobertura puntual | Según subyacente | Alta |

Esta tabla es orientativa: dentro de cada categoría hay variantes con
perfiles muy distintos (por ejemplo, no todos los bonos argentinos tienen
la misma volatilidad, y no todas las acciones del panel general tienen la
misma liquidez que las del panel líder). Usarla como punto de partida
para saber qué documento profundizar, no como sustituto del análisis de
cada instrumento específico.

## Cómo leer la tabla según el objetivo

- **Necesito el dinero pronto (semanas/meses)**: mirar la columna de
  liquidez — plazo fijo, FCI money market y cauciones son los candidatos
  naturales, no acciones, inmuebles ni crypto.
- **Busco cobertura contra la inflación/devaluación argentina**: los
  instrumentos en dólares o ajustados (CEDEARs, ONs/bonos dollar-linked,
  stablecoins) cumplen ese rol mejor que los instrumentos nominados
  puramente en pesos sin ajuste.
- **Tengo horizonte largo y tolero volatilidad**: acciones, CEDEARs,
  ETFs y crypto son los que, históricamente, ofrecieron mayor retorno
  esperado a cambio de mayor volatilidad de corto plazo (ver [relación
  riesgo-retorno](riesgo-retorno.md)).
- **Quiero simplicidad fiscal**: los instrumentos en pesos operados
  dentro del circuito argentino (plazo fijo, FCI locales) suelen tener
  menor complejidad de declaración que los que cruzan jurisdicciones
  (ETFs de EE.UU., crypto, inmuebles vendidos en dólares) — ver
  [impuestos a las inversiones en
  Argentina](../merval/impuestos-inversiones-argentina.md) y
  [fiscalidad internacional](fiscalidad-internacional.md).

## Combinando clases de activos: el rol de la diversificación

Ninguna fila de la tabla es "mejor" en abstracto: cada una cumple una
función distinta según el horizonte y el objetivo del capital, en línea
con el principio de [diversificación](diversificacion.md). El documento
[cartera de ejemplo práctico](cartera-ejemplo-practico.md) muestra cómo
combinar varias de estas filas en una asignación concreta, y [rebalanceo
de portfolio](rebalanceo-portfolio.md) cómo mantener esa combinación en
el tiempo a medida que cada clase de activo evoluciona a un ritmo
distinto.

## Fuentes

Comparativa elaborada a partir del contenido ya desarrollado en los
documentos enlazados de este repositorio. No constituye asesoramiento
financiero personalizado; verificar el detalle y los riesgos específicos
de cada instrumento en su documento correspondiente antes de invertir.
