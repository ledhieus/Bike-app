import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchForm from "../components/home/SearchForm";

const RootLayout = () => {
  return (
    <>
      <Header />
      <SearchForm />
      <Outlet />
      <Footer/>
    </>
  );
};

export default RootLayout;
