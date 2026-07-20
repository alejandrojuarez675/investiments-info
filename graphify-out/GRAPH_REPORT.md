# Graph Report - investiments-info  (2026-07-20)

## Corpus Check
- 16 files · ~5,413 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 40 nodes · 79 edges · 7 communities
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c80ef217`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Estrategias y conceptos de inversión
- Activos financieros y mercados
- Mercado argentino y glosario
- Bitcoin y blockchain
- Custodia y exchanges cripto
- README – investiments-info
- Diversificación

## God Nodes (most connected - your core abstractions)
1. `README – investiments-info` - 13 edges
2. `Glosario de términos` - 12 edges
3. `Tipos de activos financieros` - 9 edges
4. `Bitcoin y Ethereum: conceptos básicos` - 8 edges
5. `Qué es el Merval` - 7 edges
6. `ETFs que replican el S&P 500 (VOO, SPY, IVV)` - 7 edges
7. `Diversificación` - 6 edges
8. `Dollar-Cost Averaging (DCA)` - 6 edges
9. `Exchanges y custodia de criptoactivos` - 6 edges
10. `Bonos argentinos` - 6 edges

## Surprising Connections (you probably didn't know these)
- `README – investiments-info` --references--> `Diversificación`  [EXTRACTED]
  README.md → conceptos-generales/diversificacion.md
- `README – investiments-info` --references--> `Dollar-Cost Averaging (DCA)`  [EXTRACTED]
  README.md → conceptos-generales/dollar-cost-averaging.md
- `README – investiments-info` --references--> `Interés compuesto`  [EXTRACTED]
  README.md → conceptos-generales/interes-compuesto.md
- `README – investiments-info` --references--> `Relación riesgo-retorno`  [EXTRACTED]
  README.md → conceptos-generales/riesgo-retorno.md
- `README – investiments-info` --references--> `Tipos de activos financieros`  [EXTRACTED]
  README.md → conceptos-generales/tipos-de-activos.md

## Hyperedges (group relationships)
- **Flujo de inversión pasiva de largo plazo: DCA + Interés compuesto + ETFs S&P 500** — concept_dca, concept_interes_compuesto, sp500_etfs_sp500, conceptos_generales_diversificacion [INFERRED 0.90]
- **Ecosistema del mercado argentino: Merval, CEDEARs, Bonos, CCL** — merval_que_es_merval, merval_cedears, merval_bonos_argentinos, concept_ccl, concept_riesgo_pais [EXTRACTED 0.95]
- **Opciones de custodia en crypto: CEX, hot wallet, cold wallet** — concept_cex, concept_hot_wallet, concept_cold_wallet, crypto_exchanges_custodia [EXTRACTED 0.95]

## Communities (7 total, 0 thin omitted)

### Community 0 - "Estrategias y conceptos de inversión"
Cohesion: 0.40
Nodes (6): Concepto: Dollar-Cost Averaging, Concepto: Interés compuesto, Concepto: Regla del 72, Concepto: Relación riesgo-retorno, Dollar-Cost Averaging (DCA), Interés compuesto

### Community 1 - "Activos financieros y mercados"
Cohesion: 0.22
Nodes (8): Concepto: Renta fija, Concepto: Renta variable, Tipos de activos financieros, CEDEARs (Certificados de Depósito Argentinos), Cómo funcionan, Fuentes, Por qué se usan, Riesgos y particularidades

### Community 2 - "Mercado argentino y glosario"
Cohesion: 0.43
Nodes (8): Concepto: Contado con Liquidación (CCL), Concepto: CER (Coeficiente de Estabilización de Referencia), Concepto: Índice Merval, Concepto: Riesgo país (EMBI+), Relación riesgo-retorno, Glosario de términos, Bonos argentinos, Qué es el Merval

### Community 3 - "Bitcoin y blockchain"
Cohesion: 0.80
Nodes (5): Concepto: Bitcoin (BTC), Concepto: Blockchain, Concepto: Ethereum (ETH), Concepto: Proof of Work, Bitcoin y Ethereum: conceptos básicos

### Community 4 - "Custodia y exchanges cripto"
Cohesion: 0.83
Nodes (4): Concepto: Exchange centralizado (CEX), Concepto: Cold wallet, Concepto: Hot wallet, Exchanges y custodia de criptoactivos

### Community 5 - "README – investiments-info"
Cohesion: 0.70
Nodes (5): Concepto: ETF, Concepto: Índice S&P 500, README – investiments-info, ETFs que replican el S&P 500 (VOO, SPY, IVV), Qué es el S&P 500

### Community 6 - "Diversificación"
Cohesion: 1.00
Nodes (3): Concepto: Diversificación, Concepto: Riesgo sistemático, Diversificación

## Knowledge Gaps
- **7 isolated node(s):** `Cómo funcionan`, `Por qué se usan`, `Riesgos y particularidades`, `Fuentes`, `Concepto: Regla del 72` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `README – investiments-info` connect `README – investiments-info` to `Estrategias y conceptos de inversión`, `Activos financieros y mercados`, `Mercado argentino y glosario`, `Bitcoin y blockchain`, `Custodia y exchanges cripto`, `Diversificación`?**
  _High betweenness centrality (0.329) - this node is a cross-community bridge._
- **Why does `Glosario de términos` connect `Mercado argentino y glosario` to `Estrategias y conceptos de inversión`, `Activos financieros y mercados`, `Bitcoin y blockchain`, `Custodia y exchanges cripto`, `README – investiments-info`, `Diversificación`?**
  _High betweenness centrality (0.231) - this node is a cross-community bridge._
- **What connects `Cómo funcionan`, `Por qué se usan`, `Riesgos y particularidades` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._