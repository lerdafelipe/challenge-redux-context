import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/cart'
import Cart from '../Cart/Cart'
import './ButtonCart.css'

const ButtonCart = () => {
  const [showCart, setShowCart] = useState(false)
  const { cart } = useContext(CartContext)

  return (
    <div className='cartContainer'>
      <div className='buttonCartContainer'>
        <button onClick={() => setShowCart(!showCart)}>[{cart.length}] Show Cart</button>
      </div>
      {showCart ? <Cart /> : ''}
    </div>
  )
}

export default ButtonCart
