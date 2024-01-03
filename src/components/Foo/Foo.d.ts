import React from 'react'

export interface FooProps {
  type?: 'A' | 'B'
}

declare const Foo: React.FC<FooProps>

export default Foo