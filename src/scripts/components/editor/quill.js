import Emotion from './emoji/emotion';
import { setToolbarIcons, setToolbarStyle } from './extension/toolbar';
import useTypography from './typography';
import useEmoji from './emoji';
import useCounter from './extension/counter-module';
import useDivider from './extension/divider-format';
import getType from '../../utils/typeof';

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

    editor = new Quill(editorEl, options);

    setToolbarStyle();

    const toolbar = editor.getModule('toolbar');
    toolbar.addHandler('font', setFont);

    function setFont(value) {
      if (getType(value) === 'string') {
        editor.format('font', value.toLowerCase().replace(/\s+/g, '-'));
      } else {
        editor.format('font', false);
      }
    }

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
