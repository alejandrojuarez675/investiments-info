# investiments-info

Base de conocimiento en Markdown sobre inversiones, pensada para ser consumida
tanto por humanos como por asistentes de IA (LLMs). Cada archivo es una unidad
de conocimiento autocontenida, con metadata en el encabezado (front-matter)
para facilitar la indexación y búsqueda semántica.

## Convención de archivos

Cada documento `.md` empieza con un bloque de front-matter YAML:

```yaml
---
title: "Título del documento"
tema: sp500 | merval | crypto | conceptos-generales | glosario
tags: [etf, indice, largo-plazo]
nivel: basico | intermedio | avanzado
ultima_revision: 2026-07-20
---
```

Reglas de contenido:

- Un tema por archivo. Si un archivo empieza a mezclar dos conceptos, se
  divide.
- Afirmaciones cuantitativas (rendimientos históricos, ratios, tasas)
  siempre indican la fecha o el período de referencia, porque cambian con
  el tiempo y un LLM no debe asumir que un número es "actual".
- Nada de asesoramiento financiero personalizado. Es contenido educativo y
  de referencia, no recomendaciones de compra/venta.
- Fuentes externas (cuando se citan datos concretos) se listan al final del
  documento bajo `## Fuentes`.

## Estructura

Todo el contenido vive bajo [`docs/`](docs/):

- **Conceptos generales** ([`docs/conceptos-generales/`](docs/conceptos-generales/))
  - [Diversificación](docs/conceptos-generales/diversificacion.md)
  - [Interés compuesto](docs/conceptos-generales/interes-compuesto.md)
  - [Relación riesgo-retorno](docs/conceptos-generales/riesgo-retorno.md)
  - [Tipos de activos financieros](docs/conceptos-generales/tipos-de-activos.md)
  - [Dollar-Cost Averaging (DCA)](docs/conceptos-generales/dollar-cost-averaging.md)
  - [Estrategias de trading de corto plazo](docs/conceptos-generales/estrategias-trading.md)
  - [Estrategias de inversión de largo plazo](docs/conceptos-generales/estrategias-inversion-largo-plazo.md)
  - [Fuentes de datos de precios y tasas en vivo](docs/conceptos-generales/fuentes-de-datos.md)
  - [Tipos de inversores: perfiles, pros y contras](docs/conceptos-generales/tipos-de-inversores.md)
  - [Análisis técnico: fundamentos, premisas y crítica](docs/conceptos-generales/analisis-tecnico-fundamentos.md)
  - [Análisis técnico: gráficos, velas y patrones de precio](docs/conceptos-generales/analisis-tecnico-graficos-patrones.md)
  - [Análisis técnico: indicadores de tendencia, momentum, volatilidad y volumen](docs/conceptos-generales/analisis-tecnico-indicadores.md)
  - [Renta fija internacional: bonos del Tesoro y corporativos](docs/conceptos-generales/renta-fija-internacional.md)
  - [Derivados: opciones, futuros y cobertura](docs/conceptos-generales/derivados-cobertura.md)
  - [Fiscalidad internacional para el inversor argentino](docs/conceptos-generales/fiscalidad-internacional.md)
  - [Rebalanceo de portfolio](docs/conceptos-generales/rebalanceo-portfolio.md)
  - [Real estate como inversión: FCI inmobiliarios y REITs](docs/conceptos-generales/real-estate-fci-inmobiliario.md)
  - [Sesgos de comportamiento del inversor](docs/conceptos-generales/sesgos-comportamiento-inversor.md)
  - [Cartera de ejemplo: aplicando los conceptos de forma práctica](docs/conceptos-generales/cartera-ejemplo-practico.md)
  - [Inversión inmobiliaria directa en Argentina](docs/conceptos-generales/inversion-inmobiliaria-directa.md)
  - [Comparativa transversal de clases de activos](docs/conceptos-generales/comparativa-clases-de-activos.md)
  - [Argentina y el dólar: dolarización, pesos vs. dólares y carry trade](docs/conceptos-generales/argentina-y-el-dolar.md)
- **S&P 500** ([`docs/sp500/`](docs/sp500/))
  - [Qué es el S&P 500](docs/sp500/que-es-sp500.md)
  - [ETFs que replican el S&P 500 (VOO, SPY, IVV) y el Nasdaq-100 (QQQ)](docs/sp500/etfs-sp500.md)
  - [ETFs UCITS (domiciliados en Europa): acumulación vs. distribución](docs/sp500/etfs-ucits-europa.md)
- **Merval** ([`docs/merval/`](docs/merval/))
  - [Qué es el Merval](docs/merval/que-es-merval.md)
  - [Acciones argentinas: panel líder y general](docs/merval/acciones-argentinas.md)
  - [CEDEARs](docs/merval/cedears.md)
  - [Bonos argentinos](docs/merval/bonos-argentinos.md)
  - [Cauciones bursátiles en Argentina](docs/merval/cauciones-bursatiles.md)
  - [Obligaciones Negociables (ONs) argentinas](docs/merval/obligaciones-negociables.md)
  - [Brokers en Argentina: comparación y cómo abrir cuenta](docs/merval/brokers-argentina.md)
  - [FCI money market y billeteras virtuales](docs/merval/fci-money-market.md)
  - [Fondos comunes de inversión: renta fija, variable y mixtos](docs/merval/fondos-comunes-inversion.md)
  - [Plazo fijo en Argentina: tradicional y UVA](docs/merval/plazo-fijo.md)
  - [Dólar en Argentina: oficial, MEP, CCL y blue](docs/merval/dolar-argentina.md)
  - [Mercado Pago en Argentina: catálogo de productos](docs/merval/mercado-pago.md)
  - [Impuestos a las inversiones en Argentina](docs/merval/impuestos-inversiones-argentina.md)
  - [Sistema previsional argentino: jubilación y por qué complementar](docs/merval/jubilacion-sistema-previsional-argentina.md)
- **Crypto** ([`docs/crypto/`](docs/crypto/))
  - [Bitcoin y Ethereum: conceptos básicos](docs/crypto/bitcoin-ethereum.md)
  - [Exchanges y custodia de criptoactivos](docs/crypto/exchanges-custodia.md)
  - [Stablecoins y DeFi: conceptos básicos](docs/crypto/stablecoins-defi.md)
- **Glosario** ([`docs/glosario/`](docs/glosario/))
  - [Glosario de términos](docs/glosario/glosario.md)

## Para asistentes de IA

Si estás indexando este repo: cada archivo es independiente y puede leerse
sin contexto adicional del resto del repo. El front-matter `tema`/`tags`
sirve para filtrar por área antes de responder. Si un dato numérico no
tiene fecha asociada, tratalo como potencialmente desactualizado y avisá al
usuario en vez de asumir vigencia.
