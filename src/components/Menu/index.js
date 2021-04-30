import { useContext } from "react"
import { Link } from "react-router-dom"

import loginImg from '../../assets/log-in.svg'
import logoutImg from '../../assets/log-out.svg'
import userImg from '../../assets/user.svg'

import { AuthContext } from "../AuthProvider"
import { MenuStyled } from "./styles"

export const Menu = () => {

  const [user, , login, logout] = useContext(AuthContext)

  return <MenuStyled>
    <Link to="/" className="home">Pokedex</Link>

    <div className="user">
      {user ?
        <>
          <Link to="/perfil" className="icon-btn">
            <img src={userImg} alt="perfil"/>
          </Link>
          <button className="icon-btn" onClick={logout}>
            <img src={logoutImg} alt="perfil"/>
          </button>
        </> :
        <button className="icon-btn" onClick={login}>
          <img src={loginImg} alt="perfil"/>
        </button>}
    </div>

  </MenuStyled>
}

export default Menu