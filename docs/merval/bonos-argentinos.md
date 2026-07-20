---
title: "Bonos argentinos"
tema: merval
tags: [bonos, renta-fija, mercado-argentino, riesgo-pais, tir, paridad]
nivel: avanzado
ultima_revision: 2026-07-20
---

# Bonos argentinos

Los bonos argentinos son instrumentos de deuda emitidos por el Estado
argentino (bonos soberanos) o por provincias/empresas locales, con
características particulares por el historial de reestructuraciones y
volatilidad macroeconómica del país.

## Principales categorías

- **Bonos en dólares ("hard-dollar")**: emitidos y pagaderos en dólares,
  aunque suscribibles muchas veces en pesos. Ejemplos históricos incluyen
  los bonos surgidos de la reestructuración de 2020 (serie "Bonares" AL30,
  AL35, y "Globales" GD30, GD35, entre otros). Su precio suele cotizar muy
  por debajo del valor nominal cuando el mercado percibe alto riesgo de
  default.
- **Bonos en pesos**: emitidos y pagaderos en pesos argentinos, algunos
  ajustados por CER (Coeficiente de Estabilización de Referencia, atado a
  inflación) para proteger al tenedor de la pérdida de poder adquisitivo.
- **Letras del Tesoro (LECAPs, LECERs, etc.)**: instrumentos de más corto
  plazo emitidos por el Tesoro, en pesos, con distintos mecanismos de
  ajuste (tasa fija, CER, dólar linked).
- **Bonos dólar-linked**: denominados y pagaderos en pesos, pero cuyo
  valor ajusta según la evolución del tipo de cambio oficial.

## Especies vigentes (referencia julio 2026)

> Los valores de precio/TIR cambian a diario; esto es una foto de referencia,
> no una cotización en vivo. Verificar en Rava, Byma, IOL o Banco Provincia
> antes de operar.

### Bonos soberanos en dólares

| Bono | Legislación | Vencimiento | TIR aprox. |
|---|---|---|---|
| AL30 (Bonar 2030) | Local (Argentina) | 2030 | ~9,1% anual |
| GD30 (Global 2030) | Extranjera (Nueva York) | 2030 | ~12,05% anual |

También cotizan otras series de la misma curva: AL29, AL35, AL41 (ley local)
y GD35, GD38, GD41, GD46 (ley extranjera).

- El 9-10 de julio de 2026 el AL30 y GD30 pagaron cupón de interés más 8%
  de amortización de capital.
- AL30 suele preferirse para operar dólar MEP por mayor liquidez y menor
  spread compra-venta frente a GD30.

### Instrumentos en pesos

- **LECAP** (Letras Capitalizables): tasa fija, se emiten con descuento y
  pagan 100% del valor nominal al vencimiento. Tickers empiezan con "S"
  (ej. S14G6 = vence 14/08/2026).
- **BONCAP** (Bonos Capitalizables): igual mecánica que la LECAP pero a
  plazos más largos (12-18 meses).
- **BONCER/LECER**: ajustan por CER, pagan tasa real + coeficiente CER.
  Cobertura ante inflación.
- **Dólar Linked**: pagan en pesos pero ajustan según la variación del
  dólar oficial (ej. D31G6, vence 31/08/2026). Cobertura ante devaluación.

El Tesoro licita periódicamente combinaciones de estos instrumentos para
renovar vencimientos (ver argentina.gob.ar/noticias, búsqueda "licitación").

**Guía rápida de elección según objetivo:**
- Cobertura inflación → BONCER/LECER
- Cobertura devaluación → Dólar Linked
- Tasa fija en pesos → LECAP/BONCAP
- Exposición a riesgo soberano en dólares → AL30/GD30 y resto de la curva

## TIR y paridad: cómo se calculan

### Paridad

La **paridad** de un bono es la relación entre su precio de mercado y su
valor técnico (valor residual más intereses corridos):

```
Paridad = (Precio de mercado / Valor técnico) × 100
```

Un bono con paridad del 60% cotiza a 60% de su valor técnico: si el valor
técnico es $100, el bono cotiza a $60 en el mercado. Una paridad baja
suele reflejar alta percepción de riesgo de default o de reestructuración
futura; los bonos argentinos en dólares surgidos de la reestructuración de
2020 cotizaron con paridades históricamente bajas (bien por debajo del
100%) en varios períodos, reflejando la desconfianza del mercado sobre el
repago en tiempo y forma.

