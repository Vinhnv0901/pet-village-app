import React, { useEffect } from "react";
import { Introduce, Items } from "../../components";
import { UseSelector, useSelector } from "react-redux";
const Home = () => {
  // useEffect(() => {
  //   const fetchDataHome = async () => {
  //     const response = await apis.getHome();
  //     console.log(response);
  //   };
  //   fetchDataHome();
  // }, []);

  // const { products } = useSelector((state) => state.app);

  return (
    <>
      <Introduce />
      <Items />
    </>
  );
};

export default Home;
