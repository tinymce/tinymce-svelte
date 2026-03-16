import { defineConfig } from 'vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// As of right now, this is just used for building the storybook.
export default defineConfig({
  plugins: [svelte({
    preprocess: [vitePreprocess()]
  })]
});
