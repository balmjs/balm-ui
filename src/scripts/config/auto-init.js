// Auto-install when vue is found (eg. in browser via <script> tag)
const autoInit = (ui, type = 'default') => {
  let GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    if (type === 'directive') {
      GlobalVue.directive(ui.name, ui);
    } else {
      GlobalVue.use(ui);
    }
  }
};

export default autoInit;
