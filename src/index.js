/**
 * Layout
 */
import UiLayout from './scripts/components/layout/layout';
import UiGrid from './scripts/components/grid/grid';
import UiCell from './scripts/components/grid/cell';
/**
 * Common
 */
import UiBadge from './scripts/components/common/badge';
import UiButton from './scripts/components/button';
import UiFab from './scripts/components/fab';
import UiCard from './scripts/components/card/card';
import UiCardPrimary from './scripts/components/card/card-primary';
import UiCardMedia from './scripts/components/card/card-media';
import UiCardMediaItem from './scripts/components/card/card-media-item';
import UiCardText from './scripts/components/card/card-text';
import UiCardActions from './scripts/components/card/card-actions';
import UiCardBlock from './scripts/components/card/card-block';
import UiMenuAnchor from './scripts/components/menu/menu-anchor';
import UiMenu from './scripts/components/menu/menu';
import UiMenuItem from './scripts/components/menu/menuitem';
import UiSeparator from './scripts/components/menu/separator';
/**
 * Form
 */
import UiFormField from './components/form/form-field';
import UiTextfield from './components/form/textfield';
import UiTextfieldHelptext from './components/form/textfield-helptext';
import UiCheckbox from './components/form/checkbox';
import UiRadio from './components/form/radio';
import UiIconToggle from './components/form/icon-toggle';
import UiSwitch from './components/form/switch';
import UiSelect from './components/form/select';
import UiSelect2 from './components/form/select2';
/**
 * Data
 */
// import UiList from './components/data/list/list';
// import UiItem from './components/data/list/item';
// import UiTable from './components/data/table';
// import UiPagination from './components/data/pagination';
/**
 * Dialog
 */
import UiDialog from './components/dialog/dialog';
import UiSnackbar from './components/dialog/snackbar';

const BalmUI = {
  // Layout
  UiLayout,
  UiGrid,
  UiCell,
  // Common
  UiBadge,
  UiButton,
  UiFab,
  UiCard,
  UiCardPrimary,
  UiCardMedia,
  UiCardMediaItem,
  UiCardText,
  UiCardActions,
  UiCardBlock,
  UiMenuAnchor,
  UiMenu,
  UiMenuItem,
  UiSeparator,
  // Form
  UiFormField,
  UiTextfield,
  UiTextfieldHelptext,
  UiCheckbox,
  UiRadio,
  UiIconToggle,
  UiSwitch,
  UiSelect,
  UiSelect2,
  // Data
  // UiList,
  // UiItem,
  // UiTable,
  // UiPagination,
  // Popup
  UiDialog,
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
