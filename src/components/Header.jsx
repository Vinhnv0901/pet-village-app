import React from "react";
import { Link } from "react-router-dom";
import path from "../utils/path";
import Logo from "../assets/imgs/Logo.png";
import icons from "../utils/icons";
const Header = () => {
  return (
    <header className="w-full ">
      <div className="flex h-[120px] items-center justify-between">
        <div className="flex items-center ml-[75px]">
          <Link to={path.HOME} className="mr-[38px] ">
            <img src={Logo} width={122} height={39} alt="Village logo" />
          </Link>

          <div className="flex items-center justify-center mr-9">
            <icons.BiSolidCategoryAlt
              sx={{ fontSize: "20px" }}
              className="mr-[5px]"
            />
            <span className="text-xl">Danh mục Village</span>
            <icons.IoChevronDown
              sx={{ fontSize: "15px" }}
              className="ml-[5px] m"
            />
          </div>

          <div className="flex items-center justify-center text-xl border-2 border-borderColor rounded-[10px] py-4 mr-9">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm"
              className="w-[384px] ml-[34px] outline-none"
            />
            <icons.IoIosSearch
              sx={{ fontSize: "18px" }}
              className="ml-[110px] mr-[21px]"
            />
          </div>
        </div>

        <div className="flex mr-[75px]">
          <button className="px-[25px] py-4 text-xl rounded-[10px] font-semibold mr-1">
            Đăng ký
          </button>
          <button className="px-[25px] py-4 bg-buttonColor text-white text-xl rounded-[10px] font-semibold">
            Đăng nhập
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
