import React from "react";
import Test from "../assets/imgs/testItem.png";
import star from "../assets/imgs/star.png";

const Card = ({ image, name, bought, price, discount }) => {
  let newPrice = price - (price / 100) * discount;
  return (
    <div className="flex flex-col px-1 cursor-pointer round items-center rounded-[10px] shadowItem overflow-hidden w-[308px]">
      <img
        src={image}
        height={300}
        width={300}
        className="object-cover rounded-[10px]"
      />
      <p className="text-[#2E2437] font-medium text-2xl mt-[18px] text-justify h-[96px]">
        {name.length >= 72 ? `${name?.slice(0, 72)}...` : name}
      </p>
      <div className="mt-5 flex w-full">
        <div className="flex items-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <img
              src={star}
              height={15}
              width={15}
              key={Math.random()}
              className="h-[15px]"
            />
          ))}
        </div>
        <p className="ml-[10px] text-[#92888F]">(Đã bán {bought} sản phẩm)</p>
      </div>
      <div className="mt-[10px] flex w-full items-center gap-2">
        <p className="text-[#2E2437] text-[26px] font-extrabold">
          {newPrice.toLocaleString()} <span className="underline">đ</span>
        </p>
        {discount !== 0 && (
          <>
            <p className="text-[#92888F] text-[26px] line-through">
              {price.toLocaleString()} <span className="underline">đ</span>
            </p>
            <p className="text-[#DF0000] text-[26px]">-{discount}%</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
