import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../service/category";
import { getProduct } from "../service/product";
import LayoutProductList from "../components/LayoutProductList";

const CategoryPage = () => {
  const { slugNameCategory } = useParams();
  const [category, setCategory] = useState(null);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getProduct(
        `/product-buy-category/${slugNameCategory}`
      );
      if (data.code === 200) {
        setProductList(data.data);
      }
    };
    fetchApi();
  }, [slugNameCategory]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCategory(`?slug=${slugNameCategory}`);
      if (data.code === 200) {
        setCategory(data.data[0]);
      }
    };
    fetchApi();
  }, [slugNameCategory]);
  return (
   <div className="bg-white">
    <LayoutProductList category={category} productList={productList}/>
   </div>
  );
};

export default CategoryPage;
