# Sass Guidelines for Executive Popcorn

> **Legendary Sass:**  
> Our Sass should be as bold and memorable as our popcorn—modular, brand-driven, and always “Be Legendary.”

This document outlines the modern Sass practices used in our Angular 19 project with Material Design 3. It serves as a reference for all developers to maintain consistency in our styling approach.

## Modern Sass Module System

Angular 19 uses Sass modules with `@use` and `@forward` instead of the deprecated `@import` directive. Here's how we structure our Sass files:

### Key Differences from Legacy Sass

- **`@use` instead of `@import`**: Import Sass files with namespacing to avoid conflicts
- **`@forward`**: Re-export Sass from another module to expose its features
- **Namespaced variables:** Access variables with full, descriptive namespace prefixes (e.g., `colors.$burgundy`, `typography.$font-family-heading`). **Never** use shortened forms like `c.$burgundy` or `t.$font-family-heading` in new code.
- **No global functions:** Use namespaced functions (e.g., `color.adjust()` instead of `lighten()`)
- Always use `@use` with namespaces for all imports (e.g., `@use 'styles/colors' as colors;`).
- Never use legacy `$primary-color`, `$secondary-color`, etc. Use `colors.$burgundy`, `colors.$amber`, etc.
- Do not use global selectors (e.g., `a { ... }`, `p { ... }`) in component SCSS. Scope all styles to the component or use Angular Material mixins.

### Example Usage

```scss
// Old way (deprecated)
@import 'colors';
body { background-color: $primary-color; }

// New way (modern)
@use 'colors';
body { background-color: colors.$burgundy; }
```

## Brand Colors

- **Always use the official brand color variables** from `src/styles/_colors.scss`:
  - `$burgundy`, `$amber`, `$cream`, `$deep-brown`, `$buffalo-blue`, `$dakota-rose`, etc.
- **Do NOT use** `$primary-color` or `$secondary-color` (these do not exist).
- Reference colors in SCSS as `colors.$burgundy`, `colors.$amber`, etc. after importing with `@use`.

## Importing Colors

```scss
@use '../styles/colors' as colors; // adjust relative path as needed
```

## Theming

- When creating a theme palette for Angular Material, always use the keys `primary`, `accent`, and `warn`.
- If you need to override a palette color (e.g., for a seasonal theme), use `map.merge($palette, (500: $new-color))` and assign it to a new variable.  
  **Do not create a palette with only a single key.**  
  Example:
  ```scss
  $spring-primary: map.merge($primary-palette, (500: colors.$prairie-rose));
  $spring-theme: (
    color: (
      primary: $spring-primary,
      accent: $spring-accent,
      warn: $warn-palette,
      // ...
    )
  );
  ```

## Color Functions

We use the `sass:color` module instead of deprecated global color functions:

| Deprecated Function | Modern Replacement |
|---------------------|-------------------|
| `lighten($color, 10%)` | `color.adjust($color, $lightness: 10%)` |
| `darken($color, 10%)` | `color.adjust($color, $lightness: -10%)` |
| `saturate($color, 10%)` | `color.adjust($color, $saturation: 10%)` |
| `desaturate($color, 10%)` | `color.adjust($color, $saturation: -10%)` |

For more complex color transformations, consider using `color.scale()`.

## Material Design 3 Integration in Angular 19

### Key Changes in Angular Material 19

Angular Material 19 has significantly changed its theming API from previous versions, moving away from function-based configuration to a more map-based approach:

1. **No more `define-palette()` or `define-light-theme()`**: Direct map structures are now used.
2. **No more `all-component-themes`**: Use modular component mixins (e.g., `mat.button-theme($theme)`).
3. **Theme maps** must use `primary`, `accent`, and `warn` keys.
4. **Typography** is defined using map structures.
5. **MD3 palettes**: You may use Material's M3 palettes or your own, but always as a map.

### Theme Configuration

In Angular 19+, themes are defined using Sass maps:

```scss
// Create color palettes (from your colors partial)
$primary-palette: colors.$mat-burgundy;
$accent-palette: colors.$mat-amber;
$warn-palette: mat.$red-palette;

// Define theme
$buffalo-light-theme: (
  color: (
    primary: $primary-palette,
    accent: $accent-palette,
    warn: $warn-palette,
    is-dark: false,
    foreground: mat.$light-theme-foreground-palette,
    background: mat.$light-theme-background-palette
  ),
  typography: typography.$buffalo-typography,
  density: 0
);
```

### Typography System in Angular 19

Angular Material 19 typography is defined using a map structure:

```scss
// Define typography config
$buffalo-typography: (
  font-family: typography.$font-family-body,
  headline-1: (
    font-size: typography.$font-size-4xl,
    line-height: typography.$line-height-tight,
    font-weight: typography.$font-weight-bold,
    font-family: typography.$font-family-heading,
  ),
  // other levels...
);
```

### Component Theming

Apply themes to components individually for better control and performance:

