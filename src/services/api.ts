import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.petruz.dseti.com',

});
export default api;

