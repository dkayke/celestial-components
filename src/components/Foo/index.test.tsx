import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { Foo } from '.'
import ThemeProvider from '../../theme/ThemeProvider'

describe('Foo component', () => {
  it('renders Foo', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Foo />
      </ThemeProvider>
    )
    const text = getByText(/Celestial/i)
    expect(text).toBeInTheDocument()
  })
})
