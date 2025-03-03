const New = () => {
  const news = [
    {
      id: "1",
      title: "Miễn phí Ship",
      img: "https://bikelife.com.vn/wp-content/uploads/2021/09/bikes-free-shipping.svg",
    },
    {
      id: "2",
      title: "Chế độ hoàn trả",
      img: "https://bikelife.com.vn/wp-content/uploads/2021/09/bikes-return.svg",
    },
    {
      id: "3",
      title: "Tư vấn 24/7",
      img: "https://bikelife.com.vn/wp-content/uploads/2021/09/bikes-24-support.svg",
    },
    {
      id: "4",
      title: "Thanh toán tiện lợi",
      img: "https://bikelife.com.vn/wp-content/uploads/2021/09/bikes-payment.svg",
    },
  ];
  return (
    <div className="padding-layout mt-16 pb-20">
      <p className="text-[40px] font-bold mb-8 text-center">Tin tức nổi bật</p>
      <div className="grid md:grid-cols-4 gap-4 grid-cols-2">
        {news.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img src={item.img} className="w-[80px]" />
            <p className="font-bold text-[16px] mt-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
