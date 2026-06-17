// Minimal Svelte loader for webpack/rspack.
// Used via inline loader syntax in test files:
//   import Editor from '!!<path>/svelte-loader.js!./Editor.svelte';
const { compile } = require('svelte/compiler');

module.exports = function svelteLoader(source) {
  const result = compile(source, {
    filename: this.resourcePath,
    generate: 'client',
    dev: false
  });

  result.warnings.forEach((w) => this.emitWarning(new Error(w.message)));

  return result.js.code;
};
