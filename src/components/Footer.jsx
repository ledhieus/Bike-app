import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-[url('https://bikelife.com.vn/wp-content/uploads/2021/09/bikes-footer-bg.jpg')]">
      <div className="text-white padding-layout ">
        <div className="flex md:flex-row flex-col  py-14 gap-4">
          <div className="flex lg :flex-[2] lg:flex-row flex-col gap-4">
            <div className="space-y-4 flex-[1.5]">
              <p className="text-[26px] text-[#89C91E] font-bold">Giới thiệu</p>
              <div className="space-y-4">
                <p className="font-bold text-[20px]">
                  CÔNG TY TNHH MTV XNK BIKE LIFE
                </p>
                <div>
                  <p>
                    Trụ sở: 290 Quốc Lộ 1A, Khu phố 2, P.Trung Mỹ Tây, Q12, TP.
                    Hồ Chí Minh
                  </p>
                  <p>
                    GPKD số 0311530641 do Sở KH và ĐT TP Hồ Chí Minh cấp ngày
                    10/02/2012 GĐ/Sở hữu website Nguyễn Tài{" "}
                  </p>
                  <p>
                    Địa chỉ cửa hàng: 83 Phạm Thái Bường, P.Tân Phong, Q.7,
                    Tp.HCM{" "}
                  </p>
                  <p>Số điện thoại: 090 2123 900</p>
                  <p>Email: info@bikelife.com.vn</p>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faAngleRight} />
                    <p>Về chúng tôi</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faAngleRight} />
                    <p>Liên hệ</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faAngleRight} />
                    <p>Thương hiệu</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faAngleRight} />
                    <p>Tin tức</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[26px] text-[#89C91E] font-bold">
                QUI ĐỊNH BÁN HÀNG
              </p>
              <div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <p>Chính sách bảo hành</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <p>Ưu đãi mua hàng trả góp 0%</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <p>Chính sách bảo mật thông tin</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <p>Hướng dẫn mua hàng</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1  px-5 flex items-center">
            <div className="space-y-4">
            <p>
              Đăng ký email để nhận những thông tin mới nhất về các khuyến mãi,
              tin tức, sự kiện của BikeLife
            </p>
            <form className="flex items-center gap-4 ">
              <input type="text" className="px-2 py-2 text-black border flex-1" placeholder="Your email address"/>
              <div className="bg-[#e83a3a] text-white text-[12px] font-bold uppercase lg:px-6 px-4 py-3 whitespace-nowrap">Sign up</div>
            </form>
            <div className="flex gap-4">
              <div className="bg-[#007BFF] px-4 py-2">Messenger</div>
              <div className="bg-[#ffc107] px-4 py-2 text-black">Email</div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
