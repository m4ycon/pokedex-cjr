import api from '../services/api'

export async function getAllPokemons() {
  const response = await api.get('/pokemons').then(res => res.data)
  return response
}


export default { getAllPokemons }