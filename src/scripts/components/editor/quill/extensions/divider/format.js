import { useEditor } from '../../core/quill';

function dividerFormat() {
  const { Quill } = useEditor();
  const Parchment = Quill.import('parchment');

  class DividerBlot extends Parchment.EmbedBlot {}
  DividerBlot.blotName = 'divider';
  DividerBlot.tagName = 'HR';

  Quill.register('formats/divider', DividerBlot, true);
}

export default dividerFormat;
