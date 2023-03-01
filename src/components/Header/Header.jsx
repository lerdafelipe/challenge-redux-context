import React from 'react'
import Filter from '../Filter/Filter'

const Header = ({ updateFilter }) => {
  return (
    <div>
      <h1>App Cart</h1>
      <Filter setFilter={updateFilter} />
    </div>
  )
}

export default Header
