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
      const data = await getBrands("");
      setBrandAgency(data.filter((item) => item.status === "agency"));
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
        <p className="text-[30px] font-bold mb-10">THƯƠNG HIỆU ĐẠI LÝ</p>
        <div className="w-full relative group">
          <Swiper
            ref={swiperRef} // Gán ref cho Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            grabCursor={true}
          >
            {brandAgency.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`/brand/${item.slug}`}>
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
