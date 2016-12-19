import Vue from 'vue';
import VueRouter from 'vue-router';
import BalmUI from '../index';
import App from './app';
import routes from './routes/index';

Vue.use(VueRouter);
Vue.use(BalmUI);

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
