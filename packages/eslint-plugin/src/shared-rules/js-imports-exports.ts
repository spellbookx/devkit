import type { Linter } from 'eslint';

/**
 * ESLint rules for javascript import and export sorting.
 *
 * This configuration disables the built-in 'sort-imports' and relies on
 * 'eslint-plugin-simple-import-sort' for structured, predictable grouping
 * and sorting of import statements.
 *
 * Required plugins:
 * - 'eslint-plugin-simple-import-sort'
 * - 'eslint-plugin-import' (While 'simple-import-sort' is used for sorting,
 * 'eslint-plugin-import' is generally required for other import-related
 * linting rules not shown here, and is a common dependency in projects
 * using structured imports.)
 *
 * Register the plugins listed above as below:
 * - import: importPlugin,
 * - 'simple-import-sort': simpleImportSort,
 */
export const jsRulesImportsExports: Linter.RulesRecord = {
  // Disable the default ESLint rule in favor of the custom plugin
  'sort-imports': 'off',
  // The official 'eslint-plugin-import' sort rule is also often disabled
  // for 'simple-import-sort', but we'll stick to the core ESLint rule for brevity.

  // Enforce structured and sorted imports
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        // dotenv & dotenvx
        ['^dotenv', '^@dotenvx/dotenvx'],

        // Side-effects
        [String.raw`^\u0000`],

        // Node.js built-ins
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

        // React Core
        [
          '^react$',
          '^react-dom$',
          '^react',
          '^react-router',
          '^@tanstack/router',
        ],

        // React Native Ecosystem
        ['^react-native', '^react-navigation', '^@react-native'],

        // Expo SDK
        ['^expo$', String.raw`^@expo\/`, String.raw`^expo-`],

        // Node.js Backend Frameworks and utilities
        [
          // Frameworks
          '^express',
          '^next',
          '^@nestjs',
          '^koa',
          '^fastify',
          '^hapi',
          '^loopback',
          '^sails',
          '^nest',

          // Middlewares
          '^cors',
          '^helmet',
          '^body-parser',
          '^cookie-parser',
          '^express-session',
          '^passport',

          // Log
          String.raw`^pino-`,
          '^winston',
          '^morgan',

          // Caching e Rate Limiting
          '^redis',
          '^connect-redis',
          '^express-rate-limit',
        ],

        // State Management & Data-Fetching
        [
          '^redux',
          '^zustand',
          '^jotai',
          '^recoil',
          '^@tanstack/react-query',
          '^swr',
          '^graphql',
          '^@apollo/client',
          '^axios',
        ],

        // Generic Third-Party
        ['^[^@./]', String.raw`^@\w`],

        // UI Libraries / Design Systems
        [
          '^@mui',
          '^@material-ui',
          '^antd',
          '^@radix-ui',
          '^@chakra-ui',
          '^tailwindcss',
          '^react-native-paper',
          '^native-base',
        ],

        // Common icon packages.
        [
          '^@tabler',
          '^@fortawesome',
          String.raw`^@expo\/vector-icons`,
          '^react-native-vector-icons',
          '^react-native-feather',
          '^lucide',
        ],

        // Relative Imports
        [String.raw`^\.?\.\/`],

        // Style & Asset Imports
        [
          String.raw`^.+\.s?css$`,
          String.raw`^.+\.(png|jpe?g|gif|webp|svg)$`,
          String.raw`^.+\.(mp3|wav|ogg)$`,
          String.raw`^.+\.(mp4|avi|mov)$`,
        ],
      ],
    },
  ],
  // Enforce sorted exports within a file
  'simple-import-sort/exports': 'error',
};
