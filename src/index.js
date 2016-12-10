import mdlComponentHandler from './styles/mdlComponentHandler';
/**
 * Layout
 */
import UiLayout from './components/layout/layout';
import UiGrid from './components/layout/grid';
import UiTabs from './components/layout/tabs';
import UiFooter from './components/layout/footer';
import UiMiniFooter from './components/layout/mini-footer';
/**
 * Common
 */
import UiLoading from './components/loading';
import UiButton from './components/button';
import UiMenu from './components/menu';
import UiBadge from './components/badge';
import UiCard from './components/card';
// import UiChip from './components/chip';
// import UiSlider from './components/slider';
import UiTooltip from './components/tooltip';
/**
 * Form
 */
import UiTextfield from './components/form/textfield';
import UiCheckbox from './components/form/checkbox';
import UiRadio from './components/form/radio';
import UiIcon from './components/form/icon';
import UiSwitch from './components/form/switch';
/**
 * Data
 */
import UiList from './components/list';
import UiTable from './components/table';
/**
 * Popup
 */
import UiDialog from './components/dialog';
// import UiSnackbar from './components/snackbar';

const BalmUI = {
  UiLayout,
  UiGrid,
  UiTabs,
  UiFooter,
  UiMiniFooter,
  UiLoading,
  UiButton,
  UiMenu,
  UiBadge,
  UiCard,
  // UiChip,
  // UiSlider,
  UiTooltip,
  UiTextfield,
  UiCheckbox,
  UiRadio,
  UiIcon,
  UiSwitch,
  UiList,
  UiTable,
  UiDialog,
  // UiSnackbar,
  install(Vue) {
    Vue.component('ui-layout', UiLayout);
    Vue.component('ui-grid', UiGrid);
    Vue.component('ui-tabs', UiTabs);
    Vue.component('ui-footer', UiFooter);
    Vue.component('ui-mini-footer', UiMiniFooter);
    Vue.component('ui-loading', UiLoading);
    Vue.component('ui-button', UiButton);
    Vue.component('ui-menu', UiMenu);
    Vue.component('ui-badge', UiBadge);
    Vue.component('ui-card', UiCard);
    // Vue.component('ui-clip', UiChip);
    // Vue.component('ui-slider', UiSlider);
    Vue.component('ui-tooltip', UiTooltip);
    Vue.component('ui-textfield', UiTextfield);
    Vue.component('ui-checkbox', UiCheckbox);
    Vue.component('ui-radio', UiRadio);
    Vue.component('ui-icon', UiIcon);
    Vue.component('ui-switch', UiSwitch);
    Vue.component('ui-list', UiList);
    Vue.component('ui-table', UiTable);
    Vue.component('ui-dialog', UiDialog);
    // Vue.component('ui-snackbar', UiSnackbar);
    // Vue.prototype.$ui = mdlComponentHandler;
  }
};

module.exports = BalmUI;

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI);
}
