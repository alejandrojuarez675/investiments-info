---
name: actualizar-cotizaciones
description: Busca los valores actuales de todos los tickers/instrumentos registrados en data/cotizaciones/ y data/tasas/ (acciones AR/US, ADRs, CEDEARs, bonos, crypto, ETFs, plazo fijo, dólar) y agrega una fila nueva por cada uno a los CSV correspondientes.
---

# Actualizar cotizaciones

Busca los valores vigentes de todos los instrumentos ya registrados como
"válidos" en `data/cotizaciones/README.md` y `data/tasas/README.md`, y
agrega una fila nueva a cada CSV (append-only, nunca editar filas
existentes).

**Preferir APIs directas (`curl`) sobre búsqueda web o subagentes.** Una
búsqueda web por ticker cuesta una llamada a un modelo; una API devuelve
JSON determinístico casi gratis. Usar WebSearch/agentes solo para las
categorías que no tienen API confiable (ver más abajo).

## APIs a usar por categoría

### Acciones AR (`acciones_ar.csv`), ADRs (`adrs.csv`), acciones US (`acciones_us.csv`), CEDEARs (`cedears.csv`), ETFs (`etfs.csv`)

Yahoo Finance (API no oficial, sin key, gratis):

```
curl -s "https://query1.finance.yahoo.com/v8/finance/chart/<SYMBOL>?interval=1d&range=1d" -H "User-Agent: Mozilla/5.0"
```

El precio está en `chart.result[0].meta.regularMarketPrice`, la moneda en
`chart.result[0].meta.currency`, y el timestamp en
`chart.result[0].meta.regularMarketTime` (epoch, convertir a fecha).

Sufijo de `<SYMBOL>` según mercado:
- **BYMA (acciones AR y CEDEARs)**: sufijo `.BA`, ej. `YPFD.BA`, `AAPL.BA`, `GGAL.BA`.
- **NYSE/NASDAQ (acciones US, ADRs, ETFs EE.UU.)**: sin sufijo, ej. `JPM`, `MELI`, `SPY`. Los tickers con punto usan guion: `BRK.B` → `BRK-B`.
- **ETFs UCITS Europa (Londres)**: sufijo `.L`, ej. `CSPX.L`, `VUAA.L`. Verificar que la moneda devuelta (`meta.currency`) sea la esperada — algunos tickers UCITS tienen líneas paralelas en USD/GBP/EUR en distintas bolsas.

Si Yahoo devuelve `"result":null` con `"error":{"code":"Not Found"}`, el
símbolo no existe con ese sufijo — no inventar el dato, dejarlo fuera y
avisar en el resumen final.

**CEDEARs**: además del precio, `cedears.csv` tiene columna `ratio`.
Yahoo no da el ratio de conversión — buscarlo con WebSearch (Rava,
BYMA, Cohen) solo si cambió desde la última fila registrada; si no,
reusar el último ratio conocido y aclararlo en `notas` ("ratio sin
verificar, reusado de la última observación").

### Bonos AR (`bonos_ar.csv`)

Yahoo Finance **no cubre** los bonos soberanos argentinos (AL30, GD30,
etc. devuelven 404). No hay API gratuita confiable para esto. Usar
WebSearch/WebFetch puntual contra Rava Bursátil
(`rava.com/perfil/<TICKER>D`) o bonistas.com para precio, TIR y paridad.
Es la única categoría de este listado donde toca buscar manualmente.

### Crypto (`crypto.csv`)

CoinGecko (API pública, sin key, gratis, con rate limit generoso):

```
curl -s "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,usd-coin,dai&vs_currencies=usd"
```

Mapeo id CoinGecko → ticker: `bitcoin`→BTC, `ethereum`→ETH, `tether`→USDT,
`usd-coin`→USDC, `dai`→DAI.

### Dólar ARS (`data/tasas/tasas.csv`, instrumentos `dolar_oficial`/`dolar_mep`/`dolar_ccl`/`dolar_blue`)

dolarapi.com (sin key, gratis):

```
curl -s "https://dolarapi.com/v1/dolares"
```

Devuelve un array con `casa` (`oficial`, `blue`, `bolsa`=MEP,
`contadoconliqui`=CCL, entre otras) y `compra`/`venta`. Usar `venta` como
`tasa_valor` (consistente con las filas ya cargadas en `tasas.csv`, que
usan el valor de venta). Mapeo `casa` → `instrumento`: `oficial` →
`dolar_oficial`, `blue` → `dolar_blue`, `bolsa` → `dolar_mep`,
`contadoconliqui` → `dolar_ccl`.

### Plazo fijo (`data/tasas/tasas.csv`, instrumentos `plazo_fijo`/`plazo_fijo_uva`)

No hay API pública simple (el BCRA expone la serie solo vía gráficos
JS). Usar WebSearch puntual (La Nación, Infobae, o BCRA si se encuentra
un endpoint JSON estable) para la TNA a 30 días de 2-3 bancos grandes
(Banco Nación, Galicia, Macro) y, si está disponible, la tasa adicional
UVA a 90 días. Aclarar el banco en `notas`.

## Procedimiento

1. Leer `data/cotizaciones/README.md` y `data/tasas/README.md` para
   obtener la lista vigente de tickers válidos por archivo (puede haber
   crecido desde la última corrida de esta skill).
2. Para cada categoría con API (todo excepto bonos AR y plazo fijo),
   armar un loop de `curl` sobre la lista de tickers y parsear el JSON
   con herramientas de línea de comandos (ej. `python -c` o similar
   disponible en el entorno) para extraer precio, moneda y timestamp.
3. Para bonos AR y plazo fijo, hacer las búsquedas puntuales necesarias.
4. Agregar una fila nueva por instrumento al CSV correspondiente, con la
   fecha de la cotización (no la fecha de hoy si son distintas),
   `fuente_url` apuntando a la URL de la API o página consultada, y
   `notas` con cualquier aclaración relevante (ej. "cierre sesión
   regular", "premarket", ticker no encontrado).
5. Nunca sobreescribir ni borrar filas existentes — es un log
   append-only, igual que `tasas.csv`.
6. Si algún ticker de la lista válida no devolvió dato (símbolo no
   encontrado, deslistado, etc.), no inventar un valor: dejarlo fuera del
   CSV y mencionarlo explícitamente en el resumen final al usuario.
7. Al terminar, resumir al usuario: cuántas filas se agregaron por
   archivo, y qué tickers quedaron sin dato y por qué.
