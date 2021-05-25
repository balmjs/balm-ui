import { createApp, createSSRApp } from 'vue';

const inSSR = typeof window === 'undefined';

const createVueApp = inSSR ? createSSRApp : createApp;

export default createVueApp;
