import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// svelte.config.js
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: [vitePreprocess()]
  })]
})
