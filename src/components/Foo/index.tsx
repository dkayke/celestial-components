import { FC } from 'react'
import * as S from './style'
import { FooProps } from './Foo'


const Foo: FC<FooProps> = ({ type }) => {
  return (
    <>
      <S.Text>Celestial - {type}</S.Text>
    </>
  )
}

export default Foo
