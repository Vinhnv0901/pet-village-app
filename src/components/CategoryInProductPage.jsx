import React, { useState } from "react";
import icons from "../utils/icons";
const CategoryInProductPage = () => {
  const [isCategory, setIsCategory] = useState(false);
  const [isFoodCategory, setFoodIsCategory] = useState(false);
  const [isBowlCategory, setBowlIsCategory] = useState(false);
  const [isCageCategory, setCageIsCategory] = useState(false);
  const [isJoyCategory, setJoyIsCategory] = useState(false);
  const [isCareCategory, setCareIsCategory] = useState(false);
  const [isCollarCategory, setIsCollarCategory] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  return (
    <div className="w-[300px] flex flex-col">
      <p className="text-[25px] font-bold text-[#29293E] mb-[20px]">Bộ Lộc</p>
      <div>
        <span
          onClick={() => setIsCategory(!isCategory)}
          className="flex items-center justify-between mb-[14px] cursor-pointer text-[20px]"
        >
          <p className="font-semibold text-[#29293E]">Danh mục sản phẩm</p>
          {isCategory ? <icons.IoIosArrowDown /> : <icons.IoIosArrowForward />}
        </span>

        {isCategory && (
          <div className="text-[20px]">
            <div className="flex flex-col px-5">
              <span
                className="flex items-center justify-between mb-[14px] cursor-pointer"
                onClick={() => setFoodIsCategory(!isFoodCategory)}
              >
                <p>Thức ăn</p>
                {isFoodCategory ? (
                  <icons.IoIosArrowDown />
                ) : (
                  <icons.IoIosArrowForward />
                )}
              </span>
              {isFoodCategory && (
                <div className="flex flex-col gap-[10px] px-[10px] mb-[14px]">
                  <p className="cursor-pointer hover:font-semibold">
                    Bánh thường
                  </p>
                  <p className="cursor-pointer hover:font-semibold">Pate</p>
                  <p className="cursor-pointer hover:font-semibold">Sữa</p>
                </div>
              )}
            </div>

            <span
              className="flex items-center justify-between px-5 mb-[14px] cursor-pointer"
              onClick={() => setBowlIsCategory(!isBowlCategory)}
            >
              <p>Bát ăn & bình nước</p>
              {isBowlCategory ? (
                <icons.IoIosArrowDown />
              ) : (
                <icons.IoIosArrowForward />
              )}
            </span>

            <span
              className="flex items-center justify-between px-5 mb-[14px] cursor-pointer"
              onClick={() => setCageIsCategory(!isCageCategory)}
            >
              <p>Chuồng & nệm</p>
              {isCageCategory ? (
                <icons.IoIosArrowDown />
              ) : (
                <icons.IoIosArrowForward />
              )}
            </span>

            <span
              className="flex items-center justify-between px-5 mb-[14px] cursor-pointer"
              onClick={() => setJoyIsCategory(!isJoyCategory)}
            >
              <p>Đồ chơi & Huấn luyên</p>
              {isJoyCategory ? (
                <icons.IoIosArrowDown />
              ) : (
                <icons.IoIosArrowForward />
              )}
            </span>

            <span
              className="flex items-center justify-between px-5 mb-[14px] cursor-pointer"
              onClick={() => setCareIsCategory(!isCareCategory)}
            >
              <p>Vệ sinh & chăm sóc</p>
              {isCareCategory ? (
                <icons.IoIosArrowDown />
              ) : (
                <icons.IoIosArrowForward />
              )}
            </span>
            <span
              className="flex items-center justify-between px-5 mb-[14px] cursor-pointer"
              onClick={() => setIsCollarCategory(!isCollarCategory)}
            >
              <p>Vòng cổ & dây dắt</p>
              {isCollarCategory ? (
                <icons.IoIosArrowDown />
              ) : (
                <icons.IoIosArrowForward />
              )}
            </span>
          </div>
        )}
      </div>

      <div>
        <span
          onClick={() => setIsPrice(!isPrice)}
          className="flex items-center justify-between mb-[14px] cursor-pointer text-[20px]"
        >
          <p className="font-semibold text-[#29293E]">Nhập khoảng giá</p>
          {isPrice ? <icons.IoIosArrowDown /> : <icons.IoIosArrowForward />}
        </span>
        {isPrice && (
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center border-[#dddddd] border-[2px] rounded-[10px] py-4 h-[57px] overflow-hidden">
              <div className="bg-[#e6e6e6] w-[55px] text-[#29293E] font-semibold text-[20px] py-6 flex items-center justify-center">
                $
              </div>
              <input
                type="text"
                placeholder="Giá thấp nhất"
                className="flex-auto py-6 pl-[10px] outline-none bg-[#f9f9f9] text-[20px]"
              />
            </div>
            <div className="flex items-center border-[#dddddd] border-[2px] rounded-[10px] py-4 h-[57px] overflow-hidden">
              <div className="bg-[#e6e6e6] w-[55px] text-[#29293E] font-semibold text-[20px] py-6 flex items-center justify-center">
                $
              </div>
              <input
                type="text"
                placeholder="Giá thấp nhất"
                className="flex-auto py-6 pl-[10px] outline-none bg-[#f9f9f9] text-[20px]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryInProductPage;
