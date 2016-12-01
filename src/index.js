import UiBadge from './components/badge';
import UiButton from './components/button';

const BalmUI = {
  UiBadge,
  UiButton,
  install(Vue) {
    Vue.component('ui-badge', UiBadge);
    Vue.component('ui-button', UiButton);
  }
};

module.exports = BalmUI;

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI);
}
