// @ts-check

import pluginJs from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
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
    name: 'plugin/js',
    files: ['**/*.{mjs,ts,tsx}'],
    ...pluginJs.configs.recommended,
  },
  {
    name: 'plugin/next',
    files: ['**/*.tsx'],
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
  {
    name: 'plugin/perfectionist',
    files: ['**/*.{mjs,ts,tsx}'],
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
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
  {
    name: 'plugin/react',
    files: ['**/*.tsx'],
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReact.configs.flat['jsx-runtime'].rules,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        jsxPragma: null,
      },
    },
  },
  {
    name: 'plugin/react-hooks',
    files: ['**/*.tsx'],
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs['recommended-latest'].rules,
    },
  },
  ...[
    ...pluginTypescript.configs.strictTypeChecked,
    ...pluginTypescript.configs.stylisticTypeChecked,
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
];

export default config;
