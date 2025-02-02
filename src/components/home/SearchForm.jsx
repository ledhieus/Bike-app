import {
  faBars,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchForm = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <div className="padding-layout">
        <div className="flex items-center justify-between  py-2 gap-6 w-full">
          <div className="flex items-center gap-6 bg-bold text-white px-4 py-2 rounded-md">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faBars} />
              <p className="font-bold">DANH MỤC SẢN PHẨM</p>
            </div>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className="flex-1">
            <div className="flex items-center px-4 py-2  border-2 rounded-md">
              <input
                type="text"
                className="w-[300px] bg-[#f8f9fa] flex-1"
                placeholder="Tìm kiếm sản phẩm"
              />
              <div className="flex items-center border-x px-4 gap-3">
                <p>CHỌN DANH MỤC</p>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
              <FontAwesomeIcon icon={faSearch} className="pl-4" />
            </div>
          </div>
          <div>
            <p className="font-bold">ĐĂNG NHẬP/ĐĂNG KÝ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
