import axios from 'axios';

// 创建axios实例
const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});
// 添加一个请求拦截器
instance.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-console
    console.log(config);
    return config;
  },
  (error) => Promise.reject(error),
);
// 添加一个响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 2xx范围的状态码都会触发该函数
    // 对响应数据做点什么

    // eslint-disable-next-line no-console
    console.log(response);
    if (response.data.status === 'fail') {
      return Promise.reject(response.data.msg);
    }
    return response.data.data;
  },
  (error) =>
    // 对响应错误做点什么
    // eslint-disable-next-line implicit-arrow-linebreak
    Promise.reject(error),
);

export default instance;
