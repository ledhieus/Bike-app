import { useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import BikeList from "../components/home/BikeList";
import ListBrand from "../components/home/ListBrand";
import ListProduct from "../components/home/ListProduct";
import New from "../components/home/New";
import { getProduct } from "../service/product";
import { getCategory } from "../service/category";

const HomePage = () => {
  const [newProduct, setNewProduct] = useState([])
  const [saleProduct, setSaleProduct] = useState([])
  const [bikeId, setBikeId] = useState([])
  useEffect(() => {
      const fetchApi = async () => {
        const data = await getProduct("?featured=new");
        if(data.code === 200){
          setNewProduct(data.data)
        }
      };
      fetchApi();
    }, []);
    useEffect(() => {
      const fetchApi = async () => {
        const data = await getProduct("?discount=10");
        if(data.code === 200){
          setSaleProduct(data.data)
        }
      };
      fetchApi();
    }, []);

  useEffect(()=> {
    const fetchApi = async () => {
      const data = await getCategory("?slug=khung-suon-xe-dap");
      if(data.code === 200){
        setBikeId(data.data[0]?._id)
      }
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
        <BikeList bikeId={bikeId}/>
        <New/>
      </div>
    </>
  );
};

export default HomePage;
