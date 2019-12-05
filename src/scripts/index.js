import autoInstall from './config/auto-install';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
// General
import UiButton from './components/button/button';
import UiA from './components/button/a';
import UiFab from './components/button/fab';
import UiIconButton from './components/button/icon-button';
import UiIconA from './components/button/icon-a';
import UiIcon from './components/icon/icon';
// Layouts
import UiTopAppBar from './components/app-bar/top-app-bar';
import UiGrid from './components/grid/grid';
import UiGridCell from './components/grid/grid-cell';
import UiTabs from './components/tabs/tabs';
import UiTabBar from './components/tabs/tab-bar';
import UiTabScroller from './components/tabs/tab-scroller';
import UiTabIndicator from './components/tabs/tab-indicator';
import UiTab from './components/tabs/tab';
import UiPanels from './components/tabs/panels';
import UiPanel from './components/tabs/panel';
// Navigation
import UiDrawer from './components/drawer/drawer';
import UiDrawerHeader from './components/drawer/drawer-header';
import UiDrawerTitle from './components/drawer/drawer-title';
import UiDrawerSubtitle from './components/drawer/drawer-subtitle';
import UiDrawerContent from './components/drawer/drawer-content';
import UiDrawerAppContent from './components/drawer/drawer-app-content';
import UiDrawerScrim from './components/drawer/drawer-scrim';
import UiMenuAnchor from './components/menu/menu-anchor';
import UiMenu from './components/menu/menu';
import UiMenuitem from './components/menu/menuitem';
import UiMenuitemIcon from './components/menu/menuitem-icon';
// Data Entry
import UiFormField from './components/form-controls/form-field';
import UiTextfield from './components/input-controls/textfield';
import UiTextfieldHelper from './components/input-controls/textfield-helper';
import UiTextfieldIcon from './components/input-controls/textfield-icon';
import UiTextfieldCounter from './components/input-controls/textfield-counter';
import UiSelect from './components/selection-controls/select';
import UiCheckbox from './components/selection-controls/checkbox';
import UiRadio from './components/selection-controls/radio';
import UiSwitch from './components/selection-controls/switch';
import UiSlider from './components/selection-controls/slider';
// Data Display
import UiListGroup from './components/list/list-group';
import UiListGroupSubheader from './components/list/list-group-subheader';
import UiNav from './components/list/nav';
import UiList from './components/list/list';
import UiItem from './components/list/item';
import UiItemTextContent from './components/list/item-text-content';
import UiItemText1 from './components/list/item-text1';
import UiItemText2 from './components/list/item-text2';
import UiItemFirstContent from './components/list/item-first-content';
import UiItemLastContent from './components/list/item-last-content';
import UiListDivider from './components/divider/list-divider';
import UiItemDivider from './components/divider/item-divider';
import UiImageList from './components/image-list/image-list';
import UiImageItem from './components/image-list/image-item';
import UiImageText from './components/image-list/image-text';
import UiCard from './components/card/card';
import UiCardContent from './components/card/card-content';
import UiCardMedia from './components/card/card-media';
import UiCardMediaContent from './components/card/card-media-content';
import UiCardText from './components/card/card-text';
import UiCardActions from './components/card/card-actions';
import UiCardButtons from './components/card/card-buttons';
import UiCardIcons from './components/card/card-icons';
import UiChips from './components/chips/chips';
import UiChip from './components/chips/chip';
import UiDataTable from './components/data-table/table';
// Feedback
import UiDialog from './components/modal/dialog';
import UiDialogTitle from './components/modal/dialog-title';
import UiDialogContent from './components/modal/dialog-content';
import UiDialogActions from './components/modal/dialog-actions';
import UiSnackbar from './components/modal/snackbar';
import UiLinearProgress from './components/progress/linear-progress';
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
import VShadow from './directives/elevation';

const version = require('../../package.json').version;

const components = {
  // General
  UiButton,
  UiA,
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
  UiDrawerScrim,
  UiMenuAnchor,
  UiMenu,
  UiMenuitem,
  UiMenuitemIcon,
  // Data Entry
  UiFormField,
  UiTextfield,
  UiTextfieldHelper,
  UiTextfieldIcon,
  UiTextfieldCounter,
  UiSelect,
  UiCheckbox,
  UiRadio,
  UiSwitch,
  UiSlider,
  // Data Display
  UiListGroup,
  UiListGroupSubheader,
  UiNav,
  UiList,
  UiItem,
  UiItemTextContent,
  UiItemText1,
  UiItemText2,
  UiItemFirstContent,
  UiItemLastContent,
  UiListDivider,
  UiItemDivider,
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
  UiLinearProgress
};

const plugins = {
  event,
  grid,
  typography,
  theme
};

const directives = {
  vRipple,
  VShadow
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
