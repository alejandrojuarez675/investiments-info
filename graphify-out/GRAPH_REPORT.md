# Graph Report - investiments-info  (2026-07-20)

## Corpus Check
- 16 files · ~5,480 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 83 nodes · 97 edges · 14 communities (13 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.7)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4b0d6d1d`
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
- ETFs que replican el S&P 500
- Diversificación
- Relación riesgo-retorno
- CEDEARs (Certificados de Depósito Argentinos)
- investiments-info
- Bonos argentinos

## God Nodes (most connected - your core abstractions)
1. `Tipos de activos financieros` - 9 edges
2. `Bitcoin y Ethereum: conceptos básicos` - 8 edges
3. `Dollar-Cost Averaging (DCA)` - 6 edges
4. `Interés compuesto` - 6 edges
5. `Qué es el Merval` - 6 edges
6. `ETFs que replican el S&P 500` - 6 edges
7. `Diversificación` - 5 edges
8. `Relación riesgo-retorno` - 5 edges
9. `CEDEARs (Certificados de Depósito Argentinos)` - 5 edges
10. `Exchanges y custodia de criptoactivos` - 5 edges

## Surprising Connections (you probably didn't know these)
- `CLAUDE.md — Project Instructions` --references--> `Qué es el S&P 500`  [INFERRED]
  CLAUDE.md → docs/sp500/que-es-sp500.md
- `Bitcoin y Ethereum: conceptos básicos` --references--> `Exchanges y custodia de criptoactivos`  [EXTRACTED]
  docs/crypto/bitcoin-ethereum.md → docs/crypto/exchanges-custodia.md

## Hyperedges (group relationships)
- **Conceptos de inversión a largo plazo** — docs_conceptos_generales_interes_compuesto, docs_conceptos_generales_dollar_cost_averaging, docs_conceptos_generales_diversificacion, docs_sp500_etfs_sp500 [INFERRED 0.90]
- **Flujo de custodia y seguridad cripto** — docs_crypto_bitcoin_ethereum, docs_crypto_exchanges_custodia, concept_cold_wallet, concept_hot_wallet, concept_cex [EXTRACTED 0.95]

## Communities (14 total, 1 thin omitted)

### Community 0 - "Bitcoin y Ethereum"
Cohesion: 0.39
Nodes (8): Bitcoin (BTC), Blockchain, Finanzas descentralizadas (DeFi), Ethereum (ETH), Proof of Stake, Proof of Work, Contratos inteligentes (smart contracts), Bitcoin y Ethereum: conceptos básicos

### Community 1 - "CEDEARs y Merval"
Cohesion: 0.29
Nodes (6): Características principales, Cómo invertir, Fuentes, Merval en pesos vs. Merval en dólares ("Merval en CCL"), Qué es el Merval, Riesgos particulares del mercado argentino

### Community 3 - "Exchanges y Custodia Cripto"
Cohesion: 0.60
Nodes (5): Exchange centralizado (CEX), Cold wallet (hardware wallet), Hot wallet, Self-custody (wallet propia), Exchanges y custodia de criptoactivos

### Community 4 - "Diversificación de Portafolio"
Cohesion: 0.22
Nodes (9): CEDEARs (particularidad argentina), Criptoactivos, Efectivo y equivalentes, Fondos indexados y ETFs, Fuentes, Real estate, Renta fija (bonos), Renta variable (acciones) (+1 more)

### Community 5 - "ETFs del S&P 500"
Cohesion: 0.33
Nodes (6): Aplicación práctica, Cómo funciona, Dollar-Cost Averaging (DCA), Fuentes, Limitaciones, Ventajas

### Community 6 - "DCA e Interés Compuesto"
Cohesion: 0.33
Nodes (6): Fuentes, Fórmula básica, Interés compuesto, Por qué importa el tiempo más que el monto, Regla del 72, Relación con otros conceptos

### Community 7 - "S&P 500 y Proyecto"
Cohesion: 0.67
Nodes (3): CLAUDE.md — Project Instructions, Índice S&P 500, Qué es el S&P 500

### Community 8 - "ETFs que replican el S&P 500"
Cohesion: 0.33
Nodes (6): Cómo acceder desde Argentina, Diferencias prácticas entre ellos, ETFs que replican el S&P 500, Fuentes, Principales ETFs, Riesgos específicos de los ETFs

### Community 9 - "Diversificación"
Cohesion: 0.40
Nodes (5): Diversificación, Formas comunes de diversificar, Fuentes, Idea central, Límites de la diversificación

### Community 10 - "Relación riesgo-retorno"
Cohesion: 0.40
Nodes (5): Espectro típico de riesgo-retorno (orientativo, no determinístico), Fuentes, Horizonte temporal y tolerancia al riesgo, Relación riesgo-retorno, Riesgo no es solo "volatilidad"

### Community 11 - "CEDEARs (Certificados de Depósito Argentinos)"
Cohesion: 0.40
Nodes (5): CEDEARs (Certificados de Depósito Argentinos), Cómo funcionan, Fuentes, Por qué se usan, Riesgos y particularidades

### Community 12 - "investiments-info"
Cohesion: 0.50
Nodes (4): Convención de archivos, Estructura, investiments-info, Para asistentes de IA

### Community 13 - "Bonos argentinos"
Cohesion: 0.67
Nodes (3): CER (Coeficiente de Estabilización de Referencia), Riesgo país (EMBI+), Bonos argentinos

## Knowledge Gaps
- **50 isolated node(s):** `Convención de archivos`, `Estructura`, `Para asistentes de IA`, `Idea central`, `Formas comunes de diversificar` (+45 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Tipos de activos financieros` connect `Diversificación de Portafolio` to `Activos y Glosario`?**
  _High betweenness centrality (0.148) - this node is a cross-community bridge._
- **Why does `Dollar-Cost Averaging (DCA)` connect `ETFs del S&P 500` to `Activos y Glosario`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Why does `Interés compuesto` connect `DCA e Interés Compuesto` to `Activos y Glosario`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **What connects `Convención de archivos`, `Estructura`, `Para asistentes de IA` to the rest of the system?**
  _50 weakly-connected nodes found - possible documentation gaps or missing edges._