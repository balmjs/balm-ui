import registerExtension from './extension';
import Emotion from './emoji/emotion';

let Quill;
let quill;

class QuillEditor {
  constructor(editorEl, { options, emotions, extension }) {
    Quill = require('quill');

    if (options.theme === 'snow') {
      registerExtension(Quill, emotions);

      options.modules.emoji = true;
    }

    if (extension) {
      Quill.register(extension, true);
    }

    quill = new Quill(editorEl, options);

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
