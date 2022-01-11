import { createApp } from 'vue';
import App from './App.vue';

import BalmUI, { UiButton, $alert } from 'balm-ui';
import BalmUIPlus from 'balm-ui-plus';
import 'balm-ui-css';

const app = createApp(App);

app.use(BalmUI);
// app.component('ui-button', UiButton);
// app.use($alert);
app.use(BalmUIPlus);

app.mount('#app');
