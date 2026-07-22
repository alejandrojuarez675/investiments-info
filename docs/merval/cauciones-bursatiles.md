---
title: "Cauciones bursátiles en Argentina"
tema: merval
tags: [cauciones, liquidez, tasa, byma, garantia]
nivel: intermedio
ultima_revision: 2026-07-22
---

# Cauciones bursátiles en Argentina

Una caución bursátil es un préstamo de muy corto plazo garantizado con
títulos valores, operado en Byma. Es uno de los instrumentos más usados en
Argentina para "colocar" liquidez ociosa por pocos días, como alternativa a
un [plazo fijo](plazo-fijo.md) o a los [FCI money market](fci-money-market.md).

## Cómo funciona

En una caución hay dos partes:

- **Colocadora (o "prestamista")**: entrega pesos y recibe una tasa de
  interés a cambio, tomando como garantía los títulos que aporta la otra
  parte. Es el rol que ocupa un inversor que quiere rentabilizar liquidez
  a muy corto plazo.
- **Tomadora (o "prestataria")**: entrega títulos valores en garantía (por
  ejemplo, acciones o bonos que ya tiene en cartera) y recibe pesos a
  cambio, comprometiéndose a devolverlos más un interés al vencimiento. Es
  el rol típico de quien necesita liquidez transitoria sin vender su
  posición (por ejemplo, para no perder una tenencia de acciones o bonos
  que no quiere liquidar).

El plazo es corto: usualmente entre 1 y 120 días, siendo los plazos de 1 a
7 días los más operados para gestión de liquidez diaria. Byma actúa como
garante de la operación, lo que reduce el riesgo de contraparte frente a
un préstamo bilateral no garantizado.

## Uso como colocación de liquidez

Para un inversor con pesos ociosos por pocos días (por ejemplo, entre que
vende una posición y decide el próximo destino de esos fondos), colocarse
como colocador de una caución permite:

- Obtener una tasa de interés diaria sobre el dinero, en vez de dejarlo sin
  rendimiento en la cuenta comitente.
- Recuperar el capital en un plazo muy corto y conocido de antemano (a
  diferencia de un plazo fijo tradicional, que suele tener plazos mínimos
  de 30 días).
- Muchos brokers ofrecen la colocación automática de saldos en cauciones
  a un click, funcionando de forma similar a un FCI money market en cuanto
  a la experiencia de usuario, aunque el mecanismo subyacente es distinto
  (préstamo garantizado vs. cuotapartes de un fondo).

## Tasa de caución

La tasa de una caución fluctúa según oferta y demanda de pesos en el
mercado y suele moverse en sintonía con la tasa de política monetaria del
BCRA y con la tasa de plazo fijo, aunque puede haber diferencias notables
en momentos de mucha demanda de liquidez (por ejemplo, antes de
vencimientos impositivos o de licitaciones del Tesoro).

**Ejemplo numérico ilustrativo**: si la tasa de caución a 7 días es 3,5%
efectiva mensual y se colocan $1.000.000 por ese plazo, el interés bruto
aproximado es:

```
Interés ≈ Capital × (tasa mensual / 30) × días
Interés ≈ 1.000.000 × (0,035 / 30) × 7 ≈ $8.166
```

Es un cálculo aproximado con fines ilustrativos; el cálculo exacto depende
de la convención de días y la tasa vigente al momento de la operación, que
cambia diariamente.

## Riesgos y consideraciones

- **Riesgo de contraparte mitigado, no eliminado**: Byma actúa como
  garante central, pero en escenarios de estrés extremo de mercado el
  riesgo sistémico no desaparece completamente.
- **Riesgo de reinversión**: al ser plazos muy cortos, la tasa obtenida en
  la próxima renovación puede ser distinta (mayor o menor) a la actual.
- **No es lo mismo que un FCI money market**: la caución es un préstamo
  con tasa pactada de antemano; el FCI money market invierte en una
  cartera de instrumentos y su rendimiento diario varía según esa cartera.
  Comparar el costo/beneficio de cada uno (comisiones del bróker, tasa neta)
  antes de elegir.
- **Uso apalancado (avanzado)**: la caución también puede usarse para
  tomar pesos prestados dando en garantía una cartera de títulos, y así
  apalancar una posición. Este uso es de mayor riesgo y requiere entender
  bien el mecanismo de garantías y llamados de margen antes de operarlo.

## Fuentes

Descripción general de la operatoria de cauciones en Byma (byma.com.ar).
Para tasas vigentes y condiciones operativas, consultar el bróker
utilizado o el sitio de Byma. No constituye asesoramiento financiero
personalizado.
