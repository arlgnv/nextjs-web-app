import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignoreDependencies: ['postcss'],
  commitlint: {
    config: 'commitlint.config.mts',
  },
  'lint-staged': {
    config: 'lint-staged.config.mts',
  },
};

export default config;
