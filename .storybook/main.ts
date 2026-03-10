import type { StorybookConfig } from '@storybook/svelte-vite';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },

  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],

  framework: {
    name: '@storybook/svelte-vite',
    options: {},
  },

  addons: ['@storybook/addon-svelte-csf', '@storybook/addon-docs']
};

export default config;
