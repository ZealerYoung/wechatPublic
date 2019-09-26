import axios from 'axios'
import router from '@/router';

// create an axios instance
const service = axios.create({
    // baseURL: globalConfig.ip, // api 的 base_url
    timeout: 5000 // request timeout
});
service.defaults.withCredentials = true;

// request interceptor
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
);
export default service;