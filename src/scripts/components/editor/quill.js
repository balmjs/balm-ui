import Emotion from './emoji/emotion';
import useTypography from './typography';
import useEmoji from './emoji';
import useDefaultExtension from './extension';

let Quill;
let editor;
let prototypeInitialized = false;


const createEditor = function(editorEl, { toolbarIcons, toolbarOptions, options, emotions, extension }) {
  Quill = require('quill');

  let onInstantiated = useDefaultExtension(Quill, options, createEditor, toolbarIcons, prototypeInitialized);
  
  if (!prototypeInitialized) {
    if (options.theme === 'snow') {
      useTypography(Quill, toolbarOptions);
      useEmoji(Quill, options, emotions);
    }

    if (extension) {
      Quill.register(extension, true);
    }

    prototypeInitialized = true;
  }

  editor = new Quill(editorEl, options);

  return onInstantiated(editor);
}

createEditor.destroy = function () {
  Emotion.clear();
}

createEditor.insert = function (customFormat, value) {
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

// class QuillEditor {
//   constructor(
//     editorEl,
//     { toolbarIcons, toolbarOptions, options, emotions, extension }
//   ) {
//     Quill = require('quill');

//     if (options.theme === 'snow') {
//       setToolbarIcons(Quill, toolbarIcons);

//       useTypography(Quill, toolbarOptions);
//       useEmoji(Quill, options, emotions);
//       useCounter(Quill);
//       useDivider(Quill, options, QuillEditor);
//       usePreview(Quill, options);
//     }

//     if (extension) {
//       Quill.register(extension, true);
//     }

//     editor = new Quill(editorEl, options);

//     setToolbarStyle();
//     handleCode(editor);

//     return editor;
//   }

//   static destroy() {
//     Emotion.clear();
//   }

//   static insert(customFormat, value) {
//     if (editor) {
//       const range = editor.getSelection();
//       if (range) {
//         editor.insertEmbed(
//           range.index,
//           customFormat,
//           value,
//           Quill.sources.USER
//         );
//       }
//     } else {
//       console.warn('[UiEditor] Quill registration failed');
//     }
//   }
// }

export default createEditor;
