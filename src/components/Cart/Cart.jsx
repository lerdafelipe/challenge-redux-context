import React, { useContext } from 'react'
import { CartContext } from '../../context/cart'
import './Cart.css'

const Cart = () => {
  const { cart } = useContext(CartContext)

  return (
    <div className='modalCart'>
      <div className='cartContent'>
        <h2>Cart Content</h2>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Unid.</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>

            {cart.map(product => {
              return (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.quantity}</td>
                  <td>${product.price * product.quantity}</td>
                </tr>
              )
            })}

            <tr>
              <td> </td>
              <td>Total:</td>
              <td>$2697</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart
