import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Navbar() {
  const { user, signOut } = useAuth()

  return (
    <header className="navbar">

      <div className="logo">
        <h2>Prime Móveis</h2>
      </div>

      <nav className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>

      <div className="navbar-actions">

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