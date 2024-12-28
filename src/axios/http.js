
import axios from 'axios';
// import pinia from '@/store/index';
// import useCommonStore from '@/store/common/index';
// const store = useCommonStore(pinia)
// import { loginApi } from '@/axios/api'

export const api = axios.create({
  baseURL: configData.ip,
  timeout: 5000,
});
export const instance = axios.create({
  baseURL: configData.sqliteUrl,
  timeout: 5000,
});


// 添加请求拦截器
api.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  },
);

// 添加响应拦截器
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  },
);

// export default { api, instance };