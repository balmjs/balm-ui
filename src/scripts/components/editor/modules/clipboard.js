import { useEditor } from '../quill';

function pasteHtml() {}

function pasteText() {}

function useClipboard() {
  const { Quill, toolbarHandlers } = useEditor();

  toolbarHandlers.cut = () => {
    const { editor } = useEditor();

    let range = editor.getSelection();
    if (range) {
      editor.deleteText(range, Quill.sources.USER);
      editor.setSelection(range.index, Quill.sources.SILENT);
    }
  };

  toolbarHandlers.copy = () => {
    const { editor } = useEditor();

    let range = editor.getSelection();
    if (range) {
    }
  };

  toolbarHandlers.paste = () => {};
}

export default useClipboard;
