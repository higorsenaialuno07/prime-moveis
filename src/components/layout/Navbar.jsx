import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>Prime Móveis</h2>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
      </nav>

      <div className="nav-buttons">
        <Link to="/login">
          <button className="login-btn">
            Entrar
          </button>
        </Link>

        <button className="cart-btn">
          Carrinho
        </button>
      </div>
    </header>
  )
}

export default Navbar