import Describe from "../components/detailProduct/Describe";
import DetailProduct from "../components/detailProduct/DetailProduct";
import ListProduct from "../components/home/ListProduct";


const DetailProductPage = () => {
  
  
  return (
    <div>
      <DetailProduct/>
      <hr/>
      <Describe/>
      <hr/>
      <ListProduct title="Sản phảm tương tự"/>
    </div>
  );
};

export default DetailProductPage;
