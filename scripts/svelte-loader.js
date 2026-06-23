// Minimal Svelte loader for webpack/rspack.
const { compile } = require('svelte/compiler');

module.exports = function svelteLoader(source) {
  const result = compile(source, {
    filename: this.resourcePath,
    generate: 'client',
    dev: true
  });

  result.warnings.forEach((w) => this.emitWarning(new Error(w.message)));

  return result.js.code;
};
