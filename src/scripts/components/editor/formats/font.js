function useFontFamliy(Quill, customFontFamliy = []) {
  const FontFamliyStyle = Quill.import('attributors/style/font');

  FontFamliyStyle.whitelist = customFontFamliy;

  Quill.register(FontFamliyStyle, true);
}

export default useFontFamliy;
