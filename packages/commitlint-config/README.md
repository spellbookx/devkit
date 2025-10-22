# @spellbookx/commitlint-config

> Shared Commitlint configuration — standardizing commit message formatting across JS/TS projects.  
> Conventional commits, interactive prompts, and multi-scope support included.  
> Clean. Opinionated. Always consistent.

---

## Table of Content

- [Features](#features)
- [Install](#install)
- [Usage](#usage)
- [With CLI](#with-cli)
- [With Lefthook](#with-lefthook)
- [Resources](#resources)
- [License](#license)

---

## Features

- **Base Rules**
  - Enforces [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) style.
  - Supported commit types:
    - `feat` → A new feature
    - `fix` → A bug fix
    - `docs` → Documentation only changes
    - `style` → Code style changes without functional impact
    - `refactor` → Code refactoring (no feature or fix)
    - `perf` → Performance improvements
    - `test` → Adding or correcting tests
    - `build` → Changes affecting the build system or dependencies
    - `ci` → Changes to CI configuration
    - `chore` → Miscellaneous chores
    - `revert` → Reverts a previous commit
  - Enforces:
    - Scope case: `kebab-case`
    - Subject cannot be empty
    - Subject case: `sentence-case`
    - No full stop at the end of subject
    - Header max length: 72
    - Body and footer max line length: 100

- **Interactive Prompt**
  - Multi-scope support enabled
  - Scope separator: `,`
  - Guided questions for type, scope, subject, body, breaking changes, and issues affected
  - Emoji and title per commit type
  - Uses `cz` for interactive commits (`npx cz`)

- **Parser Preset**
  - Uses `conventional-changelog-conventionalcommits`
  - Supports multi-scope commit messages:
    ```bash
    type(scope1,scope2): subject
    ```

---

## Install

```bash
npm install --global commitizen cz-git
npm install --save-dev commitizen cz-git @commitlint/cli @spellbookx/commitlint-config
```

---

## Usage

Create a `commitlint.config.mjs` file at your project root:

```ts
export default {
  extends: ['@spellbookx/commitlint-config'],
};
```

### With CLI

Interactive commits using Commitizen:

```bash
npx cz
```

### With Lefthook

Configure a `lefthook.yml` in your project root:

```yaml
commit-msg:
  commands:
    lint-commit-msg:
      run: npx commitlint --verbose --edit {1}
```

> Commitlint will automatically validate commit messages on each commit. Use `cz` to create commits interactively.

---

## Resources

- [Commitlint Documentation](https://commitlint.js.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitizen](https://github.com/commitizen/cz-cli)

---

## License

This project is licensed under the MIT License.

**Copyright (c) 2025 Davide Di Criscito**

For the full details, see the [LICENSE](LICENSE) file.
