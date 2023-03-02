import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cart'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addProduct = (product) => {
    dispatch({
      type: 'ADD_CART',
      payload: product
    })
  }

  const total = state.reduce((totalPrice, item) => { return (item.price * item.quantity) + totalPrice }, 0)

  const quantity = state.reduce((totalProducts, item) => { return item.quantity + totalProducts }, 0)

  const removeProduct = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id
    })
  }

  const incrementQuantityProduct = (product) => {
    dispatch({
      type: 'INCREMENT',
      payload: product
    })
  }

  const decrementQuantityProduct = (product) => {
    dispatch({
      type: 'DECREMENT',
      payload: product
    })
  }

  return (
    <CartContext.Provider value={{ cart: state, addProduct, quantity, total, removeProduct, incrementQuantityProduct, decrementQuantityProduct }}>{children}</CartContext.Provider>
  )
}
