import { isIE, killIE } from '@/kill-ie';
import createApp from '@/main';

isIE ? killIE() : createApp();
