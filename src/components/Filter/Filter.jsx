import React, { useState } from 'react'
import { products as initialProducts } from '../../Mocks/products.json'
import './Filter.css'

const filterCategories = (products) => {
  let categories = ['all']
  for (const elem of products) {
    const index = categories.indexOf(elem.category)
    if (index < 0) categories = [...categories, elem.category]
  }
  return categories
}

const Filter = ({ setFilter }) => {
  const [products] = useState(initialProducts)
  const [minPrice, setMinPrice] = useState(0)
  const [category, setCategory] = useState('all')

  const handleChangePrice = (e) => {
    setMinPrice(e.target.value)
  }

  const handleChangeCat = (e) => {
    setCategory(e.target.value)
  }

  const handleSubmit = () => {
    setFilter({
      minPrice: `${minPrice}`,
      category: `${category}`
    })
  }

  const filteredCategories = filterCategories(products)

  return (
    <div className='filterContainer'>
      <div>
        <p>Filter by</p>
        <select onChange={handleChangeCat}>
          {filteredCategories && filteredCategories.map(category => <option value={category.category} key={category}>{category}</option>)}
        </select>
        <aside>
          <label htmlFor='prices'>Precio:</label>
          <input onChange={handleChangePrice} id='prices' type='range' min={0} max={1750} />
          <span>${minPrice}</span>
        </aside>
        <button onClick={handleSubmit} className='filterButton'>Filtrar</button>
      </div>
    </div>
  )
}

export default Filter
