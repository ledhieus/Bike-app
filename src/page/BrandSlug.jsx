import { Link, useParams } from "react-router-dom";
import MiniBanner from "../components/MiniBanner";
import { useEffect, useState } from "react";
import { getProduct } from "../service/product";
import { getBrands } from "../service/brand";
import CardItem from "../components/CardItem";
import Loading from "../components/Loading";

const BrandSlug = () => {
  const { slugNameBrand } = useParams();
  const [productList, setProductList] = useState([]);
  const [brandId, setBrandId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getBrands(`/detail-slug/${slugNameBrand}`);
      if (data.code === 200) {
        setBrandId(data.data._id);
      }
    };
    fetchApi();
  }, [slugNameBrand]);
  useEffect(() => {
    setIsLoading(true);
    if (brandId === null) return;
    const fetchApi = async () => {
      const data = await getProduct(`?brandId=${brandId}`);
      if (data.code === 200) {
        setProductList(data.data);
      }
      setIsLoading(false);
    };
    fetchApi();
  }, [brandId]);
  return (
    <div>
      <MiniBanner title={slugNameBrand} />
      <div className="padding-layout my-[60px]">
        <div className="">
          <p className="font-medium text-[18px] py-6 border-b-2 px-4">
            <Link to={"/"}>
              <span className="text-gray-500 hover:text-black">Trang chủ </span>
            </Link>
            <Link to={"/brands"}>
              <span className="text-gray-500  hover:text-black">
                / Thương hiệu{" "}
              </span>
            </Link>
            <span className="uppercase">/ {slugNameBrand}</span>
          </p>
          {isLoading ? (
            <Loading />
          ) : (
            <div>
              {productList.length > 0 ? (
                <>
                  <div className="grid grid-cols-5 py-10 gap-6">
                    {productList.map((item) => (
                      <CardItem key={item._id} product={item} />
                    ))}
                  </div>
                </>
              ) : (
                <>Không có sản phẩm</>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandSlug;
