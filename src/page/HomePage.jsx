import { useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import BikeList from "../components/home/BikeList";
import ListBrand from "../components/home/ListBrand";
import ListProduct from "../components/home/ListProduct";
import New from "../components/home/New";
import { getProduct } from "../service/product";
import { getCategory } from "../service/category";
import { getAllCategoryIds } from "../helper/getAllCategory";

const HomePage = () => {
  const [newProduct, setNewProduct] = useState([])
  const [saleProduct, setSaleProduct] = useState([])
  const [wellProduct, setWellProduct] = useState([])
  const [bikeId, setBikeId] = useState([])
  useEffect(() => {
      const fetchApi = async () => {
        const data = await getProduct("");
        setNewProduct(data.filter(item => item.status === "new").splice(0,10))
        setSaleProduct(data.filter((item) => item.discount).splice(0,10))
        setWellProduct(data.filter((item) => item.isBestSeller).splice(0,5))
      };
      fetchApi();
    }, []);

  useEffect(()=> {
    const fetchApi = async () => {
      const data = await getCategory("?slug=xe-dap");
      const allCategories  = getAllCategoryIds(data?.[0])
      setBikeId(allCategories)
    };
    fetchApi();
  }, [])
  return (
    <>
      <div className="bg-[#f8f9fa]">
        <Banner />
        <ListBrand />
        <ListProduct title="Sản phẩm mới" productList={newProduct}/>
        <ListProduct title="Sản phẩm giảm giá" productList={saleProduct}/>
        <ListProduct title="Sản phẩm bán chạy" productList={wellProduct}/>
        <BikeList bikeId={bikeId}/>
        <New/>
      </div>
    </>
  );
};

export default HomePage;
