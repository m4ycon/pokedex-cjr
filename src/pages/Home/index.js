import { useEffect, useState } from "react"

import { apiPokemons } from '../../controllers/apiController'

import HomePokemon from "../../components/Pokemon"
import Loading from '../../components/Loading'
import { PokemonsContainer } from "./styles"



const Home = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    (async () => {
      await apiPokemons.getAllPokemons()
        .then(res => setPokemons(res.data))
    })()
  }, [])

  return (
  <>
    <h1>Home</h1>
    {<PokemonsContainer>
      {pokemons.length > 0 ? pokemons.map(pokemon =>
        <HomePokemon key={pokemon.id} pokemon={pokemon} favorite />)
        : <Loading />
      }
    </PokemonsContainer>}
  </>
  )
}

export default Home