/** @format */

import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_HOST_CORS_BYPASS}http://api.petruz.dseti.com`,
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
