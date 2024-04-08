import React, { useEffect } from "react";
import product_heading from "../../assets/imgs/product_heading.png";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { UseSelector, useSelector } from "react-redux";
import { Card, CategoryInProductPage } from "../../components";
const Promotion = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getProducts());
  }, []);
  const { products } = useSelector((state) => state.app);

  return (
    <div className="">
      <img src={product_heading} className="w-full" />
      <div className="mx-[100px] my-[50px] ">
        <p className="text-[40px] font-extrabold mb-[46px]">
          Sản phẩm khuyến mãi
        </p>
        <div className="flex justify-between">
          <CategoryInProductPage />
          <div className="grid grid-cols-3 gap-x-[20px] gap-y-[30px]">
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
      </div>
    </div>
  );
};

export default Promotion;
