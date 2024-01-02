import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Foo from '.'

describe('Foo component', () => {
  it('renders Foo type A', () => {
    const { getByText } = render(<Foo type="A" />)
    const text = getByText(/Celestial - A/i)
    expect(text).toBeInTheDocument()
  })
  
  it('renders Foo type B', () => {
    const { getByText } = render(<Foo type="B" />)
    const text = getByText(/Celestial - B/i)
    expect(text).toBeInTheDocument()
  })
})
