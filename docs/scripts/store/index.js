import Vue from 'vue';
import { isDev } from '@/config';
import dev from './dev';
import page from './page';

export default new Vue({
  name: 'Store',
  mixins: [isDev ? dev : {}, page]
});
