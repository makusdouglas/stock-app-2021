/** @format */

import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_HOST_CORS_BYPASS}api.petruz.dseti.com`
});
export default api;
