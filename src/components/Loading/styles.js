import styled from 'styled-components'

export const LoadingStyled = styled.img`
  width: 30px;

  animation: 2s linear infinite rotate;

  @keyframes rotate {
    from {
      transform: rotate(0)
    }

    to {
      transform: rotate(360deg)
    }
  }
`

