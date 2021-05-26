/** @format */

import axios from 'axios';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
// axios.defaults.headers = {
//   'Access-Control-Allow-Origin': '*',
//   'Origin': 'http: 127.0.0.1:3001'
// };
const api = axios.create({
  baseURL: 'http://192.168.0.119:3333',
  // baseURL: `http://192.168.30.152:8000`
});
// api.interceptors.request.use(
//   // config => {
//   //   const { origin } = new URL(config.url || '');
//   //   const allowedOrigins = [config.baseURL];
//   //   const token = localStorage.getItem('token');
//   //   if (allowedOrigins.includes(origin)) {
//   //     config.headers.authorization = `Bearer ${token}`;
//   //   }
//   //   return config;
//   // },
//   error => {
//     return Promise.reject(error);
//   }
// );
export default api;
