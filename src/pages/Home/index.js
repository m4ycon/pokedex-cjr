import { useContext, useEffect, useState } from "react"

import { apiPokemons } from '../../controllers/apiController'

import Loading from '../../components/Loading'
import { InfiniteScroll } from "../../components/InfiniteScroll"
import { AuthContext } from "../../components/AuthProvider"
import PokemonsContainer from "../../components/PokemonsContainer"


const Home = () => {
  const [pokemons, setPokemons] = useState({ isLoading: false, data: [] })
  const [page, setPage] = useState(1)
  const [user] = useContext(AuthContext)


  const getMorePokemons = async () => {

    if (page > 33) return

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

    updateFavPokemons()

    setPage(page => page + 1)
  }

  const updateFavPokemons = () => {
    setPokemons(pokemons => {
      pokemons.data.map(pokemon => {
        // se tem user, ve se ele é favorito ou não, senão, n tem favorito
        pokemon.favorito = user ?
          0 <= user.pokemons.findIndex(pok => pok.id === pokemon.id) : false
        return pokemon
      })

      return {
        isLoading: false,
        data: pokemons.data
      }
    })
  }

  // atualiza os favoritos
  useEffect(updateFavPokemons, [user])

  return (
    <>
      {<PokemonsContainer pokemons={pokemons}>

        {pokemons.isLoading ?
          <Loading /> :
          <InfiniteScroll loadMore={getMorePokemons} />}
      </PokemonsContainer>}
    </>
  )
}

export default Home