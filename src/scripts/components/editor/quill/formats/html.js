import { useEditor } from '../core/quill';

function useHtml() {
  const { Quill } = useEditor();
  const Parchment = Quill.import('parchment');

  class HtmlBlot extends Parchment.Embed {
    static create(value) {
      let node = super.create();

      if (typeof value === 'string') {
        node.innerHTML = value;
      }

      return node;
    }
  }
  HtmlBlot.blotName = 'html';
  HtmlBlot.tagName = 'DIV';

  Quill.register('formats/html', HtmlBlot, true);
}

export default useHtml;
