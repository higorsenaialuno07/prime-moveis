import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Register() {
  const { signUp } = useAuth()

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister(e) {
    e.preventDefault()

    const { error } = await signUp(email, password)

    if (error) {
      alert(error.message)
      return
    }

    alert('Conta criada com sucesso!')
    navigate('/login')
  }

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleRegister}>
        <h1>Criar Conta</h1>

        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default Register