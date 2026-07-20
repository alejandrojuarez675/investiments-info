# Graph Report - investiments-info  (2026-07-20)

## Corpus Check
- 16 files · ~5,814 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 107 nodes · 113 edges · 26 communities (13 shown, 13 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0e1881d6`
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
- Bitcoin y Ethereum: conceptos básicos
- Qué es el S&P 500
- Exchanges y custodia de criptoactivos
- CLAUDE.md
- Cold wallet (hardware wallet)
- Finanzas descentralizadas (DeFi)
- Hot wallet
- Proof of Stake
- Proof of Work
- Self-custody (wallet propia)
- Contratos inteligentes (smart contracts)
- Índice S&P 500

## God Nodes (most connected - your core abstractions)
1. `Tipos de activos financieros` - 9 edges
2. `Bitcoin y Ethereum: conceptos básicos` - 7 edges
3. `Bonos argentinos` - 6 edges
4. `Dollar-Cost Averaging (DCA)` - 6 edges
5. `Interés compuesto` - 6 edges
6. `Qué es el Merval` - 6 edges
7. `ETFs que replican el S&P 500` - 6 edges
8. `Qué es el S&P 500` - 6 edges
9. `Diversificación` - 5 edges
10. `Relación riesgo-retorno` - 5 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Hyperedges (group relationships)
- **Conceptos de inversión a largo plazo** — docs_conceptos_generales_interes_compuesto, docs_conceptos_generales_dollar_cost_averaging, docs_conceptos_generales_diversificacion, docs_sp500_etfs_sp500 [INFERRED 0.90]
- **Flujo de custodia y seguridad cripto** — docs_crypto_bitcoin_ethereum, docs_crypto_exchanges_custodia, concept_cold_wallet, concept_hot_wallet, concept_cex [EXTRACTED 0.95]

## Communities (26 total, 13 thin omitted)

### Community 1 - "CEDEARs y Merval"
Cohesion: 0.33
Nodes (6): Características principales, Cómo invertir, Fuentes, Merval en pesos vs. Merval en dólares ("Merval en CCL"), Qué es el Merval, Riesgos particulares del mercado argentino

### Community 4 - "Diversificación de Portafolio"
Cohesion: 0.22
Nodes (9): CEDEARs (particularidad argentina), Criptoactivos, Efectivo y equivalentes, Fondos indexados y ETFs, Fuentes, Real estate, Renta fija (bonos), Renta variable (acciones) (+1 more)

### Community 5 - "ETFs del S&P 500"
Cohesion: 0.33
Nodes (6): Aplicación práctica, Cómo funciona, Dollar-Cost Averaging (DCA), Fuentes, Limitaciones, Ventajas

### Community 6 - "DCA e Interés Compuesto"
Cohesion: 0.33
Nodes (6): Fuentes, Fórmula básica, Interés compuesto, Por qué importa el tiempo más que el monto, Regla del 72, Relación con otros conceptos

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

### Community 14 - "Bonos argentinos"
Cohesion: 0.25
Nodes (8): Bonos argentinos, Bonos soberanos en dólares, Consideraciones clave para un inversor, Especies vigentes (referencia julio 2026), Fuentes, Instrumentos en pesos, Principales categorías, Riesgo país

### Community 15 - "Bitcoin y Ethereum: conceptos básicos"
Cohesion: 0.29
Nodes (7): Bitcoin (BTC), Bitcoin y Ethereum: conceptos básicos, Blockchain, en breve, Diferencias clave para un inversor, Ethereum (ETH), Fuentes, Riesgos generales de crypto (aplican a ambos)

### Community 16 - "Qué es el S&P 500"
Cohesion: 0.33
Nodes (6): Características principales, Cómo invertir en el índice, Fuentes, Por qué se usa como referencia, Qué es el S&P 500, Riesgos y consideraciones

### Community 17 - "Exchanges y custodia de criptoactivos"
Cohesion: 0.40
Nodes (5): Buenas prácticas generales (educativas, no exhaustivas), Exchanges centralizados (CEX), Exchanges y custodia de criptoactivos, Fuentes, Wallets propias (self-custody)

## Knowledge Gaps
- **77 isolated node(s):** `Principales categorías`, `Bonos soberanos en dólares`, `Instrumentos en pesos`, `Riesgo país`, `Consideraciones clave para un inversor` (+72 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Tipos de activos financieros` connect `Diversificación de Portafolio` to `Activos y Glosario`?**
  _High betweenness centrality (0.127) - this node is a cross-community bridge._
- **Why does `Bonos argentinos` connect `Bonos argentinos` to `Activos y Glosario`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **Why does `Bitcoin y Ethereum: conceptos básicos` connect `Bitcoin y Ethereum: conceptos básicos` to `Activos y Glosario`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **What connects `Principales categorías`, `Bonos soberanos en dólares`, `Instrumentos en pesos` to the rest of the system?**
  _77 weakly-connected nodes found - possible documentation gaps or missing edges._