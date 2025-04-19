import nx from '@nx/eslint-plugin';
// Import RxJS plugin
import rxjs from 'eslint-plugin-rxjs';
// Import our custom plugin properly
import bcpPlugin from './tools/eslint-rules/index.js';
// Fix the imports for CommonJS modules
import angularEslintPlugin from '@angular-eslint/eslint-plugin';
import angularEslintTemplatePlugin from '@angular-eslint/eslint-plugin-template';

// Destructure the rules from the CommonJS modules
const { rules: angularRules } = angularEslintPlugin;
const { rules: templateRules } = angularEslintTemplatePlugin;

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],

  // Angular rules
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [ 'error', {/*...*/} ],
      '@angular-eslint/component-selector': [ 'error', {/*...*/} ],
      '@angular-eslint/prefer-standalone': 'off'
    },
  },

  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
  // Configure TypeScript parser options for type-aware linting
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.base.json', './apps/*/tsconfig.json', './apps/*/tsconfig.app.json'],
        tsconfigRootDir: process.cwd()
      }
    }
  },
  // RxJS plugin configuration
  {
    files: ['**/*.ts'],
    plugins: { rxjs },
    rules: {
      'rxjs/no-async-subscribe': 'error',
      'rxjs/throw-error': 'error',
      'rxjs/no-compat': 'error'
    }
  },
  // Custom rule for standalone components - fixed plugin registration
  {
    files: ['apps/frontend/src/**/*.ts'],
    plugins: {
      'bcp': bcpPlugin
    },
    rules: {
      'bcp/require-standalone-false': 'error'
    }
  },
  // Angular MD3 best practices
  {
    files: ['apps/frontend/src/**/*.ts'],
    rules: {
      '@angular-eslint/prefer-on-push-component-change-detection': 'error'
      // add more MD3-centric rules here...
    }
  }
];
