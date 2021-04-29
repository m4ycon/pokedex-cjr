import { useContext, useState } from "react"
import { AuthContext } from "../AuthProvider"
import { FormStyled } from "./styles"

export const ModalLogin = ({ setIsVisible }) => {
  const [username, setUsername] = useState('')
  const [, , login] = useContext(AuthContext)

  const handleLogin = e => {
    e.preventDefault()
    login(username)
      .then(() => setIsVisible(false))
  }

  return <FormStyled onSubmit={handleLogin}>
    <div className="username-container">
      <label htmlFor="username">Username</label>
      <input 
        type="text" 
        name="username" 
        onChange={e => setUsername(e.target.value)} 
        required
      />
    </div>
    <input type="submit" value="Entrar" />
  </FormStyled>
}

export default ModalLogin