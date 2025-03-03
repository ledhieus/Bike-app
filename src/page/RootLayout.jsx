import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../../utils/scrollToTop";
import { useSelector } from "react-redux";
import ToolBar from "../components/ToolBar";

const RootLayout = () => {
  const isOpenOverlay = useSelector(state => state.overlay.isOpenOverlay)
  return (
    <div className="bg-[#f8f9fa]">
      <ScrollToTop/>
      <Header />
      <div className="">
        <Outlet />
        {isOpenOverlay && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"></div>
            )}
      </div>
      <Footer />
      <div className="lg:hidden block">
      <ToolBar/>
      </div>
    </div>
  );
};

export default RootLayout;
