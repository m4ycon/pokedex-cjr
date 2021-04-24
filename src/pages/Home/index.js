import { useEffect, useState } from "react"

import { apiPokemons } from '../../controllers/apiController'

import HomePokemon from "../../components/Pokemon"
import Loading from '../../components/Loading'
import Modal from '../../components/Modal' 
import ModalPokemon from '../../components/ModalPokemon' 

import { PokemonsContainer } from "./styles"


const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const [showModal, setShowModal] = useState(false)

  const [selectedPokemon, setSelectedPokemon] = useState({})

  useEffect(() => {
    (async () => {
      await apiPokemons.getAllPokemons()
        .then(res => setPokemons(res.data))
    })()
  }, [])

  const showPokemonModal = pokemon => {
    setShowModal(true)
    setSelectedPokemon(pokemon)
  }

  return (
    <>
      <h1>Home</h1>
        {<PokemonsContainer>
          {pokemons.length > 0 ? 
            pokemons.map(pokemon =>
              <HomePokemon
                key={pokemon.id}
                pokemon={pokemon}
                favorite
                onClick={() => showPokemonModal(pokemon)} />)
              : <Loading />
          }
        </PokemonsContainer>}

        {showModal && <Modal setIsVisible={setShowModal}>
            <ModalPokemon pokemon={selectedPokemon} />
          </Modal>}
      </>
  )
}

export default Home