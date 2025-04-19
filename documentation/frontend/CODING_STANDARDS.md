# Coding Standards for Executive Popcorn

> **Legendary Principle:**  
> Every line of code, every style, and every interaction should echo Buffalo City Popcorn’s “Be Legendary” spirit—bold, playful, premium, and rooted in North Dakota’s heritage.

---

## Recent Progress

- **2024-06-09 (GitHub Copilot):**
  - Footer navigation and social links now use Angular Material MD3 buttons and icons, not `<a>` tags.
  - No global selectors or direct element styling in SCSS; all styles are component-scoped or use Material mixins.
  - All SCSS uses `@use`/`@forward` and namespaced variables only.
  - Linting and build errors resolved for MD3/Angular 19+.

---

## General Guidelines
- **No Standalone Components:** Use the traditional `NgModule` structure for all Angular components.
- **SCSS Styling:** All styles must be written in SCSS and attached to their respective components for modularity and maintainability.
- **Material Design 3:** Follow Material Design 3 guidelines for UI components to ensure a modern, cohesive look.
- **Flexbox for Layouts:** Use CSS Flexbox for aligning and laying out elements. Flexbox is powerful, easy to use, and works seamlessly with Material Design.

---

## Angular Development
1. **Modules and Components:**
   - Use the `NgModule` structure for organizing components.
   - Avoid standalone components.

2. **Services and Dependency Injection:**
   - Use Angular services for shared logic.
   - Leverage dependency injection for better testability.

3. **Observables and WebSockets:**
   - Prefer **RxJS Observable streams** for data communication.
   - Use WebSocket-based real-time updates instead of RESTful APIs for dynamic data.

4. **Routing:**
   - Define routes in a centralized `app-routing.module.ts` file.
   - Use lazy loading for feature modules to optimize performance.

5. **Component Design:**
   - Move all business logic out of the HTML and into the component TypeScript file.
   - Keep HTML templates clean and focused on presentation.
   - Use property bindings in templates to dynamically display data from the component.

---

## CSS and Styling
- **Flexbox First:** Use Flexbox for layouts and alignment. It simplifies CSS and ensures responsive designs.
- **SCSS Variables:** Use only the official, namespaced SCSS variables (e.g., `colors.$burgundy`).  
  **Do not use** `$primary-color` or `$secondary-color`.
- **Material Design 3:** Use Angular Material theming mixins and structure for all Material components and custom theming.  
  Theme maps must use `primary`, `accent`, and `warn` keys.
- **No Global Selectors:** Do not use global selectors (e.g., `a`, `p`) in component SCSS. Scope all styles or use Material mixins.
- **No Direct Anchor Styling:** Navigation and social links must use Angular Material buttons (`mat-button`, `mat-icon-button`) for MD3 compliance.  
  Do not use direct `<a>` tags for navigation or social actions.
- **Typography:** Use only the official typography variables and mixins. Headings should use the designated serif or slab-serif; body text must use the clean sans-serif stack.
- **Component Theming:** Always use Material mixins for component theming and avoid hardcoded color values for Material components.

---

## Backend Integration
- **Proxy Configuration:**
  - Use `proxy.conf.json` to route API calls to the backend server.
  - Ensure all API endpoints are prefixed with `/api`.

---

## Brand & Design Consistency
- **Legendary in Every Detail:** All code, UI, and mascot interactions must reinforce the “Be Legendary” motto—bold, fun, and premium.
- Always use the official color palette and typography (see [DESIGN.md](DESIGN.md) and [SASS_GUIDELINES.md](SASS_GUIDELINES.md)).
- Mascot: “Poppy the Buffalo” is the brand ambassador and gamification guide (see DESIGN.md).
- Gamification: Use “Poppy Points”, achievements, and leaderboards to drive engagement (see DESIGN.md).
- Layout: Flexbox-first, card-based, mobile-first (see DESIGN.md).
- Theming: Use Material Design 3 and modular SCSS (see [MATERIAL_DESIGN_3.md](MATERIAL_DESIGN_3.md)).

---

## Seasonal & Event-Driven Theming
- Poppy’s outfit, personality, and the site’s Material Design 3 theme change with the seasons, holidays, and local events.
- Animations and theming are coordinated for seamless, accessible transitions using MD3.
- See [POPPY_MASCOT.md](POPPY_MASCOT.md) and [DESIGN.md](DESIGN.md) for details.

---

## Poppy as Chatbot & Audio Guide
- Poppy serves as the animated, sassy chatbot for the site, answering user questions with personality and seasonal flair.
- The chatbot supports both text and audio responses, using expressive animations and voice to enhance engagement.
- Poppy’s chatbot persona and responses adapt to the current season, holiday, or event, always reflecting the brand’s playful, premium tone.
- See [POPPY_MASCOT.md](POPPY_MASCOT.md) and [DESIGN.md](DESIGN.md) for implementation and personality guidelines.

---

## Code Formatting
- Use **Prettier** for consistent code formatting.
- Follow the **Angular Style Guide** for naming conventions and best practices.

---

## Testing
- Write unit tests for all components, services, and modules.
- Use **Karma** and **Jasmine** for frontend testing.
- Ensure 80% or higher code coverage.

---

## Version Control
- Commit messages must follow the **Conventional Commits** format.
- Use feature branches for new development.
- Merge changes via pull requests after code review.

---

## For Junior Developers
- Don’t hesitate to ask questions or seek help from senior developers.
- Take your time to understand the codebase and follow the guidelines.
- Experiment with Flexbox and Material Design to learn how they simplify UI development.
- Remember, every contribution matters!