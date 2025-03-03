import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { getBrands } from "../../service/brand";
import { Link } from "react-router-dom";

const ListBrand = () => {
  const swiperRef = useRef(null);
  const [brandAgency, setBrandAgency] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getBrands("?type=agency");
      if(data.code === 200){
        setBrandAgency(data.data);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = ".custom-prev";
      swiperRef.current.swiper.params.navigation.nextEl = ".custom-next";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="padding-layout mt-16 mb-16">
      <div className="flex flex-col items-center">
        <p className="text-[30px] font-bold mb-10 md:block hidden">THƯƠNG HIỆU ĐẠI LÝ</p>
        <div className="w-full relative group">
          <Swiper
            ref={swiperRef} // Gán ref cho Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            grabCursor={true}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 }, // Dưới 320px: Hiển thị 1 slide
              480: { slidesPerView: 2, spaceBetween: 15 }, // Dưới 480px: Hiển thị 2 slide
              768: { slidesPerView: 3, spaceBetween: 20 }, // Dưới 768px: Hiển thị 3 slide
              1024: { slidesPerView: 4, spaceBetween: 20 }, // Dưới 1024px: Hiển thị 4 slide
              1280: { slidesPerView: 5, spaceBetween: 20 }, // Trên 1280px: Hiển thị 5 slide
            }}
          >
            {brandAgency.map((item) => (
              <SwiperSlide key={item._id}>
                <Link to={`/brands/${item.slug}`}>
                  <img
                    src={item.image}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="custom-prev absolute left-[-35px] top-1/2 transform -translate-y-1/2 text-[26px] text-black p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="custom-next absolute right-[-35px] top-1/2 transform -translate-y-1/2 text-[26px] text-black p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListBrand;
