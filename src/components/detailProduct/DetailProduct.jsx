/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ImageProduct from "./ImageProduct";
import InfoProduct from "./InfoProduct";
import { getBrands } from "../../service/brand";

const DetailProduct = ({ detailProduct }) => {
  const [detailBrand, setDetailBrand] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const idBrand = detailProduct?.brandId;
      const data = await getBrands(`/detail/${idBrand}`);
      if (data.code === 200) {
        setDetailBrand(data.data);
      }
    };
    fetchApi();
  }, [detailProduct?.brandId]);

  return (
    <div className="padding-layout py-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-4 gap-0">
        <ImageProduct imageDetail={detailProduct?.image} />
        <InfoProduct
          detailProduct={detailProduct}
          detailBrand={detailBrand}
        />
      </div>
      {detailProduct.description !== "" && (
        <>
          <p className="text-[30px] px-2 py-6 border-t-2 border-t-green-500 mt-10 w-fit">Mô Tả</p>
          <div
            dangerouslySetInnerHTML={{ __html: detailProduct.description }}
            className="text-[18px] px-2"
          />
        </>
      )}
    </div>
  );
};

export default DetailProduct;