```scss
// Apply theming to specific components
@mixin apply-material-theme($theme) {
  @include mat.core-theme($theme);
  @include mat.button-theme($theme);
  @include mat.card-theme($theme);
  @include mat.toolbar-theme($theme);
  @include mat.icon-theme($theme);
  @include mat.input-theme($theme);
  @include mat.form-field-theme($theme);
  // Add more as needed
}
```

## Usage Example

In your `styles.scss`:

```scss
@use '@angular/material' as mat;
@use 'styles/theme' as theme;

@include mat.core();
@include theme.apply-material-theme(theme.$buffalo-light-theme);
```

## Component SCSS

- Use only namespaced variables (e.g., `colors.$burgundy`).
- Do not define or use `$primary-color` or `$secondary-color` in component styles.
- Do not use global selectors; scope all styles to the component.

## Troubleshooting

- If you see errors like `Undefined variable: $primary-color` or `$color: null is not a color`, check that you are using the correct variable names and that your palette maps are complete.

## Component Theming

- Use Angular Material theming mixins for all Material components.
- Reference brand colors and variables via their namespace (e.g., `colors.$deep-brown`).
- For custom elements, use the theme map or direct color variables as shown:

```scss
@use '@angular/material' as mat;
@use 'styles/colors' as colors;

.my-component {
  background-color: colors.$burgundy;
  color: colors.$white;
  // For Material components:
  @include mat.button-theme($theme);
}
```

## Project Structure

Our styles are organized as follows:

- `styles.scss` - Main entry point that loads all modules
- `_colors.scss` - Color variables and palettes
- `_typography.scss` - Font definitions and Material typography config
- `_theme.scss` - Material theme configuration
- `_variables.scss` - Spacing, breakpoints, and other global variables
- `_mixins.scss` - Reusable style patterns
- `_animations.scss` - Keyframes and animation utilities
- `_gamification.scss` - Styles for gamification features

## Best Practices

1. **Always use `@use` at the top of the file** before any other rules.
2. **Namespace imports** to avoid variable name collisions.
3. **Use modern color functions** from `sass:color` module.
4. **Target specific components with theming** rather than using `all-component-themes`.
5. **Use direct Sass maps for configuration** in Angular Material 19.
6. **Never import Angular TypeScript packages in SCSS files**.
7. **Keep component themes modular** to improve performance.
8. **Remove all global selectors from component SCSS.**
9. **Only use namespaced variables and mixins.**
10. **Keep all theming modular and component-scoped.**

## Angular Material 19 Theming Cheatsheet

### Creating a Theme

```scss
// Define theme using Sass maps
$my-theme: (
  color: (
    primary: $primary-palette,
    accent: $accent-palette,
    warn: $warn-palette,
    is-dark: false, // true for dark themes
    foreground: mat.$light-theme-foreground-palette,
    background: mat.$light-theme-background-palette
  ),
  typography: $my-typography-config,
  density: 0 // -3 to 3, with 0 being default
);
```

### Accessing Theme Colors in Custom Components

```scss
@mixin my-component-theme($theme) {
  $color-config: map.get($theme, 'color');
  $primary-palette: map.get($color-config, 'primary');
  $accent-palette: map.get($color-config, 'accent');
  
  .my-element {
    // Use direct color variables for common cases
    background-color: colors.$burgundy;
    
    // Or use the theme palette for complex cases
    border-color: map.get(map.get($color-config, 'foreground'), divider);
  }
}
```

### Applied Theme Example

```scss
// In styles.scss
@use 'theme' as theme;

// Apply the theme to all required components
@include theme.apply-material-theme(theme.$buffalo-light-theme);
```

## Seasonal & Event-Driven Theming
- Use modular SCSS and MD3 theming to support seasonal and event-driven changes to Poppy’s outfit and the site’s color/animation scheme.
- Coordinate mascot and theme changes for seamless, accessible transitions.
- See [POPPY_MASCOT.md](POPPY_MASCOT.md) and [MATERIAL_DESIGN_3.md](MATERIAL_DESIGN_3.md) for implementation details.

## Brand Theming Reference
- Use the official color palette and typography as defined in [DESIGN.md](DESIGN.md).
- Central theme configuration: _theme.scss, _colors.scss, _typography.scss (always use full namespaces, e.g., `colors`, `typography`)
- Gamification styles: _gamification.scss (see DESIGN.md for feature intent)
- Mascot: “Poppy the Buffalo” is a key visual element (see DESIGN.md)
- **Legendary Reminder:** Every style should reinforce the “Be Legendary” brand—bold, fun, and unmistakably Buffalo City Popcorn.

## Material Design 3 Resources

- [Angular Material Documentation](https://material.angular.io/)
- [Material Design 3 Guidelines](https://m3.material.io/)
- [Sass Module System Documentation](https://sass-lang.com/documentation/at-rules/use)
- [Sass Color Functions](https://sass-lang.com/documentation/modules/color)

By following these guidelines, we ensure our styling is maintainable, efficient, and aligned with modern best practices for Angular 19 and Material Design 3.