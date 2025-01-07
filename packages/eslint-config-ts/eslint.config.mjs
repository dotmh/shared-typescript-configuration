import typescriptEslint from '@typescript-eslint/eslint-plugin';
import promise from 'eslint-plugin-promise';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import {FlatCompat} from '@eslint/eslintrc';

const compat = new FlatCompat({
  //   baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      promise,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'script',

      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },

    rules: {
      'quotes': [2, 'single', 'avoid-escape'],
      'no-console': 'error',
      'camelcase': 2,
      'promise/catch-or-return': 'error',
      'promise/prefer-await-to-then': 'error',
      'promise/prefer-await-to-callbacks': 'warn',
      'promise/always-return': 'error',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      'no-implicit-coercion': [2],
      '@typescript-eslint/no-explicit-any': 'off',
    },

    ignores: ['dist/', 'node_modules/', '**/*.js', '**/*.mjs'],
  },
];
