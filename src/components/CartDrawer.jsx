/* eslint-disable react/prop-types */
import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { currencyFormatter } from "../helper/formatNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { removeCart } from "../redux/slices/shoppingCart";
import { resetPrice } from "../redux/slices/totalPrice";
import { Link } from "react-router-dom";

const CartDrawer = ({ onClose, open }) => {
  const cartItems = useSelector((state) => state.shoppingCart.cartItemList);
  const {totalPrice} = useSelector(state => state.totalPrice)
  const dispatch = useDispatch()
  return (
    <Drawer
      title={<p className="font-bold text-[20px]">Giỏ Hàng</p>}
      placement="right"
      onClose={onClose}
      open={open}
      footer={
        <div>
          <div className="flex items-center justify-between px-2 py-4">
            <p className="font-bold text-black text-[22px]">Tổng tiền: </p>
            <p  className="font-bold text-green-700 text-[22px]">{currencyFormatter(totalPrice)}</p>
          </div>
          <div className="flex flex-col gap-4">
          <Link to={"/cart"}><button className="bg-gray-100 font-medium text-black uppercase py-3 hover:bg-gray-200">Xem Giỏ hàng</button></Link>
          <button className="bg-red-700 font-medium text-white uppercase py-3">Thanh toán</button>
          </div>
        </div>
      }
    >
      {cartItems.length > 0 ? (
        <div >
          {cartItems.map((item) => (
            <div
              key={item.idProduct + item.sizeProduct}
              className="flex w-fit gap-2 p-2 bg-white hover:bg-gray-100 border-b"
            >
              <img src={item.imagesProduct[0]} className="w-[80px] object-cover h-[80px]" />
              <div>
                <p className="text-[16px]">{item.nameProduct}</p>
                <div className="flex items-center gap-2">
                  <p className="text-green-600 font-medium text-[14px]">
                    {currencyFormatter(item.priceProduct)}
                  </p>
                  <p className="text-gray-500 font-medium text-[14px]">
                    x {item.quantityProduct}
                  </p>
                  
                </div>
                {item.sizeProduct && <p className="font-medium">{item.sizeProduct}</p>}
              </div>
              <FontAwesomeIcon icon={faX} className="cursor-pointer" onClick={()=> {
                const string = item.idProduct + item.sizeProduct
                dispatch(removeCart(string))
                dispatch(resetPrice(item))

                }}/>
            </div>
          ))}
        </div>
        
      ) : (
        <> Chưa có sản phẩm</>
      )}
    </Drawer>
  );
};

export default CartDrawer;
