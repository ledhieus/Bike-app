import { Link, useParams } from "react-router-dom";
import MiniBanner from "../components/MiniBanner";
import { removeVietnameseTones } from "../helper/replace";
import { getProduct } from "../service/product";
import { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import Loading from "../components/Loading";

const SearchPage = () => {
  const { slugSearch } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const slug = removeVietnameseTones(slugSearch).split(" ").join("-");
  useEffect(() => {
    setIsLoading(true);
    const fetchApi = async () => {
      const data = await getProduct(`/search/${slug}`);
      if (data.code === 200) {
        setProductList(data.data);
      }
      setIsLoading(false);
    };
    fetchApi();
  }, [slug]);
  return (
    <div>
      <MiniBanner title={`Kết quả tìm kiểm: ${slugSearch}`} />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="padding-layout">
          <p className="font-medium text-[18px] py-6 border-b-2 px-4">
            <Link to={"/"}>
              <span className="text-gray-500 hover:text-black">Trang chủ </span>
            </Link>
            <span className="uppercase">/ {slugSearch}</span>
          </p>
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
        </div>
      )}
    </div>
  );
};

export default SearchPage;
