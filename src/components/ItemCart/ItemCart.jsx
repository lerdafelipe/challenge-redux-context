import React, { useContext } from 'react'
import { CartContext } from '../../context/cart'

const ItemCart = ({ product }) => {
  const { removeProduct, incrementQuantityProduct, decrementQuantityProduct } = useContext(CartContext)

  return (
    <tr>
      <td>{product.title}</td>
      <td>
        <button onClick={() => decrementQuantityProduct(product)} className='delete'> - </button>
        {' ' + product.quantity + ' '}
        <button onClick={() => incrementQuantityProduct(product)} className='delete'>+</button>
      </td>
      <td>${product.price * product.quantity}</td>
      <td><button className='delete' onClick={() => removeProduct(product.id)}>X</button></td>
    </tr>
  )
}

export default ItemCart
