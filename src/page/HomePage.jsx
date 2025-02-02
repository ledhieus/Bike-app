import Banner from "../components/home/Banner";
import ListBrand from "../components/home/ListBrand";
import SearchForm from "../components/home/SearchForm";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#f8f9fa]">
        <SearchForm />
        <Banner />
        <ListBrand />
      </div>
    </>
  );
};

export default HomePage;
