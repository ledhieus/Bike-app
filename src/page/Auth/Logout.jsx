import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../helper/cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleToken } from "../../redux/slices/tokenUser";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    deleteCookie("tokenUser");
    deleteCookie("idUser");
    navigate("/");
    dispatch(toggleToken())
  }, [navigate, dispatch]);
  return <></>;
}

export default Logout