import { updateLocalStorage } from '../logic/cartLocalStorage'

export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_CART': {
      const idProduct = state.findIndex(item => item.id === payload.id)
      if (idProduct >= 0) {
        const newCart = structuredClone(state)
        newCart[idProduct].quantity += 1
        updateLocalStorage(newCart)
        return newCart
      }
      const newProduct = { ...payload, quantity: 1 }
      updateLocalStorage([...state, newProduct])
      return [...state, newProduct]
    }
    case 'REMOVE_ITEM': {
      const newCart = state.filter(item => item.id !== payload)
      updateLocalStorage(newCart)
      return newCart
    }
    case 'INCREMENT': {
      const indexProduct = state.findIndex(item => item.id === payload.id)
      const newCart = structuredClone(state)
      newCart[indexProduct].quantity += 1
      updateLocalStorage(newCart)
      return newCart
    }
    case 'DECREMENT': {
      const indexProduct = state.findIndex(item => item.id === payload.id)
      const newCart = structuredClone(state)
      newCart[indexProduct].quantity -= 1
      updateLocalStorage(newCart)
      return newCart
    }
    default: return state
  }
}
