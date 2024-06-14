module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        project: './tsconfig.json',
        parser: '@typescript-eslint/parser',
      },
      rules: {
        eqeqeq: 'error',
      },
    },
    {
      files: ['*.ts'],
      extends: 'plugin:@tinymce/standard',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@tinymce/prefer-fun': 'off',
        '@typescript-eslint/no-duplicate-imports': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
      },
    },
  ],
};
