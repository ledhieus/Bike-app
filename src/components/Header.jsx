import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../helper/formatNumber";
import { useEffect, useState } from "react";
import CartDrawer from "./CartDrawer";
import SearchForm from "./home/SearchForm";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // Ẩn header khi cuộn xuống
      } else {
        setShowHeader(true); // Hiện header khi cuộn lên
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const { totalPrice } = useSelector((state) => state.totalPrice);
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-bold text-white text-[18px]">
        <div className="flex items-center justify-between padding-layout py-4">
          <Link to={"/brands"}>
            <p className="text-[20px] font-bold">Thương hiệu</p>
          </Link>
          <div className="w-[130px]">
            <Link to={"/"}>
              <img src="https://bikelife.com.vn/wp-content/uploads/2023/08/logo-bikelife.png" />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <p>Việt Nam</p>
            <div
              className="bg-[#89c91e] flex items-center p-1 gap-1 rounded-full cursor-pointer"
              onClick={() => {
                showDrawer();
              }}
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="w-5 h-5 bg-white text-black p-2 flex items-center rounded-full "
              />
              <p className="font-bold pr-2 text-[16px]">
                {currencyFormatter(totalPrice)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <SearchForm />
      <CartDrawer onClose={onClose} open={open} />
    </div>
  );
};

export default Header;
