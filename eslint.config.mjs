import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import nodeDependencies from 'eslint-plugin-node-dependencies';
import packageJson from 'eslint-plugin-package-json';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import jsoncParser from 'jsonc-eslint-parser';
import tseslint from 'typescript-eslint';
import cspellConfigs from '@cspell/eslint-plugin/configs';
import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';

/**
 * Rules overrides for javascript/typescript imports/exports.
 * These plugins must be imported in the plugins section.
 * @example
 * ```ts
 * import importPlugin from 'eslint-plugin-import';
 * import simpleImportSort from 'eslint-plugin-simple-import-sort'
 *
 * export default [
 *   {
 *     files: ['*.js'],
 *     plugins: {
 *       import: importPlugin,
 *       'simple-import-sort': simpleImportSort,
 *     },
 *   }
 * ];
 * ```
 * @type {Object}
 */
const rulesImportsExports = {
  'sort-imports': 'off',
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        ['^dotenv', '^@dotenvx/dotenvx'], // Environment vars first
        // Node.js built-ins (alphabetically sorted for clarity)
        [
          '^assert',
          '^buffer',
          '^child_process',
          '^cluster',
          '^console',
          '^constants',
          '^crypto',
          '^dgram',
          '^dns',
          '^domain',
          '^events',
          '^fs',
          '^http',
          '^https',
          '^inspector',
          '^module',
          '^net',
          '^os',
          '^path',
          '^perf_hooks',
          '^process',
          '^punycode',
          '^querystring',
          '^readline',
          '^repl',
          '^stream',
          '^string_decoder',
          '^timers',
          '^tls',
          '^tty',
          '^url',
          '^util',
          '^v8',
          '^vm',
          '^zlib',
          '^node:',
        ],
        [String.raw`^`], // Side effects
        ['^[^@./]', String.raw`^@\w`], // Third-party packages
        ['^react$', '^react-dom$', '^react'], // React core
        ['^@mui', '^@material-ui', '^@tabler'], // UI libraries
        ['^(@spellbookx)(/.*|$)', String.raw`^\.\.?/`], // Internal + relative
        [
          String.raw`^.+\.s?css$`, // Styles
          String.raw`^.+\.(png|jpe?g|gif|webp|svg)$`, // Images
          String.raw`^.+\.(mp3|wav|ogg)$`, // Audio
          String.raw`^.+\.(mp4|avi|mov)$`, // Video
        ],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',
};

/**
 * Rules overrides for javascript/typescript.
 * These plugins must be imported in the plugins section.
 * @example
 * ```ts
 * import tseslint from 'typescript-eslint';
 * import unicorn from 'eslint-plugin-unicorn';
 * import jsdoc from 'eslint-plugin-jsdoc';
 * import prettierPlugin from 'eslint-plugin-prettier';
 *
 * export default [
 *   {
 *     files: ['*.ts'],
 *     plugins: {
 *       jsdoc,
 *       prettier: prettierPlugin,
 *     },
 *     extends: [
 *       js.configs.recommended,
 *       tseslint.configs.recommended,
 *       unicorn.configs.recommended,
 *     ],
 *   }
 * ]
 * ```
 * @type {Object}
 */
const rulesJavascript = {
  // TS: allow unused prefixed with "_"
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
  ],

  // Quote/semi conflict resolution (Prettier handles)
  quotes: 'off',
  '@typescript-eslint/quotes': 'off',
  semi: 'off',
  '@typescript-eslint/semi': 'off',

  // Unicorn
  'unicorn/filename-case': ['error', { case: 'kebabCase' }],
  'unicorn/prefer-module': 'error',
  'unicorn/no-new-buffer': 'error',
  'unicorn/no-instanceof-array': 'error',
  'unicorn/prefer-includes': 'error',
  'unicorn/prefer-string-replace-all': 'error',
  'unicorn/prefer-type-error': 'error',
  'unicorn/throw-new-error': 'error',
  'unicorn/no-null': 'off',
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/explicit-length-check': 'warn',

  // JSDoc (encourage documentation)
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

  // Prettier
  'prettier/prettier': 'error',
};

/**
 * All global ignore patterns consolidated into one array.
 * Grouped by category for maintainability.
 * @type {string[]}
 */
