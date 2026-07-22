---
title: "Argentina y el dólar: qué se dolariza, cuándo conviene pesos u otro dólar, y carry trade"
tema: conceptos-generales
tags: [dolar, argentina, carry-trade, devaluacion, tasa-de-interes, dolarizacion]
nivel: intermedio
ultima_revision: 2026-07-22
---

# Argentina y el dólar: qué se dolariza, cuándo conviene pesos u otro dólar, y carry trade

Este documento aborda la relación estructural entre la economía argentina y
el dólar estadounidense: por qué ciertos bienes y activos se fijan en
dólares y otros en pesos, qué determina la conveniencia relativa de estar
en una moneda u otra en un momento dado, y qué es el "carry trade" en el
contexto argentino. Para los mecanismos de cada tipo de dólar (oficial,
MEP, CCL, blue), ver [Dólar en Argentina](../merval/dolar-argentina.md).

## Por qué Argentina es una economía bimonetaria

Décadas de alta inflación y episodios recurrentes de devaluación abrupta
generaron que el peso argentino no cumpla, para buena parte de la
población y de las empresas, una de las funciones básicas del dinero:
la de **reserva de valor**. Ante esa desconfianza estructural en el peso
como forma de ahorro de mediano/largo plazo, el dólar pasó a cumplir ese
rol de facto, aunque el peso siga siendo la moneda de curso legal para
transacciones cotidianas. Esta convivencia de dos monedas con roles
distintos —peso para transacciones e ingresos, dólar para ahorro y
activos de valor— se conoce como **bimonetarismo** y es la razón de fondo
detrás de casi todas las particularidades cambiarias del país.

## Qué se compra y vende en dólares, y qué en pesos

No hay una regla legal única; es una combinación de costumbre de mercado,
tipo de bien y con quién se transacciona:

- **Fijados en dólares (aunque se paguen en pesos al tipo de cambio del
  día)**:
  - Inmuebles: el precio de venta de una propiedad se pacta,
    tradicionalmente, en dólares en toda Argentina, incluso entre dos
    residentes locales (ver [Inversión inmobiliaria
    directa](inversion-inmobiliaria-directa.md)).
  - Automóviles usados de alto valor y algunos bienes durables importados,
    aunque con menor uniformidad que los inmuebles.
  - Alquileres comerciales en algunas plazas (menos frecuente que en
    inmuebles residenciales, donde la Ley de Alquileres empuja a pactar en
    pesos).
  - Honorarios de ciertos servicios profesionales de alto valor (por
    ejemplo, en construcción o desarrollos inmobiliarios).
  - Activos financieros: bonos y ONs en su versión "D" (dólares), CEDEARs
    (representan activos cuyo subyacente cotiza en dólares en el
    exterior), criptoactivos de referencia (ver [comparativa de clases de
    activos](comparativa-clases-de-activos.md)).
- **Fijados en pesos**:
  - Alquileres residenciales (por normativa y práctica de mercado).
  - Salarios, la enorme mayoría de bienes de consumo, servicios públicos,
    impuestos y la actividad comercial cotidiana.
  - Plazo fijo, cauciones y la mayoría de los instrumentos de renta fija
    en pesos (ver [Plazo fijo](../merval/plazo-fijo.md) y [Cauciones
    bursátiles](../merval/cauciones-bursatiles.md)).

Este descalce —activos valuados en dólares pero ingresos/rentas en
pesos— es estructural en la economía argentina y genera fricciones
recurrentes: por ejemplo, el propietario de un inmueble alquilado en pesos
ve licuarse en términos de dólares el valor de esa renta entre ajustes de
contrato, mientras el valor del inmueble en sí permanece dolarizado (ver el
detalle en [Inversión inmobiliaria directa](inversion-inmobiliaria-directa.md)).

## Cuándo conviene estar en pesos y cuándo en dólares

No existe una respuesta única y permanente: depende de la comparación
entre la tasa de interés que ofrecen los instrumentos en pesos y la
expectativa de devaluación del tipo de cambio en el mismo horizonte. De
forma simplificada:

- **Conviene estar en pesos (a tasa)** cuando la tasa de interés en pesos
  disponible (plazo fijo, caución, FCI money market, Lecaps u otros
  instrumentos del Tesoro) supera a la devaluación esperada del dólar en
  el mismo período. En ese escenario, quien mantuvo pesos a tasa termina
  con más dólares al cabo del período que quien compró dólares al
  principio y los mantuvo quietos.
- **Conviene estar en dólares** cuando se espera que la devaluación futura
  supere a la tasa en pesos disponible, o cuando el objetivo no es
  maximizar retorno sino **preservar poder adquisitivo ante incertidumbre**
  (el dólar no rinde por sí solo, pero tampoco se licúa por inflación
  argentina).
- Esta comparación nunca es una certeza: ambas variables (tasa futura y
  devaluación futura) son expectativas, no datos conocidos de antemano.
  Quien apuesta a una u otra está tomando una posición sobre la política
  económica y cambiaria futura, no ejecutando un cálculo sin riesgo.
- El horizonte temporal importa: una diferencia de tasas puede compensar
  una devaluación moderada en el corto plazo, pero un salto cambiario
  abrupto (como los que Argentina experimentó repetidamente) puede borrar
  meses de rendimiento en pesos en una sola devaluación.

