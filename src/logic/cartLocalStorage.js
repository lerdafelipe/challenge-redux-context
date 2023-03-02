export const updateLocalStorage = (cart) => {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}
