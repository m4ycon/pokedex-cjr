import api from '../services/api'

export async function getAllPokemons(page = 0) {
  return await api.get('/pokemons', { params: { page } }).then(res => res.data)
}

export async function getPokemon(name) {
  return await api.get('/pokemons/' + name).then(res => res.data)
}


export default { getAllPokemons, getPokemon }