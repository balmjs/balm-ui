function useTextAlign(Quill) {
  const TextAlignStyle = Quill.import('attributors/style/align');

  Quill.register(TextAlignStyle, true);
}

export default useTextAlign;
