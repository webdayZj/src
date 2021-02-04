import axios from "axios";
import { stringify } from "qs";

let baseURL = "/grgcms";
// const env = process.env.NODE_ENV;
// if (env === 'production') {
//     baseURL = '/grgcms';
// }

const http = axios.create({
  baseURL,
  timeout: 10000,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  transformRequest: [
    function(data) {
      return stringify(data);
    },
  ],
});

// 添加响应拦截器
http.interceptors.response.use(
  function(res) {
    // 对响应数据做点什么
    // if (res && res.data && res.data.code === '200') {
    //     return res.data.body;
    // }
    // 天气预报接口
    if (res && res.status === 200) {
      return res.data;
    }
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export { http };
