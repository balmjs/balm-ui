import { useEditor } from '../core/quill';
import UI_GLOBAL from '../../../../config/constants';

export function setToolbarIcons(customIcons = {}) {
  const { Quill } = useEditor();
  const icons = Quill.import('ui/icons');

  for (const [key, value] of Object.entries(customIcons)) {
    icons[key] = value;
  }
}

function setToolbarTips(formatElements, cutomTooltips) {
  const formats = Object.keys(cutomTooltips);

  formatElements.forEach((el) => {
    const format = el.classList[0].replace('ql-', '');
    if (formats.includes(format)) {
      if (typeof cutomTooltips[format] === 'object') {
        el.title = cutomTooltips[format][el.value || 'default'];
      } else {
        el.title = cutomTooltips[format];
      }
    }
  });
}

const pickerExcludes = ['header', 'font', 'size', 'lineheight'];
const pickerSelectors = `.ql-picker${pickerExcludes
  .map((format) => `:not(.ql-${format})`)
  .join('')} .ql-picker-label`;

export function setToolbarStyle(cutomTooltips = {}) {
  const buttons = document.querySelectorAll('.ql-toolbar button');
  const pickerLabels = document.querySelectorAll(
    `.ql-toolbar ${pickerSelectors}`
  );
  const pickerItems = document.querySelectorAll(
    '.ql-toolbar .ql-align .ql-picker-item'
  );

  [...buttons, ...pickerLabels, ...pickerItems].forEach((el) => {
    el.classList.add(UI_GLOBAL.cssClasses.icon);
  });

  if (Object.keys(cutomTooltips).length) {
    const pickers = document.querySelectorAll('.ql-toolbar .ql-picker');

    setToolbarTips([...buttons, ...pickers], cutomTooltips);
  }
}
