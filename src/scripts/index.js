import autoInstall from './config/auto-install';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
// Layouts
import UiDrawer from './components/drawer/drawer';
import UiDrawerHeader from './components/drawer/drawer-header';
import UiDrawerTitle from './components/drawer/drawer-title';
import UiDrawerSubtitle from './components/drawer/drawer-subtitle';
import UiDrawerContent from './components/drawer/drawer-content';
import UiDrawerAppContent from './components/drawer/drawer-app-content';
import UiDrawerScrim from './components/drawer/drawer-scrim';
import UiTopAppBar from './components/app-bar/top-app-bar';
import UiGrid from './components/grid/grid';
import UiGridCell from './components/grid/grid-cell';
import UiTabs from './components/tabs/tabs';
import UiTab from './components/tabs/tab';
import UiTabBar from './components/tabs/tab-bar';
import UiTabIndicator from './components/tabs/tab-indicator';
import UiTabScroller from './components/tabs/tab-scroller';
import UiPanels from './components/tabs/panels';
import UiPanel from './components/tabs/panel';
// Buttons
import UiButton from './components/button/button';
import UiA from './components/button/a';
import UiFab from './components/button/fab';
import UiIconButton from './components/button/icon-button';
import UiIconA from './components/button/icon-a';
import UiIcon from './components/common/icon';
// Data View
import UiListGroup from './components/list/list-group';
import UiListGroupSubheader from './components/list/list-group-subheader';
import UiList from './components/list/list';
import UiItem from './components/list/item';
import UiItemTextContent from './components/list/item-text-content';
import UiItemText1 from './components/list/item-text1';
import UiItemText2 from './components/list/item-text2';
import UiItemFirstContent from './components/list/item-first-content';
import UiItemLastContent from './components/list/item-last-content';
import UiItemA from './components/list/item-a';
import UiListDivider from './components/list/list-divider';
import UiItemDivider from './components/list/item-divider';
import UiImageList from './components/image-list/image-list';
import UiImageItem from './components/image-list/image-item';
import UiImageSupporting from './components/image-list/image-supporting';
import UiCard from './components/card/card';
import UiCardContent from './components/card/card-content';
import UiCardMedia from './components/card/card-media';
import UiCardMediaContent from './components/card/card-media-content';
import UiCardActions from './components/card/card-actions';
import UiCardButtons from './components/card/card-buttons';
import UiCardIcons from './components/card/card-icons';
import UiChipSet from './components/chips/chip-set';
import UiChip from './components/chips/chip';
import UiChipText from './components/chips/chip-text';
import UiChipThumbnail from './components/chips/chip-thumbnail';
import UiChipRemoveIcon from './components/chips/chip-remove-icon';
import UiChipCheckmark from './components/chips/chip-checkmark';
import UiLinearProgress from './components/progress/linear-progress';
import UiDataTable from './components/data/table';
// Inputs and Controls
import UiFormField from './components/input-controls/form-field';
import UiTextfield from './components/input-controls/textfield';
import UiTextfieldHelptext from './components/input-controls/textfield-helptext';
import UiTextfieldIcon from './components/input-controls/textfield-icon';
import UiTextfieldCounter from './components/input-controls/textfield-counter';
import UiCheckbox from './components/input-controls/checkbox';
import UiRadio from './components/input-controls/radio';
import UiSelect from './components/input-controls/select';
import UiSwitch from './components/input-controls/switch';
import UiSlider from './components/input-controls/slider';
// Modal
import UiDialog from './components/dialog/dialog';
import UiDialogTitle from './components/dialog/dialog-title';
import UiDialogContent from './components/dialog/dialog-content';
import UiDialogActions from './components/dialog/dialog-actions';
import UiSnackbar from './components/common/snackbar';
// Others
import UiMenuAnchor from './components/menu/menu-anchor';
import UiMenu from './components/menu/menu';
import UiMenuitem from './components/menu/menuitem';
import UiMenuitemIcon from './components/menu/menuitem-icon';
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
  // Layouts
  UiDrawer,
  UiDrawerHeader,
  UiDrawerTitle,
  UiDrawerSubtitle,
  UiDrawerContent,
  UiDrawerAppContent,
  UiDrawerScrim,
  UiTopAppBar,
  UiGrid,
  UiGridCell,
  UiTabs,
  UiTab,
  UiTabBar,
  UiTabIndicator,
  UiTabScroller,
  UiPanels,
  UiPanel,
  // Buttons
  UiButton,
  UiA,
  UiFab,
  UiIconButton,
  UiIconA,
  UiIcon,
  // Data View
  UiListGroup,
  UiListGroupSubheader,
  UiList,
  UiItem,
  UiItemTextContent,
  UiItemText1,
  UiItemText2,
  UiItemFirstContent,
  UiItemLastContent,
  UiItemA,
  UiListDivider,
  UiItemDivider,
  UiImageList,
  UiImageItem,
  UiImageSupporting,
  UiCard,
  UiCardContent,
  UiCardMedia,
  UiCardMediaContent,
  UiCardActions,
  UiCardButtons,
  UiCardIcons,
  UiChipSet,
  UiChip,
  UiChipText,
  UiChipThumbnail,
  UiChipRemoveIcon,
  UiChipCheckmark,
  UiLinearProgress,
  UiDataTable,
  // Inputs and Controls
  UiFormField,
  UiTextfield,
  UiTextfieldHelptext,
  UiTextfieldIcon,
  UiTextfieldCounter,
  UiCheckbox,
  UiRadio,
  UiSelect,
  UiSwitch,
  UiSlider,
  // Modal
  UiDialog,
  UiDialogTitle,
  UiDialogContent,
  UiDialogActions,
  UiSnackbar,
  // Others
  UiMenuAnchor,
  UiMenu,
  UiMenuitem,
  UiMenuitemIcon
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
