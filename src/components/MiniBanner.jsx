/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const MiniBanner = ({title}) => {
  return (
    <div className="bg-[url('https://bikelife.com.vn/wp-content/uploads/2021/09/bikes-page-title.jpg')]">
      <div className="padding-layout py-[50px]">
        <p className="text-[42px] uppercase text-white font-bold">{title}</p>
        <p className="font-medium text-white"><Link to={"/"}>Home </Link>/ {title}</p>
      </div>
    </div>
  )
}

export default MiniBanner