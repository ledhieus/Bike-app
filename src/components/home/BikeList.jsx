import CardItem from "../CardItem";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const BikeList = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = ".custom-prev";
      swiperRef.current.swiper.params.navigation.nextEl = ".custom-next";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);
  return (
    <div className="padding-layout mt-16 mb-16 space-y-6">
      <p className="text-[40px] font-bold mb-2 text-center">Các dòng xe mới</p>
      <div className="w-full relative group/swiper">
        <Swiper
          ref={swiperRef} // Gán ref cho Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          grabCursor={true}
        >
          <SwiperSlide>
            <CardItem />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem />
          </SwiperSlide>
          <SwiperSlide>
            <CardItem />
          </SwiperSlide>
        </Swiper>
        <button className="custom-prev absolute left-[-35px] top-1/2 transform -translate-y-1/2 text-[26px] text-black p-2 rounded opacity-0 group-hover/swiper:opacity-100 transition-opacity duration-300">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button className="custom-next absolute right-[-35px] top-1/2 transform -translate-y-1/2 text-[26px] text-black p-2 rounded opacity-0 group-hover/swiper:opacity-100 transition-opacity duration-300">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default BikeList;
