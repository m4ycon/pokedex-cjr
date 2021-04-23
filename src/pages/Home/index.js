import { useEffect, useState } from "react"

import { apiPokemons } from '../../controllers/apiController'

import HomePokemon from "../../components/Pokemon"
import Loading from '../../components/Loading'
import { PokemonsContainer } from "./styles"
import Modal from './components/Modal' 


const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    (async () => {
      await apiPokemons.getAllPokemons()
        .then(res => setPokemons(res.data))
    })()
  }, [])

  const showPokemonModal = pokemonName => {

}Mo    setShowModal(true)
  }

  return (
    <>
      <h1>Home</h1>
        {<PokemonsContainer>
          {pokemons.length > 0 ? 
            pokemons.map(pokemon =>
            showPokemonModal  <HomePokemon
                key={pokemon.id}
                pokemon={pokemon}
                favorite
                onClick={() => showPokemonModal(pokemon.name)} />)
              : <Loading />
          }
        </PokemonsContainer>}

        <Modal onClose={setShowModal} />
      </>
  )
}

export default Home