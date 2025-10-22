import fs from 'node:fs';

import type { ESLint, Linter } from 'eslint';

import {
  configCSpell,
  configIgnores,
  configJavascript,
  configJson,
  configMarkdown,
  configPrettier,
  configReact,
  configRecommended,
  configRecommendedNoSpellCheck,
  configRecommendedNoSpellCheckReact,
  configRecommendedReact,
} from './configs/index.js';

const packagePath = new URL('../package.json', import.meta.url);
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8')) as {
  name: string;
  version: string;
};

const configs: Record<string, Linter.Config[]> = {
  // global ignores
  ignores: configIgnores,

  // js/ts & react
  javascript: configJavascript,
  react: configReact,

  // json
  json: configJson,

  // markdown
  markdown: configMarkdown,

  // spelling
  cspell: configCSpell,

  // prettier fixes
  prettier: configPrettier,

  // collections
  recommended: configRecommended,
  'recommended-react': configRecommendedReact,
  'recommended-no-spellcheck': configRecommendedNoSpellCheck,
  'recommended-no-spellcheck-react': configRecommendedNoSpellCheckReact,
};

type Plugin = ESLint.Plugin & {
  configs: typeof configs;
};

const plugin: Plugin = {
  meta: {
    name: packageJson.name,
    version: packageJson.version,
    namespace: 'spellbookx',
  },
  configs,
  rules: {},
  processors: {},
};

export default plugin;
