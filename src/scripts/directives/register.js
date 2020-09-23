const autoInit = (name, definition) => {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.directive(name, definition);
  }
};

export default autoInit;
