import { useEditor } from '../core/quill';

const unit = 'em';
const defaultIndent = [1, 2, 3, 4, 5, 6, 7, 8].map(
  (value) => `${value}${unit}`
);

function useIndent() {
  const { Quill } = useEditor();
  const Parchment = Quill.import('parchment');

  let config = {
    scope: Parchment.Scope.BLOCK,
    whitelist: defaultIndent
  };

  class IdentAttributor extends Parchment.Attributor.Style {
    add(node, value) {
      if (value === '+1' || value === '-1') {
        let indent = this.value(node) || 0;
        value = value === '+1' ? indent + 1 : indent - 1;
      }

      if (value === 0) {
        this.remove(node);
        return true;
      } else {
        return super.add(node, `${value}${unit}`);
      }
    }

    value(node) {
      return parseInt(super.value(node)) || undefined; // Don't return NaN
    }
  }

  const IndentStyle = new IdentAttributor('indent', 'margin-left', config);
  const TextIndentStyle = new IdentAttributor(
    'textindent',
    'text-indent',
    config
  );

  Quill.register(IndentStyle, true);
  Quill.register(TextIndentStyle, true);
}

export default useIndent;
