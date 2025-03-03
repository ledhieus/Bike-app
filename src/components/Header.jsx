import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../helper/formatNumber";
import { useEffect, useState } from "react";
import CartDrawer from "./CartDrawer";
import MenuDrawer from "./MenuDrawer";
import SearchForm from "./home/SearchForm/Index";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openDrawerMenu, setOpenDrawerMenu] = useState(false);
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
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-bold text-white text-[18px]">
        <div className="flex items-center justify-between padding-layout md:py-4 py-2">
          <div className="flex items-center gap-2 lg:hidden cursor-pointer" onClick={()=> setOpenDrawerMenu(true)}>
            <FontAwesomeIcon icon={faBars} className="text-[22px]" />
            <p className="md:text-[20px] sm:text-[16px] text-[14px] font-bold">Menu</p>
          </div>
          <Link to={"/brands"} className="hidden lg:block">
            <p className="text-[20px] font-bold">Thương hiệu</p>
          </Link>
          <div className="lg:w-[130px] md:w-[100px] w-[80px]">
            <Link to={"/"}>
              <img src="https://bikelife.com.vn/wp-content/uploads/2023/08/logo-bikelife.png" />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <p className="md:text-[20px] sm:text-[16px] text-[14px] font-bold">Việt Nam</p>
            <div
              className="bg-[#89c91e] lg:flex items-center p-1 gap-1 rounded-full cursor-pointer hidden"
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
      <div className=" lg:block hidden">
        <SearchForm />
      </div>
      <CartDrawer onClose={onClose} open={open} />
      <MenuDrawer setOpen={setOpenDrawerMenu} open={openDrawerMenu}/>
    </div>
  );
};

export default Header;
