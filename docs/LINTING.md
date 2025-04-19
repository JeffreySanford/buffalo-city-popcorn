# Linting Guide

This project uses ESLint with several plugins to enforce code quality and best practices.

## ESLint Configuration

The main ESLint configuration is in `eslint.config.mjs`, which uses the new flat config format.

### Key Linting Rules

#### RxJS Linting

We enforce best practices for RxJS:

```javascript
{
  files: ['**/*.ts'],
  plugins: { rxjs },
  rules: {
    'rxjs/no-async-subscribe': 'error',  // Prefer pipe + lastValueFrom instead
    'rxjs/throw-error': 'error',         // Use throwError() instead of throw
    'rxjs/no-compat': 'error'            // No compat imports
  }
}
```

#### Angular Best Practices

We enforce Angular Material Design 3 best practices:

```javascript
{
  files: ['apps/frontend/src/**/*.ts'],
  rules: {
    '@angular-eslint/prefer-on-push-component-change-detection': 'error'
  }
}
```

#### Custom Rule: require-standalone-false

We have a custom rule that ensures all components explicitly set `standalone: false`:

```javascript
{
  files: ['apps/frontend/src/**/*.ts'],
  plugins: {
    'bcp': bcpPlugin
  },
  rules: {
    'bcp/require-standalone-false': 'error'
  }
}
```

## StyleLint Configuration

For SCSS files, we use StyleLint with the following key rules:

- Prefer `@use` over `@import`
- Avoid color manipulation functions like `lighten()` and `darken()`
- Enforce color variables from our color system

## Running Linting

```bash
# Lint TypeScript files
nx run frontend:lint

# Lint SCSS files
npx stylelint "apps/frontend/src/**/*.scss"

# Run both together
npm run check:all
```

## Custom ESLint Rules

Custom rules are defined in the `tools/eslint-rules` directory:

- `require-standalone-false.js`: Enforces explicit `standalone: false` in component decorators

## Related Documentation

For more information on coding standards and practices:

- [Contributing Guidelines](./CONTRIBUTING.md)
- [Coding Standards](../documentation/CODING-STANDARDS.md)
- [Frontend Coding Standards](../documentation/frontend/CODING_STANDARDS.md)
