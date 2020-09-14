import bus from '@/store/bus';

export default {
  install(app) {
    app.provide('$bus', bus);
  }
};
