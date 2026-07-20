# Graph Report - .  (2026-07-20)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 36 nodes · 79 edges · 5 communities
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.83)
- Token cost: 22,327 input · 58 output

## Graph Freshness
- Built from commit: `b7d599e7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Estrategias y conceptos de inversión
- Activos financieros y mercados
- Mercado argentino y glosario
- Bitcoin y blockchain
- Custodia y exchanges cripto

## God Nodes (most connected - your core abstractions)
1. `README – investiments-info` - 13 edges
2. `Glosario de términos` - 12 edges
3. `Tipos de activos financieros` - 10 edges
4. `Bitcoin y Ethereum: conceptos básicos` - 8 edges
5. `ETFs que replican el S&P 500 (VOO, SPY, IVV)` - 8 edges
6. `CEDEARs` - 7 edges
7. `Qué es el Merval` - 7 edges
8. `Diversificación` - 6 edges
9. `Dollar-Cost Averaging (DCA)` - 6 edges
10. `Exchanges y custodia de criptoactivos` - 6 edges

## Surprising Connections (you probably didn't know these)
- `README – investiments-info` --references--> `Diversificación`  [EXTRACTED]
  README.md → conceptos-generales/diversificacion.md
- `README – investiments-info` --references--> `Dollar-Cost Averaging (DCA)`  [EXTRACTED]
  README.md → conceptos-generales/dollar-cost-averaging.md
- `README – investiments-info` --references--> `Interés compuesto`  [EXTRACTED]
  README.md → conceptos-generales/interes-compuesto.md
- `README – investiments-info` --references--> `Tipos de activos financieros`  [EXTRACTED]
  README.md → conceptos-generales/tipos-de-activos.md
- `README – investiments-info` --references--> `Bitcoin y Ethereum: conceptos básicos`  [EXTRACTED]
  README.md → crypto/bitcoin-ethereum.md

## Hyperedges (group relationships)
- **Flujo de inversión pasiva de largo plazo: DCA + Interés compuesto + ETFs S&P 500** — concept_dca, concept_interes_compuesto, sp500_etfs_sp500, conceptos_generales_diversificacion [INFERRED 0.90]
- **Ecosistema del mercado argentino: Merval, CEDEARs, Bonos, CCL** — merval_que_es_merval, merval_cedears, merval_bonos_argentinos, concept_ccl, concept_riesgo_pais [EXTRACTED 0.95]
- **Opciones de custodia en crypto: CEX, hot wallet, cold wallet** — concept_cex, concept_hot_wallet, concept_cold_wallet, crypto_exchanges_custodia [EXTRACTED 0.95]

## Communities (5 total, 0 thin omitted)

### Community 0 - "Estrategias y conceptos de inversión"
Cohesion: 0.27
Nodes (10): Concepto: Dollar-Cost Averaging, Concepto: Diversificación, Concepto: Interés compuesto, Concepto: Regla del 72, Concepto: Relación riesgo-retorno, Concepto: Riesgo sistemático, Diversificación, Dollar-Cost Averaging (DCA) (+2 more)

### Community 1 - "Activos financieros y mercados"
Cohesion: 0.36
Nodes (9): Concepto: Contado con Liquidación (CCL), Concepto: CEDEAR, Concepto: ETF, Concepto: Renta fija, Concepto: Renta variable, Concepto: Índice S&P 500, Tipos de activos financieros, CEDEARs (+1 more)

### Community 2 - "Mercado argentino y glosario"
Cohesion: 0.50
Nodes (8): Concepto: CER (Coeficiente de Estabilización de Referencia), Concepto: Índice Merval, Concepto: Riesgo país (EMBI+), Relación riesgo-retorno, Glosario de términos, Bonos argentinos, Qué es el Merval, README – investiments-info

### Community 3 - "Bitcoin y blockchain"
Cohesion: 0.80
Nodes (5): Concepto: Bitcoin (BTC), Concepto: Blockchain, Concepto: Ethereum (ETH), Concepto: Proof of Work, Bitcoin y Ethereum: conceptos básicos

### Community 4 - "Custodia y exchanges cripto"
Cohesion: 0.83
Nodes (4): Concepto: Exchange centralizado (CEX), Concepto: Cold wallet, Concepto: Hot wallet, Exchanges y custodia de criptoactivos

## Knowledge Gaps
- **3 isolated node(s):** `Concepto: Regla del 72`, `Concepto: Renta variable`, `Concepto: Renta fija`
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `README – investiments-info` connect `Mercado argentino y glosario` to `Estrategias y conceptos de inversión`, `Activos financieros y mercados`, `Bitcoin y blockchain`, `Custodia y exchanges cripto`?**
  _High betweenness centrality (0.323) - this node is a cross-community bridge._
- **Why does `Bitcoin y Ethereum: conceptos básicos` connect `Bitcoin y blockchain` to `Activos financieros y mercados`, `Mercado argentino y glosario`, `Custodia y exchanges cripto`?**
  _High betweenness centrality (0.219) - this node is a cross-community bridge._
- **Why does `Glosario de términos` connect `Mercado argentino y glosario` to `Estrategias y conceptos de inversión`, `Activos financieros y mercados`, `Bitcoin y blockchain`, `Custodia y exchanges cripto`?**
  _High betweenness centrality (0.213) - this node is a cross-community bridge._
- **What connects `Concepto: Regla del 72`, `Concepto: Renta variable`, `Concepto: Renta fija` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._