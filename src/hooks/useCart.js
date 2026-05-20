import { useEffect, useState } from 'react'

export function useCart() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart')

    return storedCart
      ? JSON.parse(storedCart)
      : []
  })

  useEffect(() => {
    localStorage.setItem(
      'cart',
      JSON.stringify(cart)
    )
  }, [cart])

  function addToCart(product) {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )

      setCart(updatedCart)

      return
    }

    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ])
  }

  function removeFromCart(id) {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    )

    setCart(updatedCart)
  }

  function clearCart() {
    setCart([])
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  }
}