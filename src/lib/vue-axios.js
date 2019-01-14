import axios from 'axios'
import {Message} from 'element-ui'

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(config.url.indexOf('/login') != -1){

    }else {
        config.headers.Authorization = window.sessionStorage.getItem('token')
     }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    if(response.data.meta.status === 200){
        Message.success(response.data.meta.msg)
    }else if (response.data.meta.status === 400){
        Message.error(response.data.meta.msg)
    }
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';
export default {
    install(Vue) {
        Vue.prototype.$axios = axios;
    }
}