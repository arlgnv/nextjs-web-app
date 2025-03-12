// @ts-check

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './app/globals.css',
};

export default config;
