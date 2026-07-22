---
title: "Cartera de ejemplo: aplicando los conceptos de forma práctica"
tema: conceptos-generales
tags: [cartera, ejemplo, asignacion-activos, caso-practico]
nivel: intermedio
ultima_revision: 2026-07-22
---

# Cartera de ejemplo: aplicando los conceptos de forma práctica

Este documento no introduce instrumentos nuevos: toma los conceptos ya
desarrollados en el repo ([perfil de inversor](tipos-de-inversores.md),
[diversificación](diversificacion.md), [DCA](dollar-cost-averaging.md),
[rebalanceo](rebalanceo-portfolio.md)) y los encadena en un caso
ilustrativo, paso a paso, para mostrar cómo se combinan en la práctica.
Es un ejemplo educativo, no una recomendación de cartera para replicar.

## Paso 1: definir el perfil y el horizonte

Antes de elegir instrumentos, hay que responder dos preguntas (ver [tipos
de inversores](tipos-de-inversores.md)):

- **¿Cuál es el horizonte?** (cuándo se necesitará el dinero: en 1 año,
  en 10, en 30).
- **¿Cuál es la tolerancia real al riesgo?** (no la tolerancia declarada
  en abstracto, sino la capacidad de no vender en pánico ante una caída
  del 30%, ver [sesgos de comportamiento del
  inversor](sesgos-comportamiento-inversor.md)).

**Ejemplo del caso**: un inversor de 35 años, con horizonte de largo plazo
(jubilación, +25 años) para la mayor parte del capital, y una porción
menor con horizonte corto (fondo de emergencia, gastos previstos en el
próximo año).

## Paso 2: separar el dinero por función, no por instrumento

Antes de pensar en qué comprar, conviene dividir el capital según su
función:

| Función | Horizonte | Instrumento típico |
|---|---|---|
| Fondo de emergencia | Inmediato | [FCI money market](../merval/fci-money-market.md) o [plazo fijo](../merval/plazo-fijo.md) corto |
| Gastos previstos (< 2 años) | Corto | [Cauciones](../merval/cauciones-bursatiles.md), FCI money market, bonos cortos |
| Ahorro de largo plazo | Largo (+5 años) | Mezcla diversificada de renta variable y fija (ver Paso 3) |

Mezclar estas funciones (por ejemplo, poner el fondo de emergencia en
renta variable) es un error común: expone el dinero que puede necesitarse
pronto a la volatilidad de corto plazo de un activo pensado para el largo
plazo.

## Paso 3: asignación de activos para la porción de largo plazo

Sobre la porción de largo plazo, una asignación ilustrativa (no
prescriptiva) para un perfil de riesgo moderado podría verse así:

```
40% ETFs S&P 500 / Nasdaq-100 (vía CEDEAR o bróker internacional)
20% CEDEARs de acciones individuales o sectoriales
20% Renta fija internacional (bonos/ETF de bonos en dólares)
10% Instrumentos en pesos argentinos (bonos, ONs, FCI de renta fija)
10% Otras clases (REITs, crypto, según tolerancia al riesgo)
```

Este es un ejemplo con fines ilustrativos: la proporción real depende del
perfil de cada inversor, y un perfil conservador tendría mucha mayor
proporción en renta fija, mientras que uno agresivo con horizonte muy
largo podría concentrar más en renta variable. Ver [relación
riesgo-retorno](riesgo-retorno.md) para el trade-off subyacente a esta
decisión.

## Paso 4: aplicar DCA para entrar

En vez de invertir todo el capital de una vez, el inversor del ejemplo
decide aportar un monto fijo mensual, siguiendo la lógica de [Dollar-Cost
Averaging](dollar-cost-averaging.md), distribuido según la asignación del
Paso 3. Esto reduce el riesgo de invertir todo el capital justo antes de
una caída y automatiza la disciplina de aportar, mitigando el sesgo de
FOMO o de anclaje descripto en [sesgos de comportamiento del
inversor](sesgos-comportamiento-inversor.md).

## Paso 5: rebalancear con una regla definida de antemano

El inversor del ejemplo fija, desde el inicio, una regla de [rebalanceo
de portfolio](rebalanceo-portfolio.md): revisar la cartera cada seis
meses y rebalancear solo si algún componente se desvió más de 5 puntos
porcentuales de su peso objetivo. Fijar la regla *antes* de necesitarla
evita que la decisión de rebalancear (vender lo que subió, comprar lo que
bajó) dependa del estado de ánimo del momento.

## Paso 6: revisar (no reaccionar) periódicamente

- Revisar la cartera con la frecuencia definida en el Paso 5, no todos
  los días — mirar la cartera a diario amplifica la reacción emocional a
  la volatilidad de corto plazo sin aportar información útil para un
  horizonte de largo plazo.
- Ajustar la asignación objetivo solo ante cambios reales en el perfil
  (edad, horizonte, situación financiera), no ante movimientos de
  mercado de corto plazo.

## Qué no muestra este ejemplo

- No es una recomendación de cartera ni de porcentajes específicos: cada
  inversor tiene un perfil, horizonte y situación fiscal distintos (ver
  [impuestos a las inversiones en
  Argentina](../merval/impuestos-inversiones-argentina.md) y [fiscalidad
  internacional](fiscalidad-internacional.md), que pueden inclinar la
  decisión entre instrumentos equivalentes).
- No incluye el fondo de emergencia ni gastos de corto plazo dentro de la
  asignación de largo plazo, a propósito: mezclar ambos horizontes es uno
  de los errores más comunes al armar una cartera.

## Fuentes

Ejemplo ilustrativo con fines educativos que combina conceptos ya
desarrollados en este repositorio. No constituye asesoramiento financiero
personalizado; la asignación de activos de cada inversor debe ajustarse a
su propio perfil, horizonte y situación fiscal.
