import Emotion from './extensions/emoji/emotion';
import useEmoji from './extensions/emoji';
import useDefaultFormats from './formats';
import useDefaultModules from './modules';
import useDefaultExtensions from './extensions';

let Quill;
let editor;
let prototypeInitialized = false;

function createEditor(
  editorEl,
  { toolbarIcons, toolbarOptions, options, emotions, extension }
) {
  Quill = require('quill');

  let onMounted = useDefaultExtensions(
    Quill,
    options,
    toolbarIcons,
    prototypeInitialized
  );

  if (!prototypeInitialized) {
    if (options.theme === 'snow') {
      useDefaultFormats(Quill, toolbarOptions);
      useDefaultModules(Quill);
      useEmoji(Quill, options, emotions);
    }

    if (extension) {
      Quill.register(extension, true);
    }

    prototypeInitialized = true;
  }

  editor = new Quill(editorEl, options);

  return onMounted(editor);
}

// TODO: 待优化
createEditor.insert = (customFormat, value) => {
  if (editor) {
    const range = editor.getSelection();
    if (range) {
      editor.insertEmbed(range.index, customFormat, value, Quill.sources.USER);
    }
  } else {
    console.warn('[UiEditor] Quill registration failed');
  }
};

export { createEditor, Emotion };
