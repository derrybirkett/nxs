# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Architecture

This is an **Nx monorepo** with a Next.js application and end-to-end testing setup:

- **Monorepo Structure**: Uses Nx workspace for managing multiple applications and libraries
- **Main Application**: `apps/nexus` - Next.js 15 application with React 19 
- **Testing**: `apps/nexus-e2e` - Playwright end-to-end tests
- **Package Management**: npm workspaces with apps/* pattern
- **Build System**: Nx with TypeScript, SWC compilation

### Key Technologies
- **Frontend**: Next.js 15, React 19, TypeScript
- **Testing**: Jest (unit), Playwright (e2e), Testing Library
- **Linting**: ESLint with Nx plugin and Next.js rules
- **Build Tools**: SWC, Nx build system
- **Cloud**: Nx Cloud integration (ID: 68d4324195a4aa0044b12846)

## Common Development Commands

### Development Server
```bash
# Start the nexus app in development mode
npx nx dev nexus

# Alternative start command
npx nx start nexus
```

### Building
```bash
# Build the nexus application
npx nx build nexus

# Build all projects
npx nx run-many -t build
```

### Testing
```bash
# Run unit tests for nexus app
npx nx test nexus

# Run all unit tests
npx nx run-many -t test

# Run e2e tests
npx nx e2e nexus-e2e

# Run specific test file
npx nx test nexus --testFile=specs/index.spec.tsx
```

### Linting and Code Quality
```bash
# Lint the nexus app
npx nx lint nexus

# Lint all projects
npx nx run-many -t lint

# Check types
npx nx typecheck nexus
```

### Nx Workspace Management
```bash
# Show project details and available targets
npx nx show project nexus

# View dependency graph
npx nx graph

# List installed plugins
npx nx list

# Generate new Next.js app
npx nx g @nx/next:app <app-name>

# Generate new React library
npx nx g @nx/react:lib <lib-name>
```

## Project Structure Details

### Applications
- `apps/nexus/` - Main Next.js application with App Router
- `apps/nexus-e2e/` - Playwright e2e tests for nexus app

### Configuration Files
- `nx.json` - Nx workspace configuration with plugins for Next.js, Playwright, ESLint, Jest
- `package.json` - Root workspace configuration with workspaces pattern
- `tsconfig.base.json` - Base TypeScript configuration for the workspace
- `jest.config.ts` - Root Jest configuration that aggregates all project configs

### Target Dependencies
- Tests depend on builds: `test` target has `dependsOn: ["^build"]`
- Nx automatically manages project dependencies and caching

### Nx Plugins Active
- `@nx/js/typescript` - TypeScript support with typecheck, build targets
- `@nx/next/plugin` - Next.js integration with dev, build, serve-static targets  
- `@nx/playwright/plugin` - E2E testing with Playwright
- `@nx/eslint/plugin` - Linting integration
- `@nx/jest/plugin` - Unit testing with Jest

## Development Guidelines

### Testing Strategy
- **Unit Tests**: Use Jest with Testing Library for component and utility testing
- **E2E Tests**: Use Playwright for full application flow testing
- Playwright runs against dev server on port 3000
- E2E tests run in Chromium, Firefox, and WebKit browsers by default

### Code Generation
- Use Nx generators for consistent project structure
- Next.js apps generated with CSS styling and ESLint by default
- Follow Nx module boundary rules enforced by ESLint

### Build and Deployment
- Production builds exclude test files and development configs
- SWC used for fast compilation and bundling
- Nx Cloud integration for distributed caching and CI optimization

## Nx-Specific Patterns

### Project Naming
- Use scoped package names: `@nxs/nexus`, `@nxs/lib-name`
- Follow kebab-case for project names

### Module Boundaries
- ESLint enforces module boundary rules via `@nx/enforce-module-boundaries`
- Projects can depend on any libraries with matching tags
- Buildable library dependencies are enforced

### Task Pipeline
- Nx automatically infers tasks from project configurations
- Build dependencies are resolved and cached automatically
- Use `nx show project <name>` to see available targets for any project