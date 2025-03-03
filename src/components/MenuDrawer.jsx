/* eslint-disable react/prop-types */
import {
  faAngleRight,
  faArrowLeft,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer } from "antd";
import { useEffect, useState } from "react";
import { getCategory } from "../service/category";
import { createTree } from "../helper/createTree";
import { Link } from "react-router-dom";
import InputSearch from "./DrawerMenu/InputSearch";

const MenuDrawer = ({ open, setOpen }) => {
  const [activeTab, setActiveTab] = useState("menu");
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [slugCategoryParent, setSlugCategoryParent] = useState("");
 
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCategory("");
      if (data.code === 200) {
        const category = createTree(data.data);
        console.log(category);
        setCategoryList(category);
      }
    };
    fetchApi();
  }, []);
  
  return (
    <Drawer
      title={
        <div className="flex justify-between items-center">
          <p>Menu</p>
          <div
            className="flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon icon={faX} className="font-normal text-[14px]" />
            <p>Đóng</p>
          </div>
        </div>
      }
      placement="left"
      closable={false}
      onClose={onClose}
      open={open}
      styles={{ body: { padding: 0 } }}
      key="left"
    >
      <div>
        <InputSearch setOpen={setOpen}/>
        {selectedCategory === null ? (
          <>
            <div className="grid grid-cols-2 text-center">
              <p
                className={` py-4 text-[16px] font-medium border-b cursor-pointer ${
                  activeTab === "menu"
                    ? "border-b-green-600 bg-gray-100"
                    : "bg-gray-50"
                }`}
                onClick={() => setActiveTab("menu")}
              >
                Menu
              </p>
              <p
                className={` py-4 text-[16px] font-medium border-b cursor-pointer ${
                  activeTab === "category"
                    ? "border-b-green-600 bg-gray-100"
                    : "bg-gray-50"
                }`}
                onClick={() => setActiveTab("category")}
              >
                Danh Mục SP
              </p>
            </div>
            {activeTab === "menu" ? (
              <div className="flex flex-col">
                <Link to={"/"} className="py-4 px-4 uppercase font-medium cursor-pointer" onClick={()=> setOpen(false)}>
                  Trang chủ
                </Link>
                <Link to={"/brands"} className="py-4 px-4 uppercase font-medium cursor-pointer" onClick={()=> setOpen(false)}>
                  Thương hiệu
                </Link>
                <p className="py-4 px-4 uppercase font-medium cursor-pointer">
                  Giới thiệu
                </p>
                <p className="py-4 px-4 uppercase font-medium cursor-pointer">
                  Liên hệ
                </p>
              </div>
            ) : (
              <div>
                {categoryList.length > 0 &&
                  categoryList.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center justify-between"
                    >
                      <Link
                        to={`/category/${item.slug}`}
                        className="py-4 px-4 uppercase font-medium cursor-pointer"
                        onClick={()=> {setOpen(false), setActiveTab("menu"), setSelectedCategory(null), setSlugCategoryParent("")}}
                      >
                        {item.name}
                      </Link>
                      <div
                        onClick={() => {
                          setSelectedCategory(item.children),
                          setSlugCategoryParent(item.slug);
                        }}
                        className="cursor-pointer"
                      >
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="px-4 text-[16px] font-normal"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </>
        ) : (
          <>
            <div
              className="flex items-center gap-2 py-4 px-4 cursor-pointer bg-gray-100"
              onClick={() => setSelectedCategory(null)}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-[16px]" />
              <p className="font-medium">Quay lại</p>
            </div>
            {selectedCategory !== null &&
              selectedCategory.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between"
                >
                  <Link
                    to={`/category/${slugCategoryParent}/${item.slug}`}
                    className="py-4 px-4 uppercase font-medium cursor-pointer"
                    onClick={()=> {setOpen(false), setActiveTab("menu"), setSelectedCategory(null), setSlugCategoryParent("")}}
                  >
                    {item.name}
                  </Link>
                  {item.children.length > 0 && (
                    <div className="cursor-pointer" onClick={()=> setSelectedCategory(item.children)}>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="px-4 text-[16px] font-normal"
                      />
                    </div>
                  )}
                </div>
              ))}
          </>
        )}
      </div>
    </Drawer>
  );
};

export default MenuDrawer;
