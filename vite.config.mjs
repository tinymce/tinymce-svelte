import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// As of right now, this is just used for building the storybook.
export default defineConfig({
  plugins: [svelte({
    preprocess: [vitePreprocess()]
  })]
});
