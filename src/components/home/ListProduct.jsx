/* eslint-disable react/prop-types */
import CardItem from "../CardItem"

const ListProduct = ({title}) => {
  return (
    <>
      <div className="padding-layout mt-16 mb-16">
        <p className="font-bold text-[28px] mb-4">{title}</p>
        <div className="grid grid-cols-5 gap-6">
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        </div>
      </div>
    </>
  )
}

export default ListProduct