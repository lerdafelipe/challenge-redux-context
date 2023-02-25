import React from 'react'
import './ProductCard.css'

const ProductsCard = ({ product }) => {
  return (
    <article>
      <img src={product.thumbnail} alt={product.title} />
      <div className='titleProduct'>
        <h3>{product.title} - <span>$ {product.price}</span></h3>
      </div>
      <div>
        <button>Add to cart</button>
      </div>
    </article>
  )
}

export default ProductsCard
