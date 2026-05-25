import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <h2>Prime Móveis</h2>
      </div>

      <nav className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/products">
          Produtos
        </Link>

        <Link to="/contact">
          Contato
        </Link>

        <Link to="/about">
          Sobre
        </Link>

      </nav>

      <div className="navbar-actions">

        <Link to="/login">
          <button className="login-btn">
            Entrar
          </button>
        </Link>

        <Link to="/cart">
          <button className="cart-btn">
            Carrinho
          </button>
        </Link>

      </div>

    </header>
  )
}

export default Navbar