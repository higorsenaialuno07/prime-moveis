import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'
import '../styles/pages/auth.css'

function Login() {

  const { signIn, signUp } = useAuth()
  const navigate = useNavigate()
  const { theme } = useTheme()

  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    try {
      let error

      if (isRegister) {
        ({ error } = await signUp(email, password))

        if (!error) {
          alert('Conta criada com sucesso!')
        }
      } else {
        ({ error } = await signIn(email, password))

        if (!error) {
          navigate('/dashboard')
        }
      }

      if (error) {
        alert(error.message)
      }

    } catch {
      alert('Erro inesperado.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={`auth-page ${theme}`}>

      <div className="auth-overlay"></div>

      <div className="auth-container">

        <div className="auth-left">

          <span className="auth-badge">
            Prime Móveis
          </span>

          <h1>
            {isRegister ? 'Crie sua conta' : 'Bem-vindo novamente'}
          </h1>

          <p>
            Acesse a plataforma premium da Prime Móveis e descubra móveis modernos e sofisticados.
          </p>

        </div>

        <div className="auth-right">

          <form className="auth-form" onSubmit={handleSubmit}>

            <h2>
              {isRegister ? 'Criar Conta' : 'Entrar'}
            </h2>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="auth-btn">
              {loading ? 'Carregando...' : isRegister ? 'Cadastrar' : 'Entrar'}
            </button>

            <span
              className="switch-auth"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister
                ? 'Já possui conta? Entrar'
                : 'Não possui conta? Criar conta'}
            </span>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Login