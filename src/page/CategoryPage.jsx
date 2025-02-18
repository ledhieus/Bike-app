import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategory } from "../service/category";
import { getProduct } from "../service/product";
import CardItem from "../components/CardItem";
import MiniBanner from "../components/MiniBanner";
import LayoutProductList from "../components/LayoutProductList";

const CategoryPage = () => {
  const { slugNameCategory } = useParams();
  // const [categoryIdList, setCategoryIdList] = useState([]);
  // const [title, setTitle] = useState("")
  // const [productList, setProductList] = useState([]);
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const data = await getCategory(`?slug=${slugNameCategory}`);
  //     setTitle(data[0].name)
  //     const categoryIdList = [];
  //     data[0].children.map((item) => categoryIdList.push(item.id));
  //     setCategoryIdList(categoryIdList);
  //   };
  //   fetchApi();
  // }, [slugNameCategory]);
  // useEffect(() => {
  //   if (categoryIdList.length === 0) return;
  //   const fetchApi = async () => {
  //     const query = categoryIdList.map((item) => `category=${item}`).join("&");
  //     const data = await getProduct(`?${query}`);
  //     setProductList(data);
  //   };
  //   fetchApi();
  // }, [categoryIdList]);
  return (
    <LayoutProductList slug={slugNameCategory}/>
  );
};

export default CategoryPage;
