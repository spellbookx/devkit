import { defineConfig } from 'cspell';

import { ignorePaths } from './ignore-paths.js';
import { words } from './words.js';

export default defineConfig({
  version: '0.2',

  enabled: true,
  enableGlobDot: true,

  language: 'en',

  loadDefaultConfiguration: true,

  ignorePaths: ignorePaths,

  allowCompoundWords: true,

  // list of featured dictionaries
  dictionaries: [
    // General dictionaries
    'en-gb',
    'en_US',
    'companies',
    'softwareTerms',
    'misc',

    // Programming languages
    'typescript',
    'node',
    'php',
    'go',
    'python',
    'powershell',
    'html',
    'css',
    'csharp',
    'latex',
    'bash',

    // others
    'fonts',
    'fileTypes',
    'npm',
  ],

  words: words,
});
