function useFontSize(Quill, fontSize = []) {
  const FontSizeStyle = Quill.import('attributors/style/size');

  FontSizeStyle.whitelist = fontSize;

  Quill.register(FontSizeStyle, true);
}

export default useFontSize;
