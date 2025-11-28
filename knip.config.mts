import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignoreDependencies: ['postcss'],
  next: {
    config: 'next.config.mts',
  },
  'lint-staged': {
    config: 'lint-staged.config.mts',
  },
};

export default config;
