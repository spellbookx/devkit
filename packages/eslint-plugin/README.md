# @spellbookx/eslint-plugin

This plugin offers a unified, modern ESLint Flat Config setup to reduce configuration overhead while enforcing best practices, clean code, and maintainable project structures for modern JavaScript, TypeScript, and React projects.

---

## Table of Contents

- [Installation](#installation)
- [Available Configurations](#available-configurations)
- [Usage Examples](#usage-examples)
- [Rules Explanation](#rules-explanation)
- [License](#license)

---

## Installation

```bash
npm install --save-dev eslint @spellbookx/eslint-plugin
```

Then use Flat Config by importing the desired configurations:

```js
// eslint.config.js
import spellbookx from '@spellbookx/eslint-plugin';

export default [...spellbookx.configs.recommended];
```

---

## Available Configurations

| Config Name                       | Description                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `ignores`                         | Global ignore patterns for node modules, build artifacts, caches, and IDE/project files.                        |
| `javascript`                      | Base rules for JS/TS files with Unicorn, Prettier, JSDoc, and TypeScript-specific adjustments.                  |
| `react`                           | Adds React/JSX/TSX rules and React Hooks best practices.                                                        |
| `json`                            | Enforces JSON, JSON5, JSONC, and `package.json` best practices including property ordering and required fields. |
| `markdown`                        | Lints Markdown files and code blocks within them.                                                               |
| `cspell`                          | Integrates with Code Spell Checker for detecting typos in code and text.                                        |
| `prettier`                        | Ensures Prettier formatting rules are applied consistently.                                                     |
| `recommended`                     | Combines ignores, JS/TS, JSON, Markdown, Prettier, and cspell for a full setup.                                 |
| `recommended-react`               | Recommended setup including React support.                                                                      |
| `recommended-no-spellcheck`       | Recommended setup without cspell.                                                                               |
| `recommended-no-spellcheck-react` | Recommended setup for React without cspell.                                                                     |

---

## Usage Examples

### JavaScript / TypeScript

```js
// eslint.config.js
import spellbookx from '@spellbookx/eslint-plugin';

export default [...spellbookx.configs.recommended];
```

### React / TSX

```js
import spellbookx from '@spellbookx/eslint-plugin';

export default [...spellbookx.configs['recommended-react']];
```

### JSON / Package Files

```js
import spellbookx from '@spellbookx/eslint-plugin';

export default [...spellbookx.configs.json];
```

### Markdown with Embedded Code

```js
import spellbookx from '@spellbookx/eslint-plugin';

export default [...spellbookx.configs.markdown];
```

### Disabling Spell Checker

```js
import spellbookx from '@spellbookx/eslint-plugin';

export default [...spellbookx.configs['recommended-no-spellcheck']];
```

---

## Rules Explanation

### TypeScript-Specific

- **`@typescript-eslint/no-unused-vars`**: Replaces ESLint's default `no-unused-vars` to understand TypeScript constructs like interfaces, enums, and types. Variables prefixed with `_` are ignored.
- **`@typescript-eslint/quotes` & `@typescript-eslint/semi`**: Disabled to defer to Prettier for formatting consistency.

### Unicorn Rules

- Enforces consistent filename casing (`kebab-case`).
- Prefers modern safe methods (`Buffer.from`, `Array.includes`, `String.replaceAll`, `TypeError`).
- Prevents unsafe patterns like `instanceof Array` or manual `new Error()` without a proper type.
- `no-null` and `prevent-abbreviations` are disabled to allow flexibility.
- Explicit length checks are warned, not enforced.

### JSDoc

- Encourages documentation for functions, classes, and methods.
- Enforces descriptions for all significant code structures.

### Prettier

- Ensures consistent formatting across JS/TS, JSON, Markdown, and React code.

### Import Sorting

Uses `eslint-plugin-simple-import-sort` for structured, deterministic import ordering:

1. Environment variables (`dotenv`, `@dotenvx/dotenvx`)
2. Side-effect imports
3. Node built-ins
4. React core and ecosystem
5. Backend frameworks and middlewares
6. State management, data-fetching, GraphQL clients
7. Generic third-party libraries
8. UI libraries and icon packs
9. Relative imports
10. Styles, assets, and media

This promotes readability, predictable structure, and clear separation between layers of the project.

---

## License

This project is licensed under the MIT License.

**Copyright (c) 2025 Davide Di Criscito**

For the full details, see the [LICENSE](LICENSE) file.
