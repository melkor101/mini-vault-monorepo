# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands are run from the repo root via Yarn + Turborepo.

```bash
yarn dev          # Start all apps in development mode (web: :3000, docs: :3001)
yarn build        # Build all apps and packages
yarn lint         # Lint all packages
yarn check-types  # TypeScript type-checking across all packages
yarn format       # Format with Prettier
```

To run a command scoped to a single workspace:

```bash
yarn workspace @repo/ui lint
yarn workspace web check-types
```

For the mobile app specifically:

```bash
yarn workspace mini-vault start    # Start Expo dev server
yarn workspace mini-vault ios      # Run on iOS simulator
yarn workspace mini-vault android  # Run on Android emulator
```

There is no test framework configured in this repo yet.

## Architecture

This is a **Turborepo + Yarn Workspaces** monorepo. Task dependencies are declared in `turbo.json` — `build`, `lint`, and `check-types` all cascade through `^` dependencies (packages before apps). `dev` is persistent and uncached.

### Apps

| App | Port | Description |
|-----|------|-------------|
| `apps/web` | 3000 | Main Next.js application |
| `apps/docs` | 3001 | Documentation Next.js application |
| `apps/mobile` | N/A | Expo Router mobile app (iOS & Android) |

The web and docs apps consume shared packages via workspace imports (e.g., `@repo/ui`). The mobile app uses Expo-specific tooling and does not consume `@repo/ui`.

### Shared Packages

| Package | Description |
|---------|-------------|
| `@repo/ui` | React component library — Button, Card, Code components |
| `@repo/eslint-config` | ESLint configs: `./base`, `./next-js`, `./react-internal` |
| `@repo/typescript-config` | TypeScript configs: `base.json`, `nextjs.json`, `react-library.json` |

`@repo/ui` uses subpath exports (e.g., `@repo/ui/button`) — add new components with `turbo gen react-component` from inside the `packages/ui` directory.

All ESLint configs use `eslint-plugin-only-warn`, so all lint violations surface as warnings rather than errors. The `--max-warnings 0` flag in each app's lint script still fails on any warning.
