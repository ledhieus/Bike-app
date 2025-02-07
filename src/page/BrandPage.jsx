import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBrands } from "../service/brand";

const BrandPage = () => {
  const [brandAgency, setBrandAgency] = useState([])
  const [brandDifferent, setBrandDifferent] = useState([])
  useEffect(()=> {
    const fetchApi = async ()=> {
      const data = await getBrands("")
      // let agency = []
      // let different = []
      setBrandAgency(data.filter(item => item.status==="agency")) 
      setBrandDifferent(data.filter(item => item.status==="different"))
    }
    fetchApi()
  }, [])
  return (
    <div className="bg-[#f8f9fa]">
      <div className="bg-[url('https://bikelife.com.vn/wp-content/uploads/2021/09/bikes-page-title.jpg')] py-10">
        <div className="padding-layout text-white">
          <p className="font-bold text-[40px]">Thương hiệu</p>
          <p className="font-medium"><Link to={"/"}>Home</Link> / Thương hiệu</p>
        </div>
      </div>
      <div>
        <div className="padding-layout p-20 w-fit m-auto space-y-10">
          <div>
            <div className="flex items-center mb-8">
              <div className="border flex-1 h-[1px] bg-black"></div>
              <p className="text-center font-bold text-[40px] mx-4">
                Thương hiệu đại lý
              </p>
              <div className="border flex-1 h-[1px] bg-black"></div>
            </div>

            <div className="grid grid-cols-3 gap-10 px-4">
              {brandAgency.map(item=> (
                <Link key={item.id} to={`/brand/${item.slug}`}><img src={item.image} /></Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center mb-8">
              <div className="border flex-1 h-[1px] bg-black"></div>
              <p className="text-center font-bold text-[40px] mx-4">
                Thương hiệu khác
              </p>
              <div className="border flex-1 h-[1px] bg-black"></div>
            </div>

            <div className="grid grid-cols-4 gap-10 px-4">
              {brandDifferent.map(item=> (
                <Link key={item.id} to={`/brand/${item.slug}`}><img src={item.image} /></Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
