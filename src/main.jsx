import ReactDOM from 'react-dom/client'
import App from './App'
import { CartProvider } from './context/cart'
import { FilterProvider } from './context/filter'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </CartProvider>
)
