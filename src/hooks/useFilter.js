import { useContext, useMemo } from 'react'
import { FilterContext } from '../context/filter'

export const useFilter = ({ products }) => {
  const { filter, setFilters } = useContext(FilterContext)

  const updateFilter = (newFilter) => {
    setFilters(newFilter)
  }

  const filterProducts = useMemo(() => {
    return products.filter(product => {
      return (
        product.price >= filter.minPrice &&
        (filter.category === 'all' ||
          product.category === filter.category)
      )
    })
  }, [filter])

  return { updateFilter, filterProducts }
}
