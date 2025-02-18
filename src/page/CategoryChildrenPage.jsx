import { useParams } from "react-router-dom";
import LayoutProductList from "../components/LayoutProductList";

const CategoryChildrenPage = () => {
  const { slugNameCategory, slugCategoryChildren } = useParams();
  return (
    <LayoutProductList
      slug={slugNameCategory}
      slugChildren={slugCategoryChildren}
    />
  );
};

export default CategoryChildrenPage;
