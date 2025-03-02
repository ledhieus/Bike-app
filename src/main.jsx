import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./page/RootLayout";
import HomePage from "./page/HomePage";
import DetailProductPage from "./page/DetailProductPage";
import BrandPage from "./page/BrandPage";
import BrandSlug from "./page/BrandSlug";
import CategoryPage from "./page/CategoryPage";
import CategoryChildrenPage from "./page/CategoryChildrenPage";
import SearchPage from "./page/SearchPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CartPage from "./page/CartPage";
import PayPage from "./page/PayPage";
import Register from "./page/Auth/Register";
import OTPInputPage from "./page/Auth/OTPInputPage";
import LoginPage from "./page/Auth/LoginPage";
import Logout from "./page/Auth/Logout";
import DonePage from "./page/DonePage";
import AccountPage from "./page/AccountPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:slugProduct",
        element: <DetailProductPage />,
      },
      {
        path: "/brands",
        element: <BrandPage />,
      },
      {
        path: "/brands/:slugNameBrand",
        element: <BrandSlug />,
      },
      {
        path: "/category/:slugNameCategory",
        element: <CategoryPage />,
      },
      {
        path: "/category/:slugNameCategory/:slugCategoryChildren",
        element: <CategoryChildrenPage />,
      },
      {
        path: "/search/:slugSearch",
        element: <SearchPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/pay",
        element: <PayPage />,
      },
      {
        path: "/done",
        element: <DonePage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/otp",
        element: <OTPInputPage />,
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
