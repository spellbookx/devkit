export const ignorePaths = [
  // Core junk
  '**/*LICENSE*',
  '**/*.log',
  '**/.cache/**',
  '**/.temp/**',
  '**/.tmp/**',
  '**/.DS_Store',

  // Node / JS / TS
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
  '**/.parcel-cache/**',
  '**/.vite/**',
  '**/.rollup.cache/**',

  // Lock files (npm, pnpm, yarn, bun, etc.)
  '**/package-lock.json',
  '**/pnpm-lock.yaml',
  '**/yarn.lock',
  '**/bun.lockb',

  // Rust
  '**/target/**',
  '**/.cargo/**',
  '**/Cargo.lock',

  // Go
  '**/go.sum',
  '**/go.work',
  '**/go.work.sum',
  '**/vendor/**',
  '**/.gopath/**',
  '**/.cache/go-build/**',

  // Python
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

  // Misc toolchains / systems
  '**/.git/**',
  '**/.svn/**',
  '**/.hg/**',
  '**/.idea/**',
  '**/.vscode/**',
  '**/.editorconfig',
  '**/.eslintcache',
  '**/.babelrc',
  '**/.prettier*',
  '**/.nx/**',
  '**/.cspell/**',
  '**/.cursor/**',
  '**/.history/**',
  '**/.sass-cache/**',
  '**/.gradle/**',
  '**/.terraform/**',
  '**/.docker/**',
  '**/.kube/**',
  '**/.devcontainer/**',
  '**/.direnv/**',

  // WSL / Windows-specific files
  '**/*:Zone.Identifier',
  '**/*:Zone.Identifier*',
  '**/Thumbs.db',
  '**/desktop.ini',
  '**/$RECYCLE.BIN/**',
  '**/System Volume Information/**',
  '**/pagefile.sys',
  '**/swapfile.sys',
  '**/hiberfil.sys',

  // Misc project artifacts
  '**/connect.lock',
  '.github/instructions/nx.instructions.md',
];
