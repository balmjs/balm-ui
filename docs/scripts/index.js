import '@/polyfill';
import { isIE, killIE } from '@/kill-ie';
import createApp from '@/main';

if (isIE) {
  killIE();
} else {
  createApp();
}
