import registerExtension from './extension';
import Emotion from './emoji/emotion';

let Quill;
let quill;

class QuillEditor {
  constructor(editorEl, { toolbarIcons, options, emotions, extension }) {
    Quill = require('quill');

    if (options.theme === 'snow') {
      registerExtension(Quill, { toolbarIcons, emotions });
      options.modules.emoji = true;
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
        '.ql-toolbar .ql-picker:not(.ql-header):not(.ql-font):not(.ql-size) .ql-picker-label'
      )
      .forEach((el) => el.classList.add('material-icons'));

    document
      .querySelectorAll('.ql-toolbar .ql-align .ql-picker-item')
      .forEach((el) => el.classList.add('material-icons'));

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
