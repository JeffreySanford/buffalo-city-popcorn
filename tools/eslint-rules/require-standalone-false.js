/**
 * ESLint rule to ensure Angular components explicitly set standalone: false
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ensure Angular components explicitly set standalone: false',
      recommended: true
    },
    schema: []
  },
  create(context) {
    return {
      Decorator(node) {
        // match @Component({...})
        const expr = node.expression;
        if (
          expr?.type === 'CallExpression' &&
          expr.callee.type === 'Identifier' &&
          expr.callee.name === 'Component'
        ) {
          const [arg] = expr.arguments;
          if (arg?.type === 'ObjectExpression') {
            const ok = arg.properties.some(prop =>
              prop.type === 'Property' &&
              prop.key.type === 'Identifier' &&
              prop.key.name === 'standalone' &&
              prop.value.type === 'Literal' &&
              prop.value.value === false
            );
            if (!ok) {
              context.report({
                node: arg,
                message:
                  'Angular @Component must include `standalone: false` in its decorator.'
              });
            }
          }
        }
      }
    };
  }
};
