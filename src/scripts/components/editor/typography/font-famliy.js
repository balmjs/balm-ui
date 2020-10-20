function fontFamliy(Quill) {
  const FontFamliyAttributor = Quill.import('attributors/class/font');

  FontFamliyAttributor.whitelist = [
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

  Quill.register(FontFamliyAttributor, true);
}

export default fontFamliy;
