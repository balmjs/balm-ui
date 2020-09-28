import axios from 'axios';
import { useBus } from 'balm-ui';

// axios.defaults.baseURL = '/api';

const bus = useBus();

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
    // bus.emit('off-loading');

    return response.data;
  },
  (error) => {
    // bus.emit('off-loading');

    return Promise.reject(error);
  }
);

const useHttp = () => axios;

export default {
  install(app) {
    app.config.globalProperties.$http = axios;
    app.provide('http', axios);
  }
};
export { useHttp };
