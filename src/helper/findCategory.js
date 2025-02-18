export const findCategoryBySlug = (category, slug) => {
  if (category.slug === slug) {
    return category;
  }

  for (let child of category.children || []) {
    const found = findCategoryBySlug(child, slug);
    if (found) return found;
  }
  return null;
};