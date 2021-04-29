import { useContext, useEffect, useState } from "react"

import { BlackBG, ElementBall, FavoriteStar, PokemonContainer, PokemonsAttributes } from "./styles"
import { AuthContext } from "../AuthProvider"

import bugImg from '../../assets/elementos/bug.png'
import darkImg from '../../assets/elementos/dark.png'
import dragonImg from '../../assets/elementos/dragon.png'
import eletricImg from '../../assets/elementos/eletric.png'
import fairyImg from '../../assets/elementos/fairy.png'
import fightingImg from '../../assets/elementos/fighting.png'
import fireImg from '../../assets/elementos/fire.png'
import flyingImg from '../../assets/elementos/flying.png'
import ghostImg from '../../assets/elementos/ghost.png'
import grassImg from '../../assets/elementos/grass.png'
import groundImg from '../../assets/elementos/ground.png'
import iceImg from '../../assets/elementos/ice.png'
import normalImg from '../../assets/elementos/normal.png'
import poisonImg from '../../assets/elementos/poison.png'
import psychicImg from '../../assets/elementos/psychic.png'
import rockImg from '../../assets/elementos/rock.png'
import steelImg from '../../assets/elementos/steel.png'
import waterImg from '../../assets/elementos/water.png'

import emptyStarSvg from '../../assets/empty-star.svg'
import starSvg from '../../assets/star.svg'
import { apiUser } from "../../controllers/apiController"


export const Elements = ({ name }) => {

  const elementsImg = {
    bug: bugImg,
    dark: darkImg,
    dragon: dragonImg,
    electric: eletricImg,
    fairy: fairyImg,
    fighting: fightingImg,
    fire: fireImg,
    flying: flyingImg,
    ghost: ghostImg,
    grass: grassImg,
    ground: groundImg,
    ice: iceImg,
    normal: normalImg,
    poison: poisonImg,
    psychic: psychicImg,
    rock: rockImg,
    steel: steelImg,
    water: waterImg,
  }

  return <ElementBall title={name}>
    <img src={elementsImg[name]} alt={name} />
  </ElementBall>
}

export const Favorite = ({ starred, ...props }) => {

  return <FavoriteStar {...props}>
    <img src={starred ? starSvg : emptyStarSvg} alt={'favoritar'} />
  </FavoriteStar>
}

export const HomePokemon = ({ pokemon, favorite, ...props }) => {
  const [user, setUser] = useContext(AuthContext)
  const [isDetailsVisible, setIsDetailsVisible] = useState(false)

  const elements = pokemon.kind.split(';')

  const favoritar = async (pokemon) => {
    if (user) {
      let res = user
      if (pokemon.favorito) {
        res = await apiUser.removeFavoritePokemon(user.user.username, pokemon.name)
      } else {
        res = await apiUser.addFavoritePokemon(user.user.username, pokemon.name)
      }
      setUser(res)
    }
  }


  return <>
    <PokemonContainer className={isDetailsVisible ? "visible" : ''}>
      <div {...props} onClick={() => setIsDetailsVisible(true)}>

        <img src={pokemon.image_url} alt={pokemon.name} />

        {elements.map(element => <Elements key={element} name={element} />)}

        <PokemonsAttributes className={isDetailsVisible ? "visible" : ''}>
          <div>
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
          </div>

          <div>
            <h2>#{pokemon.number}</h2>
          </div>

          <div>
            <h2>Weight: {pokemon.weight}</h2>
          </div>

          <div>
            <h2>Height: {pokemon.height}</h2>
          </div>
        </PokemonsAttributes>
      </div>

      <Favorite starred={favorite} onClick={() => favoritar(pokemon)} />

    </PokemonContainer>
    {isDetailsVisible && <BlackBG onClick={() => setIsDetailsVisible(false)} />}
  </>
}

export default HomePokemon