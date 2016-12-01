import Vue from 'vue';
import BalmUI from './index';
import App from './templates/app';

Vue.use(BalmUI);

new Vue({
  render: h => h(App)
}).$mount('#app');
