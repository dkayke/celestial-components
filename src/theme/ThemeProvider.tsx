import React, { useContext } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import celestialTheme from './'
import { ThemeProviderProps } from './theme.d'
import { ThemeContext, ThemeContextProvider } from './ThemeContext'

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

const merge = (theme: Theme, newTheme?: DeepPartial<Theme>): Theme => {
  return {
    color: {
      primary: { ...theme.color.primary, ...newTheme?.color?.primary }
    },
    font: { ...theme.font, ...newTheme?.font }
  }
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const { theme: contextTheme } = useContext(ThemeContext)
  return (
    <ThemeContextProvider theme={merge(celestialTheme, theme as Theme)}>
      <SCThemeProvider theme={contextTheme}>
        {children}
      </SCThemeProvider>
    </ThemeContextProvider>
  )
}

export default ThemeProvider
