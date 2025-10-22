# @spellbookx/cspell-config

Shared configuration for [CSpell](https://cspell.org) — tuned for polyglot monorepos (Node, Rust, Go, Python, and more).  
Clean. Opinionated. No junk, no false positives.

---

## Table of Content

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [License](#license)

---

## Features

- Pre-tuned dictionaries for:
  - English (US/GB)
  - Common programming languages (TypeScript, Node, Python, Go, PHP, etc.)
  - Framework & tooling terms (npm, softwareTerms, misc)
- Smart `ignorePaths` that skip all build artifacts, lock files, and temp directories:
  - Node / JS / TS (`dist`, `node_modules`, `.next`, `.turbo`, etc.)
  - Rust (`target/`, `.cargo/`, `Cargo.lock`)
  - Go (`go.sum`, `vendor/`, etc.)
  - Python (`__pycache__`, `.venv/`, `.tox/`, `.ruff_cache/`, etc.)
  - Windows / WSL cruft (`:Zone.Identifier`, `Thumbs.db`, `desktop.ini`, etc.)
- Works seamlessly with modern CSpell (`>=6.0`) using native ESM & `defineConfig`

---

## Installation

```bash
npm install --global cspell
npm install --save-dev cspell @cspell/cspell-types @spellbookx/cspell-config
```

---

## Usage

Create a custom dictionary:

```bash
touch .cspell/custom-words.txt
```

Then create or update your `cspell.config.mjs` at the root of your project:

```ts
import { defineConfig } from 'cspell';

/** @type { import("@cspell/cspell-types").CSpellUserSettings } */
const cspell = defineConfig({
  version: '0.2',
  import: ['@spellbookx/cspell-config'],

  dictionaries: ['custom-words'],

  dictionariesDefinition: [
    {
      name: 'custom-words',
      path: './.cspell/custom-words.txt',
    },
  ],
});

export default cspell;
```

Then, run:

```bash
npx cspell lint "**/*.{ts,js,tsx,jsx,md}"
```

or integrate with Nx, Husky, Lefthook, or your CI.

---

## Development

If you're contributing inside the monorepo:

```bash
nx run cspell-config:build
```

Test the config locally:

```bash
npx cspell lint --config path-to/packages/cspell-config/dist/index.js .
```

---

## License

This project is licensed under the MIT License.

**Copyright (c) 2025 Davide Di Criscito**

For the full details, see the [LICENSE](LICENSE) file.
