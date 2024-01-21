export interface Font {
  primary: string
  secondary: string
  tertiary: string
}

export interface Color {
  primary: {
    primary100: string
    primary200: string
    primary300: string
    primary400: string
    primary500: string
    primary600: string
    primary700: string
    primary800: string
    primary900: string
  },
  red: {
    red100: string
    red200: string
    red300: string
    red400: string
    red500: string
    red600: string
    red700: string
    red800: string
    red900: string
  },
  yellow: {
    yellow100: string
    yellow200: string
    yellow300: string
    yellow400: string
    yellow500: string
    yellow600: string
    yellow700: string
    yellow800: string
    yellow900: string
  },
  green: {
    green100: string
    green200: string
    green300: string
    green400: string
    green500: string
    green600: string
    green700: string
    green800: string
    green900: string
  },
  blue: {
    blue100: string
    blue200: string
    blue300: string
    blue400: string
    blue500: string
    blue600: string
    blue700: string
    blue800: string
    blue900: string
  }
}

export interface ThemeProviderProps {
  children: React.ReactNode
  theme?: DeepPartial<Theme>
}

export interface ThemeContextProps {
  children: React.ReactNode
  theme: Theme
}

type ColorsName = `primary.${keyof Color['primary']}`

declare global {
  export namespace Theme {
    export type { ColorsName }
  }

  export interface Theme {
    font: Font
    color: Color
  }
}
