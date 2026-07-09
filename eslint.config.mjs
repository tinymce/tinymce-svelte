// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import tinymceEslintPlugin from "@tinymce/eslint-plugin";
import tsparser from '@typescript-eslint/parser';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import svelteParser from 'svelte-eslint-parser';
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...tinymceEslintPlugin.configs.standard,
  {
    files: ['**/*.svelte'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: svelteParser,
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        parser: tsparser,
        extraFileExtensions: ['.svelte'],
        projectService: true
      }
    },
    plugins: {
      svelte,
      '@tinymce': tinymceEslintPlugin
    },
    rules: {
      ...svelte.configs.recommended.rules,
      eqeqeq: 'error'
    }
  },
  {
    files: ['src/main/**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json'
      },
    },
    plugins: {
      '@tinymce': tinymceEslintPlugin
    },
    rules: {
      '@tinymce/prefer-fun': 'off',
      '@typescript-eslint/no-duplicate-imports': 'off',
    }
  },
  {
    files: ['src/test/**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.test.json'
      },
    },
    plugins: {
      '@tinymce': tinymceEslintPlugin
    },
    rules: {
      '@tinymce/prefer-fun': 'off',
      '@typescript-eslint/no-duplicate-imports': 'off',
      "@typescript-eslint/no-require-imports": "off"
    }
  },
  ...storybook.configs["flat/recommended"]
]);
