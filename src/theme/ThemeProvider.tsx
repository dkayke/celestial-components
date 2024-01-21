import React from 'react'
import celestialTheme from './'
import { ThemeContextProvider } from './ThemeContext'
import { ThemeProviderProps } from './theme.d'

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

const merge = (theme: Theme, newTheme?: DeepPartial<Theme>): Theme => {
  return {
    color: {
      primary: { ...theme.color.primary, ...newTheme?.color?.primary },
      red: { ...theme.color.red, ...newTheme?.color?.red },
      yellow: { ...theme.color.yellow, ...newTheme?.color?.yellow },
      green: { ...theme.color.green, ...newTheme?.color?.green },
      blue: { ...theme.color.blue, ...newTheme?.color?.blue },
    },
    font: { ...theme.font, ...newTheme?.font }
  }
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const customTheme = merge(celestialTheme, theme as Theme)
  return (
    <ThemeContextProvider theme={customTheme}>
      {children}
    </ThemeContextProvider>
  )
}

export default ThemeProvider
