import createEditor from "../quill";

function handleDivider(options, createEditor) {
  options.modules.toolbar.handlers.divider = () => {
    createEditor.insert('divider', 'null');
  };
}

function dividerFormat(Quill, options, createEditor) {
  let BlockEmbed = Quill.import('blots/block/embed');

  class DividerBlot extends BlockEmbed {}

  DividerBlot.blotName = 'divider';
  DividerBlot.tagName = 'hr';

  Quill.register('formats/divider', DividerBlot);

  handleDivider(options, createEditor);
}

export default dividerFormat;
