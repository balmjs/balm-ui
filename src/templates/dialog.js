import Vue from 'vue';
import VueRouter from 'vue-router';
import BalmUI from '../index';
import App from './app';
import dialogPage from './views/dialog';

Vue.use(BalmUI);
Vue.use(VueRouter);

const router = new VueRouter({
  routes:[{
    path: '/home',
    name: 'home',
    component: dialogPage,
    alias: '/'
  }]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