### TIR (Tasa Interna de Retorno) simplificada

La TIR es la tasa que iguala el valor presente de todos los flujos futuros
del bono (cupones + amortización de capital) con su precio de mercado
actual. De forma simplificada, para un bono simple con un solo pago final:

```
Precio = Valor futuro / (1 + TIR)^n
```

despejando: `TIR = (Valor futuro / Precio)^(1/n) − 1`

**Ejemplo numérico**: un bono que paga $100 al vencimiento en 4 años,
cotizando hoy a $70:

```
TIR = (100 / 70)^(1/4) − 1 ≈ 0,0928 → TIR ≈ 9,3% anual
```

Cuanto menor el precio de mercado respecto al valor futuro a cobrar, mayor
la TIR implícita — lo cual explica por qué los bonos argentinos, al
cotizar con paridades bajas, suelen mostrar TIRs de dos dígitos: el
mercado exige un retorno alto como compensación por el riesgo de
default percibido. En la práctica, los bonos reales pagan cupones
periódicos además de la amortización final, por lo que el cálculo real de
TIR es iterativo (se resuelve numéricamente, no con una fórmula cerrada
simple como en este ejemplo simplificado de un solo pago).

## Cómo comprar dólar MEP con AL30: mecánica operativa

Ver el paso a paso completo en
[Dólar en Argentina: cómo comprar dólar MEP](dolar-argentina.md#cómo-comprar-dólar-mep-paso-a-paso).
En resumen: se compra AL30 en su especie en pesos, se espera el plazo de
liquidación (parking), y se vende la misma tenencia en su especie en
dólares (AL30D), quedando los dólares acreditados en la cuenta comitente
sin haber girado el capital fuera del sistema financiero local.

## Riesgo país

El "riesgo país" (medido comúnmente por el índice EMBI+ Argentina) es la
diferencia de tasa entre los bonos soberanos argentinos y bonos del
Tesoro de EE.UU. de similar plazo, y refleja la percepción de mercado
sobre la probabilidad de default. Es un indicador ampliamente seguido
como termómetro de confianza sobre la deuda argentina.

## Consideraciones clave para un inversor

- **Historial de reestructuraciones**: Argentina reestructuró su deuda
  soberana en múltiples ocasiones (2005, 2010, 2020, entre otras), lo cual
  implica que el riesgo de default o de nuevos canjes es una variable
  central a considerar, distinto de mercados de bonos soberanos de países
  desarrollados.
- **Diferencia entre bonos en pesos y en dólares**: los bonos en pesos
  exponen al inversor al riesgo de devaluación e inflación si no están
  bien ajustados (CER, dólar-linked); los bonos en dólares exponen al
  riesgo de default soberano y a la volatilidad de su cotización en
  mercados secundarios.
- **Liquidez**: varía mucho según el instrumento específico; los bonos
  más nuevos y de mayor volumen (ej. los surgidos de reestructuraciones
  recientes) suelen ser más líquidos.

## Fuentes

Descripción general de instrumentos públicos en el mercado argentino.
Para especies vigentes, condiciones de emisión y cotizaciones actuales,
consultar fuentes oficiales como el Ministerio de Economía
(argentina.gob.ar/economia) o Byma (byma.com.ar), dado que la oferta de
instrumentos cambia con frecuencia.

Datos de referencia (julio 2026) relevados de:
- [ARGENTINA: RENTA FIJA - Banco Provincia](https://www.bancoprovincia.com.ar/CDN/Get/informe_financiero)
- [El AL30 y GD30 cortaron cupón el 8 de julio - IOL](https://www.invertironline.com/posts/informacion-importante-para-tenedores-de-bonos-al30-gd30)
- [AL30 - Rava Bursátil](https://www.rava.com/perfil/AL30)
- [¿AL30 o GD30 para dólar MEP? - Alfy Inversiones](https://alfyinversiones.com.ar/blog/al30-o-gd30-para-dolar-mep-cual-elegir/)
- [Llamado a licitación LECAP/BONCAP/BONCER/LELINK/dólar linked - argentina.gob.ar](https://www.argentina.gob.ar/noticias/llamado-licitacion-de-lecap-boncap-boncer-lelink-y-bono-dolar-linked)
- [Letras del Tesoro Argentinas - Valor Dólar Blue](https://valordolarblue.ar/merval/letras)
