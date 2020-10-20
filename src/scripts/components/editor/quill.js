import Emotion from './emoji/emotion';
import setToolbarIcons from './extension/toolbar';
import useTypography from './typography';
import useEmoji from './emoji';
import useCounter from './extension/counter-module';
import useDivider from './extension/divider-format';
import getType from '../../utils/typeof';

let Quill;
let quill;

class QuillEditor {
  constructor(editorEl, { toolbarIcons, options, emotions, extension }) {
    Quill = require('quill');

    if (options.theme === 'snow') {
      setToolbarIcons(Quill, toolbarIcons);

      useTypography(Quill);
      useEmoji(Quill, emotions);
      useCounter(Quill);
      useDivider(Quill);

      options.modules.emoji = true;
      options.modules.toolbar.handlers.divider = () => {
        QuillEditor.insert('divider', 'null');
      };
    }

    if (extension) {
      Quill.register(extension, true);
    }

    quill = new Quill(editorEl, options);

    document
      .querySelectorAll('.ql-toolbar button')
      .forEach((el) => el.classList.add('material-icons'));

    document
      .querySelectorAll(
        '.ql-toolbar .ql-picker:not(.ql-header):not(.ql-font):not(.ql-size):not(.ql-lineheight) .ql-picker-label'
      )
      .forEach((el) => el.classList.add('material-icons'));

    document
      .querySelectorAll('.ql-toolbar .ql-align .ql-picker-item')
      .forEach((el) => el.classList.add('material-icons'));

    const toolbar = quill.getModule('toolbar');
    toolbar.addHandler('font', setFont);

    function setFont(value) {
      if (getType(value) === 'string') {
        quill.format('font', value.toLowerCase().replace(/\s+/g, '-'));
      } else {
        quill.format('font', false);
      }
    }

    return quill;
  }

  static destroy() {
    Emotion.clear();
  }

  static insert(customFormat, value) {
    if (quill) {
      const range = quill.getSelection();
      if (range) {
        quill.insertEmbed(range.index, customFormat, value, Quill.sources.USER);
      }
    } else {
      console.warn('[UiEditor] Quill registration failed');
    }
  }
}

export default QuillEditor;
