import { Link, useNavigate } from "react-router-dom";
import MiniBanner from "../../components/MiniBanner";
import { useForm } from "react-hook-form";
import InputText from "../../components/FormInput/InputText";
import { error, success } from "../../libs/message";
import { postLogin } from "../../service/user";
import { getCookie, setCookie } from "../../helper/cookie";
import { useEffect } from "react";

const LoginPage = () => {
  const tokenUser = getCookie("tokenUser");
  const navigate = useNavigate();
  useEffect(() => {
    if (tokenUser) {
      navigate("/", { replace: true });
    }
  }, [tokenUser, navigate]);
  const onSubmit = async (formData) => {
    const response = await postLogin(formData);
    if (response.code === 200) {
      const tokenUser = response.token;
      setCookie("tokenUser", tokenUser, 7);
      success(response.message);
      navigate("/");
    } else {
      error(response.message);
    }
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div>
      <MiniBanner title={"Đăng Nhập"} />
      <div className="padding-layout flex justify-center ">
        <div className="w-[500px] my-10 bg-white px-6 py-4 shadow-lg">
          <p className="font-medium text-[22px] text-center">Đăng Nhập</p>
          <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
            <InputText
              label={"Địa chỉ email"}
              name="email"
              register={register}
              errors={errors}
              className={"text-[16px]"}
              placeholder="Địa chỉ email"
            />
            <InputText
              label={"Mật khẩu"}
              type="password"
              name="password"
              register={register}
              errors={errors}
              placeholder="Nhập mật khẩu"
              className={"text-[16px]"}
            />
            <button className="mt-2 py-2 w-full bg-red-500 text-white uppercase hover:bg-red-400">
              Đăng Nhập
            </button>
            <div className="flex items-center justify-between">
              <Link to={"/register"}>
                <p className="mt-4 text-[16px]  cursor-pointer hover:underline transition duration-300">
                  Chưa có tải khoản?
                </p>
              </Link>
              <p className="mt-4 text-[16px] text-[#89c91e] cursor-pointer hover:underline transition duration-300">
                Quên mật khẩu?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
