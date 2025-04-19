# Backend API

## Overview

This document describes the API endpoints provided by the MCP Server backend. All endpoints follow RESTful conventions and are designed for easy integration with client applications.

## Base URL

```
/api
```

## Example Endpoints

> _Note: Replace these with actual endpoints as implemented._

### `GET /api/health`

- **Description:** Health check endpoint.
- **Response:** `{ "status": "ok" }`

### `GET /api/items`

- **Description:** Retrieve a list of items.
- **Response:**  
  ```json
  [
    { "id": 1, "name": "Sample Item" }
  ]
  ```

### `POST /api/items`

- **Description:** Create a new item.
- **Request Body:**  
  ```json
  { "name": "New Item" }
  ```
- **Response:**  
  ```json
  { "id": 2, "name": "New Item" }
  ```

## Standards

- All endpoints are tested using Jest and follow Nx best practices.
- API documentation should be updated with any changes to endpoints or request/response formats.

## References

- See [MCP-SERVER.md](./MCP-SERVER.md) for server details.
- See [CODING-STANDARDS.md](./CODING-STANDARDS.md) for coding and testing standards.
