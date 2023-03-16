import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue2 from '@vitejs/plugin-vue2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.js',
      'balm-ui-css': 'balm-ui/dist/balm-ui.css',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
