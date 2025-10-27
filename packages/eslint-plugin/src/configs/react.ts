import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import nodeDependencies from 'eslint-plugin-node-dependencies';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

import { jsRulesCommon } from '../shared-rules/js-common.js';
import { jsRulesImportsExports } from '../shared-rules/js-imports-exports.js';
import configIgnores from './ignores.js';
import configJavascript from './javascript.js';
import configPrettier from './prettier.js';

const configReact: Linter.Config[] = defineConfig([
  configIgnores,
  configJavascript,

  // --- React ---
  {
    files: ['**/*.{jsx,tsx,mjsx,mtsx}'],
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSort,
      react: reactPlugin,
      // @ts-expect-error react-hooks types not yet provided
      'react-hooks': reactHooks,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      nodeDependencies.configs['flat/recommended'],
      unicorn.configs.recommended,
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
      // @ts-expect-error react-hooks types not yet provided
      reactHooks.configs.flat.recommended,
    ],
    languageOptions: {
      sourceType: 'module',
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
    },
    rules: {
      // Common rules
      ...jsRulesCommon,
      ...jsRulesImportsExports,

      // React
      'react-hooks/exhaustive-deps': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      // Unicorn
      'unicorn/filename-case': 'off',

      // Prettier
      'prettier/prettier': 'error',
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  configPrettier,
]);

export default configReact;
