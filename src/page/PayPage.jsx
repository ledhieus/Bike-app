import { useForm } from "react-hook-form";
import CartMiniBanner from "../components/CartMiniBanner";
import InputText from "../components/FormInput/InputText";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { currencyFormatter } from "../helper/formatNumber";
import { Link, useNavigate } from "react-router-dom";
import { postCreatOrder } from "../service/order";
import { success } from "../libs/message";
import { getCookie } from "../helper/cookie";
import { resetCart } from "../redux/slices/shoppingCart";
import { initPrice } from "../redux/slices/totalPrice";

const PayPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { totalPrice } = useSelector((state) => state.totalPrice);
  const cartItems = useSelector((state) => state.shoppingCart.cartItemList);
  const onSubmit = async (formData) => {
    const tokenUser = getCookie("tokenUser")
    if(!tokenUser){
      alert("Bạn cần phải đăng nhập để thực hiện đơn hàng")
      return
    }
    const filteredItems = cartItems.map(
      ({
        idProduct,
        nameProduct,
        quantityProduct,
        sizeProduct,
        priceProduct,
      }) => ({
        idProduct,
        nameProduct,
        quantityProduct,
        sizeProduct,
        priceProduct,
      })
    );
    const postForm = {
      tokenUser: tokenUser,
      customer: { ...formData },
      items: filteredItems,
      totalPrice: totalPrice,
      status: "pending",
    };
    const response = await postCreatOrder(postForm)
    if(response.code === 200){
      dispatch(resetCart())
      dispatch(initPrice())
      success(response.message)
      navigate("/done")
    }else{
      errors(response.message)
    }
  };
  return (
    <div className="bg-white">
      {cartItems.length > 0 ? (
        <div>
          <CartMiniBanner activePage="thanh toán" />
          <div className="padding-layout">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-2 my-20 gap-4"
            >
              <div className="px-4">
                <div>
                  <p className="text-[24px] uppercase font-medium">
                    Thông tin thanh toán
                  </p>
                  <div className="mt-2">
                    <InputText
                      label={"Họ và tên"}
                      register={register}
                      name={"name"}
                      placeholder="Nhập họ và tên"
                      errors={errors}
                    />
                    <div className="grid grid-cols-2 gap-6">
                      <InputText
                        label={"Số điện thoại"}
                        register={register}
                        name={"phone"}
                        placeholder="Số điện thoại"
                        errors={errors}
                      />
                      <InputText
                        label={"Địa chỉ email"}
                        register={register}
                        name={"email"}
                        placeholder="Địa chỉ email"
                        errors={errors}
                      />
                    </div>
                    <InputText
                      label={"Địa chỉ nhận hàng"}
                      register={register}
                      name={"address"}
                      placeholder="Nhập địa chỉ cụ thể. Số nhà, tên đường..."
                      errors={errors}
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
              </div>
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
                            <img
                              src={item.imagesProduct[0]}
                              className="w-[80px]"
                            />
                            <div>
                              <p>{item.nameProduct}</p>
                              {item.sizeProduct && (
                                <span>{item.sizeProduct}</span>
                              )}
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
                <div className="mt-4 cursor-pointer ">
                  <button
                    className="uppercase w-full text-white bg-red-500 hover:bg-red-400 text-center py-3 font-medium"
                    type="submit"
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex flex-col py-20 justify-center items-center">
          <p className="text-[18px] mb-4">Chưa có sản phẩm trong giỏ hàng</p>
          <Link to={"/"}>
            <button className="text-[20px] font-medium bg-green-500 px-3 py-1 text-white">
              Mua sắm ngay
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PayPage;
