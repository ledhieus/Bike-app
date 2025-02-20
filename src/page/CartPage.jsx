import { useDispatch, useSelector } from "react-redux";
import CartMiniBanner from "../components/CartMiniBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { currencyFormatter } from "../helper/formatNumber";
import { removeCart, updateCart } from "../redux/slices/shoppingCart";
import { downPrice, resetPrice, upPrice } from "../redux/slices/totalPrice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.shoppingCart.cartItemList);
  const dispatch = useDispatch();
  const { totalPrice } = useSelector((state) => state.totalPrice);

  const handleUp = (id) => {
    const itemToUpdate = cartItems.find((item) => item.idProduct === id);
    if (itemToUpdate) {
      const updatedItem = {
        idProduct: itemToUpdate.idProduct,
        quantityProduct: itemToUpdate.quantityProduct + 1,
        sizeProduct: itemToUpdate.sizeProduct, // Đảm bảo có size nếu cần
      };
      dispatch(updateCart(updatedItem));
      dispatch(upPrice({ priceProduct: itemToUpdate.priceProduct }));
    }
  };

  const handleDown = (id) => {
    const itemToUpdate = cartItems.find((item) => item.idProduct === id);
    if (itemToUpdate && itemToUpdate.quantityProduct > 1) {
      const updatedItem = {
        idProduct: itemToUpdate.idProduct,
        quantityProduct: itemToUpdate.quantityProduct - 1,
        sizeProduct: itemToUpdate.sizeProduct, // Đảm bảo có size nếu cần
      };
      dispatch(updateCart(updatedItem));
      dispatch(downPrice({ priceProduct: itemToUpdate.priceProduct }));
    }
  };

  const handleOnChange = () => {
    // const value = e.target.value;
    // if (value === "") {
    //   setQuantity(value);
    //   return;
    // }
    // const numberValue = parseInt(value, 10);
    // if (!isNaN(numberValue) && numberValue > 0) {
    //   setQuantity(numberValue);
    // }
  };

  const handleOnBlur = () => {
    // if (quantity === "" || quantity < 1) {
    //   setQuantity(1);
    // }
  };
  return (
    <div>
      <CartMiniBanner activePage="giỏ hàng" />
      <div className="padding-layout">
        {cartItems && cartItems.length > 0 ? <><div className="flex px-4 gap-6 mt-6 mb-6">
          <table className="table-auto w-full border-collapse flex-[2]">
            <thead>
              <tr className="border-b">
                <th className="p-2">Xóa</th>
                <th className="p-2 w-[100px] text-left">Hình ảnh</th>
                <th className="p-2 w-[425px] text-left">Sản phẩm</th>
                <th className="p-2 w-[100px] text-left">Giá</th>
                <th className="p-2">Số lượng</th>
                <th className="p-2">Tạm tính</th>
              </tr>
            </thead>
            <tbody>
              {cartItems &&
                cartItems.map((item) => (
                  <tr key={item.idProduct} className="border-b">
                    <td className="p-2 text-center">
                      <FontAwesomeIcon
                        icon={faX}
                        className="text-[12px] cursor-pointer"
                        onClick={() => {
                          const string = item.idProduct + item.sizeProduct;
                          dispatch(removeCart(string));
                          dispatch(resetPrice(item));
                        }}
                      />
                    </td>
                    <td className="p-2">
                      <img
                        src={item.imagesProduct[0]}
                        alt="Sản phẩm"
                        className="w-[80px] h-auto"
                      />
                    </td>
                    <td className="p-2">{item.nameProduct}</td>
                    <td className="p-2 text-gray-500">
                      {currencyFormatter(item.priceProduct)}
                    </td>
                    <td className="p-2 w-[100px]">
                      <div className="flex items-center border rounded w-fit">
                        <span
                          className="p-2 cursor-pointer"
                          onClick={() => handleDown(item.idProduct)}
                        >
                          -
                        </span>
                        <input
                          type="number"
                          value={item.quantityProduct}
                          className="text-center border-x outline-none w-[40px]"
                          onChange={(e) => handleOnChange(e, item.idProduct)}
                          onBlur={() => handleOnBlur(item.idProduct)}
                          min="1"
                        />
                        <span
                          className="p-2 cursor-pointer"
                          onClick={() => handleUp(item.idProduct)}
                        >
                          +
                        </span>
                      </div>
                    </td>
                    <td className="p-2 font-medium text-green-700">
                      {currencyFormatter(
                        item.quantityProduct * item.priceProduct
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex-[1] py-4">
            <div className="border-2 px-6 py-4">
              <p className="uppercase font-bold text-[24px]">Cộng giỏ hàng</p>
              <div className="flex items-center justify-between py-4 border-b">
                <p className="font-medium">Tạm tính</p>
                <p>{currencyFormatter(totalPrice)}</p>
              </div>
              <div className="flex items-center justify-between py-4">
                <p className="font-medium text-[22px]">Tổng</p>
                <p className="font-medium text-green-700 text-[22px]">
                  {currencyFormatter(totalPrice)}
                </p>
              </div>
              <p className="py-4 bg-red-500 text-white text-center uppercase mt-2 hover:bg-red-400 cursor-pointer ">
                Tiến hành thanh toán
              </p>
            </div>
          </div>
        </div></> : <> <p className="my-10 text-center">Chưa có sản phẩm trong giỏ hàng</p></>}
        
      </div>
    </div>
  );
};

export default CartPage;
