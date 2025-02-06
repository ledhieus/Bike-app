import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardItem = () => {
  return (
    <div className="bg-white shadow-lg relative group/card">
      <div className="relative">
        <img
          src="https://bikelife.com.vn/wp-content/uploads/2024/12/THGN_TheraCup_Exploded_1.0.0-250x250.jpg"
          className="w-full transition-opacity duration-500 ease-in-out group-hover/card:opacity-0"
        />
        <img
          src="https://bikelife.com.vn/wp-content/uploads/2024/12/THGN_TheraCup_WhatsIncluded_1.0.0-250x250.jpg"
          className="absolute top-0 w-full left-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover/card:opacity-100"
        />
      </div>
      <div className="p-4 space-y-2">
        <p className="line-clamp-2 uppercase">
          THERABODY Thiết Bị Cúp Giác Hơi TheraCup Giảm Đau Nhức,Tăng tuần hoàn
          máu, 3 Mức Cường Độ Nhiệt và Rung
        </p>
        <p className="text-[#d00] font-medium">3,999,000đ</p>
      </div>
      <div className="bg-[#438E44] text-white uppercase font-medium w-fit text-[13px] px-2 py-1 absolute top-0 left-0">
        New
      </div>
      <div
        className="text-black bg-[#f1f1f1] w-fit px-2 py-1 absolute top-2 right-2 
  opacity-0 translate-x-4 group-hover/card:translate-x-0 
  transition-all duration-500 ease-in-out group-hover/card:opacity-100"
      >
        <FontAwesomeIcon icon={faCartShopping} className="text-[18px]" />
      </div>
    </div>
  );
};

export default CardItem;
