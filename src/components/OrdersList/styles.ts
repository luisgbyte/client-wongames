import styled from 'styled-components'
import * as GameItemStyles from 'components/GameItem/styles'

export const Wrapper = styled.div`
  ${GameItemStyles.Wrapper} {
    &:last-child {
      break-before: 0;
    }
  }
`
