import { useEffect, useState } from 'react'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import { Trash2, Plus, Minus } from 'lucide-react'

function Cart() {

  const [cartItems, setCartItems] = useState([])

  // CARREGAR CARRINHO
  useEffect(() => {

    const savedCart =
      JSON.parse(localStorage.getItem('cart')) || []

    const formattedCart = savedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1
    }))

    setCartItems(formattedCart)

  }, [])

  // SALVAR CARRINHO
  function updateCart(items) {

    setCartItems(items)

    localStorage.setItem(
      'cart',
      JSON.stringify(items)
    )
  }

  // REMOVER ITEM
  function removeItem(id) {

    const updatedCart =
      cartItems.filter((item) => item.id !== id)

    updateCart(updatedCart)
  }

  // AUMENTAR QUANTIDADE
  function increaseQuantity(id) {

    const updatedCart = cartItems.map((item) => {

      if(item.id === id){

        return {
          ...item,
          quantity: item.quantity + 1
        }
      }

      return item
    })

    updateCart(updatedCart)
  }

  // DIMINUIR QUANTIDADE
  function decreaseQuantity(id) {

    const updatedCart = cartItems.map((item) => {

      if(item.id === id){

        return {
          ...item,
          quantity: item.quantity - 1
        }
      }

      return item
    })
    .filter((item) => item.quantity > 0)

    updateCart(updatedCart)
  }

  // FINALIZAR COMPRA
  function finishOrder() {

    if(cartItems.length === 0){
      alert('Seu carrinho está vazio')
      return
    }

    alert('Compra finalizada com sucesso!')

    localStorage.removeItem('cart')

    setCartItems([])
  }

  // TOTAL
  const total = cartItems.reduce((acc, item) => {

    const price =
      Number(
        item.price
          .replace('R$', '')
          .replace(/\./g, '')
          .replace(',', '.')
      )

    return acc + price * item.quantity

  }, 0)

  return (

    <div className="cart-page">

      <Navbar />

      <section className="cart-section">

        <div className="cart-header">

          <h1>
            Seu Carrinho
          </h1>

          <p>
            Confira os produtos adicionados ao carrinho
          </p>

        </div>

        <div className="cart-container">

          {/* PRODUTOS */}
          <div className="cart-items">

            {cartItems.length === 0 ? (

              <div className="empty-cart">

                <h2>
                  Seu carrinho está vazio
                </h2>

                <p>
                  Adicione produtos para continuar
                </p>

              </div>

            ) : (

              cartItems.map((item) => (

                <div
                  className="cart-card"
                  key={item.id}
                >

                  {/* IMAGEM */}
                  <div className="cart-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                  </div>

                  {/* INFO */}
                  <div className="cart-info">

                    <h2>
                      {item.name}
                    </h2>

                    <p>
                      {item.description}
                    </p>

                    <strong>
                      {item.price}
                    </strong>

                  </div>

                  {/* QUANTIDADE */}
                  <div className="cart-quantity">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      <Minus size={16} />
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      <Plus size={16} />
                    </button>

                  </div>

                  {/* REMOVER */}
                  <div className="cart-remove">

                    <button
                      onClick={() =>
                        removeItem(item.id)
                      }
                    >
                      <Trash2 size={20} />
                    </button>

                  </div>

                </div>

              ))

            )}

          </div>

          {/* RESUMO */}
          <div className="cart-summary">

            <h2>
              Resumo do Pedido
            </h2>

            <div className="summary-item">

              <span>
                Subtotal
              </span>

              <strong>
                R$ {total.toFixed(2)}
              </strong>

            </div>

            <div className="summary-item">

              <span>
                Frete
              </span>

              <strong>
                Grátis
              </strong>

            </div>

            <div className="summary-total">

              <span>
                Total
              </span>

              <h3>
                R$ {total.toFixed(2)}
              </h3>

            </div>

            <button
              className="checkout-btn"
              onClick={finishOrder}
            >
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