function handleDivider(options, QuillEditor) {
  options.modules.toolbar.handlers.divider = () => {
    QuillEditor.insert('divider', 'null');
  };
}

function dividerFormat(Quill, options, QuillEditor) {
  let BlockEmbed = Quill.import('blots/block/embed');

  class DividerBlot extends BlockEmbed {}

  DividerBlot.blotName = 'divider';
  DividerBlot.tagName = 'hr';

  Quill.register('formats/divider', DividerBlot);

  handleDivider(options, QuillEditor);
}

export default dividerFormat;
