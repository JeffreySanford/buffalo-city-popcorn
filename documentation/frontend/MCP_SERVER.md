# MCP Server Overview (NX + NestJS + WebSockets)

## Project Purpose
- Provide a scalable, modular backend for Buffalo City Popcorn using NX and NestJS.
- Prioritize real-time data streams using WebSockets (Socket.IO or better) via NestJS Gateways.
- Prepare for Model Context Protocol (MCP) support for AI-driven features and context sharing.
- Minimize reliance on traditional REST endpoints.

---

## Technology Stack
- **NX Workspace**: Monorepo for modularity and scalability.
- **NestJS**: Modern, modular Node.js framework.
- **WebSockets**: Real-time communication using Socket.IO and NestJS Gateways.
- **MCP (Model Context Protocol)**: For AI/ML context and model-driven features.

---

## Setup & Development Steps

### 1. Create NX Workspace
```bash
npm install -g nx
npx create-nx-workspace@latest executive-popcorn-backend
# Choose "nest" for the backend preset
```

### 2. Generate NestJS Application
```bash
nx generate @nx/nest:application mcp-server
```

### 3. Add WebSocket Support
```bash
npm install @nestjs/websockets @nestjs/platform-socket.io socket.io
nx generate @nx/nest:gateway mcp --project=mcp-server
```

### 4. MCP Module/Service
- Define interfaces for context, model requests, and responses.
- Scaffold WebSocket events for context updates, model queries, etc.

### 5. (Optional) Add authentication, persistence, and other modules as needed.

---

## Example: NestJS Gateway Skeleton
```typescript
import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection } from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class McpGateway implements OnGatewayConnection {
  handleConnection(client: any) {
    // Handle new client connection
  }

  @SubscribeMessage('context:update')
  handleContextUpdate(@MessageBody() data: any) {
    // Handle context update from client
  }

  @SubscribeMessage('model:query')
  handleModelQuery(@MessageBody() data: any) {
    // Handle model query and emit response
  }
}
```

---

## Documentation Outline
- **Project Overview**: Purpose, architecture, and goals.
- **Tech Stack**: NX, NestJS, WebSockets, MCP.
- **Setup & Development**: Prerequisites, install, run, structure.
- **WebSocket Gateway**: Example events and usage.
- **MCP Concepts**: Context, model requests, extensibility.
- **Best Practices**: Observables, modularity, minimal REST.
- **Next Steps**: Frontend integration, auth, persistence, MCP expansion.

---

## Questions to Consider
- Do you want authentication (JWT, etc.) from the start?
- Will you need persistence (database) or is this in-memory for now?
- Any specific MCP event types or data structures to define up front?
- Should the server be ready for horizontal scaling?

---

## Next Steps
- Scaffold the NX/NestJS project as above.
- Implement the gateway and MCP module.
- Document all events and data contracts.
- Integrate with the Angular frontend for real-time features.
