import axios from 'axios';
// import bus from '@/store/bus';

// axios.defaults.baseURL = '/api';

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

export default {
  install(app) {
    app.provide('$http', axios);
  }
};
