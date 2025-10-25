import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import nodeDependencies from 'eslint-plugin-node-dependencies';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

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
      jsdoc,
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
      jsdoc.configs['flat/contents-typescript-flavor'],
      jsdoc.configs['flat/logical-typescript-flavor'],
      jsdoc.configs['flat/requirements-typescript-flavor'],
      jsdoc.configs['flat/stylistic-typescript-flavor'],
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
      'react-hooks/exhaustive-deps': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  configPrettier,
]);

export default configReact;
