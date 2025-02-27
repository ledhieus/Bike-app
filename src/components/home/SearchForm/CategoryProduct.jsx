import { useEffect, useState } from "react";
import { getCategory } from "../../../service/category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBars,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { createTree } from "../../../helper/createTree";

const CategoryProduct = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [parentSlug, setParentSlug] = useState("")
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCategory("");
      if(data.code === 200){
        const category = createTree(data.data)
        setCategoryList(category);
      }
    };
    fetchApi();
  }, []);
  return (
    <div className="flex items-center gap-6 bg-bold text-white px-4 py-2 rounded-md relative group/category">
      <div className="flex items-center gap-1 cursor-pointer  w-full">
        <FontAwesomeIcon icon={faBars} />
        <p className="font-bold">DANH MỤC SẢN PHẨM</p>
      </div>
      <FontAwesomeIcon icon={faChevronDown} />
      <div className="absolute bg-[#f8f9fa] text-black top-[40px] left-0 right-0 min-w-full z-30 border rounded-md hidden group-hover/category:block">
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <p className="uppercase px-4 py-2 border-b-[1px] hover:bg-[#e4e5e6] font-medium">
            Tất cả sản phẩm
          </p>
          {categoryList.map((item) => (
            <div
              key={item._id}
              className="uppercase px-4 py-2 border-b-[1px] hover:bg-[#e4e5e6]"
              onMouseEnter={() => {
                setHoveredCategory(item);
                setIsHovering(true);
                setParentSlug(item.slug)
              }}
            >
              <Link
                to={`/category/${item.slug}`}
                className="flex items-center justify-between"
              >
                <p className="font-medium">{item.name}</p>
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
          ))}
          {hoveredCategory &&
            hoveredCategory.children.length > 0 &&
            isHovering && (
              <div
                className="w-[600px]  h-[250px] bg-[#f8f9fa] absolute top-0 left-[267px] shadow-lg border p-6"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="h-fit grid grid-cols-3 gap-4">
                  {hoveredCategory.children.map((item) => (
                    <div key={item._id}>
                      {item.children.length > 0 ? (
                        <>
                          <p className="font-medium text-slate-800 text-[18px] mb-1 hover:text-[#89c91e]">
                            {item.name}
                          </p>
                        </>
                      ) : (
                        <>
                          <Link to={`/category/${parentSlug}/${item.slug}`}>
                            <p className="font-medium text-slate-800 text-[18px] mb-1 hover:text-[#89c91e]">
                              {item.name}
                            </p>
                          </Link>
                        </>
                      )}
                      {item.children.length > 0 && (
                        <div>
                          {item.children.map((itemChildren) => (
                            <Link
                              key={itemChildren.id}
                              to={`/category/${parentSlug}/${itemChildren.slug}`}
                            >
                              <p className="hover:text-[#89c91e]">
                                {itemChildren.name}
                              </p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
