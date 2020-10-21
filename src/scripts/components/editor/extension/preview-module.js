function handlePreview(options) {
  options.modules.toolbar.handlers.preview = () => {
    console.log('preview');
  };
}

function previewModule(Quill, options) {
  class Preview {
    constructor(quill, options) {}
  }

  Quill.register('modules/preview', Preview);

  handlePreview(options);
}

export default previewModule;
