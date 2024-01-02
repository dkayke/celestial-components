import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['./pages/*mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: [{ from: './../src/assets/', to: '/assets' }],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-controls'
  ],
  typescript: {
    check: true
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  docs: {
    autodocs: 'tag'
  }
}
export default config
