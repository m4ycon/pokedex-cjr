import { useContext, useState } from "react"
import { AuthContext } from "../AuthProvider"
import Loading from "../Loading"
import { FormStyled } from "./styles"

export const ModalLogin = ({ setIsVisible }) => {
  const [username, setUsername] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [, , login] = useContext(AuthContext)

  const handleLogin = e => {
    e.preventDefault()
    setIsLoading(true)
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
    <button type="submit">
      {isLoading ? <Loading /> : 'Login'}
    </button>
  </FormStyled>
}

export default ModalLogin