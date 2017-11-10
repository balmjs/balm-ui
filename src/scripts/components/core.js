import mixin from '../plugins/mixin';
import event from '../plugins/event';

const plugins = {
  mixin,
  event
};

if (typeof window !== 'undefined' && window.Vue) {
  for (let key in plugins) {
    window.Vue.use(plugins[key]);
  }
}

export default plugins;
