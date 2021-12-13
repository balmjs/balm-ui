import axios from 'axios';
import { useBus } from 'balm-ui';

// axios.defaults.baseURL = API_ENDPOINT;

const bus = useBus();

axios.interceptors.request.use(
  (config) => {
    if (config.loading) {
      bus.emit('request');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    response.config.loading && bus.emit('response');

    return response.data;
  },
  (error) => {
    if (error.response) {
      bus.emit('on-error', 'Response Error');
    } else if (error.request) {
      bus.emit('on-error', 'Request Error');
    } else {
      bus.emit('on-error', 'Unknown Error');
    }

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
