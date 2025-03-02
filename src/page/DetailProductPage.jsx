import { Link, useNavigate, useParams } from "react-router-dom";
import DetailProduct from "../components/detailProduct/DetailProduct";
import { useEffect, useState } from "react";
import { getProduct } from "../service/product";
import Loading from "../components/Loading";

const DetailProductPage = () => {
  const { slugProduct } = useParams();
  const [detailProduct, setDetailProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      setIsLoading(true);
      try {
        const data = await getProduct(`/detail/${slugProduct}`);
        if (data.code === 200) {
          setDetailProduct(data.data);
        } else {
          navigate("/404", { replace: true });
          return;
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        navigate("/404", { replace: true });
      }
    };
    fetchApi();
  }, [slugProduct, navigate]);

  return (
    <div className="bg-white">
      {isLoading ? (
        <Loading />
      ) : detailProduct ? (
        <DetailProduct detailProduct={detailProduct} />
      ) : (
        <>
          <div className="padding-layout py-[100px] text-center">
            <p className="py-10">Không thấy sản phẩm</p>
            <Link
              to={"/"}
              className="mt-10 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Quay về trang chủ
            </Link>
          </div>
        </>
      )}
      <hr />
    </div>
  );
};

export default DetailProductPage;
