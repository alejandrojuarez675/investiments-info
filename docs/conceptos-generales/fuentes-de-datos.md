---
title: "Fuentes de datos de precios y tasas en vivo"
tema: conceptos-generales
tags: [apis, datos, precios, tna, cotizaciones, herramientas]
nivel: avanzado
ultima_revision: 2026-07-20
---

# Fuentes de datos de precios y tasas en vivo

Este documento centraliza dónde consultar precios, TIR, TNA y cotizaciones
**actuales** para cada instrumento mencionado en esta base de conocimiento.
Los demás documentos describen conceptos e incluyen "fotos" de referencia
que quedan desactualizadas; este archivo es el punto de partida para buscar
el dato del momento en vez de asumir vigencia de un número citado en otro
documento.

> Todas las APIs listadas tienen capa gratuita al momento de esta revisión
> (julio 2026), pero límites de uso, autenticación requerida y
> disponibilidad cambian con el tiempo. Verificar la documentación oficial
> de cada una antes de integrarlas en una herramienta o automatización.

## Bonos y letras argentinas (AL30, GD30, LECAP, BONCER, dólar linked)

Ver [Bonos argentinos](../merval/bonos-argentinos.md).

- **[Rava Bursátil](https://www.rava.com/)** — cotizaciones de bonos por
  ticker (ej. rava.com/perfil/AL30), sin necesidad de cuenta. Tiene además
  una API no oficial usada por varias apps de terceros
  (`https://clientes.rava.com/lib/restapi/v1`), sin documentación pública
  formal.
- **[Byma - Bolsas y Mercados Argentinos](https://open.bymadata.com.ar/)**
  ("BYMA Data") — datos de mercado oficiales; el acceso a datos en tiempo
  real o históricos vía API suele requerir convenio/suscripción, pero la
  web pública muestra precios de cierre.
- **[Bonistas.com](https://bonistas.com/)** — paridad, TIR y curva de
  rendimientos de bonos argentinos actualizada a diario, gratis y sin
  registro.
- **[IOL (InvertirOnline)](https://www.invertironline.com/)** — cotizaciones
  en la web; también expone una **API pública documentada** para clientes
  (`api.invertironline.com`, requiere cuenta y OAuth) que permite consultar
  precios y operar programáticamente.
- **[ArgentinaDatos API](https://argentinadatos.com/)** — API pública
  gratuita (`api.argentinadatos.com`) con endpoints REST para cotización de
  bonos, FCI, dólares y más, pensada específicamente para consumo
  programático sin necesidad de scraping.

## ONs (Obligaciones Negociables)

Ver [Obligaciones Negociables argentinas](../merval/obligaciones-negociables.md).

- **[Rava Bursátil](https://www.rava.com/)** y **[Bonistas.com](https://bonistas.com/)**
  también listan ONs con TIR y paridad, además de bonos soberanos.
- **[Byma](https://open.bymadata.com.ar/)** — precios oficiales de cierre.
- Calificaciones de riesgo vigentes: **[FIX SCR](https://www.fixscr.com/)**
  y **[Moody's Local](https://www.moodyslocal.com/)** publican informes de
  calificación por emisión, gratis en su web.

## CEDEARs

Ver [CEDEARs](../merval/cedears.md).

- **[Rava Bursátil](https://www.rava.com/)** — precio en pesos de cada
  CEDEAR y ratio de conversión.
- **[Byma](https://open.bymadata.com.ar/)** — cotización oficial.
- **[ArgentinaDatos API](https://argentinadatos.com/)** — incluye endpoint
  de CEDEARs.
- Para el valor teórico implícito (CCL), combinar el precio del CEDEAR con
  las fuentes de dólar MEP/CCL más abajo.

## Merval (índice)

Ver [Qué es el Merval](../merval/que-es-merval.md).

- **[Byma](https://www.byma.com.ar/)** — valor del índice y composición de
  la canasta.
- **[Yahoo Finance](https://finance.yahoo.com/quote/%5EMERV/)** (ticker
  `^MERV`) — histórico gratuito, accesible también vía librerías no
  oficiales como `yfinance` (Python).
- **[Investing.com - Merval](https://www.investing.com/indices/merval)** —
  cotización y gráfico gratis en la web.
- Merval en dólares (CCL): no hay una fuente única "oficial"; se calcula
  dividiendo el valor en pesos por el dólar CCL del día (ver fuentes de
  dólar más abajo). Sitios como **[Rava](https://www.rava.com/)** publican
  la serie ya calculada.

## Dólar (oficial, MEP, CCL, blue, ahorro)

Ver [Dólar en Argentina](../merval/dolar-argentina.md).

- **[DolarAPI](https://dolarapi.com/)** — API pública y gratuita, sin
  necesidad de API key, con endpoints separados para oficial, blue, MEP,
  CCL, cripto y mayorista (`https://dolarapi.com/v1/dolares`). Es de las
  más usadas por apps y bots de Argentina por su simplicidad.
- **[Bluelytics API](https://bluelytics.com.ar/#!/api)** — API gratuita
  (`api.bluelytics.com.ar/v2/latest`) con oficial y blue, más histórico.
- **[ArgentinaDatos API](https://argentinadatos.com/)** — también expone
  endpoint de cotizaciones de dólar con histórico.
- **[Ámbito Financiero](https://www.ambito.com/contenidos/dolar.html)** y
  **[Cronista](https://www.cronista.com/MercadosOnline/dolar.html)** —
  cotizaciones en la web, sin API pública oficial documentada.
- **[BCRA - Estadísticas cambiarias](https://www.bcra.gob.ar/PublicacionesEstadisticas/Principales_variables.asp)**
  — tipo de cambio oficial mayorista y otras variables, con
  **[API oficial del BCRA](https://api.bcra.gob.ar/)** (Series Estadísticas
  y Estadísticas Cambiarias v1.0), gratuita y documentada.

## Plazo fijo (TNA por banco) y FCI money market

Ver [Plazo fijo](../merval/plazo-fijo.md) y
[FCI money market y billeteras virtuales](../merval/fci-money-market.md).

- **[BCRA - Tasas de interés de depósitos](https://www.bcra.gob.ar/PublicacionesEstadisticas/Principales_variables.asp)**
  — TNA de plazo fijo por banco, publicado oficialmente; también
  disponible vía la **[API del BCRA](https://api.bcra.gob.ar/)**.
- **[ArgentinaDatos API](https://argentinadatos.com/)** — endpoint
  específico de tasas de plazo fijo por entidad, ya estructurado en JSON.
- **[CAFCI (Cámara Argentina de Fondos Comunes de Inversión)](https://www.cafci.org.ar/)**
  — buscador oficial de FCI con rendimientos, patrimonio y ficha técnica
  de cada fondo (incluye money market); no publica una API pública formal,
  pero los datos de la web son gratuitos y son la fuente primaria de la
  industria.
- **[Rankia Argentina - Fondos](https://www.rankia.com.ar/fondos-de-inversion)**
  — rankings y comparadores de FCI actualizados, incluida la categoría
  money market.

## ETFs de EE.UU. (SPY, VOO, IVV, QQQ) y S&P 500

Ver [ETFs que replican el S&P 500 y el Nasdaq-100](../sp500/etfs-sp500.md).

- **[Yahoo Finance](https://finance.yahoo.com/)** — precio, expense ratio
  aproximado e histórico gratis vía web; también accesible sin key formal
  mediante librerías no oficiales como `yfinance` (Python) o `yahoo-finance2`
  (Node), que hacen scraping de sus endpoints.
- **[Stooq](https://stooq.com/)** — descarga de series históricas de
  precios en CSV, gratis y sin registro, buena opción para uso
  programático simple.
- **[Alpha Vantage](https://www.alphavantage.co/)** — API gratuita
  (con límite de requests/minuto) para precios de acciones/ETFs en tiempo
  real y series históricas, requiere API key gratuita.
- **[Financial Modeling Prep](https://site.financialmodelingprep.com/developer/docs)**
  — API con capa gratuita, incluye precio, expense ratio y datos
  fundamentales de ETFs.
- Datos oficiales del fondo (expense ratio, AUM, holdings): páginas de cada
  proveedor — **[ssga.com](https://www.ssga.com/)** (SPY),
  **[ishares.com](https://www.ishares.com/)** (IVV),
  **[vanguard.com](https://investor.vanguard.com/)** (VOO),
  **[invesco.com](https://www.invesco.com/qqq-etf/)** (QQQ).

## Crypto (Bitcoin, Ethereum, exchanges)

Ver [Bitcoin y Ethereum](../crypto/bitcoin-ethereum.md) y
[Exchanges y custodia](../crypto/exchanges-custodia.md).

- **[CoinGecko API](https://www.coingecko.com/en/api)** — API pública
  gratuita (sin key para el tier básico) con precio, capitalización de
  mercado, dominancia y volumen de miles de criptoactivos; una de las más
  usadas por su generosidad en el free tier.
- **[CoinMarketCap API](https://coinmarketcap.com/api/)** — capa gratuita
  con API key, precio y market cap; algo más restrictiva en rate limit que
  CoinGecko en el plan free.
- **[Binance API](https://developers.binance.com/)** — endpoints públicos
  de mercado (precio, order book, velas) sin necesidad de autenticación
  para datos de solo lectura, gratis.
- **[Blockchain.com API](https://www.blockchain.com/explorer/api)** —
  datos on-chain de Bitcoin (hashrate, mempool, transacciones), gratis.

## MCPs (Model Context Protocol) relevantes

Para uso directo desde asistentes de IA compatibles con MCP, existen
servidores comunitarios (no oficiales, verificar mantenimiento y
confiabilidad antes de usarlos en producción):

- Servidores MCP de **CoinGecko** y **CoinMarketCap** (listados en
  directorios como [mcp.so](https://mcp.so/) y el
  [repositorio oficial de servidores MCP](https://github.com/modelcontextprotocol/servers))
  que exponen precio y datos de mercado crypto como tools.
- Servidores MCP genéricos de **"stock market" / "yfinance"** que envuelven
  Yahoo Finance para exponer precios de acciones/ETFs como tools de MCP.
- No se identificó (a julio 2026) un servidor MCP específico y mantenido
  para datos del mercado argentino (Byma, dólar, FCI); para ese caso,
  conviene envolver las APIs REST listadas arriba (DolarAPI,
  ArgentinaDatos, BCRA) en un servidor MCP propio si se necesita ese modo
  de acceso.

## Ejemplos concretos de requests a APIs clave

Ejemplos ilustrativos de cómo consumir tres de las APIs más usadas de esta
lista. Las respuestas son ejemplos simplificados del formato esperado, no
datos reales vigentes.

### DolarAPI (dólar en Argentina)

```
curl https://dolarapi.com/v1/dolares/oficial
```

Respuesta de ejemplo:

```json
{
  "moneda": "USD",
  "casa": "oficial",
  "nombre": "Oficial",
  "compra": 1350,
  "venta": 1370,
  "fechaActualizacion": "2026-07-20T14:30:00.000Z"
}
```

Endpoints análogos existen para `/v1/dolares/blue`, `/v1/dolares/bolsa`
(MEP) y `/v1/dolares/contadoconliqui` (CCL). Ver
[Dólar en Argentina](../merval/dolar-argentina.md) para el detalle
conceptual de cada cotización.

### ArgentinaDatos API (cotizaciones y tasas locales)

```
curl https://api.argentinadatos.com/v1/finanzas/tasas/plazoFijo
```

Devuelve un array JSON con la TNA de plazo fijo por entidad bancaria (ver
[Plazo fijo](../merval/plazo-fijo.md)), sin necesidad de API key.

### CoinGecko API (precios de criptoactivos)

```
curl "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
```

Respuesta de ejemplo:

```json
{
  "bitcoin": { "usd": 65000 },
  "ethereum": { "usd": 3200 }
}
```

Útil para obtener de forma rápida el precio spot de
[Bitcoin y Ethereum](../crypto/bitcoin-ethereum.md) sin necesidad de
registro para el tier gratuito básico.

## Notas de uso

- Ninguna de estas fuentes reemplaza al bróker o entidad donde se opera
  efectivamente: usarlas para investigación/consulta, no como precio de
  ejecución garantizado.
- Las APIs no oficiales o basadas en scraping (ej. `yfinance`, API no
  documentada de Rava) pueden romperse sin aviso si el sitio de origen
  cambia su estructura; para uso crítico, preferir APIs oficiales y
  documentadas (BCRA, IOL, CoinGecko, Alpha Vantage).
- Ante discrepancias entre fuentes (común en dólar MEP/CCL o TIR de bonos
  poco líquidos), tomar el dato como una banda/aproximación, no como un
  número único exacto.
