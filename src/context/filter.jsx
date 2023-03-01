import { createContext, useState } from 'react'

export const FilterContext = createContext()

export function FilterProvider ({ defaultValue = [], children }) {
  const [filter, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
