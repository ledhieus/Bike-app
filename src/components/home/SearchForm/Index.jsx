import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryProduct from "./CategoryProduct";
import { removeVietnameseTones } from "../../../helper/replace";
import { useEffect, useState } from "react";
import { getProduct } from "../../../service/product";
import { currencyFormatter } from "../../../helper/formatNumber";
import { Link, useNavigate } from "react-router-dom";

const SearchForm = () => {
  // const [productList, setProductList] = useState([]);
  const [isShowingSuccess, setIsShowingSuccess] = useState(false);
  const [productSuccessList, setProductSuccessList] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchApi = async () => {
      if (url === "") return;
      const data = await getProduct(`/search/${url}`);
      if (data.code === 200) {
        setProductSuccessList(data.data);
      }
      // setProductList(data);
    };
    fetchApi();
  }, [url]);
  const handleOnChange = (e) => {
    const value = e.target.value.trim().toLowerCase();
    const slug = removeVietnameseTones(value).split(" ").join("-");
    console.log(slug);
    if (value === "") {
      setIsShowingSuccess(false);
    } else {
      setUrl(slug);
      setIsShowingSuccess(true);
      setValueSearch(value);
    }
    console.log(slug);
  };
  const handleClick = () => {
    navigate(`/search/${valueSearch}`);
    setIsShowingSuccess(false);
  };
  return (
    <div className="bg-[#f8f9fa]">
      <div className="padding-layout">
        <div className="flex items-center justify-between  py-2 gap-6 w-full">
          <CategoryProduct />
          <div className="flex-1 relative">
            <div className="flex items-center px-4 py-2  border-2 rounded-md">
              <input
                type="text"
                className="w-[300px] bg-[#f8f9fa] flex-1 focus:outline-none"
                placeholder="Tìm kiếm sản phẩm"
                onChange={handleOnChange}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="pl-4 cursor-pointer"
                onClick={handleClick}
              />
            </div>
            {isShowingSuccess && productSuccessList.length > 0 && (
              <div className="bg-white h-[300px] w-full absolute top-[45px] z-[99] shadow-lg overflow-y-auto">
                <div className="grid grid-cols-2 gap-4 p-4">
                  {productSuccessList.map((item) => (
                    <Link
                      to={`/product/${item.slug}`}
                      key={item._id}
                      className="flex items-center gap-2 bg-white"
                      onClick={() => setIsShowingSuccess(false)}
                    >
                      <img src={item.image[0]} className="w-[100px]" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-red-600">
                          {currencyFormatter(item.price)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
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
