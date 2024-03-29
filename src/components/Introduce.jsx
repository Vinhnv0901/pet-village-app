import React from "react";

const Introduce = () => {
  return (
    <>
      <div className="flex w-full bg-homePink justify-between">
        <div className="flex flex-col ml-[100px] mt-[140px] w-[526px]">
          <span className="text-[50px] font-extrabold">SIÊU THỊ THÚ CƯNG</span>
          <span className="text-[55px] font-extrabold text-[#9676B2]">
            PETVILLAGE
          </span>
          <p className="text-[#92888F] text-[20px] mt-12 text-justify">
            PetVillage là chuỗi pet shop thú cưng tại TP.HCM, Hà Nội với nhiều
            chi nhánh cửa hàng chuyên cung cấp đồ dùng, quần áo thức ăn, sữa tắm
            và các phụ kiện Chó cảnh, Mèo cảnh, Cá cảnh. Với chất lượng dịch vụ
            tốt nhất luôn được khách hàng tin tưởng sẽ là điểm đến lý tưởng và
            tuyệt vời dành cho vật nuôi.
          </p>
          <div className="flex mt-[60px] gap-5">
            <button className="bg-[#F04F3C] w-[183px] h-[60px] rounded-[60px] text-white text-[20px] font-bold">
              Khuyến mãi
            </button>
            <button className="w-[183px] h-[60px] rounded-[60px] text-[#F04F3C] text-[20px] font-bold border-[1px] border-[#F04F3C]">
              Dịch vụ
            </button>
          </div>
        </div>
        <div>ảnh bên phải</div>
      </div>
    </>
  );
};

export default Introduce;
