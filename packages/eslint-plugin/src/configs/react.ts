import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

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
      react: reactPlugin,
      // @ts-expect-error react-hooks types not yet provided
      'react-hooks': reactHooks,
    },
    extends: [
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
