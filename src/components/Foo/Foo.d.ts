import React from 'react'

export interface FooProps {
  color?: Theme.ColorsName
}

declare const Foo: React.FC<FooProps>

export default Foo
