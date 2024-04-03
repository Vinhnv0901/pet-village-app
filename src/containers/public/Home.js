import React, { useEffect } from "react";
import {
  Course,
  Introduce,
  Items,
  Knowledge,
  RegisterBottom,
} from "../../components";
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
      <Course />
      <Knowledge />
      <RegisterBottom />
    </>
  );
};

export default Home;
