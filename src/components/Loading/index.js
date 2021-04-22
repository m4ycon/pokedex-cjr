import { LoadingStyled } from "./styles"

import pokeballImg from '../../assets/pokeball.png'

const Loading = () => {
  return <LoadingStyled>
    <img src={pokeballImg} alt="carregando"/>
  </LoadingStyled>
}

export default Loading