import multiConfigure from './multi-configure';

const autoInstall = (Vue, options, { Components, Plugins, Directives }) => {
  // Configure the components' props
  multiConfigure(Components, options);

  // Install the components
  for (const key in Components) {
    const Component = Components[key];
    Vue.component(Component.name, Component);
  }

  // Install the plugins
  for (const key in Plugins) {
    const Plugin = Plugins[key];
    options[key] ? Vue.use(Plugin, options[key]) : Vue.use(Plugin);
  }

  // Install the directives
  for (const key in Directives) {
    const Directive = Directives[key];
    Vue.directive(Directive.name, Directive);
  }
};

export default autoInstall;
