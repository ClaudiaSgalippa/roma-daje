import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('roma-daje-cart')
      return savedCart ? JSON.parse(savedCart) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('roma-daje-cart', JSON.stringify(cartItems))
  }, [cartItems])

  function addToCart(product, quantity = 1) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...currentItems, { ...product, quantity }]
    })
  }

  function updateQuantity(productId, quantity) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId ? { ...item, quantity } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  function removeFromCart(productId) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    )
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}