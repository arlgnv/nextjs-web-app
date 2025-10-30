const config = {
  '*': 'prettier --check --ignore-unknown',
  '*.{js,mjs,cjs,ts,mts,cts,tsx}': 'eslint',
};

export default config;