const allIgnorePatterns = [
  // Node / JS / TS build & lock files
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/out/**',
  '**/out-tsc/**',
  '**/coverage/**',
  '**/.next/**',
  '**/.nuxt/**',
  '**/.svelte-kit/**',
  '**/.turbo/**',
  '**/.pnpm/**',
  '**/.npm/**',
  '**/.yarn/**',
  '**/.pnp/**',
  '**/package-lock.json',
  '**/pnpm-lock.yaml',
  '**/yarn.lock',
  '**/bun.lockb',

  // Python environments and cache
  '**/__pycache__/**',
  '**/*.pyc',
  '**/*.pyo',
  '**/.mypy_cache/**',
  '**/.pytest_cache/**',
  '**/.tox/**',
  '**/.ruff_cache/**',
  '**/.venv/**',
  '**/venv/**',
  '**/env/**',
  '**/.ipynb_checkpoints/**',

  // Rust build artifacts
  '**/target/**',
  '**/.cargo/**',
  '**/Cargo.lock',

  // Go dependencies and cache
  '**/go.sum',
  '**/go.work',
  '**/go.work.sum',
  '**/vendor/**',
  '**/.gopath/**',
  '**/.cache/go-build/**',

  // Miscellaneous project artifacts
  '**/*LICENSE*',
  '**/*.log',
  '**/.cache/**',
  '**/.temp/**',
  '**/.tmp/**',
  '**/.DS_Store',
  '**/.idea/**',
  '**/.vscode/**',
  '**/.nx/**',
  '**/.cspell/**',
  '**/.cursor/**',
  '**/.history/**',
  '**/.terraform/**',
  '**/.devcontainer/**',
  '**/.direnv/**',
  '**/.editorconfig',
  '**/.eslintcache',
  '**/.babelrc',
  '**/.prettier*',
  '**/.sass-cache/**',
  '**/.gradle/**',
  '**/.docker/**',
  '**/.kube/**',
  '**/.git/**',
  '**/.svn/**',
  '**/.hg/**',
  '.github/instructions/nx.instructions.md',

  // Windows system artifacts
  '**/*:Zone.Identifier',
  '**/Thumbs.db',
  '**/desktop.ini',
  '**/$RECYCLE.BIN/**',
  '**/System Volume Information/**',
  '**/pagefile.sys',
  '**/swapfile.sys',
  '**/hiberfil.sys',
];

/**
 * @typedef {import("eslint").Linter.Config[]}
 */
export default defineConfig([
  // Global ignores
  globalIgnores(allIgnorePatterns),

  // --- cSpell ---
  cspellConfigs.recommended,

  // --- Js/Ts base ---
  {
    files: ['**/*.{js,ts,cjs,cts,mjs,mts,jsx,tsx,mjsx,mtsx}'],
    plugins: {
      jsdoc,
      prettier: prettierPlugin,
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      nodeDependencies.configs['flat/recommended'],
      unicorn.configs.recommended,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...rulesImportsExports,
      ...rulesJavascript,
    },
  },

  // --- CommonJS specifics ---
  {
    files: ['**/*.{cjs,cts}', '**/webpack.config.{js,cjs}'],
    languageOptions: {
      globals: {
        ...globals.commonjs,
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'unicorn/prefer-module': 'off',
    },
  },

  // --- Module specifics ---
  {
    files: ['**/*.{js,ts,mjs,mts}'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.es2022,
      },
    },
  },

  // --- React ---
  {
    files: ['**/*.{jsx,tsx,mjsx,mtsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
    },
    extends: [
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
      reactHooks.configs.recommended,
    ],
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.es2022,
        ...globals.browser,
      },
    },
    rules: {
      'react-hooks/exhaustive-deps': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // --- Test files ---
  {
    files: ['**/*.test.{js,ts,jsx,tsx}', '**/*.spec.{js,ts,jsx,tsx}'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'unicorn/no-null': 'warn',
    },
  },

  // --- Json variants ---
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
    languageOptions: { parser: jsoncParser },
  },
  {
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
    extends: ['json/recommended'],
    languageOptions: { parser: jsoncParser },
  },
  {
    files: ['**/*.jsonc', '**/tsconfig*.json', '**/.vscode/**/*.json'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended'],
    languageOptions: { parser: jsoncParser },
  },
  {
    files: ['**/package.json'],
    plugins: { json, 'package-json': packageJson },
    language: 'json/json',
    extends: [packageJson.configs.recommended],
    languageOptions: { parser: jsoncParser },
    rules: {
      'package-json/order-properties': 'error',
      'package-json/sort-collections': 'error',
      'package-json/require-description': 'error',
      'package-json/require-bugs': 'error',
      'package-json/require-keywords': 'error',
      'package-json/require-name': 'error',
      'package-json/require-version': 'error',
      'package-json/valid-description': 'error',
      'package-json/valid-license': 'error',
      'package-json/valid-name': 'error',
      'package-json/valid-package-definition': 'error',
      'package-json/valid-version': 'error',
    },
  },

  // --- Markdown ---
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
  },
  {
    files: ['**/*.md/*.js', '**/*.md/*.ts', '**/*.md/*.jsx', '**/*.md/*.tsx'],
    rules: { ...rulesImportsExports },
  },

  // --- Prettier (last for overrides) ---
  prettierConfigRecommended,
]);
