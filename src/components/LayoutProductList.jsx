/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getCategory } from "../service/category";
import { getProduct } from "../service/product";
import MiniBanner from "./MiniBanner";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import { findCategoryBySlug } from "../helper/findCategory";

const LayoutProductList = ({ slug, slugChildren = "" }) => {
  const [categoryIdList, setCategoryIdList] = useState([]);
  const [title, setTitle] = useState("");
  const [productList, setProductList] = useState([]);
  const [titleParent, setTitleParent] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCategory(`?slug=${slug}`);
      if (!data || data.length === 0) return;

      if (slugChildren === "") {
        setTitle(data[0].name);
        const categoryIdList = [];
        data[0].children.map((item) => categoryIdList.push(item.id));
        setCategoryIdList(categoryIdList);
      } else {
        setTitleParent(data[0].name);
        const categoryChildren = findCategoryBySlug(data[0], slugChildren);
        setTitle(categoryChildren.name);
        setCategoryIdList(categoryChildren.id);
      }
    };
    fetchApi();
  }, [slug, slugChildren]);
  useEffect(() => {
    if (categoryIdList.length === 0) return;
    const fetchApi = async () => {
      if (slugChildren === "") {
        const query = categoryIdList
          .map((item) => `category=${item}`)
          .join("&");
        const data = await getProduct(`?${query}`);
        setProductList(data);
      } else {
        const data = await getProduct(`?category=${categoryIdList}`);
        setProductList(data);
      }
    };
    fetchApi();
  }, [categoryIdList, slugChildren]);
  return (
    <div>
      <MiniBanner title={title} />
      <div className="padding-layout">
        <p className="font-medium text-[18px] py-6 border-b-2 px-4">
          <Link to={"/"}>
            <span className="text-gray-500 hover:text-black">Trang chủ </span>
          </Link>
          {titleParent && (
            <Link to={`/category/${slug}`}>
              <span className="text-gray-500 hover:text-black">
                / {titleParent}
              </span>
            </Link>
          )}
          <span className="uppercase">/ {title}</span>
        </p>
        <div>
          {productList.length > 0 ? (
            <>
              <div className="grid grid-cols-5 py-10 gap-6">
                {productList.map((item) => (
                  <CardItem key={item.id} product={item} />
                ))}
              </div>
            </>
          ) : (
            <>Không có sản phẩm</>
          )}
        </div>
      </div>
    </div>
  );
};

export default LayoutProductList;
