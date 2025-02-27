/* eslint-disable react/prop-types */
import CardItem from "../CardItem"

const ListProduct = ({title, productList}) => {
  return (
    <>
      <div className="padding-layout mt-16 mb-16">
        <p className="font-bold text-[28px] mb-4">{title}</p>
        <div className="grid grid-cols-5 gap-6">
          {productList?.map(item=> (
            <CardItem key={item._id} product={item}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default ListProduct