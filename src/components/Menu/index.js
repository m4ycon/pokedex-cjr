import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../AuthProvider"
import Modal from "../Modal"
import ModalLogin from "../ModalLogin"
import { MenuStyled } from "./styles"

export const Menu = () => {
  const [showModal, setShowModal] = useState(false)

  const [user, , , logout] = useContext(AuthContext)

  return <MenuStyled>
    <Link to="/" className="home">Pokedex</Link>

    <div className="user">
      {user ?
        <>
          <Link to="/perfil" className="perfil-btn">
            Pokemons Favoritos de {user.user.username}
          </Link>
          <button className="perfil-btn" onClick={logout}>Logout</button>
        </> :
        <button className="perfil-btn" onClick={() => setShowModal(true)}>Login</button>}
    </div>

    {(showModal && !user) && <Modal setIsVisible={setShowModal} >
      <ModalLogin setIsVisible={setShowModal} />
    </Modal>}
  </MenuStyled>
}

export default Menu