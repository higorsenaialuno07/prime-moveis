import { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'

import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

import { Trash2, Plus, Minus } from 'lucide-react'

function Cart() {

  const [cartItems, setCartItems] = useState([])
  const [clients, setClients] = useState([])
  const [selectedClient, setSelectedClient] = useState('')

  useEffect(() => {

    loadClients()

    const savedCart =
      JSON.parse(localStorage.getItem('cart')) || []

    const formattedCart = savedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
      price: Number(item.price)
    }))

    setCartItems(formattedCart)

  }, [])

  async function loadClients() {

    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('name')

    if (error) {
      console.error(error)
      return
    }

    setClients(data || [])
  }

  function updateCart(items) {

    setCartItems(items)

    localStorage.setItem(
      'cart',
      JSON.stringify(items)
    )
  }

  function removeItem(id) {

    const updatedCart =
      cartItems.filter((item) => item.id !== id)

    updateCart(updatedCart)
  }

  function increaseQuantity(id) {

    const updatedCart = cartItems.map((item) => {

      if (item.id === id) {

        return {
          ...item,
          quantity: item.quantity + 1
        }
      }

      return item
    })

    updateCart(updatedCart)
  }

  function decreaseQuantity(id) {

    const updatedCart = cartItems
      .map((item) => {

        if (item.id === id) {

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

  async function finishOrder() {

    if (cartItems.length === 0) {
      alert('Seu carrinho está vazio')
      return
    }

    if (!selectedClient) {
      alert('Selecione um cliente')
      return
    }

    const {
      data: { user }
    } = await supabase.auth.getUser()

    const total = cartItems.reduce(
      (acc, item) =>
        acc + Number(item.price) * item.quantity,
      0
    )

    const { error } = await supabase
      .from('orders')
      .insert([
        {
          user_id: user.id,
          client: selectedClient,
          total,
          status: 'Pendente'
        }
      ])

    if (error) {
      alert(error.message)
      return
    }

    alert('Compra finalizada com sucesso!')

    localStorage.removeItem('cart')
    setCartItems([])
    setSelectedClient('')
  }

  const total = cartItems.reduce((acc, item) => {
    return acc + Number(item.price) * item.quantity
  }, 0)

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

                  <div className="cart-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                  </div>

                  <div className="cart-info">

                    <h2>
                      {item.name}
                    </h2>

                    <p>
                      {item.description}
                    </p>

                    <strong>
                      R$ {Number(item.price).toFixed(2)}
                    </strong>

                  </div>

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

            <div className="client-select">

              <label>
                Cliente
              </label>

              <select
                value={selectedClient}
                onChange={(e) =>
                  setSelectedClient(e.target.value)
                }
              >

                <option value="">
                  Selecione um cliente
                </option>

                {clients.map((client) => (

                  <option
                    key={client.id}
                    value={client.name}
                  >
                    {client.name}
                  </option>

                ))}

              </select>

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