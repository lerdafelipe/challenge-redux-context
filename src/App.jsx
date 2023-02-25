import { useState } from 'react'
import './App.css'
import Filter from './components/Filter/Filter'
import ProductsList from './components/Products/Products'
import { products as initialProducts } from './Mocks/products.json'

function App () {
  const [products] = useState(initialProducts)
  const [filter, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filter.minPrice &&
        (filter.category === 'all' ||
        product.category === filter.category)
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <div className='App'>
      <h1>App</h1>
      <Filter setFilter={setFilters} />
      {products && <ProductsList products={filteredProducts} />}
    </div>
  )
}

export default App
