import { useEditor } from '../quill';

function useFontFamliy(customFontFamliy = []) {
  const { Quill } = useEditor();
  const FontFamliyStyle = Quill.import('attributors/style/font');

  FontFamliyStyle.whitelist = customFontFamliy;

  Quill.register(FontFamliyStyle, true);
}

export default useFontFamliy;
