import { useState } from "react"

import { apiPokemons } from '../../controllers/apiController'

import HomePokemon from "../../components/Pokemon"
import Loading from '../../components/Loading'
import { PokemonsContainer } from "./styles"
import { InfiniteScroll } from "../../components/InfiniteScroll"



const Home = () => {
  const [pokemons, setPokemons] = useState({ isLoading: false, data: [] })
  const [page, setPage] = useState(1)


  const getMorePokemons = async () => {

    if (page > 33) {
      return
    }

    // esse set vai fazer aparecer o Loading na página
    setPokemons(pokemons => ({
      isLoading: true,
      data: pokemons.data
    }))

    // vai trazer os próximos pokemons
    await apiPokemons.getAllPokemons(page)
      .then(res => setPokemons(pokemons => ({
        isLoading: false,
        data: [...pokemons.data, ...res.data]
      })))

    setPage(page + 1) // próxima requisição será a próxima página
  }

  return (
    <>
      <h1>Home</h1>
      <PokemonsContainer>
        {pokemons.data && pokemons.data.map(pokemon =>
          <HomePokemon key={pokemon.id} pokemon={pokemon} favorite />)}

        {pokemons.isLoading ?
          <Loading /> :
          <InfiniteScroll loadMore={getMorePokemons} />}
      </PokemonsContainer>
    </>
  )
}

export default Home