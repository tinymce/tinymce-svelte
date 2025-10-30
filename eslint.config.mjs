// eslint.config.js
import tinymceEslintPlugin from "@tinymce/eslint-plugin";
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import svelteParser from 'svelte-eslint-parser';

export default [
  {
    files: ['**/*.svelte'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: svelteParser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        parser: tsparser,
        extraFileExtensions: ['.svelte'],
      },
    },
    plugins: {
      svelte,
      '@typescript-eslint': tseslint
    },
    rules: {
      ...svelte.configs.recommended.rules,
      eqeqeq: 'error',
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      "@tinymce": tinymceEslintPlugin
    },
    rules: {
      '@tinymce/prefer-fun': 'off',
      '@typescript-eslint/no-duplicate-imports': 'off',
      '@typescript-eslint/no-parameter-properties': 'off',
    },
  },
];
