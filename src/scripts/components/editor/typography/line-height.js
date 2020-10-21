function useLineHeight(Quill, lineHeight = []) {
  const Parchment = Quill.import('parchment');

  let config = {
    scope: Parchment.Scope.INLINE,
    whitelist: lineHeight
  };

  const LineHeightStyle = new Parchment.Attributor.Style(
    'lineheight',
    'line-height',
    config
  );

  Quill.register(LineHeightStyle, true);
}

export default useLineHeight;
