import { createApp } from 'vue';
import App from './App.vue';

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui/dist/balm-ui.css';

const app = createApp(App);

app.use(BalmUI);
app.use(BalmUIPlus);

app.mount('#app');
