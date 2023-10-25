const path = require('path');

module.exports = {
  "core": {
    "builder": "webpack5"
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "svelteOptions": {
    "preprocess": require("svelte-preprocess")()
  },
  'webpackFinal': (config) => {
    config.resolve.alias.svelte = path.resolve('node_modules', 'svelte');
    return config;
  }
}