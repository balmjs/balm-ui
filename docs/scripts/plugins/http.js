import axios from 'axios';
import { useBus } from 'balm-ui';

const bus = useBus();

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
        bus.emit('off-loading');

        return response.data;
      },
      (error) => {
        bus.emit('off-loading');

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
  }
};
