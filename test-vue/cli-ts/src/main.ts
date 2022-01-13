import { createApp } from 'vue';
import App from './App.vue';

import BalmUI, { UiButton, $alert } from 'balm-ui';
import BalmUIPlus, { UiEditor } from 'balm-ui-plus';
import 'balm-ui-css';

const app = createApp(App);

app.use(BalmUI);
app.use(BalmUIPlus);
// app.component('ui-button', UiButton);
// app.use($alert);
// app.component('ui-editor', UiEditor);

app.mount('#app');
