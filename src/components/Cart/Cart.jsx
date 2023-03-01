import React, { useContext } from 'react'
import { CartContext } from '../../context/cart'
import ItemCart from '../ItemCart/ItemCart'
import './Cart.css'

const Cart = () => {
  const { cart, total } = useContext(CartContext)

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

            {cart.map(product => <ItemCart key={product.id} product={product} />)}

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
