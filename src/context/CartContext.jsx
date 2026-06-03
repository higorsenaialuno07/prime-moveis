import { createContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cart')
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  function addToCart(product) {
    setCartItems((prev) => {
      const exists = prev.find(i => i.id === product.id)

      if (exists) {
        return prev.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter(i => i.id !== id))
  }

  function clearCart() {
    setCartItems([])
  }

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext