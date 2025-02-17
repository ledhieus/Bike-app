import { Link, useParams } from "react-router-dom";
import MiniBanner from "../components/MiniBanner";
import { useEffect, useState } from "react";
import { getProduct } from "../service/product";
import { getBrands } from "../service/brand";
import CardItem from "../components/CardItem";

const BrandSlug = () => {
  const { slugNameBrand } = useParams();
  const [infoBrand, setInfoBrand] = useState([]);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getBrands(`?slug=${slugNameBrand}`);
      setInfoBrand(data);
    };
    fetchApi();
  }, [slugNameBrand, setInfoBrand]);
  useEffect(() => {
    if (infoBrand.length === 0) return;
    const fetchApi = async () => {
      const data = await getProduct(`?brand=${infoBrand[0]?.id}`);
      setProductList(data);
    };
    fetchApi();
  }, [infoBrand]);
  return (
    <div>
      <MiniBanner title={slugNameBrand} />
      <div className="padding-layout my-[60px]">
        <div className="">
          <p className="font-medium text-[18px] py-6 border-b-2 px-4">
            <Link to={"/"}>
              <span className="text-gray-500 hover:text-black">Trang chủ </span>
            </Link>
            <span className="text-gray-500">/ Thương hiệu </span>
            <span className="uppercase">/ {slugNameBrand}</span>
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
    </div>
  );
};

export default BrandSlug;
