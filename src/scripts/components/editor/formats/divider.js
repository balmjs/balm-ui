function useDivider(Quill) {
  const Parchment = Quill.import('parchment');

  class DividerBlot extends Parchment.Embed {}
  DividerBlot.blotName = 'divider';
  DividerBlot.tagName = 'hr';

  Quill.register('formats/divider', DividerBlot);
}

export default useDivider;
