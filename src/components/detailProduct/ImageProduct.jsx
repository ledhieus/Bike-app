/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Controller } from "swiper/modules";
import { useState } from "react";
import ReactImageMagnifier from "simple-image-magnifier/react";
const ImageProduct = ({imageDetail}) => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col px-6">
      <div className="flex">
        <Swiper
          modules={[Navigation, Controller]}
          slidesPerView={1}
          navigation
          onSwiper={setMainSwiper}
          controller={{ control: thumbsSwiper }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {imageDetail?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-fit">
                <ReactImageMagnifier
                  srcPreview={item}
                  srcOriginal={item}
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
          {imageDetail?.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
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
