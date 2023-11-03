module.exports = {

  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.svelte']
      },
      rules: {
        "eqeqeq": "error"
      }
    },
    {
      files: ['*.ts'],
      extends: 'plugin:@tinymce/standard',
      parserOptions: {
        project: "tsconfig.json",
        sourceType: "module"
      },
      rules: {
        "@tinymce/prefer-fun": "off",
        "@typescript-eslint/no-duplicate-imports": "off",
        "@typescript-eslint/no-parameter-properties": "off"
      }
    }
  ]
}