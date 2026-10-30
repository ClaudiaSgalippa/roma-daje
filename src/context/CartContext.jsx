import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

const MAX_QUANTITY = 99

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('roma-daje-cart')
      const parsedCart = savedCart ? JSON.parse(savedCart) : []

      // Controlla anche i dati già salvati nel localStorage
      return parsedCart.map((item) => ({
        ...item,
        quantity: Math.min(
          Math.max(1, Math.floor(Number(item.quantity) || 1)),
          MAX_QUANTITY,
        ),
      }))
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('roma-daje-cart', JSON.stringify(cartItems))
  }, [cartItems])

  function addToCart(product, quantity = 1) {
    const requestedQuantity = Math.max(
      1,
      Math.floor(Number(quantity) || 1),
    )

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: Math.min(
                  item.quantity + requestedQuantity,
                  MAX_QUANTITY,
                ),
              }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: Math.min(requestedQuantity, MAX_QUANTITY),
        },
      ]
    })
  }

  function updateQuantity(productId, quantity) {
    const requestedQuantity = Math.floor(Number(quantity) || 0)

    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: Math.min(requestedQuantity, MAX_QUANTITY),
              }
            : item,
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