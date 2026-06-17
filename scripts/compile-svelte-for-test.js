// Compiles Editor.svelte to plain JS for bedrock tests.
// Bedrock uses webpack with ts-loader which cannot process .svelte files.
// This produces src/test/compiled/Editor.js with the Svelte runtime imported
// as an external (from node_modules/svelte), so tests and the component share
// the same Svelte runtime instance.
const { compile } = require('svelte/compiler');
const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, '../src/main/component/Editor.svelte');
const outFile = path.join(__dirname, '../src/test/compiled/Editor.js');

const src = fs.readFileSync(srcFile, 'utf-8');
const result = compile(src, {
  filename: 'Editor.svelte',
  generate: 'client',
  dev: false
});

if (result.warnings.length > 0) {
  result.warnings.forEach((w) => console.warn('Svelte warning:', w.message));
}

// The compiled output imports './Utils' which is relative to Editor.svelte's location.
// Rewrite it to point to the correct path from the output location.
let code = result.js.code.replace(
  "from './Utils'",
  "from '../../main/component/Utils'"
);

const outDir = path.dirname(outFile);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, code, 'utf-8');
console.log(`Compiled Editor.svelte → ${path.relative(path.join(__dirname, '..'), outFile)}`);
