import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

const CartContext = createContext()

export function CartProvider({
  children,
}) {
  const [cartItems, setCartItems] =
    useState(() => {
      const storedCart =
        localStorage.getItem('cart')

      return storedCart
        ? JSON.parse(storedCart)
        : []
    })

  useEffect(() => {
    localStorage.setItem(
      'cart',
      JSON.stringify(cartItems)
    )
  }, [cartItems])

  function addToCart(product) {
    const existingProduct =
      cartItems.find(
        (item) => item.id === product.id
      )

    if (existingProduct) {
      const updatedCart =
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        )

      setCartItems(updatedCart)

      return
    }

    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ])
  }

  function removeFromCart(id) {
    const updatedCart =
      cartItems.filter(
        (item) => item.id !== id
      )

    setCartItems(updatedCart)
  }

  function clearCart() {
    setCartItems([])
  }

  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext)
}