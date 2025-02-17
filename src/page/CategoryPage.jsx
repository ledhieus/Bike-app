import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategory } from "../service/category";
import { getProduct } from "../service/product";
import CardItem from "../components/CardItem";
import MiniBanner from "../components/MiniBanner";

const CategoryPage = () => {
  const { slugNameCategory } = useParams();
  const [categoryIdList, setCategoryIdList] = useState([]);
  const [title, setTitle] = useState("")
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCategory(`?slug=${slugNameCategory}`);
      setTitle(data[0].name)
      const categoryIdList = [];
      data[0].children.map((item) => categoryIdList.push(item.id));
      setCategoryIdList(categoryIdList);
    };
    fetchApi();
  }, [slugNameCategory]);
  useEffect(() => {
    if (categoryIdList.length === 0) return;
    const fetchApi = async () => {
      const query = categoryIdList.map((item) => `category=${item}`).join("&");
      const data = await getProduct(`?${query}`);
      setProductList(data);
    };
    fetchApi();
  }, [categoryIdList]);
  return (
    <div>
      <MiniBanner title={title}/>
      <div className="padding-layout">
      <p className="font-medium text-[18px] py-6 border-b-2 px-4">
        <Link to={"/"}>
          <span className="text-gray-500 hover:text-black">Trang chủ </span>
        </Link>
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

export default CategoryPage;
