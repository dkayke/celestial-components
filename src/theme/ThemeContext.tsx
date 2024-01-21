import React, { FC, createContext, useContext } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { ThemeContextProviderProps, ThemeContextProps } from './index'
import { celestialTheme } from './theme'

export const ThemeContext = createContext<ThemeContextProps>({
  theme: celestialTheme as Theme,
  loaded: false
})

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
  theme
}) => {
  return (
    <ThemeContext.Provider
      value={{
        theme,
        loaded: true
      }}
    >
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (context.loaded === false) {
    throw new Error('useThemeContext must be used inside ThemeContextProvider')
  }
  return context
}

export const withThemeProvider = <T,>(Component: FC<T>): FC<T> => {
  return (props) => {
    const context = useContext(ThemeContext)

    if (!context.loaded) {
      const componentName =
        Component.displayName || Component.name || 'Component'
      throw new Error(`${componentName} must be used inside CelestialProvider`)
    }

    return <Component {...props} theme={context.theme} />
  }
}
