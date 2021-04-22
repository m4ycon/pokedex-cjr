import { ElementBall, FavoriteStar, PokemonContainer, PokemonName } from "./styles"

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

export const Favorite = ({ name, starred }) => {

  return <FavoriteStar>
    <img src={starred ? starSvg : emptyStarSvg} alt={name} />
  </FavoriteStar>
}

export const HomePokemon = ({ pokemon, favorite }) => {
  const elements = pokemon.kind.split(';')

  return <PokemonContainer>
    <img src={pokemon.image_url} alt={pokemon.name} />

    {elements.map(element => <Elements key={element} name={element} />)}

    <Favorite name={'star'} starred={favorite} />

    <PokemonName>
      <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    </PokemonName>

  </PokemonContainer>
}

export default HomePokemon