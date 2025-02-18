export const removeVietnameseTones = (str) => {
  return str
    .normalize("NFD") // Chuẩn hóa chuỗi để tách dấu
    .replace(/[\u0300-\u036f]/g, "") // Xóa các dấu thanh
    .replace(/đ/g, "d") // Chuyển đổi đ -> d
    .replace(/Đ/g, "D"); // Chuyển đổi Đ -> D
};