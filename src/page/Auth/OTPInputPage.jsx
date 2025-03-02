import { useSelector } from "react-redux";
import OtpInput from "../../components/FormInput/OtpInput";
import MiniBanner from "../../components/MiniBanner";
import { postVerifyOtp } from "../../service/user";
import { error, success } from "../../libs/message";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../helper/cookie";
import { useEffect } from "react";

const OTPInputPage = () => {
  const tokenUser = getCookie("tokenUser");
  const userInfo = useSelector(state => state.userInfo.userInfo)
  const navigate = useNavigate()
  useEffect(() => {
    if (!tokenUser) {
      navigate("/", { replace: true });
    }
  }, [tokenUser, navigate]);
  const handleOTPComplete = async (otp) => {
    const codeVerify = {
      ...userInfo,
      otp: otp
    } 
    const response = await postVerifyOtp(codeVerify)
    if(response.code === 200 ){
      success(response.message)
      const tokenUser = response.token
      setCookie("tokenUser", tokenUser, 7)
      navigate("/")
    }else{
      error(response.message)
    }
  };
  return (
    <div>
      <MiniBanner title={"Xác thực Otp"} />
      <div className="padding-layout flex justify-center">
        <div className="w-[500px] h-[300px] my-10 bg-white px-6 py-4 shadow-lg flex flex-col items-center justify-center">
          <p className="font-medium text-[22px] text-center">
            Nhập mã OTP
          </p>
          <OtpInput length={6} onComplete={handleOTPComplete} />
          <p className="mt-4 text-gray-600 text-center">
            Vui lòng nhập mã OTP đã gửi đến email của bạn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPInputPage;
