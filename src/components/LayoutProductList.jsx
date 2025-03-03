/* eslint-disable react/prop-types */

import MiniBanner from "./MiniBanner";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";

const LayoutProductList = ({
  category,
  productList,
  categoryParent = null,
}) => {
  return (
    <div>
      {category && (
        <div>
          <MiniBanner title={category.name} />
          <div className="padding-layout">
            <p className="font-medium text-[18px] py-6 border-b-2 px-4">
              <Link to={"/"}>
                <span className="text-gray-500 hover:text-black">
                  Trang chủ{" "}
                </span>
              </Link>
              {categoryParent && (
                <Link to={`/category/${categoryParent.slug}`}>
                  <span className="text-gray-500 hover:text-black">/{categoryParent.name}</span>
                </Link>
              )}
              {category && (
                <span className="hover:text-gray-500 text-black uppercase">
                  / {category.name}
                </span>
              )}
            </p>
            <div>
              {productList.length > 0 ? (
                <>
                  <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 py-10 lg:gap-6 md:gap-4 gap-2">
                    {productList.map((item) => (
                      <CardItem key={item._id} product={item} />
                    ))}
                  </div>
                </>
              ) : (
                <>Không có sản phẩm</>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutProductList;
