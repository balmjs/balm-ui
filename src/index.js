/**
 * Core
 */
import './material-design-lite/mdlComponentHandler';
/**
 * Layout
 */
import UiLayout from './components/layout/layout';
import UiNavigation from './components/layout/navigation';
import UiGrid from './components/layout/grid/grid';
import UiCell from './components/layout/grid/cell';
import UiTabs from './components/layout/tabs/tabs';
import UiPanel from './components/layout/tabs/panel';
import UiFooter from './components/layout/footer/footer';
import UiMiniFooter from './components/layout/footer/mini-footer';
/**
 * Common
 */
import UiBadge from './components/common/badge';
import UiButton from './components/common/button';
import UiCard from './components/common/card';
import UiChip from './components/common/chip';
import UiDivider from './components/common/divider';
import UiLoading from './components/common/loading';
import UiMenu from './components/common/menu';
import UiTooltip from './components/common/tooltip';
/**
 * Form
 */
import UiTextfield from './components/form/textfield';
import UiCheckbox from './components/form/checkbox';
import UiRadio from './components/form/radio';
import UiIconToggle from './components/form/icon-toggle';
import UiSwitch from './components/form/switch';
import UiSlider from './components/form/slider';
/**
 * Data
 */
import UiList from './components/data/list';
import UiTable from './components/data/table';
/**
 * Popup
 */
import UiDialog from './components/popup/dialog';
import UiConfirm from './components/popup/confirm';
import UiAlert from './components/popup/alert';
import UiSnackbar from './components/popup/snackbar';
/**
 * Effect
 */
import './material-design-lite/ripple/ripple';

const BalmUI = {
  // Layout
  UiLayout,
  UiNavigation,
  UiGrid,
  UiCell,
  UiTabs,
  UiPanel,
  UiFooter,
  UiMiniFooter,
  // Common
  UiBadge,
  UiButton,
  UiCard,
  UiChip,
  UiDivider,
  UiLoading,
  UiMenu,
  UiTooltip,
  // Form
  UiTextfield,
  UiCheckbox,
  UiRadio,
  UiIconToggle,
  UiSwitch,
  UiSlider,
  // Data
  UiList,
  UiTable,
  // Popup
  UiDialog,
  UiConfirm,
  UiAlert,
  UiSnackbar,
  // Register
  install(Vue) {
    for (let key in BalmUI) {
      let component = BalmUI[key];
      if (component && component !== 'install' && component.name) {
        Vue.component(component.name, component);
      }
    }
    Vue.prototype.$ui = window.componentHandler;
  }
};

module.exports = BalmUI;

// Auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI);
}
