export function setToolbarIcons(Quill, customIcons = {}) {
  const icons = Quill.import('ui/icons');
  for (const [key, value] of Object.entries(customIcons)) {
    icons[key] = value;
  }
}

export function setToolbarStyle() {
  const buttons = document.querySelectorAll('.ql-toolbar button');
  const labels = document.querySelectorAll(
    '.ql-toolbar .ql-picker:not(.ql-header):not(.ql-font):not(.ql-size):not(.ql-lineheight) .ql-picker-label'
  );
  const pickerItems = document.querySelectorAll(
    '.ql-toolbar .ql-align .ql-picker-item'
  );

  [...buttons, ...labels, ...pickerItems].forEach((el) =>
    el.classList.add('material-icons')
  );
}
