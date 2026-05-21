import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import heroImage from '../assets/images/Cama.jpeg'
import sofaLuxury from '../assets/images/sofa-luxury.jpeg'
import tableImage from '../assets/images/table.jpeg'

console.log(sofaLuxury)

function Home() {
  return (
    <div className="home-page">

      <Navbar />

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

          <div className="hero-buttons">

            <button className="primary-btn">
              Explorar Produtos
            </button>

            <button className="secondary-btn">
              Ver Catálogo
            </button>

          </div>

        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="Móveis"
          />
        </div>

      </section>

      <section className="categories">

        <div className="section-title">
          <h2>Categorias</h2>
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

      <section className="featured-products">

        <div className="section-title">
          <h2>Produtos em Destaque</h2>
        </div>

        <div className="products-grid">

          <div className="product-card">

            <div className="product-image">
<img
  src={sofaLuxury}
  alt="Sofá Luxury"
  style={{
    width:'300px',
    border:'5px solid red'
  }}
/>
</div>

            <div className="product-content">

              <h3>Sofá Luxury</h3>

              <p className="product-description">
                Design sofisticado para ambientes premium.
              </p>

              <div className="product-footer">

                <div className="product-price">
                  <span className="current-price">
                    R$ 2.499
                  </span>
                </div>

                <button className="product-btn">
                  Comprar
                </button>

              </div>

            </div>

          </div>

         <div className="product-card">

  <div className="product-image">
    <img
      src={tableImage}
      alt="Mesa Elegance"
    />
  </div>

  <div className="product-content">

    <h3>Mesa Elegance</h3>

              <p className="product-description">
                Perfeita para salas modernas.
              </p>

              <div className="product-footer">

                <div className="product-price">
                  <span className="current-price">
                    R$ 1.799
                  </span>
                </div>

                <button className="product-btn">
                  Comprar
                </button>

              </div>

            </div>

          </div>

          <div className="product-card">

            <div className="product-image">
              <img
                src="https://images.unsplash.com/photo-1484101403633-562f891dc89a"
                alt=""
              />
            </div>

            <div className="product-content">

              <h3>Cadeira Premium</h3>

              <p className="product-description">
                Conforto e elegância no mesmo produto.
              </p>

              <div className="product-footer">

                <div className="product-price">
                  <span className="current-price">
                    R$ 899
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