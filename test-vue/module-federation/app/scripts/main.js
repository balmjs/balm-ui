import { createApp, defineAsyncComponent } from 'vue';
import App from '@/views/layouts/app';

const UiButton = defineAsyncComponent(() => import('RemoteBalmUI/UiButton'));
// const UiEditor = defineAsyncComponent(() => import('RemoteBalmUI/UiEditor'));

const app = createApp(App);

app.component('ui-button', UiButton);
// app.component('ui-editor', UiEditor);

app.mount('#app');
