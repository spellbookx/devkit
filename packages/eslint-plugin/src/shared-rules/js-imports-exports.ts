import type { Linter } from 'eslint';

const IMPORT_GROUPS = [
  // dotenv & dotenvx packages
  ['^dotenv', '^@dotenvx/dotenvx'],

  // Env imports for React Native, Expo, etc.
  ['^@env'],

  // Side-effect imports (e.g. CSS, polyfills)
  [String.raw`^\u0000`],

  // Node.js built-in modules
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

  // Node.js backend frameworks and utilities
  [
    // Backend frameworks
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

    // Logging
    String.raw`^pino-`,
    '^winston',
    '^morgan',

    // Caching & rate limiter
    '^redis',
    '^connect-redis',
    '^express-rate-limit',
  ],

  // React core packages
  [
    '^react$',
    '^react-dom$',
    '^react',
    '^react-intl',
    '^react-router',
    '^@tanstack/router',
  ],

  // UI frameworks (add others if switching framework)
  ['^react', '^vue', '^svelte'],

  // React Native ecosystem
  ['^react-native', '^react-navigation', '^@react-native'],

  // Expo SDK
  ['^expo$', String.raw`^@expo\/`, String.raw`^expo-`],

  // State management & data-fetching libraries
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

  // Testing libraries and utilities
  ['^@testing-library', '^jest', '^vitest', '^cypress'],

  // Monorepo/workspace scoped packages
  ['^@workspace/', '^@my-org/'],

  // Generic third-party packages (npm scope and plain)
  ['^[a-z]', String.raw`^@\w`],

  // UI libraries & design systems
  [
    '^@mui',
    '^@material-ui',
    '^antd',
    '^@radix-ui',
    '^@chakra-ui',
    '^tailwindcss',
    '^react-native-paper',
    '^native-base',
    '^framer-motion',
    '^@lottiefiles',
  ],

  // Common icon packages
  [
    String.raw`^@expo\/vector-icons`,
    '^@fortawesome',
    '^@tabler',
    '^react-native-vector-icons',
    '^react-native-feather',
    '^lucide',
  ],

  // Image asset imports
  [String.raw`^.+\.(png|jpe?g|gif|webp|svg)$`],

  // Audio asset imports
  [String.raw`^.+\.(mp3|wav|ogg|weba)$`],

  // Video asset imports
  [String.raw`^.+\.(mp4|avi|mov|mkv|webm)$`],

  // Lottie asset imports
  [String.raw`^.+\.lottie$`],

  // JSON files
  [String.raw`^.+\.json$`],

  // Stylesheets (css, scss)
  [String.raw`^.+\.s?css$`],

  // Relative imports (modules within project)
  [String.raw`^\.?\.\/`],
];

/**
 * ESLint rules focused on enforcing structured and sorted imports and exports.
 * This configuration disables the default 'sort-imports' rule and relies on
 * 'eslint-plugin-simple-import-sort' for predictable grouping and sorting.
 *
 * USAGE:
 * - Required plugins:
 *   - eslint-plugin-simple-import-sort
 *   - eslint-plugin-import
 *
 * - Register plugins as:
 *   - import: importPlugin
 *   - simple-import-sort: simpleImportSort
 */
export const jsRulesImportsExports: Linter.RulesRecord = {
  // Disable the built-in sort-imports rule in favor of plugin
  'sort-imports': 'off',

  // Enforce structured and grouped imports using simple-import-sort
  'simple-import-sort/imports': ['error', { groups: IMPORT_GROUPS }],

  // Enforce sorted exports
  'simple-import-sort/exports': 'error',
};
