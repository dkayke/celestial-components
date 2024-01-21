import React, { FC, createContext, useContext } from 'react'
import { ThemeContextProps } from '.'
import celestialTheme from '.'

export const ThemeContext = createContext<{ theme: Theme; loaded: boolean }>({
  theme: {} as Theme,
  loaded: false
})

export const ThemeContextProvider: React.FC<ThemeContextProps> = ({
  children,
  theme = celestialTheme
}) => {
  return (
    <ThemeContext.Provider
      value={{
        theme,
        loaded: true
      }}
    >
      {children}
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
      const componentName = Component.displayName || Component.name || 'Component'
      throw new Error(`${componentName} must be used inside CelestialProvider`)
    }

    return <Component {...props} theme={context} />
  }
}
