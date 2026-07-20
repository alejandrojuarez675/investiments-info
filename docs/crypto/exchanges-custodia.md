---
title: "Exchanges y custodia de criptoactivos"
tema: crypto
tags: [exchange, wallet, custodia, seguridad, hardware-wallet]
nivel: avanzado
ultima_revision: 2026-07-20
---

# Exchanges y custodia de criptoactivos

Cómo y dónde se guardan los criptoactivos es una decisión central en
crypto, distinta a la de otros activos financieros, porque afecta
directamente el riesgo de pérdida total del capital.

## Exchanges centralizados (CEX)

Plataformas como Binance, Coinbase o Kraken que permiten comprar, vender y
en muchos casos mantener custodiados los criptoactivos, de forma similar a
un banco.

- **Ventaja**: interfaz simple, liquidez alta, soporte al cliente,
  cumplimiento regulatorio en muchas jurisdicciones.
- **Riesgo de contraparte**: "not your keys, not your coins" — si los
  activos quedan en el exchange, el usuario no controla las claves
  privadas, y depende de la solvencia y honestidad de la plataforma. Ha
  habido colapsos históricos de exchanges grandes (ej. FTX en 2022, Mt.
  Gox en 2014) que resultaron en pérdida de fondos de usuarios.
- **Riesgo regulatorio**: los exchanges operan bajo marcos legales que
  varían por país y cambian con frecuencia.

## Comparación estructurada de exchanges principales

Comparación orientativa, no exhaustiva, de tres de los exchanges
centralizados de mayor volumen global (características generales, no
constituye recomendación):

| Exchange | Regulación | Estructura de fees | Nota de seguridad |
|---|---|---|---|
| Binance | Registrado en múltiples jurisdicciones, sin licencia bancaria centralizada única; historial de escrutinio regulatorio en varios países | Entre las más bajas de la industria, con descuentos por volumen y por usar el token propio (BNB) | Mayor volumen global; ha reforzado controles tras escrutinio regulatorio de 2023 en adelante |
| Coinbase | Empresa que cotiza en bolsa de EE.UU. (Nasdaq), con licencias específicas en varias jurisdicciones | Fees más altos que Binance en su plataforma retail estándar (existe Coinbase Advanced Trade con fees menores) | Percibido como de los más regulados y transparentes por su condición de empresa pública |
| Kraken | Con licencias en EE.UU. y Europa, uno de los exchanges más antiguos en operación continua | Fees intermedios, estructura por volumen | Historial largo sin incidentes de seguridad mayores reportados |

La regulación, los fees y las jurisdicciones donde cada exchange opera
legalmente cambian con frecuencia; verificar la situación vigente y la
disponibilidad en el país de residencia antes de operar.

## Guía paso a paso: configuración de una hardware wallet

Procedimiento general aplicable a la mayoría de las hardware wallets (ej.
Ledger, Trezor):

1. **Comprar el dispositivo únicamente de fuentes oficiales**: el
   fabricante directo o revendedores autorizados, nunca de segunda mano ni
   de marketplaces sin verificación, por riesgo de dispositivos
   manipulados con la seed phrase precargada por un atacante.
2. **Inicializar el dispositivo generando una nueva wallet**: nunca
   restaurar una wallet a partir de una seed phrase que vino
   preimpresa o incluida con el dispositivo — es señal de fraude.
3. **Anotar la seed phrase (12 o 24 palabras) en papel**, nunca
   digitalmente (ni foto, ni nota en el celular, ni archivo de texto),
   porque cualquier copia digital es un vector de robo si el dispositivo
   donde se guarda es hackeado.
4. **Verificar la seed phrase** cuando el dispositivo lo solicite, para
   confirmar que fue anotada correctamente antes de depositar fondos.
5. **Configurar un PIN de acceso** al dispositivo físico, como capa
   adicional de protección ante robo o pérdida física.
6. **Guardar la seed phrase en un lugar físico seguro**, idealmente con
   una copia de respaldo en una ubicación distinta (ej. caja de seguridad),
   protegida contra incendio/inundación si es posible (existen soportes
   metálicos resistentes al fuego pensados específicamente para esto).
7. **Probar con un monto pequeño primero**: enviar una cantidad chica de
   fondos y verificar que se puede recibir y luego enviar correctamente
   antes de mover montos grandes al dispositivo.

## Casos históricos de colapsos y hackeos (referencia)

Tabla de eventos históricos relevantes para dimensionar el riesgo de
contraparte y de custodia en crypto, con fechas y montos aproximados:

| Evento | Fecha | Monto aproximado | Tipo |
|---|---|---|---|
| Mt. Gox | Febrero 2014 | ~850.000 BTC (valor histórico al momento, no ajustado a precio actual) | Hackeo de exchange centralizado |
| The DAO (Ethereum) | Junio 2016 | ~3,6 millones de ETH | Explotación de vulnerabilidad en contrato inteligente |
| Coincheck | Enero 2018 | ~USD 530 millones (en NEM) | Hackeo de exchange centralizado |
| FTX | Noviembre 2022 | Estimado en miles de millones de USD en fondos de clientes | Colapso por mal manejo de fondos de clientes (no un hackeo externo) |
| Ronin Network (Axie Infinity) | Marzo 2022 | ~USD 620 millones | Hackeo de puente entre blockchains (bridge) |

Estos casos ilustran distintos tipos de riesgo cubiertos en este
documento: riesgo de contraparte (Mt. Gox, FTX), riesgo tecnológico de
contratos inteligentes (The DAO) y riesgo de puentes entre blockchains
(Ronin). Ninguno de estos riesgos se elimina completamente con
self-custody, salvo el riesgo específico de contraparte de un exchange;
el riesgo tecnológico de protocolos y contratos inteligentes persiste
independientemente de dónde se custodien los activos.

## Wallets propias (self-custody)

Alternativa donde el usuario controla directamente las claves privadas de
sus activos, sin depender de un tercero.

- **Hot wallets**: conectadas a internet (apps móviles, extensiones de
  navegador como MetaMask). Más cómodas para uso frecuente, pero más
  expuestas a hackeos, malware o phishing.
- **Cold wallets (hardware wallets)**: dispositivos físicos (ej. Ledger,
  Trezor) que almacenan las claves privadas offline, firmando
  transacciones sin exponer la clave a internet. Consideradas más seguras
  para tenencias grandes o de largo plazo.
- **Responsabilidad total del usuario**: si se pierde la clave privada o
  la frase semilla (seed phrase) y no hay backup, los fondos son
  irrecuperables. No existe "recuperar contraseña" como en un banco
  tradicional.

## Buenas prácticas generales (educativas, no exhaustivas)

- Nunca compartir la frase semilla (seed phrase) con nadie, ni ingresarla
  en sitios web o apps no verificadas.
- Considerar mantener grandes tenencias en cold wallets y solo montos
  operativos chicos en exchanges o hot wallets.
- Verificar dos veces las direcciones antes de enviar fondos: las
  transacciones en blockchain son irreversibles.
- Habilitar autenticación de dos factores (2FA) en cualquier exchange
  utilizado, preferentemente con app de autenticación y no SMS.
- Desconfiar de rendimientos "garantizados" anormalmente altos: es una
  señal común de esquemas fraudulentos en el espacio crypto.

## Fuentes

Prácticas generales de seguridad ampliamente documentadas por la propia
industria (ej. guías de seguridad de Ledger, Coinbase Learn). No requiere
cita de datos de mercado vigentes.
