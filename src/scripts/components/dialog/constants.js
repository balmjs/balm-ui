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

export const isComponentInDialog = (parent) =>
  parent.type.name === UI_DIALOG.contentComponentName ||
  (parent?.parent ? isComponentInDialog(parent?.parent) : false);
