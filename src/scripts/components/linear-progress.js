import UiLinearProgress from './linear-progress.vue';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiLinearProgress.name, UiLinearProgress);
}

export default UiLinearProgress;
