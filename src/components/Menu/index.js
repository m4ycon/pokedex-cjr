import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../AuthProvider"
import { MenuStyled } from "./styles"

export const Menu = () => {

  const [user, , login, logout] = useContext(AuthContext)

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
        <button className="perfil-btn" onClick={login}>Login</button>}
    </div>

  </MenuStyled>
}

export default Menu