# Material Design 3 with Angular Material 19

> **Legendary MD3:**  
> Our Material Design 3 implementation should always feel bold, fun, and unmistakably Buffalo City Popcorn—every color, shape, and animation should “Be Legendary.”

---

## Recent Progress

- **2024-06-09 (GitHub Copilot):**
  - Footer navigation and social links now use Angular Material MD3 buttons and icons.
  - All navigation and action links across the app are migrated to Material button components for consistency.
  - SCSS modularity and namespacing enforced; no global selectors or direct element styling.
  - All theming uses only namespaced color variables and Material theme mixins.
  - Documentation and code samples updated for MD3 compliance.

---

## Introduction

Angular Material 19 introduces a significant shift to Material Design 3 (also known as "Material You"), which is Google's latest design system. This new version brings more customization options, dynamic color schemes, and an updated visual language.

## Theme Structure

Our application uses a customized Material Design 3 theme that aligns with Buffalo City Popcorn's brand identity. The theme is structured as follows:

- Use only the official brand color variables (`$burgundy`, `$amber`, etc.) via the `colors` namespace.
- Theme maps must use `primary`, `accent`, and `warn` keys (not `secondary`).
- When overriding a palette color for a theme, always merge into a full palette, not just a single key (see SASS_GUIDELINES.md).

### Theme Files:

- `src/styles/_theme.scss`: Main theme configuration (exports `$buffalo-light-theme` and `apply-material-theme` mixin)
- `src/styles/_colors.scss`: Color definitions
- `src/styles/_typography.scss`: Typography settings
- `src/styles/_md3_palette.scss`: Material Design 3 color palettes

### Theme Variations:

We have implemented several theme variations:
- **Light Theme**: Default theme with our brand colors
- **Dark Theme**: Night mode (available but not yet activated)
- **Vibrant Theme**: For special promotions
- **Patriotic Theme**: For special events

## Key Changes in Material Design 3

1. **Color System**: 
   - More dynamic color relationships
   - Role-based color tokens (primary, on-primary, primary-container, etc.)
   - Enhanced color contrast and accessibility

2. **Shape System**:
   - Consistent shape scale across components
   - Customizable corner radii

3. **Typography**:
   - Updated type scale
   - Better support for custom fonts

4. **Component Changes**:
   - Updated visual designs
   - New interaction patterns
   - Enhanced accessibility

## Brand & Theming Alignment
- The Material Design 3 theme uses the official Buffalo City Popcorn color palette and typography (see [DESIGN.md](DESIGN.md)).
- Mascot and gamification visuals should follow brand guidelines (see DESIGN.md).
- For SCSS structure and theming, see [SASS_GUIDELINES.md](SASS_GUIDELINES.md).

## Working with the Theme

### Using Theme Colors in Components

To use theme colors in your components:

```scss
@use '@angular/material' as mat;
@use 'src/styles/colors' as colors;

.my-component {
  // Using predefined colors
  background-color: colors.$burgundy;
  color: colors.$white;
  
  // For themed elements that should change with theme
  .themed-element {
    @include mat.color(primary);
  }
}
```

### Theme Switching

To dynamically switch themes (e.g., enabling dark mode):

```typescript
import { Component } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  template: `
    <button mat-button (click)="toggleDarkMode()">
      Toggle Dark Mode
    </button>
  `
})
export class ThemeSwitcherComponent {
  constructor(private themeService: ThemeService) {}
  
  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
```

## Material Design 3 Components

### Updated Usage Patterns

Some components have updated usage patterns in Material Design 3. Here are key examples:

#### Buttons

Material Design 3 introduces new button types:

```html
<!-- Filled button (primary) -->
<button mat-button>Standard Button</button>

<!-- Elevated button -->
<button mat-raised-button>Elevated Button</button>

<!-- Filled button -->
<button mat-flat-button>Filled Button</button>

<!-- Outlined button -->
<button mat-stroked-button>Outlined Button</button>

<!-- Icon button -->
<button mat-icon-button>
  <mat-icon>favorite</mat-icon>
</button>

<!-- FAB button -->
<button mat-fab>
  <mat-icon>add</mat-icon>
</button>
```

#### Navigation & Social Links

- **All navigation and social links must use Angular Material button components** (`mat-button`, `mat-icon-button`).
- **Do not use direct `<a>` tags** for navigation or social actions; always wrap with a Material button for MD3 compliance and accessibility.
- Example:
  ```html
  <!-- Correct: -->
  <button mat-button [routerLink]="'/about'">About</button>
  <button mat-icon-button (click)="openSocial('instagram')">
    <mat-icon fontIcon="instagram"></mat-icon>
  </button>
  <!-- Incorrect: -->
  <!-- <a href="/about">About</a> -->
  ```

#### Cards

Updated card usage with MD3 styling:

```html
<mat-card appearance="outlined">
  <mat-card-header>
    <mat-card-title>Card Title</mat-card-title>
    <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
  </mat-card-header>
  
  <mat-card-content>
    Card content goes here
  </mat-card-content>
  
  <mat-card-actions align="end">
    <button mat-button>Action 1</button>
    <button mat-button>Action 2</button>
  </mat-card-actions>
</mat-card>
```

## Seasonal & Event-Driven Theming
- The application’s Material Design 3 theme and mascot (Poppy) change with the seasons, holidays, and local events.
- All seasonal theming and mascot changes are implemented using MD3’s theming and animation features for consistency and accessibility.
- See [POPPY_MASCOT.md](POPPY_MASCOT.md) and [DESIGN.md](DESIGN.md) for details.

## Troubleshooting Common Issues

### Theme Not Applied

If your theme isn't being applied correctly:

1. **Check that you're using theme objects correctly** - Material 19 uses direct theme objects instead of functions like `define-light-theme()` 
2. **Verify theme import order** in styles.scss
3. **Inspect component classes** to ensure they're using theme mixins correctly

### Component Style Issues

If components don't match the expected Material Design 3 style:

1. **Check for custom styles** that might be overriding Material defaults
2. **Verify component usage** against latest Material documentation
3. **Update component appearance** attributes when needed

## Additional Resources

- [Official Angular Material Documentation](https://material.angular.io/)
- [Material Design 3 Guidelines](https://m3.material.io/)
- [Material Theme Builder](https://m3.material.io/theme-builder)