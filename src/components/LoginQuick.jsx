import { Link, useNavigate } from "react-router-dom";
import InputText from "./FormInput/InputText";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toggleOverlay } from "../redux/slices/overlay";
import { setCookie } from "../helper/cookie";
import { error, success } from "../libs/message";
import { postLogin } from "../service/user";

const LoginQuick = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (formData) => {
    const response = await postLogin(formData);
    if (response.code === 200) {
      const tokenUser = response.token;
      setCookie("tokenUser", tokenUser, 7);
      success(response.message);
      dispatch(toggleOverlay())
      navigate("/");
    } else {
      error(response.message);
    }
  };
  return (
    <div className="absolute top-[25px] right-[-10px] bg-[#f8f9fa] w-[350px] shadow-xl p-6 rounded-md">
      <div className="flex py-2 border-b-2 items-center justify-between">
        <p className="font-medium text-[22px]">Đăng nhập</p>
        <Link to={"/register"} onClick={() => dispatch(toggleOverlay())}>
          <p className="text-[16px] text-[#89c91e] cursor-pointer">
            Đăng ký tài khoản
          </p>
        </Link>
      </div>
      <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label={"Địa chỉ email"}
          name="email"
          register={register}
          errors={errors}
          className={"text-[16px]"}
        />
        <InputText
          label={"Mật khẩu"}
          type="password"
          name="password"
          register={register}
          errors={errors}
          className={"text-[16px]"}
        />
        <button className="mt-2 py-2 w-full bg-red-500 text-white uppercase hover:bg-red-400">
          Đăng nhập
        </button>
        <p className="mt-4 text-[16px] text-[#89c91e] cursor-pointer hover:underline transition duration-300">
          Quên mật khẩu?
        </p>
      </form>
    </div>
  );
};

export default LoginQuick;
