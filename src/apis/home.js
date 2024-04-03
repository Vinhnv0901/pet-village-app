import axios from "../axios";

export const getProducts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/api/products",
        method: "get",
        //params: {id: id} chuyền tham số
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
