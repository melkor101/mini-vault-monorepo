# Mini Vault

A collection management app for tabletop miniature painters.

## What is Mini Vault?

Mini Vault helps tabletop hobbyists track their miniature painting projects from purchase to completion. You can organise miniatures into colour-coded storage boxes, move them through a painting pipeline, and get analytics on your progress — all stored locally on your device.

## Apps

| App          | Status  | Description                            |
|--------------|---------|----------------------------------------|
| apps/mobile  | Active  | Expo Router mobile app (iOS & Android) |
| apps/web     | Planned | Next.js web companion app              |
| apps/api     | Planned | Backend API                            |
| apps/docs    | Planned | Documentation site                     |

### Mobile (apps/mobile)

The primary app. A local-first mobile experience for managing your miniature collection.

**Key features:**
- Painting pipeline: Backlog → Unpainted → Primed → In Progress → Completed
- Storage box organisation with colour coding and location tracking
- Analytics dashboard: completion %, pipeline visualisation, weekly stats
- Rewards and gamification: XP, levels, achievements

**Tech:** Expo (Expo Router), WatermelonDB (SQLite), React Hook Form, Zod, TypeScript

### Web (apps/web) — Planned

Intended as a web companion to the mobile app. Currently a Turborepo starter placeholder with no project-specific implementation.

### API (apps/api) — Planned

Intended to support sync or web features. Currently an empty placeholder.

## Shared Packages

| Package                   | Description                                                        |
|---------------------------|--------------------------------------------------------------------|
| `@repo/ui`                | React component library (Button, Card, Code) — used by web & docs |
| `@repo/eslint-config`     | ESLint configs: `./base`, `./next-js`, `./react-internal`          |
| `@repo/typescript-config` | TypeScript configs: `base.json`, `nextjs.json`, `react-library.json` |

## Getting Started

```bash
yarn install                          # Install all dependencies from repo root
yarn dev                              # Start all apps in dev mode
yarn workspace mini-vault start       # Start mobile Expo dev server
yarn workspace mini-vault ios         # Run on iOS simulator
yarn workspace mini-vault android     # Run on Android emulator
```

## Monorepo Commands

```bash
yarn build        # Build all apps and packages
yarn lint         # Lint all packages
yarn check-types  # TypeScript type-checking across all packages
yarn format       # Format with Prettier
```

To scope a command to a single workspace:

```bash
yarn workspace @repo/ui lint
yarn workspace web check-types
```
