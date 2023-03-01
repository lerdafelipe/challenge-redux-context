import React, { useCallback, useState } from 'react'
import { filterCategories } from '../../logic/filterCategories'
import { products as initialProducts } from '../../Mocks/products.json'
import './Filter.css'

const Filter = ({ setFilter }) => {
  const [products] = useState(initialProducts)
  const [minPrice, setMinPrice] = useState(0)
  const [category, setCategory] = useState('all')

  const handleChangePrice = (e) => setMinPrice(e.target.value)

  const handleChangeCat = (e) => setCategory(e.target.value)

  const handleSubmit = () => {
    setFilter({
      minPrice: `${minPrice}`,
      category: `${category}`
    })
  }

  const filteredCategories = useCallback(filterCategories(products), [products])

  return (
    <div className='filterContainer'>
      <div>
        <p>Filter by</p>
        <aside>
          <label>Category to filter:</label>
          <select onChange={handleChangeCat}>
            {filteredCategories.length && filteredCategories.map(category => <option value={category.category} key={category}>{category}</option>)}
          </select>
        </aside>
        <aside>
          <label htmlFor='prices'>Min price:</label>
          <input onChange={handleChangePrice} id='prices' type='range' min={0} max={1750} />
          <span>${minPrice}</span>
        </aside>
        <button onClick={handleSubmit} className='filterButton'>Apply Filters</button>
      </div>
    </div>
  )
}

export default Filter
