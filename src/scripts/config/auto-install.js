import multiConfigure from './multi-configure';

const autoInstall = (Vue, options, Composition) => {
  const { Components, Plugins, Directives } = Composition;

  // Configure the components' props
  multiConfigure(Components, options);

  // Install the components
  for (const Component of Components) {
    Vue.component(Component.name, Component);
  }

  // Install the plugins
  for (const [key, Plugin] of Object.entries(Plugins)) {
    options[key] ? Vue.use(Plugin, options[key]) : Vue.use(Plugin);
  }

  // Install the directives
  for (const Directive of Directives) {
    Vue.directive(Directive.name, Directive);
  }
};

export default autoInstall;
