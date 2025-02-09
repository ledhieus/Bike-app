/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ImageProduct from "./ImageProduct";
import InfoProduct from "./InfoProduct";
import { getBrands } from "../../service/brand";

const DetailProduct = ({detailProduct}) => {
  const [detailBrand, setDetailBrand] = useState([])
  useEffect(()=> {
    const fetchApi = async () => {
      const idBrand = detailProduct?.brand
      const data = await getBrands(`?id=${idBrand}`)
      setDetailBrand(data)
    }
    fetchApi()
  }, [detailProduct?.brand])
  
  return (
    <div className="padding-layout py-5">
      <div className="grid grid-cols-2 gap-6">
        <ImageProduct imageDetail={detailProduct?.image}/>
        <InfoProduct detailProduct={detailProduct} detailBrand={detailBrand[0] || []}/>
      </div>
    </div>
  );
};

export default DetailProduct;
