# Registro de cotizaciones

Esta carpeta guarda cotizaciones de mercado (precios), separadas de
[`data/tasas/`](../tasas/README.md), que se reserva para tasas de interés
y tipos de cambio. Cada CSV acá es, igual que `tasas.csv`, un log
**append-only**: cada fila es una observación puntual en el tiempo, no un
valor "vigente" a actualizar. Para el precio más reciente de un ticker,
filtrar por `ticker` y tomar la fecha máxima. No editar ni borrar filas
existentes; si un dato estaba mal, agregar una fila nueva corregida.

## Archivos y qué va en cada uno

| Archivo | Contenido | Columnas extra |
|---|---|---|
| `acciones_ar.csv` | Acciones del panel líder MERVAL (BYMA, en pesos) | — |
| `acciones_us.csv` | Acciones NYSE (en USD) | — |
| `adrs.csv` | ADRs argentinos que cotizan en NYSE/NASDAQ (en USD) | — |
| `cedears.csv` | CEDEARs en BYMA (en pesos) | `ratio` (ratio de conversión CEDEAR:subyacente) |
| `bonos_ar.csv` | Bonos soberanos argentinos (en USD o ARS según especie) | `tir`, `paridad` |
| `crypto.csv` | Criptomonedas y stablecoins (en USD) | — |
| `etfs.csv` | ETFs (EE.UU. y UCITS Europa) | — |

Columnas comunes: `fecha` (`YYYY-MM-DD`), `ticker`, `moneda` (`ARS`/`USD`),
`precio`, `fuente_url`, `notas`. Igual que en `tasas.csv`, no hace falta
ordenar por fecha al agregar filas.

Nota: las Obligaciones Negociables (ONs) no tienen un CSV propio todavía
porque `docs/merval/obligaciones-negociables.md` solo lista emisores
frecuentes, no tickers/especies concretas. Si se empieza a trackear una
ON puntual, crear `obligaciones_negociables.csv` con el mismo esquema que
`bonos_ar.csv`.

## Tickers válidos por archivo

Igual que en `tasas.csv`: usar exactamente el ticker de estas listas. Si
aparece un instrumento nuevo, agregarlo acá primero y recién después usarlo
en el CSV correspondiente.

### `acciones_ar.csv` (MERVAL — ver [empresas/README.md](../../empresas/README.md#merval--panel-líder-argentina-byma))

YPFD, GGAL, BMA, BBAR, PAMP, CRES, TECO2, TGSU2, ALUA, TXAR, LOMA, CEPU,
TRAN, COME, SUPV, EDN, CVH, IRSA, MIRG

Nota: BSAN no existe en BYMA — Banco Santander Río (ticker BRIO) se
deslistó de BYMA en 2021 y ya no cotiza; no cargar cotizaciones para este
ticker.

### `acciones_us.csv` (NYSE — ver [empresas/README.md](../../empresas/README.md#nyse--grandes-empresas-de-estados-unidos))

BRK.B, LLY, JPM, V, UNH, JNJ, WMT, XOM, MA, PG, HD, CVX, MRK, KO, BAC,
ABBV, ORCL, MCD, CRM, DIS

### `adrs.csv` (ADRs argentinos en NY — ver [empresas/README.md](../../empresas/README.md#adrs-argentinos-en-nueva-york-base-de-cedears))

MELI, GLOB, DESP (confirmado deslistado: adquirida por Prosus, deal
cerrado 2025-05-15, no cargar cotizaciones nuevas), VIST, BMA, GGAL, YPF,
PAM, TEO, IRS, IRCP (no se pudo verificar cotización activa en
NASDAQ/NYSE al 2026-07-22; posiblemente sin ADR activo, no cargar hasta
confirmar), LOMA, CEPU, CAAP, BIOX, AGRO, EDN, TGS, CRESY, SUPV

### `cedears.csv` (ver [docs/merval/cedears.md](../../docs/merval/cedears.md#cedears-más-operados-por-sector-referencia-orientativa))

AAPL, MSFT, NVDA, AMZN, GOOGL, META, SPY, QQQ, JPM, V, MA, KO, MCD, WMT,
TSLA, XOM

Nota: el ticker del CEDEAR en BYMA suele coincidir con el del subyacente
en EE.UU.; registrar el `ratio` vigente en cada fila porque cambia con el
tiempo (ej. SPY cambió de ratio 20:1 a 60:1 en 2026). VOO no tiene CEDEAR
propio en BYMA (no confundir con el CEDEAR de SPY, que sí existe) — no
cargar cotizaciones para VOO en este archivo, solo en `etfs.csv`.

### `bonos_ar.csv` (ver [docs/merval/bonos-argentinos.md](../../docs/merval/bonos-argentinos.md#especies-vigentes-referencia-julio-2026))

AL29, AL30, AL35, AL41 (ley local), GD30, GD35, GD38, GD41, GD46 (ley
extranjera)

### `crypto.csv` (ver [docs/crypto/bitcoin-ethereum.md](../../docs/crypto/bitcoin-ethereum.md) y [docs/crypto/stablecoins-defi.md](../../docs/crypto/stablecoins-defi.md))

BTC, ETH, USDT, USDC, DAI

### `etfs.csv` (ver [docs/sp500/etfs-sp500.md](../../docs/sp500/etfs-sp500.md) y [docs/sp500/etfs-ucits-europa.md](../../docs/sp500/etfs-ucits-europa.md))

SPY, IVV, VOO, QQQ, QQQM (EE.UU.); equivalentes UCITS (Irlanda) según
proveedor, ej. CSPX (iShares Core S&P 500 UCITS), VUAA (Vanguard S&P 500
UCITS) — verificar ticker exacto en el bróker/bolsa europea usada, ya que
varía por bolsa de listado (Londres, Ámsterdam, etc.).

## Dónde buscar cada cotización

| Categoría | Fuentes sugeridas |
|---|---|
| Acciones MERVAL / bonos AR | [BYMA](https://www.byma.com.ar), [Rava Bursátil](https://www.rava.com), [IOL](https://www.invertironline.com) |
| Acciones NYSE / ADRs / ETFs EE.UU. | Yahoo Finance, Google Finance |
| CEDEARs | BYMA, Rava, o bróker local (además necesita el [dólar CCL](../tasas/tasas.csv) vigente para calcular el precio teórico) |
| ETFs UCITS Europa | justETF, Yahoo Finance (bolsa de Londres/Ámsterdam según ticker) |
| Crypto | CoinGecko, CoinMarketCap, o el exchange usado |

## Cómo agregar una observación

Igual que en `tasas.csv`: añadir una línea nueva al final del CSV
correspondiente siguiendo el esquema de columnas. Al usar estos datos en
un reporte (`reports/`), citar la fila de origen (fecha + ticker + archivo)
además de la fuente URL.
