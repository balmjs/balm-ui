import { setEditor } from './quill';
import Emotion from '../extensions/emoji/emotion';
import useEmoji from '../extensions/emoji';
import useDefaultFormats from '../formats';
import useDefaultModules from '../modules';
import useDefaultExtensions from '../extensions';
import { setToolbarStyle } from '../modules/toolbar';

const customFormatHandlers = ['divider', 'emoji'];

function createEditor(
  editorEl,
  { toolbarIcons, toolbarTips, toolbarOptions, options, emotions, extension }
) {
  const Quill = require('quill');
  const toolbarHandlers = options.modules.toolbar.handlers;
  setEditor({
    Quill,
    toolbarHandlers
  });

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

  const quill = new Quill(editorEl, options);
  setEditor({
    quill
  });

  quill.insert = (customFormat, value = true) => {
    let range = quill.getSelection(true);
    if (range) {
      quill.insertEmbed(range.index, customFormat, value, Quill.sources.USER);
      quill.setSelection(range.index + 1, Quill.sources.SILENT);
    }
  };

  setToolbarStyle(toolbarTips);

  return quill;
}

export { createEditor, Emotion };
