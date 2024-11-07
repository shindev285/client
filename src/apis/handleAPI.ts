import axiosClient from "./axiosClient";

const handleAPI = async (
    url: string,
    data?: any,
    method?: "get" | "post" | "put" | "delete"
  ) => {
    return await axiosClient({
      url,
      method: method ?? "get",
      data,
    });
//   url: string,
//   data?: any,
//   method: "get" | "post" | "put" | "delete" = "get"
// ) => {
//   try {
//     const response = await axiosClient({
//       url,
//       method,
//       ...(method === "get" ? { params: data } : { data }),
//     });
//     return response;
//   } catch (error) {
//     console.error("API Error:", error);
//     throw error;
//   }
};

export default handleAPI;
