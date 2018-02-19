import multiConfigure from './multi-configure';

const multiBootstrap = Components => {
  Object.defineProperty(Components, 'config', {
    get() {
      return function(options = {}) {
        multiConfigure(Components, options);
      };
    }
  });

  if (typeof window !== 'undefined' && window.Vue) {
    for (let key in Components) {
      let Component = Components[key];
      window.Vue.component(Component.name, Component);
    }
  }
};

export default multiBootstrap;
