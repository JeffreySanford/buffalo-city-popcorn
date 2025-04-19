# Buffalo City Popcorn - Design Guidelines

> **Legendary Design:**  
> Every color, font, mascot, and animation should make users feel the “Be Legendary” spirit—North Dakota pride, 1940s retro fun, and premium delight.

## Brand Identity

Buffalo City Popcorn (BCP) is a gourmet popcorn and fudge company based in Jamestown, North Dakota - home to the world's largest buffalo statue. Our design reflects the local heritage while maintaining a modern, appetizing aesthetic that showcases our premium products.

## Design Philosophy

- **Rustic with Modern Elements**: Blend North Dakota's rustic charm with clean, modern design principles
- **Vibrant and Appetizing**: Use colors that enhance appetite appeal and create excitement
- **Playful but Premium**: Balance fun elements with a premium feel that justifies gourmet pricing
- **User-Centric**: Focus on an intuitive, enjoyable shopping experience

## Color Palette

- **Legendary Colors:** Use only the official brand color variables (`$burgundy`, `$amber`, `$cream`, `$deep-brown`, `$buffalo-blue`, `$dakota-rose`, etc.) in all SCSS and theming. Never use generic names in new code.
- **Primary Color**: Burgundy/Deep Red (#8B2131) - Represents our rich flavors and brand heritage
- **Secondary Color**: Golden/Amber (#F7941D) - Evokes popcorn and caramel, creates warmth
- **Accent Colors**:
  - Cream (#F5F1E6) - Represents popcorn, creates visual space
  - Deep Brown (#5D4037) - Represents chocolate, adds depth
  - Buffalo Blue (#4A7B9D) - Regional connection, creates contrast
  - Dakota Rose (#E32636) - Adds a touch of local flora

## Typography

- **Legendary Typography:** Use only the official typography variables and mixins. Headings must use the designated serif or slab-serif; body text must use the clean sans-serif stack.
- **Headings**: Georgia (serif) or frontier-style slab serif (Clarendon-style)
- **Body Text**: Arial/Helvetica (sans-serif) - Clean, modern readability
- **Accents**: 1940s-inspired scripts (e.g., Brush Script) for special callouts and promotions

## Brand & Mascot
- **Legendary Mascot:** “Poppy the Buffalo” is not just a mascot, but the living, animated spirit of the brand—always bold, playful, and regionally inspired.
- The brand identity blends rustic North Dakota charm with clean, modern design, aiming for a “Playful but Premium” and “Vibrant and Appetizing” feel.
- Mascot: “Poppy the Buffalo” is the brand ambassador, depicted in vintage-cartoon style with themed attire, and is central to gamification (see README.md and CODING_STANDARDS.md).
- Gamification: Points (“Poppy Points”), achievements, seasonal challenges, and leaderboards drive playful engagement.

## Mascot Character: "Poppy the Buffalo"

Our friendly cartoon mascot, Poppy the Buffalo, serves as:
- Brand ambassador throughout the site
- Guide for new users
- Gamification element
- Visual connection to Jamestown's buffalo heritage

**Design Elements**:
- Cute, friendly cartoon buffalo
- Wearing a popcorn vendor hat or apron
- Holding popcorn or popcorn container
- Expressive face for different site sections
- Simplified silhouette usable as icon

## Poppy as Interactive Chatbot
- Poppy is not just a mascot, but also the face and voice of the site’s interactive chatbot.
- The chatbot answers who, what, when, where, and how questions in a sassy, playful tone, matching Poppy’s personality and seasonal outfits.
- Audio interactivity is supported, allowing Poppy to speak responses and react with expressive animations.
- Poppy’s chatbot persona adapts to the season, event, or holiday, making help and support fun, approachable, and always on-brand.
- See [POPPY_MASCOT.md](POPPY_MASCOT.md) for full details on Poppy’s evolving role.

## Gamification Elements

Buffalo City Popcorn incorporates gamification to increase engagement:

- **Points System**: "Poppy Points" earned through purchases, reviews, and social sharing
- **Achievements**: Unlock badges like "Flavor Explorer" for trying different varieties
- **Rewards**: Redeem points for discounts, exclusive flavors, or free shipping
- **Leaderboard**: Monthly "Popcorn Champions" featured on site
- **Challenges**: Seasonal challenges like "Summer Flavor Hunt" with special rewards
- **Progress Indicators**: Show progress toward next reward level

## Layout Principles

- **Flexbox-First**: Using CSS Flexbox for responsive, aligned elements
- **Material Design Integration**: Following Material Design 3 principles
- **Card-Based Content**: Presenting products and content in clean card formats
- **Mobile-First**: Ensuring excellent mobile experience as primary consideration

## Interactive Elements

- **Micro-interactions**: Subtle animations for feedback on user actions
- **Gamification**: Points system, achievements, and rewards (integrated with MCP)
- **Discoverable Features**: Progressive disclosure of advanced features

## User Experience Goals

- **Fast & Responsive**: Quick load times and responsive layouts
- **Intuitive Navigation**: Clear pathways to products and information
- **Delightful Moments**: Create memorable interactions that enhance brand connection
- **Accessibility**: WCAG 2.1 AA compliance throughout

## Integration Points

- **MCP (Model Context Protocol)**: Integration for AI-powered recommendations
- **User Interaction Tracking**: Data collection for experience improvement
- **JWT RBAC Authentication**: Secure, role-based access control

## Component Guidelines

Each component should:
- Follow the Buffalo City Popcorn color palette
- Use the established typography hierarchy
- Incorporate Flexbox for layout
- Be fully responsive across device sizes
- Include appropriate accessibility attributes
- Use Material Design components where appropriate

## Seasonal & Event-Driven Theming
- **Legendary Theming:** Every seasonal or event-driven theme must feel seamless, fun, and true to the “Be Legendary” brand.
- Poppy’s outfit and personality change with the seasons, major holidays (Valentine’s Day, July 4th, etc.), and local events (Medora Museum Week, ND rodeos).
- The Material Design 3 theme (colors, shapes, animations) adapts to reflect the current season or event, always anchored in the brand palette.
- Subtle, accessible background animations (falling leaves, snow, fireworks, etc.) accompany Poppy’s outfit changes.
- All theming and mascot changes are coordinated for seamless, accessible transitions using MD3’s capabilities.
- See [POPPY_MASCOT.md](POPPY_MASCOT.md) for mascot details and [MATERIAL_DESIGN_3.md](MATERIAL_DESIGN_3.md) for theming implementation.

For full historical and brand context, see [HISTORY.md](HISTORY.md).