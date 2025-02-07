import {
  faAngleRight,
  faBars,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getCategory } from "../../service/category";

const SearchForm = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCategory("");
      setCategoryList(data);
    };
    fetchApi();
  }, []);
  return (
    <div className="bg-[#f8f9fa]">
      <div className="padding-layout">
        <div className="flex items-center justify-between  py-2 gap-6 w-full">
          <div className="flex items-center gap-6 bg-bold text-white px-4 py-2 rounded-md relative group/category">
            <div className="flex items-center gap-1 cursor-pointer  w-full">
              <FontAwesomeIcon icon={faBars} />
              <p className="font-bold">DANH MỤC SẢN PHẨM</p>
            </div>
            <FontAwesomeIcon icon={faChevronDown} />
            <div className="absolute bg-[#f8f9fa] text-black top-[40px] left-0 right-0 min-w-full z-30 border rounded-md opacity-0 group-hover/category:opacity-100">
              <div
                className="relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <p className="uppercase px-4 py-2 border-b-[1px] hover:bg-[#e4e5e6] font-medium">
                  Tất cả sản phẩm
                </p>
                {categoryList.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between uppercase px-4 py-2 border-b-[1px] hover:bg-[#e4e5e6]"
                    onMouseEnter={() => {
                      setHoveredCategory(item);
                      setIsHovering(true);
                    }}
                  >
                    <p className="font-medium">{item.name}</p>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                ))}
                {hoveredCategory &&
                  hoveredCategory.children.length > 0 &&
                  isHovering && (
                    <div
                      className="w-[800px]  h-[300px] bg-[#f8f9fa] absolute top-0 left-[267px] shadow-lg border p-6"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <div className="h-fit grid grid-cols-3 gap-4">
                        {hoveredCategory.children.map((item) => (
                          <div key={item.id}>
                            <p className="font-medium text-slate-800 text-[18px] mb-1 hover:text-[#89c91e]">
                              {item.name}
                            </p>
                            {item.children.length > 0 && (
                              <div>
                                {item.children.map((itemChildren) => (
                                  <p
                                    key={itemChildren.id}
                                    className="hover:text-[#89c91e]"
                                  >
                                    {itemChildren.name}
                                  </p>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </div>
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
