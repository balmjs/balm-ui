import { useEditor } from '../quill';

function useTextAlign() {
  const { Quill } = useEditor();
  const TextAlignStyle = Quill.import('attributors/style/align');

  Quill.register(TextAlignStyle, true);
}

export default useTextAlign;
