---
title: "Bitcoin y Ethereum: conceptos básicos"
tema: crypto
tags: [bitcoin, ethereum, blockchain, halving, gas-fees, tps]
nivel: intermedio
ultima_revision: 2026-07-20
---

# Bitcoin y Ethereum: conceptos básicos

Bitcoin y Ethereum son las dos criptomonedas de mayor capitalización de
mercado y las más establecidas históricamente, pero tienen propósitos y
diseños técnicos distintos.

## Blockchain, en breve

Una blockchain es un registro distribuido (ledger) de transacciones,
replicado entre muchos participantes (nodos), donde cada bloque de
transacciones se enlaza criptográficamente al anterior. Esto hace que
alterar el historial sea computacionalmente muy costoso, y elimina la
necesidad de una autoridad central que valide las transacciones.

## Bitcoin (BTC)

- **Propósito principal**: concebido como un sistema de efectivo digital
  peer-to-peer (whitepaper de Satoshi Nakamoto, 2008), hoy usado
  mayormente como reserva de valor especulativa ("oro digital") más que
  como medio de pago cotidiano.
- **Oferta limitada**: el protocolo establece un máximo de 21 millones de
  BTC que existirán, con una tasa de emisión que se reduce a la mitad
  aproximadamente cada 4 años (evento conocido como "halving").
- **Mecanismo de consenso**: Proof of Work (prueba de trabajo) — los
  mineros compiten resolviendo problemas computacionales para validar
  bloques, a cambio de una recompensa en BTC. Esto consume una cantidad
  significativa de energía, un punto de crítica frecuente.

## Ethereum (ETH)

- **Propósito principal**: no es solo una moneda, sino una plataforma
  programable ("world computer") que permite ejecutar contratos
  inteligentes (smart contracts) y aplicaciones descentralizadas (dApps):
  finanzas descentralizadas (DeFi), NFTs, stablecoins, entre otras.
- **Sin oferta máxima fija**: a diferencia de Bitcoin, Ethereum no tiene
  un tope duro de emisión definido en su diseño original; su política
  monetaria ha cambiado con distintas actualizaciones del protocolo.
- **Mecanismo de consenso**: migró de Proof of Work a Proof of Stake
  (prueba de participación) en septiembre de 2022 (actualización "The
  Merge"), reduciendo drásticamente su consumo energético. En Proof of
  Stake, los validadores bloquean ETH como garantía en vez de resolver
  problemas computacionales.

## Halving de Bitcoin: mecánica y ejemplo numérico

El protocolo de Bitcoin reduce a la mitad la recompensa que reciben los
mineros por cada bloque validado aproximadamente cada 210.000 bloques
(cerca de 4 años, dado un tiempo promedio de ~10 minutos por bloque). Esta
reducción programada se conoce como "halving":

| Halving | Año (aprox.) | Recompensa por bloque |
|---|---|---|
| Inicio | 2009 | 50 BTC |
| 1er halving | 2012 | 25 BTC |
| 2do halving | 2016 | 12,5 BTC |
| 3er halving | 2020 | 6,25 BTC |
| 4to halving | 2024 | 3,125 BTC |
| 5to halving (proyectado) | ~2028 | 1,5625 BTC |

Este esquema de emisión decreciente hace que la tasa de crecimiento de la
oferta de BTC se reduzca con el tiempo, tendiendo asintóticamente al
límite de 21 millones de unidades (alcanzado en su totalidad recién
alrededor del año 2140, dado que cada halving solo reduce la emisión a la
mitad sin llegar nunca exactamente a cero hasta las últimas fracciones).
El halving es un evento ampliamente seguido por el mercado porque reduce
la oferta nueva de BTC que entra en circulación, un factor que
históricamente se ha asociado (sin que exista consenso sobre causalidad
directa) con ciclos de suba de precio en los meses posteriores a cada
evento.

## Gas fees en Ethereum: cómo funcionan

Cada operación en Ethereum (una transferencia simple, o una interacción
más compleja con un contrato inteligente) consume una cantidad de
"gas", una unidad que mide el costo computacional de la operación. El
costo total en ETH de una transacción es:

```
Costo total = Gas usado × Precio del gas (en gwei)
```

donde 1 gwei = 0,000000001 ETH (10⁻⁹ ETH). **Ejemplo simplificado**: una
transferencia simple de ETH consume aproximadamente 21.000 unidades de
gas; con un precio de gas de 20 gwei:

```
Costo = 21.000 × 20 gwei = 420.000 gwei = 0,00042 ETH
```

El precio del gas fluctúa según la demanda de la red en tiempo real (más
transacciones compitiendo por espacio en el bloque suben el precio del
gas), de forma similar a una subasta. Interacciones más complejas con
contratos inteligentes (ej. operar en un protocolo DeFi) consumen mucho
más gas que una simple transferencia, por lo que su costo en ETH puede ser
sustancialmente mayor.

## Comparación de throughput (TPS) entre ambas redes

El *throughput* (transacciones por segundo, TPS) es una medida aproximada
de la capacidad de una blockchain para procesar operaciones:

- **Bitcoin**: aproximadamente 3-7 TPS en la capa base (*layer 1*),
  limitado por el tamaño de bloque y el tiempo de ~10 minutos entre
  bloques. Soluciones de "capa 2" como la Lightning Network buscan
  aumentar la capacidad efectiva sin modificar el protocolo base.
- **Ethereum**: aproximadamente 15-30 TPS en la capa base tras la
  migración a Proof of Stake, también muy por debajo de sistemas de pago
  centralizados tradicionales. Al igual que Bitcoin, depende fuertemente
  de soluciones de "capa 2" (rollups optimistas y de conocimiento cero,
  *zero-knowledge rollups*) para escalar la cantidad de operaciones
  procesables sin comprometer la descentralización de la capa base.

Ambas cifras son órdenes de magnitud menores a las de sistemas de pago
centralizados (que procesan miles de transacciones por segundo), lo cual
es una limitación estructural conocida como el "trilema de la
blockchain" (la dificultad de optimizar simultáneamente
descentralización, seguridad y escalabilidad), y es la motivación central
detrás del desarrollo de soluciones de capa 2 en ambos ecosistemas.

## Diferencias clave para un inversor

| Aspecto | Bitcoin | Ethereum |
|---|---|---|
| Rol principal | Reserva de valor / "oro digital" | Plataforma de contratos inteligentes |
| Oferta máxima | 21 millones (fija) | Sin tope fijo |
| Consenso | Proof of Work | Proof of Stake |
| Casos de uso | Principalmente store of value | DeFi, NFTs, stablecoins, tokenización |

## Riesgos generales de crypto (aplican a ambos)

- **Volatilidad extrema** comparada con activos tradicionales.
- **Riesgo regulatorio**: los marcos legales varían mucho por país y
  cambian con frecuencia (impuestos, restricciones, prohibiciones).
- **Riesgo tecnológico**: bugs en contratos inteligentes, ataques a
  puentes entre blockchains (bridges), fallas de protocolo.
- **Riesgo de custodia**: ver `exchanges-custodia.md`.
- Es un mercado joven, sin décadas de historia como los mercados
  tradicionales; los patrones observados hasta ahora podrían no repetirse.

## Fuentes

Whitepaper de Bitcoin (bitcoin.org/bitcoin.pdf), documentación técnica de
Ethereum (ethereum.org). Para datos de precio, capitalización o dominancia
de mercado vigentes, consultar fuentes de datos en tiempo real, ya que
cambian constantemente.
