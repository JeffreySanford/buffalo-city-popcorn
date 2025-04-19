/**
 * ESLint plugin for Buffalo City Popcorn custom rules
 */
const requireStandaloneFalse = require('./require-standalone-false');

module.exports = {
  rules: {
    'require-standalone-false': requireStandaloneFalse
  }
};
