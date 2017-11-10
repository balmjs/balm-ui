import UiPagination from './data/pagination';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(UiPagination.name, UiPagination);
}

export default UiPagination;
