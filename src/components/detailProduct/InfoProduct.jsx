import { currencyFormatter } from "../../helper/formatNumber";

/* eslint-disable react/prop-types */
const InfoProduct = ({ detailProduct, detailBrand }) => {
  const sub = detailProduct?.sub;

  return (
    <div className="space-y-4">
      <p className="text-[24px] font-normal border-b-[1px] pb-4">
        {detailProduct?.name}
      </p>
      {detailProduct?.discount ? (
        <>
          <div className="flex gap-2 items-center">
            <p className=" text-[#dd0000] font-medium text-[22px] line-through">
              {currencyFormatter(detailProduct?.price)}
            </p>
            <p className=" text-[#dd0000] font-medium text-[22px]">
              {currencyFormatter(
                Math.floor(
                  detailProduct?.price * (1 - detailProduct?.discount / 100)
                )
              )}
            </p>
            <p className="bg-[#89c91e] px-2 text-white font-medium text-[18px]">{detailProduct?.discount}%</p>
          </div>
        </>
      ) : (
        <>
          {" "}
          <p className=" text-[#dd0000] font-medium text-[22px]">
            {currencyFormatter(detailProduct?.price)}
          </p>
        </>
      )}

      <ul className="list-disc pl-5 space-y-4">
        {sub?.map((item, index) => (
          <li key={index}>
            {item.title && item.value ? (
              <>
                {item.title}: {item.value}
              </>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
      {/* <div>
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
      </div> */}
      <div className="flex items-center gap-4">
        <p className="font-medium">Thương hiệu</p>
        <p className="px-2 py-1 border border-[#29a745] uppercase rounded-md  cursor-pointer">
          {detailBrand?.name}
        </p>
      </div>
      {detailProduct?.size && (
        <div>
          <p className="mb-2 font-bold">Kích thước:</p>
          <div className="flex items-center gap-2">
            {detailProduct?.size.map((item, index) => (
              <p
                key={index}
                className="px-2 py-1 border font-medium w-fit rounded-lg cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
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
