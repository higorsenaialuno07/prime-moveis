import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Trash2, Plus, Minus } from 'lucide-react'

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: 'Sofá Luxury',
      price: 3999,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    },

    {
      id: 2,
      name: 'Mesa Elegance',
      price: 1899,
      quantity: 2,
      image:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e',
    },
  ]

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className="cart-page">
      <Navbar />

      <section className="cart-section">
        <div className="cart-header">
          <h1>Seu Carrinho</h1>

          <p>
            Confira os produtos adicionados ao carrinho
          </p>
        </div>

        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div
                className="cart-card"
                key={item.id}
              >
                <div className="cart-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="cart-info">
                  <h2>{item.name}</h2>

                  <p>
                    Produto premium com design moderno.
                  </p>

                  <strong>
                    R$ {item.price}
                  </strong>
                </div>

                <div className="cart-quantity">
                  <button>
                    <Minus size={16} />
                  </button>

                  <span>{item.quantity}</span>

                  <button>
                    <Plus size={16} />
                  </button>
                </div>

                <div className="cart-remove">
                  <button>
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Resumo do Pedido</h2>

            <div className="summary-item">
              <span>Subtotal</span>

              <strong>
                R$ {total}
              </strong>
            </div>

            <div className="summary-item">
              <span>Frete</span>

              <strong>Grátis</strong>
            </div>

            <div className="summary-total">
              <span>Total</span>

              <h3>
                R$ {total}
              </h3>
            </div>

            <button className="checkout-btn">
              Finalizar Compra
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Cart