/* eslint-disable react/prop-types */
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { currencyFormatter } from "../helper/formatNumber";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/shoppingCart";
import { useState } from "react";
import CartDrawer from "./CartDrawer";
import { updatePrice } from "../redux/slices/totalPrice";
import ImageComponent from "./ImageComponent";

const CardItem = ({ product }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const form = {
      nameProduct: product.name,
      priceProduct: product.price * (1 - product.discount / 100),
      idProduct: product._id,
      quantityProduct: 1,
      imagesProduct: product.image,
      sizeProduct: product.sizes[0]?.size || "",
    };
    dispatch(addToCart(form));
    dispatch(updatePrice(form));
    showDrawer();
  };

  return (
    <div className="relative group/card">
      <Link to={`/product/${product?.slug}`}>
        <div className="bg-white shadow-lg">
          <div className="relative md:w-full w-fit md:h-[250px] h-fit">
            <ImageComponent width={260} height={250} className={"md:w-full md:h-full w-[195px] h-[186px] object-cover"} src={product?.image[0]}/>
            {/* <img
              src={product?.image[0]}
              className="w-full h-full transition-opacity duration-500 ease-in-out group-hover/card:opacity-0 object-cover"
            /> */}
            <img
              src={product?.image[1]}
              className="absolute top-0 md:w-full md:h-full w-[186px] h-[186px] left-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover/card:opacity-100 object-cover"
            />
          </div>
          <div className="p-4 space-y-2">
            <p className="line-clamp-2 uppercase">{product?.name}</p>
            {product?.discount ? (
              <>
                <div className="flex gap-2 lg:flex-row flex-col">
                  <p className="text-[#d00] font-medium line-through md:block hidden">
                    {currencyFormatter(product?.price)}
                  </p>
                  <p className="text-[#d00] font-medium">
                    {currencyFormatter(
                      Math.floor(product?.price * (1 - product?.discount / 100))
                    )}
                  </p>
                </div>
              </>
            ) : (
              <>
                <p className="text-[#d00] font-medium">
                  {currencyFormatter(product?.price)}
                </p>
              </>
            )}
          </div>
          <div className="flex flex-col gap-2 absolute top-0 left-0 w-fit">
            {product?.discount !== 0 && (
              <div className="bg-[#89c91e] text-white uppercase font-medium w-full text-[13px] px-2 py-1 text-center">
                {product?.discount}%
              </div>
            )}
            {product?.status && (
              <div className="bg-[#438E44] text-white uppercase font-medium w-fit text-[13px] px-2 py-1 ">
                New
              </div>
            )}
          </div>
        </div>
      </Link>
      <div
        className="text-black bg-[#f1f1f1] w-fit px-2 py-1 absolute top-2 right-2 
opacity-0 translate-x-4 group-hover/card:translate-x-0 
transition-all duration-500 ease-in-out group-hover/card:opacity-100 cursor-pointer"
        onClick={handleAddToCart}
      >
        <FontAwesomeIcon icon={faCartShopping} className="text-[18px]" />
      </div>
      <CartDrawer onClose={onClose} open={open} />
    </div>
  );
};

export default CardItem;
