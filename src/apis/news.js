import axios from "../axios";

export const getNews = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/api/news",
        method: "get",
        //params: {id: id} chuyền tham số
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
