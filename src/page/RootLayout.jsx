import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../../utils/scrollToTop";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const isOpenOverlay = useSelector(state => state.overlay.isOpenOverlay)
  return (
    <div className="bg-[#f8f9fa]">
      <ScrollToTop/>
      <Header />
      <div className="pt-[160px]">
        <Outlet />
        {isOpenOverlay && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"></div>
            )}
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
