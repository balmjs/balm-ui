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
import UiCard from './components/common/card/card';
import UiCardPrimary from './components/common/card/card-primary';
import UiCardMedia from './components/common/card/card-media';
import UiCardMediaItem from './components/common/card/card-media-item';
import UiCardText from './components/common/card/card-text';
import UiCardActions from './components/common/card/card-actions';
import UiCardBlock from './components/common/card/card-block';
import UiChip from './components/common/chip';
import UiDivider from './components/common/divider';
import UiLoading from './components/common/loading';
import UiMenu from './components/common/menu/menu';
import UiMenuItem from './components/common/menu/menuitem';
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
import UiSelect from './components/form/select';
import UiAutocomplete from './components/form/autocomplete';
import UiDatepicker from './components/form/datepicker';
import UiFileupload from './components/form/fileupload';
/**
 * Data
 */
import UiList from './components/data/list/list';
import UiItem from './components/data/list/item';
import UiTable from './components/data/table';
import UiPagination from './components/data/pagination';
/**
 * Popup
 */
import UiDialog from './components/dialog/dialog';
import UiConfirm from './components/popup/confirm';
import UiAlert from './components/popup/alert';
import UiSnackbar from './components/popup/snackbar';

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
  UiCardPrimary,
  UiCardMedia,
  UiCardMediaItem,
  UiCardText,
  UiCardActions,
  UiCardBlock,
  UiChip,
  UiDivider,
  UiLoading,
  UiMenu,
  UiMenuItem,
  UiTooltip,
  // Form
  UiTextfield,
  UiCheckbox,
  UiRadio,
  UiIconToggle,
  UiSwitch,
  UiSlider,
  UiSelect,
  UiAutocomplete,
  UiDatepicker,
  UiFileupload,
  // Data
  UiList,
  UiItem,
  UiTable,
  UiPagination,
  // Popup
  UiDialog,
  UiConfirm,
  UiAlert,
  UiSnackbar,
  // Register
  install(Vue) {
    document.querySelector('body').classList.add('mdc-typography');

    for (let key in BalmUI) {
      let component = BalmUI[key];
      if (component && component !== 'install' && component.name) {
        Vue.component(component.name, component);
      }
    }
  }
};

// Auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI);
}

export default BalmUI;

// export {
//   // Layout
//   UiLayout,
//   UiNavigation,
//   UiGrid,
//   UiCell,
//   UiTabs,
//   UiPanel,
//   UiFooter,
//   UiMiniFooter,
//   // Common
//   UiBadge,
//   UiButton,
//   UiCard,
//   UiCardPrimary,
//   UiCardMedia,
//   UiCardText,
//   UiCardActions,
//   UiChip,
//   UiDivider,
//   UiLoading,
//   UiMenu,
//   UiMenuItem,
//   UiTooltip,
//   // Form
//   UiTextfield,
//   UiCheckbox,
//   UiRadio,
//   UiIconToggle,
//   UiSwitch,
//   UiSlider,
//   UiSelect,
//   UiAutocomplete,
//   UiDatepicker,
//   UiFileupload,
//   // Data
//   UiList,
//   UiItem,
//   UiTable,
//   UiPagination,
//   // Popup
//   UiDialog,
//   UiConfirm,
//   UiAlert,
//   UiSnackbar
// };
