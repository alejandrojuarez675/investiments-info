---
title: "CEDEARs"
tema: merval
tags: [cedear, mercado-argentino, acceso-internacional, ratio, ccl]
nivel: intermedio
ultima_revision: 2026-07-20
---

# CEDEARs (Certificados de Depósito Argentinos)

Los CEDEARs son certificados que cotizan en pesos en Byma (bolsa
argentina) y representan la propiedad de acciones o ETFs que cotizan en el
exterior (mayormente en EE.UU.), sin que el inversor argentino necesite
sacar el capital del circuito financiero local ni tener una cuenta en el
exterior.

## Cómo funcionan

- Un banco custodio adquiere y mantiene las acciones/ETFs subyacentes en
  el exterior.
- Emite CEDEARs que representan una fracción (o un múltiplo) de esa
  tenencia, y esos certificados cotizan en pesos en Byma.
- El precio del CEDEAR sigue, en teoría, el precio del activo subyacente
  ajustado por el tipo de cambio implícito (aproximadamente el Contado con
  Liquidación).

## Por qué se usan

- Permiten exposición a empresas como Apple, Microsoft, Amazon, o a ETFs
  como los que replican el S&P 500 (ver [ETFs que replican el S&P 500](../sp500/etfs-sp500.md)), sin
  necesidad de abrir una cuenta en un bróker internacional.
- Se operan con pesos, a través de cualquier bróker local (ALyC) que
  ofrezca CEDEARs.
- Son una vía indirecta de "dolarización" de una cartera para inversores
  argentinos, ya que su precio en pesos tiende a moverse con el tipo de
  cambio implícito además de con el precio del activo subyacente.

## Ratio de conversión: cómo se calcula el precio teórico

Cada CEDEAR tiene un **ratio** definido que indica cuántos CEDEARs
representan una acción/ETF del exterior (o viceversa: algunos ratios son
fraccionarios, ej. "10 CEDEARs = 1 acción"). El precio teórico del CEDEAR
en pesos se calcula como:

```
Precio teórico del CEDEAR = (Precio del subyacente en USD / Ratio) × Dólar CCL
```

**Ejemplo numérico**: una acción que cotiza a USD 200 en EE.UU., con un
CEDEAR de ratio 10 a 1 (10 CEDEARs = 1 acción), y un dólar CCL de $1.400:

```
Precio por acción subyacente en pesos = 200 × 1.400 = $280.000
Precio teórico por CEDEAR = 280.000 / 10 = $28.000
```

En la práctica, el precio de mercado del CEDEAR puede desviarse de este
valor teórico (el llamado "ratio implícito" puede diferir del CCL de
referencia), generando lo que se conoce como riesgo de "ratio": si el
CEDEAR cotiza por encima del valor teórico, se dice que está "caro" en
relación al CCL implícito, y viceversa.

## Cómo comprar un CEDEAR: pasos concretos

1. Tener una [cuenta comitente abierta](brokers-argentina.md#cómo-abrir-una-cuenta-comitente)
   en un bróker local con fondos en pesos.
2. Buscar el ticker del CEDEAR deseado (ej. AAPL para Apple, MSFT para
   Microsoft) en la plataforma del bróker — el ticker suele ser el mismo
   que el de la acción en EE.UU.
3. Verificar el ratio de conversión vigente (publicado por Byma y visible
   en la ficha del instrumento en la mayoría de los brokers).
4. Colocar la orden de compra en pesos, igual que con cualquier acción
   local; la liquidación es en T+1 o T+2 según el instrumento.

## CEDEARs más operados por sector (referencia orientativa)

Lista ilustrativa de CEDEARs frecuentemente mencionados por volumen de
operación en Byma, sin implicar recomendación de inversión:

- **Tecnología**: Apple (AAPL), Microsoft (MSFT), Nvidia (NVDA), Amazon
  (AMZN), Alphabet/Google (GOOGL), Meta (META).
- **ETFs**: SPY, VOO, QQQ (ver [ETFs que replican el S&P
  500](../sp500/etfs-sp500.md)).
- **Financiero**: JPMorgan (JPM), Visa (V), Mastercard (MA).
- **Consumo**: Coca-Cola (KO), McDonald's (MCD), Walmart (WMT).
- **Industria/energía**: Tesla (TSLA), Exxon Mobil (XOM).

La lista de CEDEARs disponibles y su liquidez relativa cambia con el
tiempo según altas y bajas autorizadas por la CNV/Byma; verificar
disponibilidad vigente en el bróker utilizado.

## Riesgos y particularidades

- **No son idénticos al activo subyacente**: existe riesgo de "ratio"
  (descalce entre el precio del CEDEAR y el valor teórico del subyacente
  convertido a pesos), especialmente en momentos de estrés regulatorio o
  cambios en las normas de acceso al CCL.
- **Riesgo regulatorio**: cambios en las regulaciones de la Comisión
  Nacional de Valores (CNV) sobre operatoria de CEDEARs y CCL pueden
  afectar su liquidez o funcionamiento.
- **Doble exposición**: el inversor queda expuesto tanto al desempeño del
  activo subyacente como a la dinámica del tipo de cambio implícito
  argentino, lo cual puede sumar o restar retorno según el momento.
- **Liquidez variable**: algunos CEDEARs tienen mucho volumen de
  operación, otros son mucho menos líquidos.

## Fuentes

Descripción general de la operatoria pública en Byma (byma.com.ar) y
regulación de la CNV (argentina.gob.ar/cnv). Verificar la normativa
vigente antes de operar, dado que las reglas de acceso al CCL han
cambiado varias veces en el tiempo.

