import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Controller } from "swiper/modules";
import { useState } from "react";
import ReactImageMagnifier from "simple-image-magnifier/react";
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
  // const swiperRef = useRef(null); // Sử dụng ref để truy cập swiper instance
  // const [activeImg, setActiveImg] = useState("1");
  // useEffect(() => {
  //   if (swiperRef.current) {
  //     console.log(activeImg);
  //     console.log(swiperRef.current.swiper.slideTo(4));
  //     swiperRef.current.swiper.slideTo(4);
  //   }
  // }, [activeImg]);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(mainSwiper);
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Swiper
          modules={[Navigation, Controller]}
          slidesPerView={1}
          navigation
          onSwiper={setMainSwiper}
          controller={{ control: thumbsSwiper }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {imgList.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-fit">
                <ReactImageMagnifier
                  srcPreview={item.img}
                  srcOriginal={item.img}
                  width={688}
                  height={688}
                  className="max-w-xs bg-gray-200 rounded-lg md:max-w-none max-h-80 md:max-h-none"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className=" relative group/swiper mt-4">
        <Swiper
          modules={[Navigation, Controller]}
          spaceBetween={20}
          slidesPerView={5}
          grabCursor={true}
          navigation
          onSwiper={setThumbsSwiper}
          controller={{ control: mainSwiper }}
        >
          {imgList.map((item, index) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.img}
                className={`w-fit ${index === activeIndex ? "opacity-20" : ""}`}
                onClick={() => mainSwiper?.slideTo(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageProduct;
