function getComponentsPath(file) {
  return `./src/scripts/components/${file}`;
}

function getPluginsPath(file) {
  return `./src/scripts/plugins/${file}`;
}

module.exports = {
  // Theme
  './UiIcon': getComponentsPath('icon/icon.vue'),
  // General
  './UiButton': getComponentsPath('button/button.vue'),
  './UiFab': getComponentsPath('fab/fab.vue'),
  './UiIconButton': getComponentsPath('icon-button/icon-button.vue'),
  './UiSegmentedButtons': getComponentsPath(
    'segmented-button/segmented-buttons.vue'
  ),
  './UiSegmentedButton': getComponentsPath(
    'segmented-button/segmented-button.vue'
  ),
  // Layouts
  './UiTopAppBar': getComponentsPath('top-app-bar/top-app-bar.vue'),
  './UiGrid': getComponentsPath('grid/grid.vue'),
  './UiGridCell': getComponentsPath('grid/grid-cell.vue'),
  './UiDivider': getComponentsPath('divider/divider.vue'),
  // Navigation
  './UiDrawer': getComponentsPath('drawer/drawer.vue'),
  './UiDrawerHeader': getComponentsPath('drawer/drawer-header.vue'),
  './UiDrawerTitle': getComponentsPath('drawer/drawer-title.vue'),
  './UiDrawerSubtitle': getComponentsPath('drawer/drawer-subtitle.vue'),
  './UiDrawerContent': getComponentsPath('drawer/drawer-content.vue'),
  './UiDrawerAppContent': getComponentsPath('drawer/drawer-app-content.vue'),
  './UiTabs': getComponentsPath('tabs/tabs.vue'),
  './UiTabBar': getComponentsPath('tabs/tab-bar.vue'),
  './UiTabScroller': getComponentsPath('tabs/tab-scroller.vue'),
  './UiTabIndicator': getComponentsPath('tabs/tab-indicator.vue'),
  './UiTab': getComponentsPath('tabs/tab.vue'),
  './UiPanels': getComponentsPath('tabs/panels.vue'),
  './UiPanel': getComponentsPath('tabs/panel.vue'),
  './UiMenuAnchor': getComponentsPath('menu/menu-anchor.vue'),
  './UiMenu': getComponentsPath('menu/menu.vue'),
  './UiMenuitem': getComponentsPath('menu/menuitem.vue'),
  './UiMenuitemIcon': getComponentsPath('menu/menuitem-icon.vue'),
  './UiMenuitemText': getComponentsPath('menu/menuitem-text.vue'),
  './UiMenuitemDivider': getComponentsPath('menu/menuitem-divider.vue'),
  './UiPagination': getComponentsPath('pagination/pagination.vue'),
  // Data Entry
  './UiForm': getComponentsPath('form/form.vue'),
  './UiFormField': getComponentsPath('form-field/form-field.vue'),
  './UiTextfield': getComponentsPath('textfield/textfield.vue'),
  './UiTextfieldHelper': getComponentsPath('textfield/textfield-helper.vue'),
  './UiTextfieldIcon': getComponentsPath('textfield/textfield-icon.vue'),
  './UiAutocomplete': getComponentsPath('autocomplete/autocomplete.vue'),
  './UiDatepicker': getComponentsPath('datepicker/datepicker.vue'),
  './UiRangepicker': getComponentsPath('rangepicker/rangepicker.vue'),
  './UiSelect': getComponentsPath('select/select.vue'),
  './UiSelectHelper': getComponentsPath('select/select-helper.vue'),
  './UiSelectIcon': getComponentsPath('select/select-icon.vue'),
  './UiCheckbox': getComponentsPath('checkbox/checkbox.vue'),
  './UiRadio': getComponentsPath('radio/radio.vue'),
  './UiChips': getComponentsPath('chips/chips.vue'),
  './UiChip': getComponentsPath('chips/chip.vue'),
  './UiSwitch': getComponentsPath('switch/switch.vue'),
  './UiSlider': getComponentsPath('slider/slider.vue'),
  './UiFile': getComponentsPath('file/file.vue'),
  // Data Display
  './UiNav': getComponentsPath('list/nav.vue'),
  './UiNavItem': getComponentsPath('list/nav-item.vue'),
  './UiList': getComponentsPath('list/list.vue'),
  './UiItem': getComponentsPath('list/item.vue'),
  './UiItemTextContent': getComponentsPath('list/item-text-content.vue'),
  './UiItemText1': getComponentsPath('list/item-text1.vue'),
  './UiItemText2': getComponentsPath('list/item-text2.vue'),
  './UiItemFirstContent': getComponentsPath('list/item-first-content.vue'),
  './UiItemLastContent': getComponentsPath('list/item-last-content.vue'),
  './UiItemDivider': getComponentsPath('list/item-divider.vue'),
  './UiListDivider': getComponentsPath('list/list-divider.vue'),
  './UiListGroup': getComponentsPath('list/list-group.vue'),
  './UiListGroupSubheader': getComponentsPath('list/list-group-subheader.vue'),
  './UiImageList': getComponentsPath('image-list/image-list.vue'),
  './UiImageItem': getComponentsPath('image-list/image-item.vue'),
  './UiImageText': getComponentsPath('image-list/image-text.vue'),
  './UiCard': getComponentsPath('card/card.vue'),
  './UiCardContent': getComponentsPath('card/card-content.vue'),
  './UiCardMedia': getComponentsPath('card/card-media.vue'),
  './UiCardMediaContent': getComponentsPath('card/card-media-content.vue'),
  './UiCardText': getComponentsPath('card/card-text.vue'),
  './UiCardActions': getComponentsPath('card/card-actions.vue'),
  './UiCardButtons': getComponentsPath('card/card-buttons.vue'),
  './UiCardIcons': getComponentsPath('card/card-icons.vue'),
  './UiTable': getComponentsPath('table/table.vue'),
  './UiBadge': getComponentsPath('badge/badge.vue'),
  // Feedback
  './UiDialog': getComponentsPath('dialog/dialog.vue'),
  './UiDialogTitle': getComponentsPath('dialog/dialog-title.vue'),
  './UiDialogContent': getComponentsPath('dialog/dialog-content.vue'),
  './UiDialogActions': getComponentsPath('dialog/dialog-actions.vue'),
  './UiSnackbar': getComponentsPath('snackbar/snackbar.vue'),
  './UiBanner': getComponentsPath('banner/banner.vue'),
  './UiProgress': getComponentsPath('progress/progress.vue'),
  './UiSpinner': getComponentsPath('spinner/spinner.vue'),
  './UiTooltipAnchor': getComponentsPath('tooltip/tooltip-anchor.vue'),
  './UiTooltip': getComponentsPath('tooltip/tooltip.vue'),
  // Plugins
  './$alert': getPluginsPath('alert.js'),
  // Plus
  './UiSkeleton': getComponentsPath('skeleton/skeleton.vue'),
  './UiAlert': getComponentsPath('alert/alert.vue'),
  './UiCollapse': getComponentsPath('collapse/collapse.vue'),
  './UiEditor': getComponentsPath('editor/quill/editor.vue'),
  './UiTree': getComponentsPath('tree/tree.vue'),
  './UiTreeNode': getComponentsPath('tree/tree-node.vue'),
  // Next
  './UiNavigationBar': getComponentsPath('navigation-bar/navigation-bar.vue'),
  './UiBottomSheet': getComponentsPath('bottom-sheet/bottom-sheet.vue'),
  './UiNavigationRail': getComponentsPath('navigation-rail/navigation-rail.vue')
};
