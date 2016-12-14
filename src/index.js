/**
 * Core
 */
import './styles/mdlComponentHandler';
/**
 * Layout
 */
import UiLayout from './components/layout/layout';
import UiGrid from './components/layout/grid/grid';
import UiCell from './components/layout/grid/cell';
import UiTabs from './components/layout/tabs';
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
import UiSnackbar from './components/snackbar';
/**
 * Effect
 */
import './styles/ripple/ripple';

const BalmUI = {
  UiLayout,
  UiGrid,
  UiCell,
  UiTabs,
  UiFooter,
  UiMiniFooter,
  UiLoading,
  UiButton,
  UiMenu,
  UiBadge,
  UiCard,
  UiChip,
  UiTooltip,
  UiTextfield,
  UiCheckbox,
  UiRadio,
  UiIcon,
  UiSwitch,
  UiSlider,
  UiList,
  UiTable,
  UiDialog,
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
