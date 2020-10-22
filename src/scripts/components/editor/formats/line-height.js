function useLineHeight(Quill, customLineHeight = []) {
  const Parchment = Quill.import('parchment');

  let config = {
    scope: Parchment.Scope.INLINE,
    whitelist: customLineHeight
  };

  const LineHeightStyle = new Parchment.Attributor.Style(
    'lineheight',
    'line-height',
    config
  );

  Quill.register(LineHeightStyle, true);
}

export default useLineHeight;
