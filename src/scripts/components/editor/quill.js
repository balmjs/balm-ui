import Emotion from './emoji/emotion';
import { setToolbarIcons, setToolbarStyle } from './extension/toolbar';
import useTypography from './typography';
import useEmoji from './emoji';
import useCounter from './extension/counter-module';
import useDivider from './extension/divider-format';
import usePreview from './extension/preview-module';
import handleCode from './extension/code-module';

let Quill;
let editor;

class QuillEditor {
  constructor(
    editorEl,
    { toolbarIcons, toolbarOptions, options, emotions, extension }
  ) {
    Quill = require('quill');

    if (options.theme === 'snow') {
      setToolbarIcons(Quill, toolbarIcons);

      useTypography(Quill, toolbarOptions);
      useEmoji(Quill, options, emotions);
      useCounter(Quill);
      useDivider(Quill, options, QuillEditor);
      usePreview(Quill, options);
    }

    if (extension) {
      Quill.register(extension, true);
    }

    editor = new Quill(editorEl, options);

    setToolbarStyle();
    handleCode(editor);

    return editor;
  }

  static destroy() {
    Emotion.clear();
  }

  static insert(customFormat, value) {
    if (editor) {
      const range = editor.getSelection();
      if (range) {
        editor.insertEmbed(
          range.index,
          customFormat,
          value,
          Quill.sources.USER
        );
      }
    } else {
      console.warn('[UiEditor] Quill registration failed');
    }
  }
}

export default QuillEditor;
