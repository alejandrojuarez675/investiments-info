---
name: run
description: Levanta la app web (Next.js) siempre vía Docker Compose, conectada a la base Postgres existente. Usar cuando el usuario pide correr, levantar o probar la app.
---

# Run

Esta app **siempre se levanta con Docker**, nunca con `npm run dev` directo en
el host. El `docker-compose.yml` está en la raíz del repo y construye la app
web con `web/Dockerfile.dev`.

## Base de datos

El proyecto reutiliza un contenedor Postgres ya existente y persistente,
`investiments-info-pg` (puerto host `5433`, DB `investiments`, usuario
`postgres`/`postgres`). **No** crear una base nueva en el compose: el
servicio `web` se conecta a esa vía `host.docker.internal:5433`.

Antes de levantar, verificar que ese contenedor esté corriendo:

```bash
docker ps --filter name=investiments-info-pg --format "{{.Status}}"
```

Si no aparece, avisar al usuario en vez de crear una base nueva — puede tener
datos que no están en `web/db/seed.sql`.

## Levantar

```bash
docker compose up -d --build
```

La app queda expuesta en **http://localhost:3005** (mapeado a 3000 dentro del
contenedor; el 3000 del host está ocupado por otro proyecto, `failach-frontend`).

Ver logs:

```bash
docker logs investiments-info-web-1 --tail 50 -f
```

Smoke test:

```bash
curl -sS -o /dev/null -w "HTTP %{http_code}\n" http://localhost:3005
```

## Bajar

```bash
docker compose down
```

(Esto no toca `investiments-info-pg`, que es un contenedor aparte y no forma
parte de este compose.)

## Notas

- El código fuente de `web/` está montado como volumen, así que los cambios
  se reflejan sin rebuild (Turbopack hot reload). Solo hace falta
  `--build` si cambian `package.json`/`package-lock.json` o el `Dockerfile.dev`.
- `web/AGENTS.md` advierte que esta versión de Next.js puede tener APIs
  distintas a las conocidas — revisar `node_modules/next/dist/docs/` antes de
  escribir código nuevo contra el framework.
