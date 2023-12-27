import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Foo from '.'

test('renders Foo', () => {
  const { getByText } = render(<Foo />)
  const text = getByText(/Celestial/i)
  expect(text).toBeInTheDocument()
})
