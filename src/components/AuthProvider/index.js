import { createContext, useState } from 'react'
import { apiUser } from '../../controllers/apiController'

export const AuthContext = createContext([false, () => { }, () => { }, () => { }])

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false)

  const login = async username => {

    // tenta criar, se der erro é pq existe, dai procura o usuário
    let newUser = false
    try {
      await apiUser.createUser(username)
      newUser = await apiUser.searchUser(username)
    } catch (error) {
      newUser = await apiUser.searchUser(username)
    } finally {
      setUser(newUser)
    }
  }

  const logout = () => setUser(false)

  return (
    <AuthContext.Provider value={[user, setUser, login, logout]}>
      {children}
    </AuthContext.Provider>
  )
}