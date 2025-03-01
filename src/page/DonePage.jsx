import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartMiniBanner from "../components/CartMiniBanner";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DonePage = () => {
  return (
    <div>
      <CartMiniBanner activePage={"hoàn thành"} />
      <div className="padding-layout">
        <div className="py-10 flex flex-col items-center justify-center space-y-4">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-[100px] text-green-500"
          />
          <p className="text-[30px]">Đặt hàng thành công</p>
          <Link to={"/account"}>
            <button className="bg-red-500 px-4 py-2 text-white hover:bg-red-400">
              Xem Chi tiết
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonePage;
