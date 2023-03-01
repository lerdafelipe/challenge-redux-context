import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addProduct = (product) => {
    const idProduct = cart.findIndex(item => item.id === product.id)

    if (idProduct >= 0) {
      const newCart = structuredClone(cart)
      newCart[idProduct].quantity += 1
      return setCart(newCart)
    }

    const newProduct = { ...product, quantity: 1 }
    setCart(prev => [...prev, newProduct])
  }

  const total = cart.reduce((totalPrice, item) => {
    return (item.price * item.quantity) + totalPrice
  }, 0)

  const quantity = cart.reduce((totalProducts, item) => {
    return item.quantity + totalProducts
  }, 0)

  const removeProduct = (id) => {
    const newCart = cart.filter(item => item.id !== id)
    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, quantity, total, removeProduct }}>{children}</CartContext.Provider>
  )
}
