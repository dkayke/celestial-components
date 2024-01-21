import { FC } from 'react'
import { FooProps } from './Foo.d'

import * as S from './style'
import { withThemeProvider } from '../../theme/ThemeContext'

export const Foo: FC<FooProps> = ({ color }) => {
  return <S.Text color={color}>Celestial</S.Text>
}

export default withThemeProvider(Foo) as FC<FooProps>
