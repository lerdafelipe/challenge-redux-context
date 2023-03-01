import React, { useContext } from 'react'
import { CartContext } from '../../context/cart'
import './Cart.css'

const Cart = () => {
  const { cart, total, removeProduct } = useContext(CartContext)

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
              <th> </th>
            </tr>
          </thead>
          <tbody>

            {cart.map(product => {
              return (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.quantity}</td>
                  <td>${product.price * product.quantity}</td>
                  <td><button className='delete' onClick={() => removeProduct(product.id)}>X</button></td>
                </tr>
              )
            })}

            <tr>
              <td> </td>
              <td>Total:</td>
              <td>${total}</td>
              <td> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart
