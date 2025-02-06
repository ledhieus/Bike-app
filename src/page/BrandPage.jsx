import { Link } from "react-router-dom";

const BrandPage = () => {
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
              <img src="https://bikelife.com.vn/wp-content/uploads/2024/06/brand-vision.jpg" />
              <img src="https://bikelife.com.vn/wp-content/uploads/2024/01/brand-supacaz.jpg" />
              <img src="https://bikelife.com.vn/wp-content/uploads/2024/06/brand-vision.jpg" />
              <img src="https://bikelife.com.vn/wp-content/uploads/2024/06/brand-vision.jpg" />
              <img src="https://bikelife.com.vn/wp-content/uploads/2024/06/brand-vision.jpg" />
              <img src="https://bikelife.com.vn/wp-content/uploads/2024/06/brand-vision.jpg" />
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
              <img src="https://bikelife.com.vn/wp-content/uploads/2024/01/brand-pro.jpg" />
              <img src="https://bikelife.com.vn/wp-content/uploads/2024/01/brand-Camelbak.jpg" />
              <img src="https://bikelife.com.vn/wp-content/uploads/2024/01/brand-Camelbak.jpg" />
              <img src="https://bikelife.com.vn/wp-content/uploads/2024/01/brand-srm.jpg" />
              <img src="https://bikelife.com.vn/wp-content/uploads/2024/01/brand-srm.jpg" />
              <img src="https://bikelife.com.vn/wp-content/uploads/2024/01/brand-Camelbak.jpg" />
              <img src="https://bikelife.com.vn/wp-content/uploads/2024/01/brand-Camelbak.jpg" />
              <img src="https://bikelife.com.vn/wp-content/uploads/2024/01/brand-pro.jpg" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
