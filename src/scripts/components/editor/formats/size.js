import { useEditor } from '../quill';

function useFontSize(customFontSize = []) {
  const { Quill } = useEditor();
  const FontSizeStyle = Quill.import('attributors/style/size');

  FontSizeStyle.whitelist = customFontSize;

  Quill.register(FontSizeStyle, true);
}

export default useFontSize;
