function handleCode(quill) {
  const toolbar = quill.getModule('toolbar');

  if (typeof toolbar !== 'undefined') {
    toolbar.addHandler('code', () => {
      console.log('code', quill);
    });
  }
}

export default handleCode;
