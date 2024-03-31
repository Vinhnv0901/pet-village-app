import axios from "../axios";

export const getHome = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/api/products",
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
