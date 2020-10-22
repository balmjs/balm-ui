function lineHeight(Quill) {
  // TODO: options
  const Parchment = Quill.import('parchment');

  let config = {
    scope: Parchment.Scope.INLINE,
    whitelist: [
      '1',
      '1.2',
      '1.5',
      '1.6',
      '1.8',
      '2',
      '2.4',
      '2.8',
      '3',
      '4',
      '5'
    ]
  };

  class LineHeightStyle extends Parchment.Attributor.Style { }
  

  // let LineHeightClass = new Parchment.Attributor.Class(
  //   'lineheight',
  //   'ql-line-height',
  //   config
  // );
  let style = new LineHeightStyle(
    'lineheight',
    'line-height',
    config
  );
  
  Quill.register(style, true);
}

export default lineHeight;
