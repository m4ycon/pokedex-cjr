import HomePokemon from '../Pokemon'

import { PokemonsContainerStyled } from './styles'

export const PokemonsContainer = ({ pokemons, children }) => {

  return <PokemonsContainerStyled>
    {pokemons.data && pokemons.data.map(pokemon =>
      <HomePokemon
        key={pokemon.id}
        pokemon={pokemon}
        favorite={pokemon.favorito}/>)
    }

    {children}

  </PokemonsContainerStyled>
}

export default PokemonsContainer