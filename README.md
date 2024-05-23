# StackPilot

StackPilot is a self-hosted Platform-as-a-Service for deploying and managing containerized applications and databases on your own servers.

## About

StackPilot is a web dashboard on top of a lightweight Kubernetes (k3s) cluster. You create a project, add apps from a Git repository, a container image or a template, and the platform builds, deploys, secures and backs them up. Everything you can do in the dashboard can also be automated through a REST API or an MCP server.

## Features

- **Flexible builds** - Dockerfile or Railpack builds in the cluster, SSH deploy keys for private repositories and a guided source wizard.
- **Templates** - one-click databases and dozens of popular self-hosted applications.
- **Networking** - domains with Let's Encrypt, node ports, per-app network policies, Traefik client IP propagation and wildcard DNS hostnames.
- **Reliability** - HTTP/TCP health checks, rollbacks, realtime pod status and Kubernetes events per app.
- **Storage and backups** - storage classes, shared volumes, volume and native database backups (PostgreSQL, MariaDB/MySQL, MongoDB) to S3, plus platform database backups.
- **Operations** - live logs, web terminal, monitoring, global builds overview, platform updates and k3s upgrades from the UI.
- **Team access** - user groups with project- and app-level permissions and TOTP two-factor authentication.
- **Automation** - personal API keys, a versioned REST API with OpenAPI docs and a Model Context Protocol endpoint.

## Installation on a Server

The scripts in [`setup/`](setup) install k3s, Longhorn and StackPilot on a fresh Linux server and join additional nodes to the cluster.

## Development

Requirements: Node.js 22 and Yarn 1.22.

```bash
yarn install
cp .env.example .env
yarn prisma-generate
yarn prisma-deploy
yarn dev
```

Run the unit tests with `yarn test`. Build the container image with `docker build -t stackpilot .`.

## License

StackPilot is licensed under the GPL-3.0 license. See [LICENSE](LICENSE).
