/* eslint-disable react/prop-types */
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { currencyFormatter } from "../helper/formatNumber";

const CardItem = ({ product }) => {
  return (
    <div className="bg-white shadow-lg relative group/card">
      <div className="relative w-full h-[260px]">
        <img
          src={product?.image[0]}
          className="w-full h-full transition-opacity duration-500 ease-in-out group-hover/card:opacity-0 object-cover"
        />
        <img
          src={product?.image[1]}
          className="absolute top-0 w-full h-full left-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover/card:opacity-100 object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <p className="line-clamp-2 uppercase">{product?.name}</p>
        {product?.discount ? (
          <>
            <div className="flex gap-2">
              <p className="text-[#d00] font-medium line-through">
                {currencyFormatter(product?.price)}
              </p>
              <p className="text-[#d00] font-medium">
                {currencyFormatter(Math.floor(product?.price * (1 - product?.discount / 100)))}
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
        {product?.discount && (
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
      <div
        className="text-black bg-[#f1f1f1] w-fit px-2 py-1 absolute top-2 right-2 
  opacity-0 translate-x-4 group-hover/card:translate-x-0 
  transition-all duration-500 ease-in-out group-hover/card:opacity-100"
      >
        <FontAwesomeIcon icon={faCartShopping} className="text-[18px]" />
      </div>
    </div>
  );
};

export default CardItem;
