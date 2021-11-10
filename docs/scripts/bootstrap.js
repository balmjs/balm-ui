import '@/polyfill';
import { isIE, killIE } from '@/kill-ie';
import createBalmUIApp from '@/main';

isIE ? killIE() : createBalmUIApp();
