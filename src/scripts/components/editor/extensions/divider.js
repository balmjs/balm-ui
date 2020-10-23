function handleDivider(options, editor) {
  options.modules.toolbar.handlers.divider = () => {
    editor.insert('divider', 'null');
  };
}

function dividerFormat(Quill, options, editor) {
  let BlockEmbed = Quill.import('blots/block/embed');

  class DividerBlot extends BlockEmbed {}

  DividerBlot.blotName = 'divider';
  DividerBlot.tagName = 'hr';

  Quill.register('formats/divider', DividerBlot);

  handleDivider(options, editor);
}

export default dividerFormat;
