import mdlComponentHandler from './styles/mdlComponentHandler';
import UiBadge from './components/badge';
import UiButton from './components/button';
import UiDialog from './components/dialog';
import UiList from './components/list';
import UiLoading from './components/loading';
import UiCheckbox from './components/form/checkbox';
import UiRadio from './components/form/radio';
import UiIcon from './components/form/icon';
import UiSwitch from './components/form/switch';
import UiTextfield from './components/form/textfield';
import UiTable from './components/table';
import UiLayout from './components/layout/layout';
import UiGrid from './components/layout/grid';
import UiTabs from './components/layout/tabs';
import UiFooter from './components/layout/footer';
import UiMiniFooter from './components/layout/mini-footer';

const BalmUI = {
  UiBadge,
  UiButton,
  UiDialog,
  UiList,
  UiLoading,
  UiCheckbox,
  UiRadio,
  UiIcon,
  UiSwitch,
  UiTextfield,
  UiTable,
  UiLayout,
  UiGrid,
  UiTabs,
  UiFooter,
  UiMiniFooter,
  install(Vue) {
    Vue.component('ui-badge', UiBadge);
    Vue.component('ui-button', UiButton);
    Vue.component('ui-dialog', UiDialog);
    Vue.component('ui-list', UiList);
    Vue.component('ui-loading', UiLoading);
    Vue.component('ui-checkbox', UiCheckbox);
    Vue.component('ui-radio', UiRadio);
    Vue.component('ui-icon', UiIcon);
    Vue.component('ui-switch', UiSwitch);
    Vue.component('ui-textfield', UiTextfield);
    Vue.component('ui-table', UiTable);
    Vue.component('ui-layout', UiLayout);
    Vue.component('ui-grid', UiGrid);
    Vue.component('ui-tabs', UiTabs);
    Vue.component('ui-footer', UiFooter);
    Vue.component('ui-mini-footer', UiMiniFooter);
    // Vue.prototype.$ui = mdlComponentHandler;
  }
};

module.exports = BalmUI;

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI);
}
