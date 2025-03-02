import { useEffect, useState } from "react";
import MiniBanner from "../components/MiniBanner";
import { getDetailUser } from "../service/user";
import { getCookie } from "../helper/cookie";
import { getOrder } from "../service/order";
import { currencyFormatter } from "../helper/formatNumber";
import { Tag } from "antd";
import Loading from "../components/Loading";

const AccountPage = () => {
  const [infoUser, setInfoUser] = useState(null);
  const [order, setOrder] = useState([]);
  const tokenUser = getCookie("tokenUser");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (tokenUser === null) return;
    setIsLoading(true);
    const fetchApi = async () => {
      const data = await getDetailUser("");
      if (data.code === 200) {
        setInfoUser(data.info);
      }
      setIsLoading(false);
    };
    fetchApi();
  }, [tokenUser]);
  useEffect(() => {
    if (tokenUser === null) return;
    const fetchApi = async () => {
      const data = await getOrder(tokenUser);
      if (data.code === 200) {
        setOrder(data.orders);
      }
    };
    fetchApi();
  }, [tokenUser]);
  return (
    <div>
      <MiniBanner title={"Tài Khoản"} />
      <div className="padding-layout my-20 px-10">
        {isLoading ? (
          <Loading />
        ) : infoUser ? (
          <div className="flex flex-col gap-6 p-10 bg-white shadow-md rounded-lg">
            {/* Thông tin tài khoản */}
            <div className="px-8 space-y-4 border-r-2">
              <h2 className="text-3xl font-bold mb-4">Thông Tin Tài Khoản</h2>
              <div className="flex gap-2">
                <p className="font-bold">Họ và tên:</p>
                <p>{infoUser.fullName}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">Địa chỉ email:</p>
                <p>{infoUser.email}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">Số điện thoại:</p>
                <p>{infoUser.phone}</p>
              </div>
            </div>

            {/* Đơn hàng */}
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">Đơn hàng</h2>

              <div className="space-y-6">
                {order && order.length > 0 ? (
                  order.map((item) => (
                    <div
                      key={item._id}
                      className="border border-gray-300 rounded-lg p-4 shadow-md bg-white"
                    >
                      {/* Mã đơn hàng */}
                      <p className="text-lg font-semibold mb-2">
                        Mã đơn hàng: {item._id}
                      </p>

                      {/* Bảng sản phẩm */}
                      <div className="overflow-x-auto">
                        <table className="w-full border border-gray-300 rounded-md">
                          <thead>
                            <tr className="bg-gray-100 text-left">
                              <th className="px-4 py-2 border">STT</th>
                              <th className="px-4 py-2 border">Tên sản phẩm</th>
                              <th className="px-4 py-2 border text-center">
                                Số lượng
                              </th>
                              <th className="px-4 py-2 border text-right">
                                Giá
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.items.map((product, index) => (
                              <tr
                                key={product._id}
                                className="border hover:bg-gray-50"
                              >
                                <td className="px-4 py-2 text-center">
                                  {index + 1}
                                </td>
                                <td className="px-4 py-2">
                                  {product.nameProduct}
                                </td>
                                <td className="px-4 py-2 text-center">
                                  {product.quantityProduct}
                                </td>
                                <td className="px-4 py-2 text-right text-green-600 font-bold">
                                  {currencyFormatter(product.priceProduct)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Trạng thái đơn hàng & Tổng tiền */}
                      <div className="mt-4 flex justify-between items-center">
                        <p className="flex items-center space-x-2">
                          <span className="font-semibold">Tình trạng:</span>
                          {item.status === "pending" ? (
                            <Tag color="magenta">Đang xử lý</Tag>
                          ) : (
                            <Tag color="blue">Đang giao hàng</Tag>
                          )}
                        </p>
                        <p className="text-lg font-bold text-red-500">
                          Tổng tiền: {currencyFormatter(item.totalPrice)}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center">
                    Không có đơn hàng nào!
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            Không có thông tin tài khoản!
          </p>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
