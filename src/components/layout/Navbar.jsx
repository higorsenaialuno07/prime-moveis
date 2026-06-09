import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Navbar() {

  const { user, signOut } = useAuth()

  function toggleTheme() {

  document.body.classList.toggle('dark')

  const isDark =
    document.body.classList.contains('dark')

  localStorage.setItem(
    'theme',
    isDark ? 'dark' : 'light'
  )

}
  return (

    <header className="navbar">

      <div className="logo">
        <h2>Prime Móveis</h2>
      </div>

      <nav className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/cart">Carrinho</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/about">Sobre</Link>
      </nav>

      <div className="navbar-actions">

        {/* BOTÃO TEMA */}
        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          🌙
        </button>

        {user ? (
          <>
            <Link to="/dashboard">
              <button className="dashboard-btn">
                Dashboard
              </button>
            </Link>

            <button
              type="button"
              className="logout-btn"
              onClick={signOut}
            >
              Sair
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="login-btn">
              Entrar
            </button>
          </Link>
        )}

      </div>

    </header>
  )
}

export default Navbar