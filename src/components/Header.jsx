import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="bg-bold text-white text-[18px]">
      <div className="flex items-center justify-between padding-layout py-4">
        <p className="text-[20px] font-bold">Thương hiệu</p>
        <div className="w-[130px]">
          <img src="https://bikelife.com.vn/wp-content/uploads/2023/08/logo-bikelife.png" />
        </div>
        <div className="flex items-center gap-3">
          <p>Việt Nam</p>
          <div className="bg-[#89c91e] flex items-center p-1 gap-1 rounded-full">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="w-5 h-5 bg-white text-black p-2 flex items-center rounded-full "
            />
            <p className="font-bold px-2">0đ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
