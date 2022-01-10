import { createApp, defineAsyncComponent } from 'vue';
import App from '@/views/layouts/app';

const UiButton = defineAsyncComponent(() => import('RemoteBalmUI/UiButton'));

const app = createApp(App);

app.component('ui-button', UiButton);

app.mount('#app');
