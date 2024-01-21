import styled from 'styled-components'

const Text = styled.p`
font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => eval(`props.theme.color.${props.color || 'primary.primary800'}`)};
  font-size: 2rem;
  font-weight: bold;
`

export { Text }
