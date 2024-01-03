import { FC } from 'react'
import { FooProps } from './Foo.d'
import * as S from './style'

const Foo: FC<FooProps> = ({ type }) => {
  return (
    <>
      <S.Text>Celestial - {type}</S.Text>
    </>
  )
}

export default Foo
