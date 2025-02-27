export const createTree = (arr, parentId = "") => {
  return arr
      .filter(item => item.parentId === parentId) // Lọc ra các node con
      .map(item => ({
          ...item,
          children: createTree(arr, item._id) // Đệ quy tìm các node con
      }));
};