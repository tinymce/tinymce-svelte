/** @typedef {import('storybook').config} */
module.exports = {
  core: {
    disableTelemetry: true,
  },
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
  ],
  framework: {
    name: "@storybook/svelte-vite",
    options: {},
  },
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
  ],
  docs: {
    autodocs: 'tag'
  },
  svelteOptions: {
    'preprocess': require('svelte-preprocess')()
  }
}