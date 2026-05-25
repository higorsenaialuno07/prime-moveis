import { useEffect, useState } from 'react'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import { Trash2, Plus, Minus } from 'lucide-react'

import { supabase } from '../services/supabase'
import { useAuth } from '../context/AuthContext'

function Cart() {

  const { user } = useAuth()

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {

    if(user){
      loadCart()
    }

  }, [user])

  async function loadCart() {

    const { data, error } = await supabase
      .from('cart_items')
      .select('*')
      .eq('user_id', user.id)

    if(error){
      console.log(error)
      return
    }

    setCartItems(data)
  }

  async function removeItem(id) {

    await supabase
      .from('cart_items')
      .delete()
      .eq('id', id)

    loadCart()
  }

  async function increaseQuantity(item) {

    await supabase
      .from('cart_items')
      .update({
        quantity: item.quantity + 1
      })
      .eq('id', item.id)

    loadCart()
  }

  async function decreaseQuantity(item) {

    if(item.quantity <= 1){
      removeItem(item.id)
      return
    }

    await supabase
      .from('cart_items')
      .update({
        quantity: item.quantity - 1
      })
      .eq('id', item.id)

    loadCart()
  }

  async function finishOrder() {

    if(!user){
      alert('Faça login primeiro')
      return
    }

    const { error } = await supabase
      .from('orders')
      .insert([
        {
          user_id: user.id,
          total: total,
        },
      ])

    if(error){
      console.log(error)
      alert('Erro ao finalizar compra')
      return
    }

    await supabase
      .from('cart_items')
      .delete()
      .eq('user_id', user.id)

    alert('Compra finalizada com sucesso!')

    loadCart()
  }

  const total = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
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

                  <button
                    onClick={() =>
                      decreaseQuantity(item)
                    }
                  >
                    <Minus size={16} />
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item)
                    }
                  >
                    <Plus size={16} />
                  </button>

                </div>

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

            ))}

          </div>

          <div className="cart-summary">

            <h2>
              Resumo do Pedido
            </h2>

            <div className="summary-item">

              <span>Subtotal</span>

              <strong>
                R$ {total}
              </strong>

            </div>

            <div className="summary-item">

              <span>Frete</span>

              <strong>
                Grátis
              </strong>

            </div>

            <div className="summary-total">

              <span>Total</span>

              <h3>
                R$ {total}
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