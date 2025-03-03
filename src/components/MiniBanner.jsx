/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const MiniBanner = ({title}) => {
  return (
    <div className="bg-[url('https://bikelife.com.vn/wp-content/uploads/2021/09/bikes-page-title.jpg')]">
      <div className="padding-layout lg:py-[50px] md:py-[40px] py-[30px]">
        <p className="lg:text-[42px] md:text-[32px] text-[22px] uppercase text-white font-bold">{title}</p>
        <p className="font-medium text-white lg:text-[18px] text-[14px]"><Link to={"/"}>Home </Link>/ {title}</p>
      </div>
    </div>
  )
}

export default MiniBanner