import api from '../services/api'

export async function createUser(username) {
  return await api.post('/users', { username })
    .then(res => res.data)
    .catch(err => console.log(err))
}

export async function searchUser(username) {
  return await api.get('/users/' + username)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export default { createUser, searchUser }