import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
const ImageProduct = () => {
  const imgList = [
    {
      id: "1",
      img: "https://bikelife.com.vn/wp-content/uploads/2024/12/THGN_TheraCup_Exploded_1.0.0.jpg",
    },
    {
      id: "2",
      img: "https://bikelife.com.vn/wp-content/uploads/2024/12/THGN_TheraCup_Controls_1.0.0.jpg",
    },
    {
      id: "3",
      img: "https://bikelife.com.vn/wp-content/uploads/2024/12/THGN_TheraCup_SuctionMacro_1.0.0.jpg",
    },
    {
      id: "4",
      img: "https://bikelife.com.vn/wp-content/uploads/2024/12/THGN_TheraCup_Front_1.0.0.jpg",
    },
    {
      id: "5",
      img: "https://bikelife.com.vn/wp-content/uploads/2024/12/THGN_TheraCup_WhatsIncluded_1.0.0.jpg",
    },
    {
      id: "6",
      img: "https://bikelife.com.vn/wp-content/uploads/2024/12/THGN_TheraCup_FOB_1.0.0.jpg",
    },
  ];
  const swiperRef = useRef(null); // Sử dụng ref để truy cập swiper instance
  const [activeImg, setActiveImg] = useState("1");
  useEffect(() => {
    if (swiperRef.current) {
      console.log(activeImg);
      console.log(swiperRef.current.swiper.slideTo(4));
      swiperRef.current.swiper.slideTo(4);
    }
  }, [activeImg]);
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation
          ref={swiperRef}
        >
          {imgList.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className=" relative group/swiper mt-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          grabCursor={true}
          navigation={true}
        >
          {imgList.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.img}
                className={`w-fit ${item.id === activeImg ? "opacity-20" : ""}`}
                onClick={() => setActiveImg(item.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageProduct;
