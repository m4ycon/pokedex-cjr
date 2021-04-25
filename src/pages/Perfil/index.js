import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"

import { TituloFavoritos } from "./styles"

import { AuthContext } from "../../components/AuthProvider"
import PokemonsContainer from "../../components/PokemonsContainer"
import Loading from "../../components/Loading"

const Perfil = () => {
  const [user] = useContext(AuthContext)
  const [pokemons, setPokemons] = useState([])

  const history = useHistory()

  useEffect(() => {
    if (!user) history.push('/')
  }, [])

  useEffect(() => {
    if (!user) return history.push('/')

    setPokemons(pokemons => ({
      ...pokemons,
      isLoading: true
    }))

    setPokemons(() => {
      const userFavPokemons = user.pokemons
      userFavPokemons.map(pokemon => {
        // se tem user, ve se ele é favorito ou não, senão, n tem favorito
        pokemon.favorito = user ?
          0 <= user.pokemons.findIndex(pok => pok.id === pokemon.id) : false
        return pokemon
      })

      return {
        isLoading: false,
        data: userFavPokemons
      }
    })
  }, [user])

  return user ? (
    <>
      <TituloFavoritos>Pokemons Favoritos de {user.user.username}</TituloFavoritos>
      <PokemonsContainer pokemons={pokemons}>

        {pokemons.isLoading && <Loading />}
      </PokemonsContainer>
    </>
  ) : ''
}

export default Perfil