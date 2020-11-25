import Emotion from './extensions/emoji/emotion';
import useEmoji from './extensions/emoji';
import useDefaultFormats from './formats';
import useDefaultModules from './modules';
import useDefaultExtensions from './extensions';
import { setToolbarStyle } from './modules/toolbar';

const customFormatHandlers = ['divider', 'emoji'];

let Quill;
let editor;
let toolbarHandlers = {};

function createEditor(
  editorEl,
  { toolbarIcons, toolbarTips, toolbarOptions, options, emotions, extension }
) {
  Quill = require('quill');

  toolbarHandlers = options.modules.toolbar.handlers;
  customFormatHandlers.forEach((blotName) => {
    options.modules[blotName] = true;
  });

  useDefaultFormats(toolbarOptions);
  useDefaultModules(toolbarIcons);
  useDefaultExtensions();

  if (options.theme === 'snow') {
    useEmoji(emotions);
  }

  if (extension) {
    Quill.register(extension, true);
  }

  editor = new Quill(editorEl, options);

  editor.insert = (customFormat, value = true) => {
    let range = editor.getSelection(true);
    if (range) {
      editor.insertEmbed(range.index, customFormat, value, Quill.sources.USER);
      editor.setSelection(range.index + 1, Quill.sources.SILENT);
    }
  };

  setToolbarStyle(toolbarTips);

  return editor;
}

const useEditor = () => {
  return {
    Quill,
    editor,
    toolbarHandlers
  };
};

export { createEditor, useEditor, Emotion };
