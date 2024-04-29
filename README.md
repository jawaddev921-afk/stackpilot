# StackPilot

StackPilot is a self-hosted Platform-as-a-Service for deploying and managing containerized applications on your own servers.

## About

StackPilot is a web dashboard on top of a lightweight Kubernetes (k3s) cluster. You create a project, add apps that come from a Git repository or a container image, and the platform builds, deploys and exposes them.

## Current Features

- **Projects and apps** - group apps into projects; each project gets its own Kubernetes namespace.
- **Git and image sources** - deploy from a public or private Git repository or from an existing container image.
- **In-cluster builds** - images are built from a Dockerfile as Kubernetes jobs and pushed to a registry inside the cluster.
- **Deployments** - replicas, CPU/memory limits and environment variables per app.
- **Domains** - Traefik ingresses per hostname with optional HTTPS redirect.
- **Volumes** - persistent volumes per app.
- **Live logs** - streamed build logs and container logs in the browser.
- **Deployment history** - past builds and deployments with status badges.
- **Authentication** - email/password login with optional TOTP two-factor authentication.

## Development

Requirements: Node.js 22 and Yarn 1.22.

```bash
yarn install
cp .env.example .env
yarn prisma-generate
yarn prisma-deploy
yarn dev
```

Run the unit tests with:

```bash
yarn test
```

## License

StackPilot is licensed under the GPL-3.0 license. See [LICENSE](LICENSE).
