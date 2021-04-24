import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { apiUser } from "../../controllers/apiController"
import { AuthContext } from "../AuthProvider"
import { MenuStyled } from "./styles"

export const Menu = () => {

  const [user, setUser] = useContext(AuthContext)

  const login = async () => {
    const username = 'ashh'

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

  const logout = async () => {
    setUser(false)
  }

  useEffect(() => {
    console.log(user)
  }, [user])

  return <MenuStyled>
    <Link to="/" className="home">Pokedex</Link>

    <div className="user">
      {user ?
        <>
          <Link to="/perfil" className="perfil-btn">User</Link>
          <button className="perfil-btn" onClick={logout}>Logout</button>
        </> :
        <button className="perfil-btn" onClick={login}>Login</button>}


    </div>
  </MenuStyled>
}

export default Menu