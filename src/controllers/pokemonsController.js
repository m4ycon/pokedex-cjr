import api from '../services/api'

export async function getAllPokemons() {
  return await api.get('/pokemons').then(res => res.data)
}

export async function getPokemon(name) {
  return await api.get('/pokemons/' + name).then(res => res.data)
}


export default { getAllPokemons, getPokemon }