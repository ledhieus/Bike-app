import { useParams } from "react-router-dom";
import DetailProduct from "../components/detailProduct/DetailProduct";
import { useEffect, useState } from "react";
import { getProduct } from "../service/product";
// import ListProduct from "../components/home/ListProduct";

const DetailProductPage = () => {
  const { slugProduct } = useParams();
  const [detailProduct, setDetailProduct] = useState([]);
  // const [categoryId, setCategoryId] = useState(null);
  // const [productSuccess, setProductSuccess] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getProduct(`/detail/${slugProduct}`);
      if(data.code===200){
        setDetailProduct(data.data)
      }
    };
    fetchApi();
  }, [slugProduct]);
  // useEffect(() => {
  //   if (!categoryId) return;
  //   const fetchApi = async () => {
  //     const data = await getProduct(`?category=${categoryId}`);
  //     const existData = data.filter(item => item.slug !== slugProduct)
  //     setProductSuccess(existData);
  //   };
  //   fetchApi();
  // }, [categoryId, slugProduct]);

  return (
    <div className="bg-white">
      <DetailProduct detailProduct={detailProduct} />
      <hr />
      {/* <ListProduct title="Sản phảm tương tự" productList={productSuccess} /> */}
    </div>
  );
};

export default DetailProductPage;
