function useDivider(Quill) {
  const Parchment = Quill.import('parchment');

  class DividerBlot extends Parchment.Block {}

  DividerBlot.blotName = 'divider';
  DividerBlot.tagName = 'hr';

  Quill.register(DividerBlot, true);
}

export default useDivider;
