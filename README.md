# StackPilot

StackPilot is a self-hosted Platform-as-a-Service for deploying and managing containerized applications and databases on your own servers.

## About

StackPilot is a web dashboard on top of a lightweight Kubernetes (k3s) cluster. You create a project, add apps from a Git repository, a container image or a ready-made template, and the platform builds, deploys, exposes and backs them up.

## Features

- **Apps from Git or images** - in-cluster Dockerfile builds, private registry credentials and deploy webhooks for CI.
- **Templates** - one-click PostgreSQL, MySQL, MariaDB, MongoDB and Redis databases plus dozens of popular self-hosted apps.
- **Domains and TLS** - Traefik ingresses with Let's Encrypt certificates and HTTPS redirects; optional HTTP basic auth per app.
- **Storage** - persistent volumes, config file mounts, volume upload and a temporary file browser.
- **Backups** - scheduled volume backups to S3-compatible storage with retention and restore.
- **Database tools** - connection details and on-demand DbGate, phpMyAdmin or pgAdmin.
- **Operations** - live build and container logs, a web terminal, CPU/memory/disk monitoring and cluster node overview.
- **Team access** - users, user groups with project- and app-level permissions, and TOTP two-factor authentication.

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
