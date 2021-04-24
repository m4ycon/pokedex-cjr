import { useContext, useEffect, useState } from "react"

import { apiPokemons } from '../../controllers/apiController'

import HomePokemon from "../../components/Pokemon"
import Loading from '../../components/Loading'
import Modal from '../../components/Modal' 
import ModalPokemon from '../../components/ModalPokemon' 
import { InfiniteScroll } from "../../components/InfiniteScroll"
import { AuthContext } from "../../components/AuthProvider"

import { PokemonsContainer } from "./styles"


const Home = () => {
  const [pokemons, setPokemons] = useState({ isLoading: false, data: [] })
  const [showModal, setShowModal] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState({})
  const [page, setPage] = useState(1)
  const [user] = useContext(AuthContext)

  
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
      .then(res => setPokemons(pokemons => {
        if (user) {
          pokemons.data.map(pokemon => {
            const i = user.pokemons.findIndex(pok => pok.id == pokemon.id)
            pokemon.favorito = i < 0 ? false : true
          })
        }

        return {
          isLoading: false,
          data: [...pokemons.data, ...res.data]
        }
      }))

    setPage(page + 1) // próxima requisição será a próxima página
  }

  // atualiza os favoritos
  useEffect(() => {
    setPokemons(pokemons => {
      if (user) {
        pokemons.data.map(pokemon => {
          const i = user.pokemons.findIndex(pok => pok.id == pokemon.id)
          pokemon.favorito = i >= 0
          return pokemon
        })
      }

      return {
        isLoading: false,
        data: pokemons.data
      }
    })

  }, [user])

  const showPokemonModal = pokemon => {
    setShowModal(true)
    setSelectedPokemon(pokemon)
  }

  return (
    <>
      <h1>Home</h1>
      {<PokemonsContainer>
        {pokemons.data && pokemons.data.map(pokemon =>
            <HomePokemon
              key={pokemon.id}
              pokemon={pokemon}
              favorite={pokemon.favorito}
              onClick={() => showPokemonModal(pokemon)} />)
        }


        {pokemons.isLoading ?
          <Loading /> :
          <InfiniteScroll loadMore={getMorePokemons} />}

      </PokemonsContainer>}

      {showModal && <Modal setIsVisible={setShowModal}>
          <ModalPokemon pokemon={selectedPokemon} />
        </Modal>}
    </>
  )
}

export default Home