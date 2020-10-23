function useHistory(editor) {
  const toolbar = editor.getModule('toolbar');

  if (typeof toolbar !== 'undefined') {
    toolbar.addHandler('undo', () => {
      editor.history.undo();
    });

    toolbar.addHandler('redo', () => {
      editor.history.redo();
    });
  }
}

export default useHistory;
