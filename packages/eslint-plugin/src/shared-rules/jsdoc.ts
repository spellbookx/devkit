import type { Linter } from 'eslint';

/**
 * ESLint rule set focused on enforcing and improving JSDoc usage across
 * JavaScript and TypeScript codebases.
 * This configuration encourages consistent documentation of functions,
 * methods, and classes, while avoiding type redundancy when TypeScript
 * already provides type information.
 *
 * Required plugins:
 * - eslint-plugin-jsdoc
 * @example
 * ```
 * import { jsDocRules } from './eslint/jsdoc-rules.js';
 *
 * export default {
 *   rules: {
 *     ...jsDocRules,
 *   },
 * };
 * ```
 */
export const jsDocRules: Linter.RulesRecord = {
  'jsdoc/require-jsdoc': [
    'warn',
    {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    },
  ],
  'jsdoc/require-description': 'warn',
  'jsdoc/require-param-type': 'off',
  'jsdoc/require-property-type': 'off',
  'jsdoc/require-throws-type': 'off',
  'jsdoc/require-yields-type': 'off',
  'jsdoc/require-returns-type': 'off',
};
