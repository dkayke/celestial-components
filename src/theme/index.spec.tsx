import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import celestialTheme, {
  ThemeContextProvider,
  useThemeContext,
  withThemeProvider
} from '.'
import ThemeProvider from './ThemeProvider'

describe('Theme', () => {
  describe('ThemeProvider', () => {
    const ThemeMock = {
      color: { primary: { primary100: '#ff0000' } }
    }

    beforeEach(() => {
      jest.mock('react', () => ({
        ...jest.requireActual('react'),
        useContext: jest.fn(() => celestialTheme)
      }))
    })

    test('deve renderizar corretamente com um tema fornecido', () => {
      const { container } = render(
        <ThemeContextProvider theme={celestialTheme}>
          <ThemeProvider theme={ThemeMock}>
            <p>Celestial</p>
          </ThemeProvider>
        </ThemeContextProvider>
      )

      expect(container).toMatchSnapshot()
    })

    test('deve renderizar corretamente com o tema do contexto', () => {
      const { container } = render(
        <ThemeContextProvider theme={celestialTheme}>
          <ThemeProvider theme={celestialTheme}>
            <p>Celestial</p>
          </ThemeProvider>
        </ThemeContextProvider>
      )

      expect(container).toMatchSnapshot()
    })
  })

  describe('ThemeContext', () => {
    const MockedComponent: React.FC = () => {
      const context = useThemeContext()
      return <p aria-readonly={context?.loaded}>Celestial</p>
    }

    const WrappedComponent = withThemeProvider(MockedComponent)
    const WrappedComponentRendered = withThemeProvider(<MockedComponent /> as unknown as never)

    beforeEach(() => {
      jest.mock('react', () => ({
        ...jest.requireActual('react'),
        useContext: jest.fn(() => ({ theme: celestialTheme, loaded: true }))
      }))
    })

    test('renders without error when used inside ThemeContextProvider', () => {
      render(
        <ThemeContextProvider theme={celestialTheme}>
          <WrappedComponent />
        </ThemeContextProvider>
      )

      expect(screen.getByText('Celestial')).toBeInTheDocument()
    })

    test('throws an error when used outside CelestialProvider', () => {
      const originalError = console.error
      console.error = jest.fn()

      expect(() => render(<WrappedComponentRendered />)).toThrow(
        /Component must be used inside CelestialProvider/
      )

      expect(() => render(<WrappedComponent />)).toThrow(
        /MockedComponent must be used inside CelestialProvider/
      )

      console.error = originalError
    })

    test('throws an error when used outside ThemeContextProvider', () => {
      const originalError = console.error
      console.error = jest.fn()

      expect(() => render(<MockedComponent />)).toThrow(
        /useThemeContext must be used inside ThemeContextProvider/
      )

      console.error = originalError
    })
  })
})
