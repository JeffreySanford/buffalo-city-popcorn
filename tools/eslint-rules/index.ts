/**
 * This file ensures TypeScript finds inputs in the eslint-rules directory.
 * It re-exports the JavaScript rule for better TypeScript integration.
 */
import * as requireStandaloneFalse from './require-standalone-false.js';

/**
 * TypeScript interface for our ESLint plugin
 */
import type { Rule } from 'eslint';

interface Plugin {
  rules: {
    'require-standalone-false': Rule.RuleModule;
  };
}

// Just for TypeScript typings - the JS file is used at runtime
declare const plugin: Plugin;
export default plugin;

export { requireStandaloneFalse };
