import './App.css'
import ProductsList from './components/Products/Products'
import { products } from './Mocks/products.json'

function App () {
  return (
    <div className='App'>
      <h1>App</h1>
      {products && <ProductsList products={products} />}
    </div>
  )
}

export default App
