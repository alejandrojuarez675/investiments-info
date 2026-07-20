# Graph Report - .  (2026-07-20)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 43 nodes · 80 edges · 8 communities (7 shown, 1 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.75)
- Token cost: 22,927 input · 96 output

## Graph Freshness
- Built from commit: `7cd3713b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Bitcoin y Ethereum
- CEDEARs y Merval
- Activos y Glosario
- Exchanges y Custodia Cripto
- Diversificación de Portafolio
- ETFs del S&P 500
- DCA e Interés Compuesto
- S&P 500 y Proyecto

## God Nodes (most connected - your core abstractions)
1. `README — investiments-info` - 13 edges
2. `Bitcoin y Ethereum: conceptos básicos` - 11 edges
3. `Glosario de términos` - 10 edges
4. `ETFs que replican el S&P 500 (VOO, SPY, IVV)` - 9 edges
5. `Diversificación` - 7 edges
6. `Exchanges y custodia de criptoactivos` - 7 edges
7. `CEDEARs` - 7 edges
8. `Qué es el Merval` - 7 edges
9. `Qué es el S&P 500` - 7 edges
10. `Tipos de activos financieros` - 6 edges

## Surprising Connections (you probably didn't know these)
- `CLAUDE.md — Project Instructions` --references--> `Qué es el S&P 500`  [INFERRED]
  CLAUDE.md → docs/sp500/que-es-sp500.md
- `README — investiments-info` --references--> `Interés compuesto`  [EXTRACTED]
  README.md → docs/conceptos-generales/interes-compuesto.md
- `README — investiments-info` --references--> `Diversificación`  [EXTRACTED]
  README.md → docs/conceptos-generales/diversificacion.md
- `README — investiments-info` --references--> `Dollar-Cost Averaging (DCA)`  [EXTRACTED]
  README.md → docs/conceptos-generales/dollar-cost-averaging.md
- `README — investiments-info` --references--> `Bitcoin y Ethereum: conceptos básicos`  [EXTRACTED]
  README.md → docs/crypto/bitcoin-ethereum.md

## Hyperedges (group relationships)
- **Conceptos de inversión a largo plazo** — docs_conceptos_generales_interes_compuesto, docs_conceptos_generales_dollar_cost_averaging, docs_conceptos_generales_diversificacion, docs_sp500_etfs_sp500 [INFERRED 0.90]
- **Flujo de custodia y seguridad cripto** — docs_crypto_bitcoin_ethereum, docs_crypto_exchanges_custodia, concept_cold_wallet, concept_hot_wallet, concept_cex [EXTRACTED 0.95]
- **Instrumentos del mercado argentino** — docs_merval_que_es_merval, docs_merval_cedears, docs_merval_bonos_argentinos, concept_ccl, concept_riesgo_pais [EXTRACTED 0.95]

## Communities (8 total, 1 thin omitted)

### Community 0 - "Bitcoin y Ethereum"
Cohesion: 0.39
Nodes (8): Bitcoin (BTC), Blockchain, Finanzas descentralizadas (DeFi), Ethereum (ETH), Proof of Stake, Proof of Work, Contratos inteligentes (smart contracts), Bitcoin y Ethereum: conceptos básicos

### Community 1 - "CEDEARs y Merval"
Cohesion: 0.38
Nodes (7): Contado con Liquidación (CCL), CEDEAR, ETF (Exchange Traded Fund), Índice Merval (S&P Merval), Riesgo país (EMBI+), CEDEARs, Qué es el Merval

### Community 2 - "Activos y Glosario"
Cohesion: 0.52
Nodes (7): CER (Coeficiente de Estabilización de Referencia), Relación riesgo-retorno, Volatilidad, Tipos de activos financieros, Glosario de términos, Bonos argentinos, README — investiments-info

### Community 3 - "Exchanges y Custodia Cripto"
Cohesion: 0.60
Nodes (5): Exchange centralizado (CEX), Cold wallet (hardware wallet), Hot wallet, Self-custody (wallet propia), Exchanges y custodia de criptoactivos

### Community 4 - "Diversificación de Portafolio"
Cohesion: 0.50
Nodes (5): Diversificación (concepto), Teoría de portafolios (Markowitz 1952), Riesgo no sistemático, Riesgo sistemático, Diversificación

### Community 5 - "ETFs del S&P 500"
Cohesion: 0.60
Nodes (5): IVV ETF (BlackRock iShares), Índice S&P 500, SPY ETF (State Street), VOO ETF (Vanguard), ETFs que replican el S&P 500 (VOO, SPY, IVV)

### Community 6 - "DCA e Interés Compuesto"
Cohesion: 0.50
Nodes (4): Dollar-Cost Averaging, Interés compuesto, Regla del 72, Dollar-Cost Averaging (DCA)

## Knowledge Gaps
- **10 isolated node(s):** `CLAUDE.md — Project Instructions`, `Riesgo sistemático`, `Dollar-Cost Averaging`, `Regla del 72`, `Volatilidad` (+5 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `README — investiments-info` connect `Activos y Glosario` to `Bitcoin y Ethereum`, `CEDEARs y Merval`, `Exchanges y Custodia Cripto`, `Diversificación de Portafolio`, `ETFs del S&P 500`, `DCA e Interés Compuesto`, `S&P 500 y Proyecto`?**
  _High betweenness centrality (0.386) - this node is a cross-community bridge._
- **Why does `Bitcoin y Ethereum: conceptos básicos` connect `Bitcoin y Ethereum` to `Activos y Glosario`, `Exchanges y Custodia Cripto`?**
  _High betweenness centrality (0.304) - this node is a cross-community bridge._
- **Why does `Diversificación` connect `Diversificación de Portafolio` to `Activos y Glosario`, `DCA e Interés Compuesto`, `S&P 500 y Proyecto`?**
  _High betweenness centrality (0.182) - this node is a cross-community bridge._
- **What connects `CLAUDE.md — Project Instructions`, `Riesgo sistemático`, `Dollar-Cost Averaging` to the rest of the system?**
  _10 weakly-connected nodes found - possible documentation gaps or missing edges._