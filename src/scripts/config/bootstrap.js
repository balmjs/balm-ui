import configure from './configure';

const bootstrap = Component => {
  Object.defineProperty(Component, 'config', {
    get() {
      return function(props = {}) {
        configure(Component, props);
      };
    }
  });

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(Component.name, Component);
  }
};

export default bootstrap;
