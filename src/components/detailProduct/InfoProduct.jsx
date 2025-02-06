const InfoProduct = () => {
  return (
    <div className="space-y-4">
      <p className="text-[24px] font-normal border-b-[1px] pb-4">
        THERABODY Thiết Bị Cúp Giác Hơi TheraCup Giảm Đau Nhức,Tăng tuần hoàn
        máu, 3 Mức Cường Độ Nhiệt và Rung
      </p>
      <p className=" text-[#dd0000] font-medium text-[22px]">3,990,000 ₫</p>
      <ul className="list-disc pl-5  space-y-4">
        <li>
          <span className="font-medium">Tình trạng: </span> Mới 100%
        </li>
        <li>
          <span className="font-medium">Xuất xứ: </span>Chính hãng
        </li>
        <li>
          <span className="font-medium">Bảo hành: </span>12 tháng chính hãng
        </li>
        <li>
          <span className="font-medium">Thương hiệu: </span>Therabody
        </li>
        <li>
          <span className="font-medium">Trọng lượng:</span> 330g
        </li>
      </ul>
      <div>
        <p className="px-4 text-[24px] font-bold border-l-[2px] border-l-[#89c91e] mb-4">
          Tính năng nổi bật
        </p>
        <ul className="list-disc pl-5 space-y-4">
          <li>Hút giảm áp với 3 mức cường độ (30 kpa, 40 kpa, 50 kPa)</li>
          <li>Liệu pháp nhiệt với 3 mức cường độ (41C, 43C, 45C)</li>
          <li>Liệu pháp rung với 3 mức cường độ (Thấp, Cao và Sóng)</li>
          <li>
            3 cốc trong suốt có thể thay đổi – (đường kính 35mm, 45mm, và 55mm)
          </li>
          <li>Tự động tắt sau 3 phút sử dụng liên tục</li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <p className="font-medium">Thương hiệu</p>
        <p className="px-2 py-1 border border-[#29a745] uppercase rounded-md  cursor-pointer">
          Therabody
        </p>
      </div>
      <div className="flex items-center gap-4 ">
        <div className="flex items-center border-2">
          <span className="p-2  cursor-pointer">-</span>
          <input
            type="number"
            value={1}
            className="text-center border-x-2 outline-none p-2 w-[30px]"
          />
          <span className="p-2  cursor-pointer">+</span>
        </div>
        <div className="bg-[#dd0000] text-white uppercase text-[14px] font-bold px-2 py-3 cursor-pointer">
          Thêm vào giỏ hàng
        </div>
        <div className="bg-[#28a745] hover:bg-[#3b9d52] text-white uppercase text-[14px] font-bold px-2 py-3 cursor-pointer">
          Mua ngay
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
