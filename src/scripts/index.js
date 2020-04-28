import autoInstall from './config/auto-install';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
// General
import UiButton from './components/buttons/button';
import UiFab from './components/buttons/fab';
import UiIconButton from './components/buttons/icon-button';
import UiIconA from './components/buttons/icon-a';
import UiIcon from './components/icon/icon';
// Layouts
import UiTopAppBar from './components/app-bars/top-app-bar';
import UiGrid from './components/layout-grid/grid';
import UiGridCell from './components/layout-grid/grid-cell';
import UiTabs from './components/tabs/tabs';
import UiTabBar from './components/tabs/tab-bar';
import UiTabScroller from './components/tabs/tab-scroller';
import UiTabIndicator from './components/tabs/tab-indicator';
import UiTab from './components/tabs/tab';
import UiPanels from './components/tabs/panels';
import UiPanel from './components/tabs/panel';
// Navigation
import UiDrawer from './components/navigation-drawer/drawer';
import UiDrawerHeader from './components/navigation-drawer/drawer-header';
import UiDrawerTitle from './components/navigation-drawer/drawer-title';
import UiDrawerSubtitle from './components/navigation-drawer/drawer-subtitle';
import UiDrawerContent from './components/navigation-drawer/drawer-content';
import UiDrawerAppContent from './components/navigation-drawer/drawer-app-content';
import UiDrawerBackdrop from './components/navigation-drawer/drawer-backdrop';
import UiMenuAnchor from './components/menus/menu-anchor';
import UiMenu from './components/menus/menu';
import UiMenuitem from './components/menus/menuitem';
import UiMenuitemIcon from './components/menus/menuitem-icon';
import UiMenuitemText from './components/menus/menuitem-text';
// Data Entry
import UiFormField from './components/form-controls/form-field';
import UiTextfield from './components/input-controls/textfield';
import UiTextfieldHelper from './components/input-controls/textfield-helper';
import UiTextfieldIcon from './components/input-controls/textfield-icon';
import UiTextfieldCounter from './components/input-controls/textfield-counter';
import UiSelect from './components/selection-controls/select';
import UiSelectHelper from './components/selection-controls/select-helper';
import UiSelectIcon from './components/selection-controls/select-icon';
import UiCheckbox from './components/selection-controls/checkbox';
import UiRadio from './components/selection-controls/radio';
import UiSwitch from './components/selection-controls/switch';
import UiSlider from './components/selection-controls/slider';
// Data Display
import UiNav from './components/lists/nav';
import UiList from './components/lists/list';
import UiItem from './components/lists/item';
import UiItemTextContent from './components/lists/item-text-content';
import UiItemText1 from './components/lists/item-text1';
import UiItemText2 from './components/lists/item-text2';
import UiItemFirstContent from './components/lists/item-first-content';
import UiItemLastContent from './components/lists/item-last-content';
import UiItemDivider from './components/lists/item-divider';
import UiListDivider from './components/lists/list-divider';
import UiListGroup from './components/lists/list-group';
import UiListGroupSubheader from './components/lists/list-group-subheader';
import UiImageList from './components/image-lists/image-list';
import UiImageItem from './components/image-lists/image-item';
import UiImageText from './components/image-lists/image-text';
import UiCard from './components/cards/card';
import UiCardContent from './components/cards/card-content';
import UiCardMedia from './components/cards/card-media';
import UiCardMediaContent from './components/cards/card-media-content';
import UiCardText from './components/cards/card-text';
import UiCardActions from './components/cards/card-actions';
import UiCardButtons from './components/cards/card-buttons';
import UiCardIcons from './components/cards/card-icons';
import UiChips from './components/chips/chips';
import UiChip from './components/chips/chip';
import UiDataTable from './components/data-tables/table';
// Feedback
import UiDialog from './components/modal/dialog';
import UiDialogTitle from './components/modal/dialog-title';
import UiDialogContent from './components/modal/dialog-content';
import UiDialogActions from './components/modal/dialog-actions';
import UiSnackbar from './components/modal/snackbar';
import UiLinearProgress from './components/progress-indicators/linear-progress';
import UiCircularProgress from './components/progress-indicators/circular-progress';
/**
 * Plugins
 */
import event from './plugins/event';
import grid from './plugins/grid';
import typography from './plugins/typography';
import theme from './plugins/theme';
/**
 * Directives
 */
import vRipple from './directives/ripple';
import vShape from './directives/shape';
import vShadow from './directives/elevation';
import vAccessibility from './directives/a11y';

const version = require('../../package.json').version;

const components = {
  // General
  UiButton,
  UiFab,
  UiIconButton,
  UiIconA,
  UiIcon,
  // Layouts
  UiTopAppBar,
  UiGrid,
  UiGridCell,
  UiTabs,
  UiTabBar,
  UiTabScroller,
  UiTabIndicator,
  UiTab,
  UiPanels,
  UiPanel,
  // Navigation
  UiDrawer,
  UiDrawerHeader,
  UiDrawerTitle,
  UiDrawerSubtitle,
  UiDrawerContent,
  UiDrawerAppContent,
  UiDrawerBackdrop,
  UiMenuAnchor,
  UiMenu,
  UiMenuitem,
  UiMenuitemIcon,
  UiMenuitemText,
  // Data Entry
  UiFormField,
  UiTextfield,
  UiTextfieldHelper,
  UiTextfieldIcon,
  UiTextfieldCounter,
  UiSelect,
  UiSelectHelper,
  UiSelectIcon,
  UiCheckbox,
  UiRadio,
  UiSwitch,
  UiSlider,
  // Data Display
  UiNav,
  UiList,
  UiItem,
  UiItemTextContent,
  UiItemText1,
  UiItemText2,
  UiItemFirstContent,
  UiItemLastContent,
  UiItemDivider,
  UiListDivider,
  UiListGroup,
  UiListGroupSubheader,
  UiImageList,
  UiImageItem,
  UiImageText,
  UiCard,
  UiCardContent,
  UiCardMedia,
  UiCardMediaContent,
  UiCardText,
  UiCardActions,
  UiCardButtons,
  UiCardIcons,
  UiChips,
  UiChip,
  UiDataTable,
  // Feedback
  UiDialog,
  UiDialogTitle,
  UiDialogContent,
  UiDialogActions,
  UiSnackbar,
  UiLinearProgress,
  UiCircularProgress
};

const plugins = {
  event,
  grid,
  typography,
  theme
};

const directives = {
  vRipple,
  vShape,
  vShadow,
  vAccessibility
};

const BalmUI = {
  version,
  install(Vue, options = {}) {
    // Configure the components' props
    multiConfigure(components, options);

    // Install the components
    for (let key in components) {
      let Component = components[key];
      Vue.component(Component.name, Component);
    }

    // Install the plugins
    for (let key in plugins) {
      let Plugin = plugins[key];
      if (options[key]) {
        Vue.use(Plugin, options[key]);
      } else {
        Vue.use(Plugin);
      }
    }

    // Init the directives
    for (let key in directives) {
      let Directive = directives[key];
      Vue.directive(Directive.name, Directive);
    }
  }
};

autoInstall(BalmUI);

export default BalmUI;
