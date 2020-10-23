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

  let onMounted = useDefaultExtensions(Quill, options, prototypeInitialized);

  if (!prototypeInitialized) {
    if (options.theme === 'snow') {
      useDefaultFormats(Quill, toolbarOptions);
      useDefaultModules(Quill, options, toolbarIcons);
      useEmoji(Quill, options, emotions);
    }

    if (extension) {
      Quill.register(extension, true);
    }

    prototypeInitialized = true;
  }

  editor = new Quill(editorEl, options);

  editor.insert = (customFormat, value) => {
    const range = editor.getSelection();
    if (range) {
      editor.insertEmbed(range.index, customFormat, value);
    }
  };

  return onMounted(editor);
}

export { createEditor, Emotion };
