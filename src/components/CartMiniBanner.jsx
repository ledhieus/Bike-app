import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CartMiniBanner = ({ activePage }) => {
  const state = [
    {
      name: "giỏ hàng",
      path: "/cart",
      id: 1,
    },
    {
      name: "thanh toán",
      path: "/pay",
      id: 2,
    },
    {
      name: "hoàn thành",
      path: "",
      id: 3,
    },
  ];
  return (
    <div>
      <div className="bg-[url('https://bikelife.com.vn/wp-content/uploads/2021/09/bikes-page-title.jpg')]">
        <div className="padding-layout py-[60px]">
          <div className="flex items-center gap-3">
            {state.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <Link to={item.path}>
                  <p
                    className={`text-[30px] cursor-pointer uppercase  font-bold ${
                      item.name === activePage
                        ? "text-white border-b-green-700 border-b-4"
                        : "text-gray-300"
                    }`}
                  >
                    {item.name}
                  </p>
                </Link>
                {item.id < state.length && (
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-gray-300 text-[30px] font-medium"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMiniBanner;
