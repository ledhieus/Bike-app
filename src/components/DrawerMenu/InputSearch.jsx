/* eslint-disable react/prop-types */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { removeVietnameseTones } from "../../helper/replace";
import { getProduct } from "../../service/product";
import { currencyFormatter } from "../../helper/formatNumber";
import { Link, useNavigate } from "react-router-dom";

const InputSearch = ({setOpen}) => {
  const [valueSearch, setValueSearch] = useState("");
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [productSuccessList, setProductSuccessList] = useState([]);
  const [isShowingSuccess, setIsShowingSuccess] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      if (url === "") return;
      const data = await getProduct(`/search/${url}`);
      if (data.code === 200) {
        setProductSuccessList(data.data);
      }
    };
    fetchApi();
  }, [url]);
  const handleOnChange = (e) => {
    const value = e.target.value.trim().toLowerCase();
    const slug = removeVietnameseTones(value).split(" ").join("-");
    if (value === "") {
      setIsShowingSuccess(false);
    } else {
      console.log(slug);
      setUrl(slug);
      setIsShowingSuccess(true);
      setValueSearch(value);
    }
  };
  const handleClick = () => {
    setOpen(false)
    navigate(`/search/${valueSearch}`);
    setIsShowingSuccess(false);
  };
  return (
    <div className=" border-b-[1px]">
      <div className="flex items-center py-2 px-2 gap-2">
        <Input
          placeholder="Tìm kiếm sản phẩm"
          variant={false}
          onChange={handleOnChange}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="text-gray-400"
          onClick={handleClick}
        />
      </div>
      {isShowingSuccess && productSuccessList.length > 0 && (
        <div className="bg-white h-[300px] w-full shadow-lg overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 p-2">
            {productSuccessList.map((item) => (
              <Link
                to={`/product/${item.slug}`}
                key={item._id}
                className="flex items-center gap-1 bg-white"
                onClick={() => {setIsShowingSuccess(false), setOpen(false)}}
              >
                <img src={item.image[0]} className="w-[50px]" />
                <div>
                  <p className="text-[12px] ">{item.name}</p>
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
  );
};

export default InputSearch;
