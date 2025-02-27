import { useForm } from "react-hook-form";
import CartMiniBanner from "../components/CartMiniBanner";
import FormField from "../components/FormField";
import InputText from "../components/FormInput/InputText";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { currencyFormatter } from "../helper/formatNumber";

const PayPage = () => {
  const { control, handleSubmit } = useForm();
  const { totalPrice } = useSelector((state) => state.totalPrice);
  const cartItems = useSelector((state) => state.shoppingCart.cartItemList);
  return (
    <div>
      <CartMiniBanner activePage="thanh toán" />
      <div className="padding-layout">
        <div className="grid grid-cols-2 my-20 gap-4">
          <form onSubmit={handleSubmit()} className="px-4">
            <div>
              <p className="text-[24px] uppercase font-medium">
                Thông tin thanh toán
              </p>
              <div>
                <FormField
                  name="name"
                  lable="Họ và tên"
                  type="text"
                  control={control}
                  Component={InputText}
                  placeholder="Nhập đầy đủ họ tên"
                />
                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    name="phone"
                    lable="Số điện thoại"
                    type="text"
                    control={control}
                    Component={InputText}
                    placeholder="Nhập số điện thoại"
                  />
                  <FormField
                    name="email"
                    lable="Địa chỉ email"
                    type="email"
                    control={control}
                    Component={InputText}
                    placeholder="Nhập địa chỉ email"
                  />
                </div>
                <FormField
                  name="address"
                  lable="Địa chỉ"
                  type="text"
                  control={control}
                  Component={InputText}
                  placeholder="Nhập địa chỉ cụ thể. Số nhà, tên đường..."
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="text-[24px] uppercase font-medium">
                Thông tin bổ sung
              </p>
              <div className="mt-4">
                <p className="mb-1 text-[18px] text-dark-100">
                  Ghi chú đơn hàng (Tùy chọn)
                </p>
                <textarea
                  tabIndex={5}
                  cols={10}
                  className="w-full border h-[100px] p-2"
                />
              </div>
            </div>
          </form>
          <div>
            <div className="bg-white p-4">
              <p className="text-[24px] uppercase font-medium text-center">
                Đơn hàng của bạn
              </p>
              <div className="flex items-center justify-between  text-[22px] font-medium border-b-2 py-4">
                <p>Sản phẩm</p>
                <p>Tạm tính</p>
              </div>
              <div>
                {cartItems &&
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between py-4 border-b"
                    >
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faX} />
                        <img src={item.imagesProduct[0]} className="w-[80px]" />
                        <div>
                          <p>{item.nameProduct}</p>
                          {item.sizeProduct && <span>{item.sizeProduct}</span>}
                          <p className="font-medium">
                            SL: {item.quantityProduct}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p>{currencyFormatter(item.priceProduct)}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div>
                <div className="flex items-center justify-between py-4 border-b">
                  <p className="font-medium text-[20px]">Tạm tính</p>
                  <p className="font-medium text-[20px] text-green-700">
                    {currencyFormatter(totalPrice)}
                  </p>
                </div>
                <div className="flex items-center justify-between py-4">
                  <p className="font-medium text-[24px]">Tổng</p>
                  <p className="font-medium text-[24px] text-green-700">
                    {currencyFormatter(totalPrice)}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 cursor-pointer">
              <p className="uppercase text-white bg-red-500 hover:bg-red-400 text-center py-3 font-medium">Đặt hàng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayPage;
