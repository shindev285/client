import axios from "axios";
import queryString from "query-string";
const baseURL = `http://192.168.100.111:3001`;

const axiosClient = axios.create({
  baseURL,
  // Chuyển các tham số query thành chuỗi query string
  paramsSerializer: (params) => queryString.stringify(params),
});
// req yeu cau
axiosClient.interceptors.request.use(async (config: any) => {
  config.headers = {
    Authorization: ``,
    // Đặt header "Accept" để yêu cầu nhận dữ liệu dưới định dạng JSON
    Accept: "application/json",
    ...config.headers,  // Kết hợp header mặc định với header có sẵn trong config
  };
  return config;
});

// res : phan hoi yeu cau
axiosClient.interceptors.response.use(
  (res)=>{
    if (res.data && res.status === 200 && res.status <300) {
      //// Trả về dữ liệu của response nếu thành công
      return res.data;
    }else{
      return Promise.reject(res.data);
    }
  }, (error) => {
    //trả về Promise.reject để xử lý lỗi
    const { response } = error;
    return Promise.reject(response.data);
  }
)

export default axiosClient;
