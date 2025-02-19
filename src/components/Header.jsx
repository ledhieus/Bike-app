import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../helper/formatNumber";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const [open, setOpen] = useState(false);
  
    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  const {totalPrice} = useSelector(state => state.totalPrice)
  return (
    <div className="bg-bold text-white text-[18px]">
      <div className="flex items-center justify-between padding-layout py-4">
        <Link to={"/brands"}><p className="text-[20px] font-bold">Thương hiệu</p></Link>
        <div className="w-[130px]">
          <Link to={"/"}><img src="https://bikelife.com.vn/wp-content/uploads/2023/08/logo-bikelife.png" /></Link>
        </div>
        <div className="flex items-center gap-3">
          <p>Việt Nam</p>
          <div className="bg-[#89c91e] flex items-center p-1 gap-1 rounded-full cursor-pointer" onClick={()=> {showDrawer()}}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="w-5 h-5 bg-white text-black p-2 flex items-center rounded-full "
            />
            <p className="font-bold pr-2 text-[16px]">{currencyFormatter(totalPrice)}</p>
          </div>
        </div>
      </div>
      <CartDrawer onClose={onClose} open={open} />
    </div>
  );
};

export default Header;
