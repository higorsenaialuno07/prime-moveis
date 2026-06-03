import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { supabase } from '../services/supabase'
import { useTheme } from '../context/ThemeContext'

import '../styles/pages/auth.css'

function ResetPassword() {

  const navigate = useNavigate()
  const { theme } = useTheme()

  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleResetPassword(e) {

    e.preventDefault()
    setLoading(true)

    try {

      const { error } =
        await supabase.auth.updateUser({
          password
        })

      if (error) {
        alert(error.message)
        return
      }

      alert('Senha alterada com sucesso!')

      navigate('/login')

    } catch {

      alert('Erro ao alterar senha.')

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
            Redefinir Senha
          </h1>

          <p>
            Digite sua nova senha.
          </p>

        </div>

        <div className="auth-right">

          <form
            className="auth-form"
            onSubmit={handleResetPassword}
          >

            <h2>
              Nova Senha
            </h2>

            <div className="input-group">

              <label>
                Nova Senha
              </label>

              <input
                type="password"
                placeholder="Digite a nova senha"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

            </div>

            <button
              type="submit"
              className="auth-btn"
            >
              {loading
                ? 'Salvando...'
                : 'Alterar Senha'}
            </button>

          </form>

        </div>

      </div>

    </section>

  )
}

export default ResetPassword