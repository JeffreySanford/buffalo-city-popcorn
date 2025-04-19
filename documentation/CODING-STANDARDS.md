# Coding Standards

## Overview

This project follows coding standards and best practices recommended by Nx to ensure code quality, maintainability, and consistency across the codebase.

## Linting

- Use the provided Nx linting configuration.
- Run `nx lint` to check for code style and potential errors.
- Fix lint issues before committing code.

## Documentation

- Document all public APIs, modules, and complex logic using JSDoc or TypeScript doc comments.
- Keep documentation up-to-date with code changes.
- Use clear, concise language and provide examples where helpful.

## Testing

- Write unit tests for all business logic and critical components.
- Use Jest (configured by Nx) for running tests.
- Run `nx test` to execute tests and ensure all pass before merging changes.
- Aim for high test coverage and meaningful assertions.

## General Best Practices

- Use consistent code formatting (enforced by Prettier and EditorConfig).
- Prefer explicit over implicit code.
- Avoid code duplication; use shared utilities and modules.
- Commit small, focused changes with clear commit messages.

## References

- [Nx Documentation](https://nx.dev)
- [Jest Documentation](https://jestjs.io/)
- [ESLint Documentation](https://eslint.org/)
