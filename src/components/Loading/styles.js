import styled from 'styled-components'

export const LoadingStyled = styled.div`

  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: 30px;
    height: 30px;

    animation: 2s linear infinite rotate;

    @keyframes rotate {
      from {
        transform: rotate(0)
      }

      to {
        transform: rotate(360deg)
      }
    }
  }
`

