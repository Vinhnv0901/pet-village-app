import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";
import { UseSelector, useSelector } from "react-redux";

const Items = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getProducts());
  }, []);
  const { products } = useSelector((state) => state.app);

  return (
    <div className="px-12">
      <div className="flex justify-between items-center mb-[50px]">
        <p className="text-[#2E2437] font-bold text-[40px]">
          Sản phẩm bán chạy
        </p>
        <span className="font-semibold text-[20px] text-[#000000]">
          Xem tất cả
        </span>
      </div>
      <div className="grid grid-cols-4 gap-x-10 gap-y-[50px]">
        {products.slice(0, 8).map((item) => {
          return (
            <Card
              key={item?._id}
              image={item?.image}
              name={item?.name}
              bought={item?.bought}
              price={item?.price}
              discount={item?.discount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Items;
