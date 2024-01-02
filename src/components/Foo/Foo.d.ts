import { FC } from 'react'

export interface FooProps {
  type?: 'A' | 'B';
}

declare module 'FooModule' {
  declare const Foo: FC<FooProps>
}



export default Foo
