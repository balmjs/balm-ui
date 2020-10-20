function lineHeight(Quill) {
  // TODO: options
  const Parchment = Quill.import('parchment');

  let config = {
    scope: Parchment.Scope.INLINE,
    whitelist: [
      '1.0',
      '1.2',
      '1.5',
      '1.6',
      '1.8',
      '2.0',
      '2.4',
      '2.8',
      '3.0',
      '4.0',
      '5.0'
    ]
  };

  let LineHeightClass = new Parchment.Attributor.Class(
    'lineheight',
    'ql-line-height',
    config
  );
  let LineHeightStyle = new Parchment.Attributor.Style(
    'lineheight',
    'line-height',
    config
  );

  Parchment.register(LineHeightClass);
  Parchment.register(LineHeightStyle);
}

export default lineHeight;
