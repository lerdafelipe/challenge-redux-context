import React from 'react'
import ProductsCard from '../ProductCard/ProductsCard'
import './Products.css'

const ProductsList = ({ products }) => {
  return (
    <main className='productsContainer'>
      {products.map(product => <ProductsCard key={product.id} product={product} />)}
    </main>
  )
}

export default ProductsList
