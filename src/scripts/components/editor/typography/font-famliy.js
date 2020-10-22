function useFontFamliy(Quill, fontFamliy = []) {
  const FontFamliyStyle = Quill.import('attributors/style/font');

  FontFamliyStyle.whitelist = fontFamliy;

  Quill.register(FontFamliyStyle, true);
}

export default useFontFamliy;
