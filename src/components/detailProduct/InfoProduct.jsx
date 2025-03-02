import { useState } from "react";
import { currencyFormatter } from "../../helper/formatNumber";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/shoppingCart";
import CartDrawer from "../CartDrawer";
import { updatePrice } from "../../redux/slices/totalPrice";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const InfoProduct = ({ detailProduct, detailBrand }) => {
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState(null);
  const [stock, setStock] = useState(null);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleDown = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleUp = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleOnChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setQuantity(value);
      return;
    }
    const numberValue = parseInt(value, 10);
    if (!isNaN(numberValue) && numberValue > 0) {
      setQuantity(numberValue);
    }
  };

  const handleOnBlur = () => {
    if (quantity === "" || quantity < 1) {
      setQuantity(1);
    }
  };
  const handleAddToCart = () => {
    const infoProduct = {
      nameProduct: detailProduct.name,
      priceProduct: detailProduct.price * (1 - detailProduct.discount / 100),
      idProduct: detailProduct._id,
      quantityProduct: quantity,
      imagesProduct: detailProduct.image,
      sizeProduct: activeSize || "",
    };
    if (detailProduct.sizes.length > 0 && !infoProduct.sizeProduct) {
      alert(
        "Chọn các tùy chọn cho sản phẩm trước khi cho sản phẩm vào giỏ hàng của bạn."
      );
      return;
    }
    dispatch(addToCart(infoProduct));
    dispatch(updatePrice(infoProduct));
    showDrawer();
    setActiveSize(null);
  };
  const handleBuyNow = () => {
    const infoProduct = {
      nameProduct: detailProduct.name,
      priceProduct: detailProduct.price * (1 - detailProduct.discount / 100),
      idProduct: detailProduct._id,
      quantityProduct: quantity,
      imagesProduct: detailProduct.image,
      sizeProduct: activeSize || "",
    };
    if (detailProduct.sizes.length > 0 && !infoProduct.sizeProduct) {
      alert(
        "Chọn các tùy chọn cho sản phẩm trước khi cho sản phẩm vào giỏ hàng của bạn."
      );
      return;
    }
    dispatch(addToCart(infoProduct));
    dispatch(updatePrice(infoProduct));
    navigate("/cart")
    setActiveSize(null);
  };

  return (
    <div className="space-y-4">
      <p className="text-[24px] font-normal border-b-[1px] pb-4">
        {detailProduct?.name}
      </p>
      {detailProduct?.discount ? (
        <>
          <div className="flex gap-2 items-center">
            <p className=" text-[#dd0000] font-medium text-[22px] line-through">
              {currencyFormatter(detailProduct?.price)}
            </p>
            <p className=" text-[#dd0000] font-medium text-[22px]">
              {currencyFormatter(
                Math.floor(
                  detailProduct?.price * (1 - detailProduct?.discount / 100)
                )
              )}
            </p>
            <p className="bg-[#89c91e] px-2 text-white font-medium text-[18px]">
              {detailProduct?.discount}%
            </p>
          </div>
        </>
      ) : (
        <>
          {" "}
          <p className=" text-[#dd0000] font-medium text-[22px]">
            {currencyFormatter(detailProduct?.price)}
          </p>
        </>
      )}
      <div className="flex items-center gap-4">
        <p className="font-medium">Thương hiệu</p>
        <p className="px-2 py-1 border border-[#29a745] uppercase rounded-md  cursor-pointer">
          {detailBrand?.name}
        </p>
      </div>
      {detailProduct?.sizes?.length > 0 && (
        <div>
          <p className="mb-2 font-bold">
            Kích thước: <span className="text-blue-400">{activeSize}</span>
          </p>
          <div className="flex items-center gap-2">
            {detailProduct?.sizes.map((item) => (
              <p
                key={item._id}
                className={`px-2 py-1 border font-medium w-fit rounded-lg cursor-pointer ${
                  activeSize === item.size ? "border-black" : ""
                }`}
                onClick={() => {
                  setActiveSize(item.size);
                  if (item.quantity < 6) {
                    setStock(item.quantity);
                  } else {
                    setStock(null);
                  }
                }}
              >
                {item.size}
              </p>
            ))}
          </div>
          {stock && (
            <p className="text-[14px] mt-2 font-medium">
              Chỉ còn: {stock} sản phẩm
            </p>
          )}
        </div>
      )}
      <div className="flex items-center gap-4 ">
        <div className="flex items-center border-2">
          <span className="p-2  cursor-pointer" onClick={handleDown}>
            -
          </span>
          <input
            type="number"
            value={quantity}
            className="text-center border-x-2 outline-none p-2 w-[40px]"
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            min="1"
          />
          <span className="p-2  cursor-pointer" onClick={handleUp}>
            +
          </span>
        </div>
        <div
          className="bg-[#dd0000] text-white uppercase text-[14px] font-bold px-2 py-3 cursor-pointer"
          onClick={handleAddToCart}
        >
          Thêm vào giỏ hàng
        </div>
        <div
          className="bg-[#28a745] hover:bg-[#3b9d52] text-white uppercase text-[14px] font-bold px-2 py-3 cursor-pointer"
          onClick={handleBuyNow}
        >
          Mua ngay
        </div>
        <CartDrawer onClose={onClose} open={open} />
      </div>
    </div>
  );
};

export default InfoProduct;
