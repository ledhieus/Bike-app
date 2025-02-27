import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchForm from "../components/home/SearchForm";

const RootLayout = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <Header />
      <SearchForm />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default RootLayout;
