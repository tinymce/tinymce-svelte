import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import execute from "rollup-plugin-execute";
import pkg from './package.json';
import { svelteTesting } from '@testing-library/svelte/vite';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

const name = 'Editor'; // pkg.name.replace(/-\w/g, m => m[1].toUpperCase());

export default {
	// input: 'src/main.ts',
  input: 'src/main/index.ts',
  output: [
    { file: pkg.module, format: 'es', sourcemap: true },
    { 
      file: pkg.main,
      format: 'umd',
      name,
      sourcemap: true,
      plugins: [
        execute([
          'tsc --outDir ./dist --declaration',
          'node scripts/preprocess.js'
        ])
      ]
    },
    { file: pkg.main.replace('.js','.min.js'), format: 'iife', name, plugins: [terser()] }
  ],
	// output: {
	// 	sourcemap: true,
	// 	format: 'iife',
	// 	name: 'app',
	// 	file: 'public/build/bundle.js'
	// },
	plugins: [
		svelte({
			preprocess: sveltePreprocess(),
		}),
    svelteTesting(),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		// resolve({
		// 	browser: true,
		// 	dedupe: ['svelte']
		// }),
    resolve(),
		commonjs(),
		typescript({
			sourceMap: !production,
			inlineSources: !production
		}),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		// production && terser()
	],
	watch: {
		clearScreen: false
	}
};
