import axios from 'axios';
// import bus from '@/store/bus';

export default {
  install(Vue) {
    Vue.prototype.$http = axios;

    axios.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response) => {
        // bus.$emit('off-loading');

        return response.data;
      },
      (error) => {
        // bus.$emit('off-loading');

        return Promise.reject(error);
      }
    );
  }
};
