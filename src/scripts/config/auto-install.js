// Auto-install when vue is found (eg. in browser via <script> tag)
const autoInstall = plugin => {
  let GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
};

export default autoInstall;
