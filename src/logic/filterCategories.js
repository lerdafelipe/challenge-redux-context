export const filterCategories = (products) => {
  let categories = ['all']
  for (const elem of products) {
    const index = categories.indexOf(elem.category)
    if (index < 0) categories = [...categories, elem.category]
  }
  return categories
}
