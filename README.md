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

- [`docs/conceptos-generales/`](docs/conceptos-generales/) — diversificación,
  interés compuesto, riesgo/retorno, tipos de activos, horizonte de inversión.
- [`docs/sp500/`](docs/sp500/) — índice S&P 500, ETFs (VOO, SPY, IVV),
  historia, composición.
- [`docs/merval/`](docs/merval/) — índice Merval, CEDEARs, bonos argentinos,
  particularidades del mercado local.
- [`docs/crypto/`](docs/crypto/) — Bitcoin, Ethereum, blockchain, exchanges,
  custodia.
- [`docs/glosario/`](docs/glosario/) — términos cortos, uno por archivo o
  agrupados por inicial, pensados para lookup rápido.

## Para asistentes de IA

Si estás indexando este repo: cada archivo es independiente y puede leerse
sin contexto adicional del resto del repo. El front-matter `tema`/`tags`
sirve para filtrar por área antes de responder. Si un dato numérico no
tiene fecha asociada, tratalo como potencialmente desactualizado y avisá al
usuario en vez de asumir vigencia.
