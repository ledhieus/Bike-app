import { useForm } from "react-hook-form";
import InputText from "../../components/FormInput/InputText";
import MiniBanner from "../../components/MiniBanner";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postRegister } from "../../service/user";
import { setUser } from "../../redux/slices/userInfo";
import { error, success } from "../../libs/message";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    dispatch(setUser(formData));
    const response = await postRegister(formData);
    if (response.code === 200) {
      success(response.message);
      navigate("/otp");
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
      <MiniBanner title={"Đăng Ký"} />
      <div className="padding-layout flex justify-center ">
        <div className="w-[500px] my-10 bg-white px-6 py-4 shadow-lg">
          <p className="font-medium text-[22px] text-center">
            Đăng ký tài khoản
          </p>
          <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
            <InputText
              label={"Họ và tên"}
              name="fullName"
              register={register}
              errors={errors}
              className={"text-[16px]"}
              placeholder="Nhập họ và tên"
            />
            <InputText
              label={"Địa chỉ email"}
              name="email"
              register={register}
              errors={errors}
              className={"text-[16px]"}
              placeholder="Địa chỉ email"
            />
            <InputText
              label={"Số điện thoại"}
              name="phone"
              type="number"
              register={register}
              errors={errors}
              className={"text-[16px]"}
              placeholder="Số điện thoại liên hệ"
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
              Đăng ký
            </button>
            <Link to={"/login"} className="flex justify-end">
              <p className="mt-4 text-[16px] cursor-pointer hover:underline transition duration-300">
                Đã có tài khoản?
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