## Carry trade: qué es y cómo funciona en Argentina

El **carry trade** consiste en tomar una posición en la moneda o
instrumento de menor rendimiento nominal (o directamente endeudarse en esa
moneda) para invertir el capital en la moneda o instrumento de mayor
rendimiento nominal, ganando la diferencia de tasas ("carry") siempre que
el tipo de cambio no se mueva en contra en una magnitud mayor a esa
diferencia.

En el contexto argentino, la variante más citada es el llamado
**"carry trade en pesos"**:

1. Un inversor (local o extranjero) vende dólares y compra instrumentos en
   pesos que pagan una tasa de interés nominal alta (Lecaps, plazo fijo,
   bonos en pesos, cauciones).
2. Mantiene esa posición durante el plazo del instrumento, cobrando la
   tasa en pesos.
3. Al vencimiento, vuelve a comprar dólares con el capital más los
   intereses acumulados en pesos.
4. La ganancia en dólares del carry trade es, aproximadamente:

```
Ganancia en USD ≈ (1 + tasa en pesos del período) / (1 + devaluación del período) − 1
```

**Ejemplo numérico ilustrativo**: un inversor convierte USD 10.000 a pesos
al tipo de cambio $1.000 (recibe $10.000.000), los coloca en un instrumento
en pesos a una tasa efectiva del 8% en 90 días, y al cabo de ese plazo el
tipo de cambio subió solo a $1.030 (3% de devaluación en el período):

```
Capital en pesos al vencimiento = 10.000.000 × 1,08 = $10.800.000
Dólares recomprados = 10.800.000 / 1.030 ≈ USD 10.485
Ganancia en dólares ≈ 4,85% en 90 días
```

Si en cambio el tipo de cambio hubiera saltado a $1.100 (10% de
devaluación) en el mismo período, el resultado en dólares habría sido
negativo pese a haber cobrado una tasa nominal en pesos positiva:

```
Dólares recomprados = 10.800.000 / 1.100 ≈ USD 9.818
Resultado ≈ −1,8% en dólares, a pesar del 8% de interés cobrado en pesos
```

### Por qué el carry trade es una apuesta cambiaria, no un arbitraje

El carry trade **no es una ganancia libre de riesgo**: es apostar a que el
tipo de cambio se mantendrá relativamente estable (o "atrasado" respecto a
la inflación) durante el plazo de la inversión, algo que en la práctica
depende de la política cambiaria y monetaria del momento (esquema de banda
cambiaria o flotación, nivel de reservas del BCRA, expectativas
electorales, entre otros factores). Cuando ese esquema se sostiene, el
carry trade rinde bien en dólares; cuando el tipo de cambio se corrige
abruptamente (una devaluación), el carry trade puede generar pérdidas en
dólares pese a haber cobrado una tasa nominal en pesos alta.

- El carry trade en pesos suele ser más atractivo, para un inversor, en
  esquemas cambiarios con **tipo de cambio administrado o con banda**
  (mayor previsibilidad de corto plazo sobre el techo de devaluación) que
  en esquemas de **flotación libre** (mayor incertidumbre sobre el
  recorrido del tipo de cambio).
- Es una estrategia más relevante para capital de corto plazo (fondos
  especulativos, tesorería de empresas) que para el ahorro de largo plazo
  de una persona física, dado que requiere seguimiento activo de las
  condiciones cambiarias y capacidad de tolerar la pérdida si la apuesta
  no se cumple.
- No confundir con el "carry trade" internacional clásico (ej. tomar
  deuda en yenes a tasa baja para invertir en instrumentos en dólares a
  tasa alta): la lógica es la misma (ganar la diferencia de tasas), pero
  en el caso argentino la contraparte de la apuesta es, específicamente,
  la política cambiaria doméstica.

## Cómo pensar la asignación entre pesos y dólares en una cartera

- Ninguna cartera bien diversificada debería estar 100% en una sola
  moneda de forma permanente: combinar instrumentos en pesos (para captar
  tasa cuando es atractiva) y en dólares (para preservar poder
  adquisitivo ante un salto cambiario) es la aplicación directa del
  principio de [diversificación](diversificacion.md) al caso argentino.
- El horizonte del ahorro importa: fondos que se van a necesitar en pesos
  en el corto plazo (por ejemplo, para gastos corrientes) no necesitan la
  misma cobertura cambiaria que un ahorro de largo plazo.
- Ver la [comparativa transversal de clases de
  activos](comparativa-clases-de-activos.md) para ubicar cada instrumento
  según su moneda de denominación, y [Dólar en
  Argentina](../merval/dolar-argentina.md) para el detalle operativo de
  cómo acceder a cada tipo de dólar.

## Fuentes

Descripción general con fines educativos de la dinámica peso-dólar en
Argentina y del carry trade. Los ejemplos numéricos son ilustrativos, no
proyecciones. No constituye asesoramiento financiero personalizado;
verificar el esquema cambiario y las tasas vigentes al momento de tomar
cualquier decisión, dado que ambos cambian con frecuencia en Argentina.

- Banco Central de la República Argentina (bcra.gob.ar) — tasas de
  política monetaria y esquema cambiario vigente.
- [Calculadora de dólar - CalculadoraYa](https://www.calculadoraya.click/calculadoras/dolar)
  — cotización de referencia para conversiones peso/dólar.
