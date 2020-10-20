function fontSize(Quill) {
  const FontSizeAttributor = Quill.import('attributors/style/size');

  FontSizeAttributor.whitelist = [
    '8px',
    '9px',
    '10px',
    '11px',
    '12px',
    '13px',
    '14px',
    '16px',
    '18px',
    '24px',
    '36px',
    '48px',
    '60px',
    '72px',
    '96px'
  ];

  Quill.register(FontSizeAttributor, true);
}

export default fontSize;
