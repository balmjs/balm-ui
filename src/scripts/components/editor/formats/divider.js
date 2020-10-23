import { useEditor } from '../quill';

function useDivider() {
  const { Quill } = useEditor();
  const Parchment = Quill.import('parchment');

  class DividerBlot extends Parchment.Embed {}
  DividerBlot.blotName = 'divider';
  DividerBlot.tagName = 'hr';

  Quill.register(
    {
      'formats/divider': DividerBlot
    },
    true
  );
}

export default useDivider;
