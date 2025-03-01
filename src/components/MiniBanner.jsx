/* eslint-disable react/prop-types */

const MiniBanner = ({title}) => {
  return (
    <div className="bg-[url('https://bikelife.com.vn/wp-content/uploads/2021/09/bikes-page-title.jpg')]">
      <div className="padding-layout py-[50px]">
        <p className="text-[42px] uppercase text-white font-bold">{title}</p>
      </div>
    </div>
  )
}

export default MiniBanner