import type { Preview } from '@storybook/react'
import { withThemeProvider } from 'storybook-addon-theme-provider'
import ThemeProvider  from './../src/theme/ThemeProvider'

const preview: Preview = {
  decorators: [
    withThemeProvider(ThemeProvider as never)
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
