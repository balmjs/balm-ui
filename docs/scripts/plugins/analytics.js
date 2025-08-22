import { nextTick } from 'vue';
import { isProd } from '@/config';

/**
 * 统计代码注入插件
 */

function injectAnalytics(siteId) {
  // 只有在生产环境中才注入统计代码
  if (isProd) {
    const script = document.createElement('script');
    script.src = 'https://analytics.balmjs.com/api/script.js';
    script.setAttribute('data-site-id', siteId);
    script.defer = true;
    document.head.appendChild(script);
  }
}

export default {
  install(app, options = {}) {
    const siteId = typeof options === 'object' ? options.siteId : options;

    nextTick(() => {
      injectAnalytics(siteId);
    });
  }
};
