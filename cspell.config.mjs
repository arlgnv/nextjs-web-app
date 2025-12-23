// @ts-check

import { defineConfig } from 'cspell';

const config = defineConfig({
  useGitignore: true,
  words: ['commitlint', 'knip', 'coderabbit', 'docstrings'],
});

export default config;
