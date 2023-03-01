import React, { useContext } from 'react'
import { CartContext } from '../../context/cart'
import './ProductCard.css'

const ProductsCard = ({ product }) => {
  const { addProduct } = useContext(CartContext)

  const handleClick = () => {
    addProduct(product)
  }

  return (
    <article>
      <img src={product.thumbnail} alt={product.title} />
      <div className='titleProduct'>
        <h3>{product.title} - <span>$ {product.price}</span></h3>
      </div>
      <div>
        <button onClick={handleClick}>Add to cart</button>
      </div>
    </article>
  )
}

export default ProductsCard
