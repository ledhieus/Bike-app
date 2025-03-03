import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBrands } from "../service/brand";
import Loading from "../components/Loading";

const BrandPage = () => {
  const [brandAgency, setBrandAgency] = useState([]);
  const [brandDifferent, setBrandDifferent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchApi = async () => {
      const data = await getBrands("?page=1&limit=20");
      if (data.code === 200) {
        setBrandAgency(data.data.filter((item) => item.type === "agency"));
        setBrandDifferent(data.data.filter((item) => item.type === "other"));
      }
      setIsLoading(false);
    };
    fetchApi();
  }, []);
  return (
    <div className="bg-[#f8f9fa]">
      <div className="bg-[url('https://bikelife.com.vn/wp-content/uploads/2021/09/bikes-page-title.jpg')] py-10">
        <div className="padding-layout text-white">
          <p className="font-bold text-[40px]">Thương hiệu</p>
          <p className="font-medium">
            <Link to={"/"}>Home</Link> / Thương hiệu
          </p>
        </div>
      </div>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="padding-layout p-20 w-fit m-auto space-y-10">
            <div>
              <div className="flex items-center mb-8 justify-center">
                <div className="border flex-1 h-[1px] bg-black hidden md:block"></div>
                <p className="text-center font-bold md:text-[40px] text-[25px] md:mx-4 mx-0">
                  Thương hiệu đại lý
                </p>
                <div className="border flex-1 h-[1px] bg-black hidden md:block"></div>
              </div>

              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 px-4">
                {brandAgency.map((item) => (
                  <Link key={item.id} to={`/brands/${item.slug}`} className="mt-5 flex justify-center">
                    <img src={item.image} />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center mb-8">
                <div className="border flex-1 h-[1px] bg-black hidden md:block"></div>
                <p className="text-center font-bold md:text-[40px] text-[25px] md:mx-4 mx-0">
                  Thương hiệu khác
                </p>
                <div className="border flex-1 h-[1px] bg-black hidden md:block"></div>
              </div>

              <div className="grid md:grid-cols-4 grid-cols-1 gap-10 px-4">
                {brandDifferent.map((item) => (
                  <Link key={item.id} to={`/brands/${item.slug}`}  className="mt-5 flex justify-center">
                    <img src={item.image} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandPage;
