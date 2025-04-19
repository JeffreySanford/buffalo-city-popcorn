# MCP Server

## Overview

The MCP Server is a backend application within this Nx workspace. It is responsible for serving the core API and business logic for the Buffalo City Popcorn platform.

## Features

- RESTful API endpoints for client applications.
- Modular architecture using Nx for scalability and maintainability.
- Automated testing and linting integrated via Nx.

## Development

- Source code is located in `apps/backend`.
- Use Nx commands for development tasks:
  - `nx serve backend` to start the server.
  - `nx test backend` to run backend tests.
  - `nx lint backend` to check code quality.

## Standards

- Follows Nx best practices for code organization, testing, and documentation.
- All changes should pass linting and tests before merging.

## References

- See [CODING-STANDARDS.md](./CODING-STANDARDS.md) for project-wide standards.
- See [BACKEND-API.md](./BACKEND-API.md) for API documentation.
