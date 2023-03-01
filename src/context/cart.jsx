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

  return (
    <CartContext.Provider value={{ cart, addProduct }}>{children}</CartContext.Provider>
  )
}
