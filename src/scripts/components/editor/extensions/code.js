function handleCode(editor) {
  const toolbar = editor.getModule('toolbar');

  if (typeof toolbar !== 'undefined') {
    toolbar.addHandler('code', () => {
      console.log('code', editor);
    });
  }
}

export default handleCode;
