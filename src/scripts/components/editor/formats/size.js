function useFontSize(Quill, customFontSize = []) {
  const FontSizeStyle = Quill.import('attributors/style/size');

  FontSizeStyle.whitelist = customFontSize;

  Quill.register(FontSizeStyle, true);
}

export default useFontSize;
