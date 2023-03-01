import { useState } from 'react'
import './App.css'
import ButtonCart from './components/ButtonCart/ButtonCart'
import Header from './components/Header/Header'
import ProductsList from './components/Products/Products'
import { useFilter } from './hooks/useFilter'
import { products as initialProducts } from './Mocks/products.json'

function App () {
  const [products] = useState(initialProducts)
  const { updateFilter, filterProducts } = useFilter({ products })

  return (
    <div className='App'>
      <Header updateFilter={updateFilter} />
      {products && <ProductsList products={filterProducts} />}
      <ButtonCart />
    </div>
  )
}

export default App
