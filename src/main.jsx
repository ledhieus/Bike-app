import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './page/RootLayout'
import HomePage from './page/HomePage'
import DetailProductPage from './page/DetailProductPage'
import BrandPage from './page/BrandPage'
import BrandSlug from './page/BrandSlug'
import CategoryPage from './page/CategoryPage'

const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/product/:slugProduct",
        element: <DetailProductPage/>
      },
      {
        path: "/brands",
        element: <BrandPage/>
      },
      {
        path: "/brands/:slugNameBrand",
        element: <BrandSlug/>
      },
      {
        path: "/category/:slugNameCategory",
        element: <CategoryPage/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
