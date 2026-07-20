---
title: "Plazo fijo en Argentina: tradicional y UVA"
tema: merval
tags: [plazo-fijo, uva, tna, tea, inflacion, mercado-argentino]
nivel: intermedio
ultima_revision: 2026-07-20
---

# Plazo fijo en Argentina: tradicional y UVA

Por historial de alta inflación, el plazo fijo es uno de los instrumentos
más elegidos por el ahorrista argentino, junto con la compra de dólares
(ver [Dólar en Argentina](dolar-argentina.md)), por su simplicidad y bajo
riesgo percibido, antes que instrumentos de mercado de capitales
(CEDEARs, bonos; ver [CEDEARs](cedears.md) y
[Bonos argentinos](bonos-argentinos.md)).

## Plazo fijo tradicional

Depósito a plazo en un banco, a una tasa nominal anual (TNA) fija pactada
al momento de constituirlo, con capital disponible recién al vencimiento
(30 días como plazo mínimo habitual para personas físicas).

- Es el instrumento más elegido por los argentinos por su simplicidad,
  bajo riesgo percibido (depósito bancario) y la garantía de los depósitos
  del BCRA hasta cierto monto.
- Riesgo principal: si la inflación supera la TNA pactada, el ahorrista
  pierde poder adquisitivo en términos reales, aun ganando en pesos
  nominales.
- Conviene comparar la TNA ofrecida entre bancos y frente a la de un FCI
  money market (ver [FCI money market y billeteras
  virtuales](fci-money-market.md)), que suele ofrecer tasas similares o
  mejores con liquidez diaria en vez de un plazo fijo de 30 días.

### Cómo calcular el interés de un plazo fijo tradicional

El plazo fijo tradicional en Argentina paga interés simple (no compuesto
dentro del plazo pactado, a diferencia de un FCI money market que
capitaliza diariamente):

```
Interés = Capital × TNA × (días / 365)
```

**Ejemplo numérico**: $1.000.000 a 30 días, TNA del 30%:

```
Interés = 1.000.000 × 0,30 × (30 / 365) ≈ $24.658
Capital final = $1.000.000 + $24.658 = $1.024.658
```

Si se renueva el plazo fijo (capital + interés) todos los meses durante un
año a la misma TNA, el efecto de reinversión mensual genera una TEA
(Tasa Efectiva Anual) superior a la TNA nominal:

```
TEA ≈ (1 + TNA × 30/365)^(365/30) − 1
```

Con TNA del 30%: `TEA ≈ (1 + 0,0247)^12,17 − 1 ≈ 34,2%`. La diferencia
entre TNA y TEA es la misma lógica de capitalización que en
[interés compuesto](../conceptos-generales/interes-compuesto.md), aplicada
a renovaciones sucesivas de un plazo fijo.

## Plazo fijo UVA

Variante que ajusta el capital por UVA (Unidad de Valor Adquisitivo,
indexada al CER/inflación), más una tasa adicional fija pactada al
constituirlo. A diferencia del plazo fijo tradicional, protege el poder
adquisitivo del capital ante escenarios de inflación alta o acelerándose.

```
Capital final = Capital inicial × (UVA_vencimiento / UVA_inicio) × (1 + tasa adicional × días/365)
```

**Ejemplo numérico**: $1.000.000 a 90 días, con UVA inicial de $1.000 y
UVA al vencimiento de $1.080 (8% de inflación acumulada en el período),
más una tasa adicional del 2% anual:

```
Ajuste por UVA = 1.000.000 × (1.080 / 1.000) = 1.080.000
Tasa adicional = 1.080.000 × 0,02 × (90/365) ≈ $5.326
Capital final ≈ $1.085.326
```

- Plazo mínimo habitualmente de 90 días (mayor que el tradicional).
- Conviene frente al plazo fijo tradicional cuando se espera que la
  inflación futura supere la TNA que ofrece el plazo fijo tradicional; es
  una apuesta a la trayectoria de precios, no una opción estrictamente
  superior en todo momento. Si la TNA del plazo fijo tradicional termina
  siendo mayor a la inflación + tasa adicional del UVA en el mismo
  período, el tradicional hubiera rendido más en términos reales.
- Algunos bancos ofrecen precancelación anticipada parcial, pero suele
  implicar pérdida de parte del ajuste pactado.

## Plazo fijo vs. inflación: por qué importa medir en términos reales

Un plazo fijo que rinde 30% TNA nominal en un año con 35% de inflación
implica una **pérdida real** de poder adquisitivo, aunque el saldo en
pesos haya aumentado:

```
Rendimiento real ≈ [(1 + TEA) / (1 + inflación anual)] − 1
```

Ejemplo: TEA del 34% con inflación anual del 40% →
`Rendimiento real ≈ (1,34 / 1,40) − 1 ≈ −4,3%`. Este es el motivo
estructural por el cual, en contextos de inflación alta o incierta como el
argentino, muchos ahorristas prefieren instrumentos ajustados (UVA, CER) o
directamente dolarización parcial de la cartera (ver
[Dólar en Argentina](dolar-argentina.md)) antes que un plazo fijo
tradicional a tasa fija, especialmente en horizontes donde la inflación
esperada es incierta o volátil.

## Plazo fijo vs. dólar: cómo se comparan

- El plazo fijo (tradicional o UVA) rinde en pesos y expone al ahorrista
  al riesgo de devaluación: si el tipo de cambio sube más que la tasa
  pactada, el ahorrista pierde poder adquisitivo medido en dólares.
- El dólar (MEP/CCL/ahorro) es cobertura cambiaria, pero no genera
  rendimiento por sí mismo mientras se mantiene "debajo del colchón" o en
  una cuenta sin remuneración; para generar rendimiento en dólares hace
  falta un instrumento adicional (ej. un FCI o bono en dólares).
- Es común combinar ambos como estrategia de diversificación entre pesos
  y moneda dura, en vez de ir "todo a un lado", en línea con el principio
  general de [diversificación](../conceptos-generales/diversificacion.md).

## Fuentes

Descripción general de instrumentos populares en Argentina. Tasas
vigentes a julio 2026; verificar cambios normativos antes de operar. No
constituye asesoramiento financiero personalizado.

- [Calculadora Plazo Fijo UVA Argentina 2026 - Richify](https://www.richify.ai/ar/plazo-fijo-uva)
- Banco Central de la República Argentina (bcra.gob.ar) — normativa
  cambiaria y de depósitos vigente.
