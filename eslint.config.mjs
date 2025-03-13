// @ts-check

import pluginJs from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import pluginQuery from '@tanstack/eslint-plugin-query';
import pluginPerfectionist from 'eslint-plugin-perfectionist';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginTypescript from 'typescript-eslint';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
const config = [
  {
    name: 'global-ignores',
    ignores: ['.next/'],
  },
  {
    name: 'common',
    files: ['**/*.{mjs,ts,tsx}'],
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          internalPattern: ['^@/.+'],
          tsconfigRootDir: import.meta.dirname,
          groups: [
            ['builtin-type', 'builtin', 'external-type', 'external'],
            ['internal-type', 'internal'],
            [
              'parent-type',
              'parent',
              'sibling-type',
              'sibling',
              'index-type',
              'index',
            ],
          ],
        },
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'natural',
        },
      ],
    },
  },
  ...[
    ...pluginTypescript.configs.strictTypeChecked,
    ...pluginTypescript.configs.stylisticTypeChecked,
    ...pluginQuery.configs['flat/recommended'],
  ].map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
  })),
  {
    name: 'type-aware-linting',
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    name: 'next/recommended',
    files: ['**/*.tsx'],
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      '@next/next/google-font-display': 'warn',
      '@next/next/google-font-preconnect': 'warn',
      '@next/next/next-script-for-ga': 'warn',
      '@next/next/no-async-client-component': 'warn',
      '@next/next/no-before-interactive-script-outside-document': 'warn',
      '@next/next/no-css-tags': 'warn',
      '@next/next/no-head-element': 'warn',
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'warn',
      '@next/next/no-page-custom-font': 'warn',
      '@next/next/no-styled-jsx-in-document': 'warn',
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-title-in-document-head': 'warn',
      '@next/next/no-typos': 'warn',
      '@next/next/no-unwanted-polyfillio': 'warn',
      '@next/next/inline-script-id': 'error',
      '@next/next/no-assign-module-variable': 'error',
      '@next/next/no-document-import-in-page': 'error',
      '@next/next/no-duplicate-head': 'error',
      '@next/next/no-head-import-in-document': 'error',
      '@next/next/no-script-component-in-head': 'error',
    },
  },
  {
    name: 'react/recommended',
    files: ['**/*.tsx'],
    ...pluginReact.configs.flat.recommended,
  },
  {
    name: 'react/jsx-runtime',
    files: ['**/*.tsx'],
    ...pluginReact.configs.flat['jsx-runtime'],
  },
  {
    files: ['**/*.tsx'],
    ...pluginReactHooks.configs['recommended-latest'],
  },
];

export default config;
