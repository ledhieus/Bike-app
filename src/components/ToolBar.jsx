import {
  faCartShopping,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CartDrawer from "./CartDrawer";
import { useState } from "react";

const ToolBar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="fixed bottom-0 bg-white right-0 left-0 z-50 shadow-xl">
      <div className="grid grid-cols-3 text-center p-2 text-[20px] text-gray-600">
        <Link to={"/"} className="hover:text-green-600">
          <FontAwesomeIcon icon={faStore} />
        </Link>
        <Link to={"/cart"} className="hover:text-green-600" onClick={showDrawer}>
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
        <Link to={"/account"} className="hover:text-green-600">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
      <CartDrawer onClose={onClose} open={open} />
    </div>
  );
};

export default ToolBar;
