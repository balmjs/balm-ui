function setFont(Quill) {
  const Font = Quill.import('formats/font');
  Font.whitelist = [
    'Arial',
    'Arial Black',
    'Comic Sans MS',
    'Courier New',
    'Tahoma',
    'Georgia',
    'Helvetica',
    'Segoe UI',
    'Sans-Serif',
    'Impact',
    'Times New Roman',
    'Verdana'
  ].map((font) => font.toLowerCase().replace(/\s/g, '-'));
  Quill.register(Font, true);

  const Size = Quill.import('attributors/style/size');
  Size.whitelist = [
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
  Quill.register(Size, true);
}

export default setFont;
