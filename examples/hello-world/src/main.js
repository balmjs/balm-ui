import Vue from 'vue';
import App from './App.vue';

// For Import All
import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui-plus';

// For Import on Demand
// import { UiButton } from 'balm-ui';
// import { $alert } from 'balm-ui-plus';

import 'balm-ui-css';

Vue.config.productionTip = false;

// For Import All
Vue.use(BalmUI);
Vue.use(BalmUIPlus);

// For Import on Demand
// Vue.use(UiButton);
// Vue.use($alert);

new Vue({
  render: (h) => h(App)
}).$mount('#app');
