const autoInit = (id, definition) => {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.directive(id, definition);
  }
};

export default autoInit;
