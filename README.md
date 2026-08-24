# Portfolio Docker Compose Lab

A small two-container portfolio project for demonstrating Dockerfile and Docker Compose.

## System

- `web`: Caddy serves `src/index.html` and proxies `/api/*` to `api`.
- `resume-api`: A custom Node.js image built from `backend/Dockerfile` returns portfolio JSON.
- `system-diagram.md`: Mermaid Markdown diagram for the GitHub project.

## Run the project

```bash
docker compose build --no-cache
docker compose up
```

Open <http://localhost:8081>. The footer text is loaded from the API container.

Test the API directly from the host:

```bash
curl http://localhost:8081/api/status
```

Stop the containers with `Ctrl+C`, or run `docker compose down` in another terminal.
