import api from '../services/api'

export async function createUser(username) {
  return await api.post('/users', { username })
    .then(res => res.data)
}

export async function searchUser(username) {
  return await api.get('/users/' + username)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export async function addFavoritePokemon(username, pokemon_name) {
  return await api.post(`/users/${username}/starred/${pokemon_name}`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export async function removeFavoritePokemon(username, pokemon_name) {
  return await api.delete(`/users/${username}/starred/${pokemon_name}`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

const userController = { createUser, searchUser, addFavoritePokemon, removeFavoritePokemon }
export default userController