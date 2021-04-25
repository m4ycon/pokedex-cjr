import { useState } from 'react'

import Modal from '../Modal'
import ModalPokemon from '../ModalPokemon'
import HomePokemon from '../Pokemon'

import { PokemonsContainerStyled } from './styles'

export const PokemonsContainer = ({ pokemons, children }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState({})

  const showPokemonModal = pokemon => {
    setShowModal(true)
    setSelectedPokemon(pokemon)
  }

  return <PokemonsContainerStyled>
    {pokemons.data && pokemons.data.map(pokemon =>
      <HomePokemon
        key={pokemon.id}
        pokemon={pokemon}
        favorite={pokemon.favorito}
        onClick={() => showPokemonModal(pokemon)} />)
    }

    {children}

    {showModal && <Modal setIsVisible={setShowModal}>
      <ModalPokemon pokemon={selectedPokemon} />
    </Modal>}
  </PokemonsContainerStyled>
}

export default PokemonsContainer