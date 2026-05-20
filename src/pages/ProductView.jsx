import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import {
  Heart,
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
} from 'lucide-react'

function ProductView() {
  const product = {
    name: 'Sofá Luxury Premium',
    price: 3999,
    oldPrice: 4599,
    category: 'Sofás',
    rating: 4.9,
    reviews: 128,
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    description:
      'Sofá sofisticado com acabamento premium, espuma de alta densidade e design contemporâneo para ambientes modernos.',
  }

  return (
    <div className="product-view-page">
      <Navbar />

      <section className="product-view-section">
        <div className="product-view-container">
          <div className="product-gallery">
            <div className="main-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="gallery-images">
              <img
                src={product.image}
                alt=""
              />

              <img
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e"
                alt=""
              />

              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                alt=""
              />
            </div>
          </div>

          <div className="product-details-content">
            <span className="product-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <div className="product-rating">
              <div className="stars">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>

              <span>
                {product.rating} ({product.reviews} avaliações)
              </span>
            </div>

            <p className="product-description">
              {product.description}
            </p>

            <div className="product-prices">
              <span className="old-price">
                R$ {product.oldPrice}
              </span>

              <h2>
                R$ {product.price}
              </h2>
            </div>

            <div className="product-actions">
              <button className="buy-btn">
                <ShoppingCart size={20} />

                Adicionar ao Carrinho
              </button>

              <button className="favorite-btn">
                <Heart size={20} />
              </button>
            </div>

            <div className="product-benefits">
              <div className="benefit-card">
                <Truck size={22} />

                <div>
                  <h3>Frete Grátis</h3>

                  <p>Para todo o Brasil</p>
                </div>
              </div>

              <div className="benefit-card">
                <ShieldCheck size={22} />

                <div>
                  <h3>Garantia</h3>

                  <p>12 meses de garantia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-extra-info">
        <div className="extra-info-container">
          <div className="extra-card">
            <h2>Descrição</h2>

            <p>
              Desenvolvido com materiais premium,
              estrutura reforçada e acabamento
              sofisticado para oferecer conforto
              e elegância ao ambiente.
            </p>
          </div>

          <div className="extra-card">
            <h2>Especificações</h2>

            <ul>
              <li>Material: Madeira maciça</li>
              <li>Espuma: Alta densidade</li>
              <li>Cor: Bege Premium</li>
              <li>Garantia: 12 meses</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProductView