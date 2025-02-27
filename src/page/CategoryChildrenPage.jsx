import { useParams } from "react-router-dom";
import LayoutProductList from "../components/LayoutProductList";
import { getProduct } from "../service/product";
import { useEffect, useState } from "react";
import { getCategory } from "../service/category";

const CategoryChildrenPage = () => {
  const { slugNameCategory, slugCategoryChildren } = useParams();
  const [productList, setProductList] = useState([]);
  const [category, setCategory] = useState(null);
  const [categoryParent, setcategoryParent] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getProduct(
        `/product-buy-category/${slugCategoryChildren}`
      );
      if (data.code === 200) {
        setProductList(data.data);
      }
    };
    fetchApi();
  }, [slugCategoryChildren]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCategory(`?slug=${slugCategoryChildren}`);
      if (data.code === 200) {
        setCategory(data.data[0]);
      }
    };
    fetchApi();
  }, [slugCategoryChildren]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCategory(`?slug=${slugNameCategory}`);
      if (data.code === 200) {
        setcategoryParent(data.data[0]);
      }
    };
    fetchApi();
  }, [slugNameCategory]);
  return <LayoutProductList productList={productList} category={category} categoryParent={categoryParent}/>;
};

export default CategoryChildrenPage;
