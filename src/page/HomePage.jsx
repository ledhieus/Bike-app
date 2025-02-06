import Banner from "../components/home/Banner";
import BikeList from "../components/home/BikeList";
import ListBrand from "../components/home/ListBrand";
import ListProduct from "../components/home/ListProduct";
import New from "../components/home/New";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#f8f9fa]">
        <Banner />
        <ListBrand />
        <ListProduct title="Sản phẩm mới" />
        <ListProduct title="Sản phẩm giảm giá" />
        <ListProduct title="Sản phẩm bán chạy" />
        <BikeList/>
        <New/>
      </div>
    </>
  );
};

export default HomePage;
