import { useEditor } from '../core/quill';

function useFontFamliy(customFontFamliy = []) {
  if (customFontFamliy.length) {
    const { Quill } = useEditor();
    const FontFamliyStyle = Quill.import('attributors/style/font');

    FontFamliyStyle.whitelist = customFontFamliy;

    Quill.register(FontFamliyStyle, true);
  }
}

export default useFontFamliy;
