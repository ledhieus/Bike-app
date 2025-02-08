export const getAllCategoryIds = (category) => {
  console.log(category)
  let categoryIds = [category.id];

  if (category.children && category.children.length > 0) {
    category.children.forEach(child => {
      console.log(child)
      categoryIds = categoryIds.concat(getAllCategoryIds(child)); 
    });
  }
  return categoryIds;
}
