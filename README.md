# StackPilot

StackPilot is a self-hosted Platform-as-a-Service for deploying containerized applications, databases and AI coding agents on your own servers.

## About

StackPilot is a web dashboard on top of a lightweight Kubernetes (k3s) cluster. Projects contain apps built from Git or container images and, since this release, AI agents that run in isolated sandboxes and talk to models through an LLM gateway. Everything can be automated through a REST API or an MCP server.

## Features

- **Apps** - Dockerfile or Railpack builds, SSH deploy keys, templates, domains with Let's Encrypt, node ports, health checks and rollbacks.
- **AI agents** - agents created from harness templates, connected to LiteLLM gateways with model aliases and rate limits, running in agent-sandbox sandboxes with their own domains, volumes, config files, environment and egress rules.
- **Storage and backups** - storage classes, shared volumes, volume and database backups to S3 and platform database backups.
- **Networking** - per-app network policies, Traefik client IP propagation and wildcard DNS hostnames.
- **Operations** - live logs, web terminal, monitoring, builds overview, platform updates and k3s upgrades.
- **Access control** - user groups with project, app and agent permissions, TOTP two-factor authentication, SSO providers (GitHub, Google, Microsoft Entra) and API-only users.
- **Automation** - personal API keys, a REST API for projects, apps and agents, and a Model Context Protocol endpoint.

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
