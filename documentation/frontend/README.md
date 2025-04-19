# Documentation Map

- [Project Overview](#project-overview) (see below)
- [Design Guidelines](DESIGN.md): Brand, color palette, mascot, typography, gamification, and layout principles
- [Coding Standards](CODING_STANDARDS.md): Angular, TypeScript, RxJS, testing, version control, and workflow
- [Material Design 3](MATERIAL_DESIGN_3.md): Theming, color tokens, typography, and component theming
- [Sass Guidelines](SASS_GUIDELINES.md): SCSS structure, module system, and theming best practices
- [History & Brand Origins](HISTORY.md): Jamestown, ND, and Buffalo City Popcorn’s heritage

---

# Recent Progress

- **2024-06-09 (GitHub Copilot):**  
  - Footer refactored to use Angular Material 19+ MD3 components and idioms.
  - Removed direct anchor styling in SCSS; navigation and social links now use `<button mat-button>` and `<button mat-icon-button>`.
  - All SCSS imports use the modern `@use`/`@forward` pattern, and only namespaced brand variables are allowed.
  - Linting and build errors addressed; codebase now enforces no global selectors and MD3 compliance.
  - Documentation and coding standards updated to reflect these changes.

---

# Project Overview
Buffalo City Popcorn is a gourmet popcorn and fudge brand based in Jamestown, North Dakota—home to the “World’s Largest Buffalo” statue—and delivers a nostalgic, 1940s-inspired e‑commerce experience infused with the region’s frontier heritage. The flagship web application, codenamed Executive Popcorn, combines a playful, premium aesthetic with modern, mobile‑first usability.

# Brand & Design
- **Identity & Philosophy:** Blends rustic North Dakota charm with clean, modern design; aims to be “Playful but Premium” and “Vibrant and Appetizing”.
- **Color Palette:**
  - Primary: Burgundy/Deep Red (#8B2131)
  - Secondary: Golden/Amber (#F7941D)
  - Accents: Cream, Deep Brown, Buffalo Blue, Dakota Rose
- **Typography:**
  - Headlines: Georgia (serif) or frontier‑style slab serif (Clarendon‑style)
  - Accents: 1940s‑inspired scripts (e.g., Brush Script)
  - Body: Clean sans‑serif (Arial/Helvetica)
- **Mascot:** “Poppy the Buffalo” serves as brand ambassador and gamification guide, depicted in vintage‑cartoon style with themed attire.
- **Gamification:** Points (“Poppy Points”), achievements, seasonal challenges, and leaderboards drive engagement through playful rewards and progress indicators.

# Architecture & Tech Stack
- **Frontend:**
  - Angular 19 application (project name “executive‑popcorn”)
  - Angular Material 19 implementing Material Design 3 (MD3) principles
- **Backend:** NestJS server with WebSocket integration for real‑time inventory and order updates
- **Languages & Tools:**
  - TypeScript (strict, ES2022 target)
  - RxJS for observables and real‑time data streams
  - Puppeteer for end‑to‑end testing
  - Node 18+ runtime
- **Build & Dev:**
  - Angular CLI v19.2.8, Prettier for formatting
  - Proxy configuration via proxy.conf.json for /api endpoints

# Styling & Theming
- **SCSS Structure:** Use the modern Sass module system (`@use`/`@forward`), namespaced variables, and Sass maps.
- **Brand Colors:** Only use the official color variables (`$burgundy`, `$amber`, `$cream`, etc.) via the `colors` namespace.  
  **Do not use** `$primary-color` or `$secondary-color`.
- **Material Theming:** Theme maps must use `primary`, `accent`, and `warn` keys.  
  When overriding a palette color, always merge into a full palette (see SASS_GUIDELINES.md).
- **No Global Selectors:** All styles must be component-scoped or use Angular Material theming mixins.
- **Mascot & Theming:** “Poppy the Buffalo” is central to the UI, gamification, and seasonal/event-driven theming. All mascot and theming changes are coordinated for seamless, accessible transitions (see [POPPY_MASCOT.md](POPPY_MASCOT.md)).

See [SASS_GUIDELINES.md](SASS_GUIDELINES.md) for details.

# Development Practices
- **Angular Standards:**
  - No standalone components—use NgModule for all features
  - Business logic in TypeScript; templates focused on presentation
- **Services & DI:** Shared logic encapsulated in Angular services; heavy use of dependency injection for testability
- **Real‑Time Data:** Prefers RxJS streams and WebSockets over REST for dynamic updates
- **Testing:**
  - Unit tests with Karma & Jasmine, targeting ≥ 80% coverage
  - E2E capabilities via Puppeteer
- **Version Control & Workflow:**
  - Conventional Commits for messages
  - Feature branches and pull‑request reviews
  - CI pipelines enforce linting, formatting, and test execution

# Project Structure
```
/src
  /app            – Angular modules, components, services
  /assets         – Images, fonts, icons
  /styles
    _colors.scss
    _typography.scss
    _theme.scss
    _mixins.scss
    styles.scss   – Main entry point
proxy.conf.json   – API proxy for development
angular.json      – Build configurations (output, polyfills, assets)
tsconfig*.json    – TypeScript compiler options
package.json      – Dependencies & scripts (start, build, test)
```

This cohesive overview reflects the current state of Buffalo City Popcorn’s web application—marrying local heritage and retro charm with robust, modern engineering and design standards.

# Executive Popcorn

Welcome to the **Executive Popcorn** project! This application is a modern Angular-based frontend paired with a NestJS backend, designed to deliver a seamless and nostalgic popcorn shopping experience.

---

## Features

- **Frontend:** Angular 19 with Material Design 3 for a mobile-first, elegant UI.
- **Backend:** NestJS server with WebSocket integration for real-time updates.
- **Theme:** Vintage 1940s-inspired design with a classy aesthetic.
- **Key Pages:** Landing, Order, Cart, and Settings.
- **Real-Time Updates:** WebSocket-powered inventory and order tracking.

---

## Development Setup

### Prerequisites
- Node.js (v18 or higher)
- Angular CLI (v19.2.8)
- NestJS CLI (v9 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/executive-popcorn.git
   cd executive-popcorn
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser at `http://localhost:4200`.

---

## Proxy Configuration

To enable seamless communication with the backend, a proxy configuration is set up in `proxy.conf.json`. All API calls to `/api` are routed to the NestJS server. This eliminates CORS issues during development.

---

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Linting with Nx & Angular ESLint

We use Nx’s built‑in `lint` target (powered by ESLint) alongside the official Angular ESLint plugins.  
Nx does **not** replace `@angular-eslint`; it orchestrates it:

- Run `npx nx lint frontend` (or `npm run lint:frontend`) to lint the **frontend** project.
- To lint **all** projects via Nx, run:
  ```bash
  npx nx run-many --target=lint --all
  ```

### Available ESLint Packages and Integration

Our setup uses both:
- `@nx/eslint-plugin` - Provides NX-specific rules and configs
- `@angular-eslint/*` packages - Provide Angular-specific rules
- `eslint-plugin-rxjs` - RxJS-specific linting rules (requires special installation due to ESLint v9 compatibility)

If you see ESLint errors related to missing packages, use one of these solutions:

```bash
# Solution 1: Install eslint-plugin-rxjs with legacy peer deps flag (preferred)
npm install eslint-plugin-rxjs@5.0.3 --save-dev --legacy-peer-deps

# Solution 2: Install a specific version with force flag
npm install eslint-plugin-rxjs@5.0.3 --save-dev --force
```

> **Note**: The project uses ESLint v9.x, but eslint-plugin-rxjs requires ESLint v8.x, creating a dependency conflict that requires the flags above.

### NX Plugin Commands

To explore available NX plugins and generators for Angular and NestJS:

```bash
# List all installed plugins
npx nx list

# View Angular-specific generators (components, services, etc.)
npx nx list @nx/angular

# View Angular Material schematics
npx nx g @angular/material:help

# View NestJS-specific generators (controllers, services, etc.)
npx nx list @nx/nest
```

These commands show available generators for creating components, services, modules, and other artifacts.

## ESLint Configuration Files

The project uses ESM modules for ESLint configuration (`.mjs` files). While TypeScript (`.ts`) files can be used for ESLint configuration, it requires additional setup:

1. For simple configuration needs, stick with `.mjs` files
2. For TypeScript-based ESLint configs:
   ```bash
   # Install required dependencies
   npm install --save-dev @typescript-eslint/eslint-plugin ts-node
   ```
   
   Create a `eslint.config.ts` file and add this to your `package.json`:
   ```json
   "eslintConfig": {
     "parser": "@typescript-eslint/parser"
   }
   ```

For most Angular/NX projects, the standard `.mjs` configuration files are recommended as they're directly supported by ESLint v9+.

## Running Style & Build Checks

In PowerShell, start with a clear screen, then run linting and build:

```powershell
cls; npx stylelint "apps/frontend/src/**/*.scss"; npx nx run frontend:build:production
```

Or via npm script:

```powershell
npm run check:all
```

## NX Plugins & Generators

To discover all installed NX plugins and available schematics (Angular, NestJS, etc.):

```bash
# list every plugin
npx nx list

# view Angular‐specific generators
npx nx list @nx/angular

# view NestJS‐specific generators
npx nx list @nx/nest
```

Use these to find commands for adding Angular Material, generating modules, components, services, and more.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Coding Standards

Refer to the `CODING_STANDARDS.md` file for detailed guidelines on maintaining code quality and consistency.  
**All new code must follow the standards and SASS guidelines for color, typography, and modular SCSS.**
