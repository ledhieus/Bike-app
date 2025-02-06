import ImageProduct from "./ImageProduct";
import InfoProduct from "./InfoProduct";

const DetailProduct = () => {
  
  return (
    <div className="padding-layout py-5">
      <div className="grid grid-cols-2 gap-6">
        <ImageProduct/>
        <InfoProduct/>
      </div>
    </div>
  );
};

export default DetailProduct;
