---
title: "Stablecoins y DeFi: conceptos básicos"
tema: crypto
tags: [stablecoin, usdt, usdc, defi, yield-farming, dolar-digital]
nivel: avanzado
ultima_revision: 2026-07-22
---

# Stablecoins y DeFi: conceptos básicos

Las stablecoins son la puerta de entrada más común a las finanzas
descentralizadas (DeFi) y, en Argentina particularmente, funcionan como
una forma de "dólar digital" accesible desde cualquier exchange o wallet,
sin pasar por el sistema bancario tradicional. Son también uno de los
puntos de la industria cripto donde el riesgo suele subestimarse, porque
su nombre ("estable") sugiere una seguridad que no siempre corresponde al
mecanismo real detrás de cada una.

## Qué es una stablecoin

Un criptoactivo diseñado para mantener una paridad estable con otro
activo, típicamente el dólar estadounidense (1 stablecoin ≈ 1 USD). A
diferencia de [Bitcoin o Ethereum](bitcoin-ethereum.md), no busca
apreciarse: busca no perder valor frente al dólar.

## Tipos de stablecoins según su respaldo

- **Colateralizadas por fiat (centralizadas)**: la emisora mantiene
  reservas en dólares (o equivalentes, como bonos del Tesoro de EE.UU. de
  corto plazo) por cada unidad emitida. Ejemplos: USDT (Tether), USDC
  (Circle). El riesgo central es de contraparte: depende de que la
  emisora efectivamente tenga y audite las reservas que dice tener.
  Tether, en particular, ha sido objeto de escrutinio histórico sobre la
  composición y transparencia de sus reservas.
- **Colateralizadas por criptoactivos (descentralizadas)**: respaldadas
  por otros criptoactivos depositados en un protocolo, en una proporción
  mayor al 100% (sobrecolateralización) para absorber la volatilidad del
  colateral. Ejemplo: DAI (protocolo MakerDAO/Sky). El riesgo es que una
  caída muy brusca del colateral puede llevar a liquidaciones en cascada
  si el protocolo no logra vender el colateral a tiempo.
- **Algorítmicas (sin colateral pleno)**: intentan mantener la paridad
  mediante mecanismos de oferta y demanda programados, sin respaldo
  completo en activos reales. Este diseño demostró ser el más frágil: el
  colapso de TerraUSD (UST) en mayo de 2022 —que perdió su paridad con el
  dólar y licuó decenas de miles de millones de dólares en pocos días—
  es el caso de referencia de por qué este tipo de diseño conlleva un
  riesgo estructural distinto al de una stablecoin colateralizada.

## Uso como "dólar digital" en Argentina

- Ante el cepo cambiario y las restricciones para acceder a dólares
  billete o [dólar MEP/CCL](../merval/dolar-argentina.md), comprar
  stablecoins en un exchange es, para muchos usuarios, la forma más
  simple de obtener exposición al dólar sin los límites y trámites del
  circuito formal.
- Se opera con pesos argentinos en exchanges locales o internacionales
  (ver [exchanges y custodia](exchanges-custodia.md)), y permite mantener
  el valor dolarizado dentro de una wallet, transferirlo, o usarlo como
  base para operar otros criptoactivos.
- El riesgo cambia de naturaleza, no desaparece: en vez de depender del
  circuito bancario/cambiario argentino, el usuario pasa a depender de la
  solidez de la stablecoin elegida y del exchange donde la mantiene.

## DeFi: finanzas descentralizadas

DeFi es el ecosistema de aplicaciones financieras (préstamos, exchanges,
generación de rendimiento) construidas sobre blockchains como Ethereum,
que operan mediante contratos inteligentes en vez de intermediarios
tradicionales (bancos, brokers).

- **Lending/borrowing**: protocolos (ej. Aave, Compound) donde un usuario
  deposita criptoactivos y gana interés, mientras otro los toma prestados
  dejando un colateral (generalmente sobrecolateralizado, para cubrir la
  volatilidad de los activos involucrados).
- **Yield farming**: estrategias que combinan varios protocolos DeFi para
  maximizar el rendimiento obtenido (por ejemplo, proveer liquidez a un
  exchange descentralizado y además poner en préstamo los tokens
  recibidos a cambio). A mayor complejidad de la estrategia, mayor
  cantidad de puntos de falla posibles.
- **Exchanges descentralizados (DEX)**: como Uniswap, permiten
  intercambiar criptoactivos sin un exchange centralizado, mediante
  pools de liquidez en lugar de un libro de órdenes tradicional.

## Riesgos específicos de DeFi

- **Riesgo de contrato inteligente**: un error o vulnerabilidad en el
  código del protocolo puede ser explotado para drenar los fondos
  depositados. El caso de The DAO en 2016 (ver [exchanges y
  custodia](exchanges-custodia.md#casos-históricos-de-colapsos-y-hackeos-referencia))
  es el precedente histórico más citado, pero exploits de este tipo
  siguen ocurriendo en protocolos DeFi con regularidad.
- **Riesgo de "rendimientos" no sostenibles**: tasas de interés
  anormalmente altas ofrecidas por algunos protocolos suelen depender de
  la emisión de un token propio del protocolo, cuyo valor puede caer
  fuertemente si disminuye la demanda, licuando el rendimiento real
  obtenido pese a que la tasa nominal se mantenga alta.
- **Riesgo de liquidación**: en posiciones de préstamo colateralizadas,
  una caída brusca del valor del colateral puede disparar una
  liquidación automática y forzosa antes de que el usuario pueda
  reaccionar.
- **Ausencia de marco regulatorio y de protección al usuario**: a
  diferencia de un banco o un bróker regulado, no existe un organismo que
  intervenga en caso de pérdida por error del protocolo, hackeo o mala
  praxis del proyecto.

## Consideraciones prácticas

- Verificar qué respalda efectivamente una stablecoin (reservas
  auditadas, sobrecolateralización, o solo un mecanismo algorítmico)
  antes de asumir que "vale 1 dólar" de forma garantizada.
- El uso de stablecoins como reserva de valor de corto plazo conlleva
  menos riesgo que participar en estrategias de DeFi con rendimiento
  variable, que requieren entender bien el protocolo específico antes de
  depositar fondos.
- Aplican las mismas buenas prácticas de custodia que para cualquier
  criptoactivo (ver [exchanges y custodia de
  criptoactivos](exchanges-custodia.md)).

## Fuentes

Descripción general de stablecoins y DeFi con fines educativos. Para
información sobre reservas y auditorías de emisores específicos,
consultar las publicaciones de cada emisora (Tether, Circle) o el sitio
del protocolo correspondiente. No constituye asesoramiento financiero
personalizado; el ecosistema DeFi conlleva riesgos significativos y poca
protección regulatoria frente a pérdidas.
