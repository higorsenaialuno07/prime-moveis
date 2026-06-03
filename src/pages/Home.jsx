import { Link, useNavigate } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import heroImage from '../assets/images/Cama.jpeg'
import sofaLuxury from '../assets/images/sofa-luxury.jpeg'
import tableImage from '../assets/images/table.jpeg'
import chairImage from '../assets/images/cadeira-premium.jpeg'

function Home() {
  const navigate = useNavigate()

  function handleBuy(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    )

    if (existingProductIndex !== -1) {
      cart[existingProductIndex] = {
        ...cart[existingProductIndex],
        quantity: cart[existingProductIndex].quantity + 1
      }
    } else {
      cart.push({
        ...product,
        quantity: 1
      })
    }

    localStorage.setItem('cart', JSON.stringify(cart))

    alert('Produto adicionado ao carrinho!')
    navigate('/cart')
  }

  const products = [
    {
      id: 1,
      name: 'Sofá Luxury',
      description: 'Design sofisticado para ambientes premium.',
      price: 2599.98,
      image: sofaLuxury
    },
    {
      id: 2,
      name: 'Mesa Elegance',
      description: 'Perfeita para salas modernas.',
      price: 771.86,
      image: tableImage
    },
    {
      id: 3,
      name: 'Cadeira Premium',
      description: 'Conforto e elegância no mesmo produto.',
      price: 1900,
      image: chairImage
    }
  ]

  return (
    <div className="home-page">

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <span className="hero-badge">
            Móveis Premium
          </span>

          <h1>
            Transforme sua casa com móveis modernos e elegantes
          </h1>

          <p>
            Descubra coleções sofisticadas para sala,
            quarto, cozinha e escritório com design contemporâneo.
          </p>

          <div className="hero-buttons">

            <Link to="/products" className="primary-btn">
              Explorar Produtos
            </Link>

            <Link to="/catalogo" className="secondary-btn">
              Ver Catálogo
            </Link>

          </div>

        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Móveis" />
        </div>

      </section>

      {/* CATEGORIES */}
      <section className="categories">

        <div className="section-title">
          <h2>Categorias</h2>
        </div>

        <div className="categories-grid">
          <div className="category-card"><h3>Sofás</h3></div>
          <div className="category-card"><h3>Mesas</h3></div>
          <div className="category-card"><h3>Cadeiras</h3></div>
          <div className="category-card"><h3>Armários</h3></div>
        </div>

      </section>

      {/* PRODUCTS */}
      <section className="featured-products">

        <div className="section-title">
          <h2>Produtos em Destaque</h2>
        </div>

        <div className="products-grid">

          {products.map((product) => (
            <div key={product.id} className="product-card">

              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-content">

                <h3>{product.name}</h3>

                <p className="product-description">
                  {product.description}
                </p>

                <div className="product-footer">

                  <span className="current-price">
                    {product.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </span>

                  <button
                    className="product-btn"
                    onClick={() => handleBuy(product)}
                  >
                    Comprar
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default Home