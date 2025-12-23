import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignoreDependencies: ['postcss'],
  'lint-staged': {
    config: 'lint-staged.config.mts',
  },
};

module.exports = config;
