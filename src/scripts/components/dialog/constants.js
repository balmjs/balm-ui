// Define dialog constants
export const UI_DIALOG = {
  contentComponentName: 'UiDialogContent',
  cssClasses: {
    content: 'mdc-dialog__content'
  },
  EVENTS: {
    CHANGE: 'update:modelValue',
    CLOSE: 'close',
    CONFIRM: 'confirm'
  }
};

export const isOverflowInsideComponent = (parent) =>
  parent.type.name === UI_DIALOG.contentComponentName ||
  parent.type.name === 'MdcTableBody' ||
  (parent?.parent ? isOverflowInsideComponent(parent?.parent) : false);
