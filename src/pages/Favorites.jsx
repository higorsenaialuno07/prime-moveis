import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Heart, ShoppingCart } from 'lucide-react'

function Favorites() {
  const favoriteProducts = [
    {
      id: 1,
      name: 'Sofá Premium',
      price: 3499,
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    },

    {
      id: 2,
      name: 'Mesa Moderna',
      price: 1899,
      image:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e',
    },

    {
      id: 3,
      name: 'Poltrona Elegance',
      price: 1299,
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    },
  ]

  return (
    <div className="favorites-page">
      <Navbar />

      <section className="favorites-section">
        <div className="favorites-header">
          <h1>Favoritos</h1>

          <p>
            Seus produtos favoritos salvos.
          </p>
        </div>

        <div className="favorites-grid">
          {favoriteProducts.map((product) => (
            <div
              className="favorite-card"
              key={product.id}
            >
              <div className="favorite-image">
                <img
                  src={product.image}
                  alt={product.name}
                />

                <button className="favorite-btn">
                  <Heart size={20} />
                </button>
              </div>

              <div className="favorite-content">
                <h2>{product.name}</h2>

                <p>
                  Produto sofisticado e moderno
                  para ambientes premium.
                </p>

                <strong>
                  R$ {product.price}
                </strong>

                <button className="cart-add-btn">
                  <ShoppingCart size={18} />

                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Favorites