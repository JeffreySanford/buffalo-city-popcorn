# Material Design 3 Theming Guide

This project uses Angular Material 19's implementation of Material Design 3 (MD3) for theming.

## Theme Structure

Our theming system is set up in `apps/frontend/src/styles/_theme.scss` and follows the MD3 specification.

### Key Concepts

1. **Base Theme Configuration**

The theme is defined using Angular Material's `define-theme()` function:

```scss
$buffalo-light-theme: mat.define-theme((
  color: (
    theme-type: light,
    primary: $primary-palette,
    tertiary: $tertiary-palette,
  ),
  typography: $buffalo-typography,
  density: (
    scale: 0
  )
));
```

2. **Color Palettes**

Material Design 3 uses a different palette structure than previous versions:

```scss
$primary-palette: (
  50: color.adjust(colors.$burgundy, $lightness: 40%),
  100: color.adjust(colors.$burgundy, $lightness: 30%),
  /* ...other shades... */
  contrast: (/* contrast colors */)
);
```

3. **Typography Configuration**

MD3 typography is simpler and more streamlined:

```scss
$buffalo-typography: (
  brand-family: 'Roboto, "Helvetica Neue", sans-serif',
  plain-family: 'Roboto, "Helvetica Neue", sans-serif',
  bold-weight: 700,
  medium-weight: 500,
  regular-weight: 400
);
```

4. **Theme Application**

Material Design 3 themes must be wrapped in a selector:

```scss
html {
  @include theme.apply-material-theme(theme.$buffalo-light-theme);
}
```

## Using Theme Tokens

Angular Material 19 generates CSS custom properties (variables) that you can use in your components:

```scss
.primary-color-example {
  background-color: var(--mat-primary);
  color: var(--mat-on-primary);
}

.primary-container-example {
  background-color: var(--mat-primary-container);
  color: var(--mat-on-primary-container);
}
```

## Customizing the Theme

To customize the theme colors:

1. Update the base color variables in `colors.scss`
2. Update the palette configurations in `_theme.scss`

## Important Notes

- Angular Material 19 uses an MD3-specific palette structure that's more strict than previous versions
- Always wrap theme application mixins in a selector
- Use the generated CSS variables for consistency across your application

## Related Documentation

For more detailed information on theming and styling, see:

- [Sass Guidelines](../documentation/frontend/SASS_GUIDELINES.md)
- [Material Design 3 Details](../documentation/frontend/MATERIAL_DESIGN_3.md)
- [Design Guidelines](../documentation/frontend/DESIGN.md)
