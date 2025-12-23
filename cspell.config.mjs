// @ts-check

import { defineConfig } from 'cspell';

const config = defineConfig({
  useGitignore: true,
  words: ['commitlint', 'knip', 'coderabbit', 'docstrings', 'esm'],
});

export default config;
