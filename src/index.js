/**
 * Core
 */
import './styles/mdlComponentHandler';
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
import UiLoading from './components/loading';
import UiButton from './components/button';
import UiMenu from './components/menu';
import UiBadge from './components/badge';
import UiCard from './components/card';
import UiChip from './components/chip';
import UiTooltip from './components/tooltip';
import UiSplitter from './components/splitter';
/**
 * Form
 */
import UiTextfield from './components/form/textfield';
import UiCheckbox from './components/form/checkbox';
import UiRadio from './components/form/radio';
import UiIcon from './components/form/icon';
import UiSwitch from './components/form/switch';
import UiSlider from './components/form/slider';
/**
 * Data
 */
import UiList from './components/list';
import UiTable from './components/table';
/**
 * Popup
 */
import UiDialog from './components/dialog/dialog';
import UiConfirm from './components/dialog/confirm';
import UiAlert from './components/dialog/alert';
import UiSnackbar from './components/snackbar';
/**
 * Effect
 */
import './styles/ripple/ripple';

const BalmUI = {
  UiLayout,
  UiNavigation,
  UiGrid,
  UiCell,
  UiTabs,
  UiPanel,
  UiFooter,
  UiMiniFooter,
  UiLoading,
  UiButton,
  UiMenu,
  UiBadge,
  UiCard,
  UiChip,
  UiTooltip,
  UiSplitter,
  UiTextfield,
  UiCheckbox,
  UiRadio,
  UiIcon,
  UiSwitch,
  UiSlider,
  UiList,
  UiTable,
  UiDialog,
  UiConfirm,
  UiAlert,
  UiSnackbar,
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

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI);
}
