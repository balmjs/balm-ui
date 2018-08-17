import autoInstall from './config/auto-install';
import multiConfigure from './config/multi-configure';
/**
 * Components
 */
// Layouts
import UiPermanentDrawer from './components/drawer/permanent';
import UiPersistentDrawer from './components/drawer/persistent';
import UiTemporaryDrawer from './components/drawer/temporary';
import UiDrawerHeader from './components/drawer/drawer-header';
import UiDrawerToolbarSpacer from './components/drawer/drawer-toolbar-spacer';
import UiDrawerContent from './components/drawer/drawer-content';
import UiTopAppBar from './components/toolbar/top-app-bar';
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
import UiLink from './components/button/link';
import UiFab from './components/button/fab';
import UiIconButton from './components/button/icon-button';
import UiIconLink from './components/button/icon-link';
import UiIcon from './components/common/icon';
// Data View
import UiListGroup from './components/list/list-group';
import UiListGroupSubheader from './components/list/list-group-subheader';
import UiList from './components/list/list';
import UiListDivider from './components/list/list-divider';
import UiItem from './components/list/item';
import UiItemText from './components/list/item-text';
import UiItemSubtext from './components/list/item-subtext';
import UiItemDivider from './components/list/item-divider';
import UiListNav from './components/list/list-nav';
import UiItemLink from './components/list/item-link';
import UiImageList from './components/image-list/image-list';
import UiImageItem from './components/image-list/image-item';
import UiImageLabel from './components/image-list/image-label';
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
import UiChipLeadingIcon from './components/chips/chip-icon-leading';
import UiChipTrailingIcon from './components/chips/chip-icon-trailing';
import UiChipCheckmark from './components/chips/chip-checkmark';
import UiLinearProgress from './components/common/linear-progress';
// Inputs and Controls
import UiFormField from './components/input-controls/form-field';
import UiTextfield from './components/input-controls/textfield';
import UiTextfieldHelptext from './components/input-controls/textfield-helptext';
import UiTextfieldIcon from './components/input-controls/textfield-icon';
import UiCheckbox from './components/input-controls/checkbox';
import UiRadio from './components/input-controls/radio';
import UiSelect from './components/input-controls/select';
import UiSwitch from './components/input-controls/switch';
import UiSlider from './components/input-controls/slider';
// Modal
import UiDialog from './components/dialog/dialog';
import UiDialogHeader from './components/dialog/dialog-header';
import UiDialogBody from './components/dialog/dialog-body';
import UiDialogFooter from './components/dialog/dialog-footer';
import UiSnackbar from './components/common/snackbar';
// Others
import UiMenuAnchor from './components/menu/menu-anchor';
import UiMenu from './components/menu/menu';
import UiMenuitem from './components/menu/menuitem';
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
import vShape from './directives/shape';

const version = require('../../package.json').version;

const components = {
  // Layouts
  UiPermanentDrawer,
  UiPersistentDrawer,
  UiTemporaryDrawer,
  UiDrawerHeader,
  UiDrawerToolbarSpacer,
  UiDrawerContent,
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
  UiLink,
  UiFab,
  UiIconButton,
  UiIconLink,
  UiIcon,
  // Data View
  UiListGroup,
  UiListGroupSubheader,
  UiList,
  UiListDivider,
  UiItem,
  UiItemText,
  UiItemSubtext,
  UiItemDivider,
  UiListNav,
  UiItemLink,
  UiImageList,
  UiImageItem,
  UiImageLabel,
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
  UiChipLeadingIcon,
  UiChipTrailingIcon,
  UiChipCheckmark,
  UiLinearProgress,
  // Inputs and Controls
  UiFormField,
  UiTextfield,
  UiTextfieldHelptext,
  UiTextfieldIcon,
  UiCheckbox,
  UiRadio,
  UiSelect,
  UiSwitch,
  UiSlider,
  // Modal
  UiDialog,
  UiDialogHeader,
  UiDialogBody,
  UiDialogFooter,
  UiSnackbar,
  // Others
  UiMenuAnchor,
  UiMenu,
  UiMenuitem
};

const plugins = {
  event,
  grid,
  typography,
  theme
};

const directives = {
  vRipple,
  VShadow,
  vShape
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
