# Contributing Guidelines

Thank you for your interest in contributing to Buffalo City Popcorn! This document provides guidelines and instructions for contributing.

## Development Process

1. **Fork and clone** the repository
2. **Install dependencies**: `npm install`
3. **Create a branch**: `git checkout -b feature/your-feature-name`
4. **Make your changes**
5. **Test your changes**: `npm run check:all`
6. **Submit a pull request**

## Code Style Guidelines

### TypeScript

- Follow the ESLint rules configured in the project
- Use interfaces over types when possible
- Use proper typing for all functions and variables
- Use OnPush change detection for components

### RxJS

- Always unsubscribe from observables (via takeUntil, async pipe, or similar)
- Avoid nested subscribes - use pipe operators instead
- Use appropriate operators for transforming data
- Prefer `lastValueFrom` or `firstValueFrom` over `.toPromise()`

### Angular

- Set `standalone: false` for all components
- Use OnPush change detection
- Follow Angular Material Design 3 guidelines
- Organize imports: Angular core first, then third-party, then local

### SCSS

- Follow the StyleLint rules configured in the project
- Use the theme variables/tokens instead of hardcoding colors
- Use `@use` instead of `@import`
- Use `color.adjust()` instead of `lighten()`, `darken()`, etc.

## Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

## Related Documentation

To ensure your contributions meet our standards, please review:

- [Linting Guide](./LINTING.md)
- [Theming Guide](./THEMING.md)
- [Architecture](./ARCHITECTURE.md)
- [Sass Guidelines](../documentation/frontend/SASS_GUIDELINES.md)

