import { Link } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import heroImage from '../assets/images/Cama.jpeg'
import sofaLuxury from '../assets/images/sofa-luxury.jpeg'
import tableImage from '../assets/images/table.jpeg'
import chairImage from '../assets/images/cadeira-premium.jpeg'

function Home() {

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
            quarto, cozinha e escritório com design
            contemporâneo.
          </p>

          {/* BOTÕES FUNCIONANDO */}
          <div className="hero-buttons">

            <Link
              to="/products"
              className="primary-btn"
            >
              Explorar Produtos
            </Link>

            <Link
  to="/catalogo"
  className="secondary-btn"
>
  Ver Catálogo
</Link>

          </div>

        </div>

        <div className="hero-image">

          <img
            src={heroImage}
            alt="Móveis"
          />

        </div>

      </section>

      {/* CATEGORIES */}
      <section className="categories">

        <div className="section-title">
          <h2>
            Categorias
          </h2>
        </div>

        <div className="categories-grid">

          <div className="category-card">
            <h3>Sofás</h3>
          </div>

          <div className="category-card">
            <h3>Mesas</h3>
          </div>

          <div className="category-card">
            <h3>Cadeiras</h3>
          </div>

          <div className="category-card">
            <h3>Armários</h3>
          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <section className="featured-products">

        <div className="section-title">
          <h2>
            Produtos em Destaque
          </h2>
        </div>

        <div className="products-grid">

          {/* PRODUCT 1 */}
          <div className="product-card-sofa">

            <div className="product-image">

              <img
                src={sofaLuxury}
                alt="Sofá Luxury"
              />

            </div>

            <div className="product-content">

              <h3>
                Sofá Luxury
              </h3>

              <p className="product-description">
                Design sofisticado para ambientes premium.
              </p>

              <div className="product-footer">

                <div className="product-price">

                  <span className="current-price">
                    R$ 2599.98
                  </span>

                </div>

                <button className="product-btn">
                  Comprar
                </button>

              </div>

            </div>

          </div>

          {/* PRODUCT 2 */}
          <div className="product-card">

            <div className="product-image">

              <img
                src={tableImage}
                alt="Mesa Elegance"
              />

            </div>

            <div className="product-content">

              <h3>
                Mesa Elegance
              </h3>

              <p className="product-description">
                Perfeita para salas modernas.
              </p>

              <div className="product-footer">

                <div className="product-price">

                  <span className="current-price">
                    R$ 771.86
                  </span>

                </div>

                <button className="product-btn">
                  Comprar
                </button>

              </div>

            </div>

          </div>

          {/* PRODUCT 3 */}
          <div className="product-card">

            <div className="product-image">

              <img
                src={chairImage}
                alt="Cadeira Premium"
              />

            </div>

            <div className="product-content">

              <h3>
                Cadeira Premium
              </h3>

              <p className="product-description">
                Conforto e elegância no mesmo produto.
              </p>

              <div className="product-footer">

                <div className="product-price">

                  <span className="current-price">
                    R$ 1900
                  </span>

                </div>

                <button className="product-btn">
                  Comprar
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>

  )
}

export default Home