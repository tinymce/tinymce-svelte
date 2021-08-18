module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['svelte3', '@typescript-eslint'],
  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module'
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
        "@tinymce/prefer-fun": "off"
      }
    }
  ],
  settings: {
    'svelte3/typescript': () => require('typescript'),
    'svelte3/typescript': true
  }
}