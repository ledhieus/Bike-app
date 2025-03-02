/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import ImageComponent from "../ImageComponent";

const Banner = () => {
  const [activeImgId, setActiveImgId] = useState("1");
  // const [activeImg, setActiveImg] = useState("1")
  const bannerList = useMemo(() => [
    {
      id: "1",
      img: "https://bikelife.com.vn/wp-content/uploads/2024/06/banner-home-1.webp",
    },
    {
      id: "2",
      img: "https://bikelife.com.vn/wp-content/uploads/2024/06/banner-home-2.webp",
    },
    {
      id: "3",
      img: "https://bikelife.com.vn/wp-content/uploads/2024/06/banner-home-3.webp",
    },
    {
      id: "4",
      img: "https://bikelife.com.vn/wp-content/uploads/2024/06/banner-home-4.webp",
    },
    {
      id: "5",
      img: "https://bikelife.com.vn/wp-content/uploads/2024/06/banner-home-5.webp",
    },
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImgId((prevId) => {
        const currentIndex = bannerList.findIndex((item) => item.id === prevId);
        const nextIndex = (currentIndex + 1) % bannerList.length;
        return bannerList[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, [bannerList]);

  return (
    <div>
      <div className="relative">
        <div>
          {bannerList.map((item) =>
            item.id === activeImgId ? (
              <>
                <ImageComponent width={1903} height={635} className={"w-full h-full object-cover"} src={item.img}/>
                {/* <img src={item.img} key={item.id} className="w-full h-full object-cover" onLoad={(e) => e.currentTarget.classList.remove("animate-pulse")}/> */}
              </>
            ) : (
              <></>
            )
          )}
        </div>
        <div className="flex items-center gap-2 absolute bottom-2 left-1/2 -translate-x-1/2">
          {bannerList.map((item) => (
            <div
              key={item.id}
              className={`w-4 h-4 rounded-full border border-slate-500 shadow-lg hover:bg-slate-600 cursor-pointer ${
                item.id === activeImgId ? "bg-slate-600" : ""
              }`}
              onClick={() => setActiveImgId(item.id)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
