import { createApp } from 'vue';
import App from './App.vue';

import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui-plus';
// import 'balm-ui-css';

const app = createApp(App);

app.use(BalmUI);
app.use(BalmUIPlus);

app.mount('#app');
