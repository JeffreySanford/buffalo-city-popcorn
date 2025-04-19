import baseConfig from '../../eslint.config.mjs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name in ESM modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  ...baseConfig,
  // Configure TypeScript parser options specific to this project
  {
    files: ['**/*.ts'],
    ignores: ['**/*.spec.ts', '**/test-setup.ts', '**/jest.config.ts'],
    languageOptions: {
      parserOptions: {
        project: [path.resolve(__dirname, './tsconfig.app.json')],
        tsconfigRootDir: __dirname
      }
    }
  },
  // Add a specific configuration for test files
  {
    files: ['**/*.spec.ts', '**/test-setup.ts', '**/jest.config.ts'],
    languageOptions: {
      parserOptions: {
        project: [path.resolve(__dirname, './tsconfig.spec.json')],
        tsconfigRootDir: __dirname
      }
    }
  }
];
