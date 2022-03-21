import { useEditor } from '../core/quill';

function useTextAlign() {
  const { Quill } = useEditor();
  const TextAlignStyle = Quill.import('attributors/style/align');

  Quill.register(TextAlignStyle, true);
}

export default useTextAlign;
