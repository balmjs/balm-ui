import UiLinearProgress from './linear-progress';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiLinearProgress.name, UiLinearProgress);
}

export default UiLinearProgress;
