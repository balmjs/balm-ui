let Quill;
let quill;
let toolbarHandlers = {};

const setEditor = (options = {}) => {
  if (Object.keys(options).length) {
    if (options.quill) {
      quill = options.quill;
    } else {
      Quill = options.Quill;
      toolbarHandlers = options.toolbarHandlers;
    }
  }
};

const useEditor = () => ({
  Quill,
  quill,
  toolbarHandlers
});

export { setEditor, useEditor };
