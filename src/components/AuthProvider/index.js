import { createContext, useState } from 'react'

import { apiUser } from '../../controllers/apiController'

import Modal from '../Modal'
import ModalLogin from '../ModalLogin'

export const AuthContext = createContext([false, () => { }, () => { }, () => { }])

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const login = async username => {
    if (!showModal) return setShowModal(true)

    // tenta criar, se der erro é pq existe, dai procura o usuário
    await apiUser.createUser(username)
      .catch(err => console.error('Usuário já existe'))
      .finally(async () => {
        const newUser = await apiUser.searchUser(username)
        setUser(newUser)
      })
  }

  const logout = () => setUser(false)

  return (
    <AuthContext.Provider value={[user, setUser, login, logout]}>
      {children}

      {(showModal && !user) && <Modal setIsVisible={setShowModal} >
        <ModalLogin setIsVisible={setShowModal} />
      </Modal>}
    </AuthContext.Provider>
  )
}