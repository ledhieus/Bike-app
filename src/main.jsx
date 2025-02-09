import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './page/RootLayout'
import HomePage from './page/HomePage'
import DetailProductPage from './page/DetailProductPage'
import BrandPage from './page/BrandPage'

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
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
