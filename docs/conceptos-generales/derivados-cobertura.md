---
title: "Derivados: opciones, futuros y cobertura"
tema: conceptos-generales
tags: [derivados, opciones, futuros, cobertura, apalancamiento, dolar-futuro]
nivel: avanzado
ultima_revision: 2026-07-22
---

# Derivados: opciones, futuros y cobertura

Un derivado es un instrumento financiero cuyo valor depende ("deriva") del
precio de otro activo subyacente (una acción, un índice, una moneda, una
tasa). Se usan tanto para **cobertura** (reducir un riesgo existente) como
para **especulación** (apostar a un movimiento de precio con
apalancamiento). Es un tema avanzado: conviene entender bien el mecanismo
antes de operar, porque el riesgo de pérdida puede superar al de comprar
el activo subyacente directamente.

## Opciones

Una opción da el **derecho, pero no la obligación**, de comprar (call) o
vender (put) un activo subyacente a un precio determinado (strike) hasta
o en una fecha de vencimiento, a cambio de pagar una prima.

- **Call**: derecho a comprar. Se beneficia si el subyacente sube por
  encima del strike más la prima pagada.
- **Put**: derecho a vender. Se beneficia si el subyacente baja por debajo
  del strike menos la prima pagada.
- **Comprador de la opción**: riesgo limitado a la prima pagada, ganancia
  potencial alta (call) o acotada al valor del subyacente (put).
- **Vendedor (lanzador) de la opción**: cobra la prima, pero asume una
  obligación si la contraparte ejerce; el riesgo puede ser mucho mayor que
  la prima cobrada, especialmente en ventas de calls "descubiertos" (sin
  tener el activo subyacente).
- En Argentina, Byma ofrece un mercado de opciones sobre las acciones más
  líquidas del panel líder; en EE.UU. el mercado de opciones es mucho más
  profundo y líquido, con opciones sobre acciones, ETFs e índices.

## Futuros

Un futuro es un contrato que obliga a comprar o vender un activo a un
precio pactado en una fecha futura determinada, a diferencia de la opción
donde hay un derecho pero no obligación.

- **Futuro de dólar (Argentina)**: se opera en A3 (ex-ROFEX) y en Byma.
  Permite fijar hoy el tipo de cambio al que se comprará o venderá
  dólares en una fecha futura, sin necesidad de tener los dólares o pesos
  físicamente hasta el vencimiento (se liquida por diferencia).
  Es ampliamente usado por empresas para cubrirse de la volatilidad
  cambiaria (ver [dólar en Argentina](../merval/dolar-argentina.md)), y
  también con fines especulativos.
- **Márgenes de garantía**: para operar futuros se exige un margen inicial
  (una fracción del valor nocional del contrato) y márgenes de variación
  diarios según cómo se mueva el precio; si el mercado se mueve en contra,
  puede haber "llamados de margen" que exigen aportar más fondos.

## Cobertura vs. especulación: el mismo instrumento, dos usos

El ejemplo más claro es el futuro de dólar en Argentina:

- **Cobertura**: una empresa que sabe que en 90 días debe pagar una
  importación en dólares compra futuro de dólar a 90 días, fijando hoy el
  tipo de cambio y eliminando la incertidumbre cambiaria de esa
  operación, aunque el dólar suba o baje en el ínterin.
- **Especulación**: un inversor sin esa necesidad real compra el mismo
  contrato apostando a que el dólar futuro subirá más de lo que el
  mercado ya tiene incorporado en el precio, buscando una ganancia. Aquí
  el instrumento no reduce riesgo, lo genera: si el dólar baja o sube
  menos de lo esperado, hay pérdida.

## Apalancamiento: la característica central de los derivados

Tanto opciones como futuros permiten tomar una posición de valor nocional
mucho mayor al capital efectivamente desembolsado (la prima en opciones,
el margen en futuros). Esto amplifica tanto ganancias como pérdidas.

**Ejemplo numérico ilustrativo**: con $100.000 de margen, un inversor
controla un contrato de futuro de dólar con valor nocional de $1.000.000
(apalancamiento de 10x). Si el subyacente se mueve un 5% a favor, la
ganancia sobre el margen aportado es de aproximadamente 50% (`5% × 10`);
si se mueve un 5% en contra, la pérdida sobre el margen es igualmente de
aproximadamente 50%, pudiendo incluso perderse más que el margen inicial
en movimientos bruscos.

## Riesgos y consideraciones

- **Riesgo de apalancamiento**: pérdidas potencialmente mayores al capital
  inicial aportado, a diferencia de comprar el activo subyacente al
  contado (donde la pérdida máxima es el 100% de lo invertido).
- **Complejidad**: valuar una opción requiere entender variables como
  volatilidad implícita y tiempo al vencimiento (modelos como Black-Scholes);
  operar sin entender estas variables incrementa el riesgo de pérdidas no
  anticipadas.
- **Riesgo de liquidez**: en mercados menos profundos (como opciones sobre
  acciones argentinas de menor volumen), el spread compra-venta puede ser
  amplio, encareciendo entrar y salir de la posición.
- **No apto para todo perfil**: dado el apalancamiento y la complejidad,
  los derivados suelen ser inadecuados para un inversor principiante o
  conservador (ver [tipos de inversores](tipos-de-inversores.md)); su uso
  más razonable para un inversor minorista suele ser la cobertura puntual
  de un riesgo concreto, no la especulación apalancada.

## Fuentes

Descripción general de derivados con fines educativos. Para condiciones
de contratos y márgenes vigentes, consultar Byma (byma.com.ar), A3
(a3mercados.com.ar) o el bróker utilizado. No constituye asesoramiento
financiero personalizado.
