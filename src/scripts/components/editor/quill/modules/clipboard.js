import { useEditor } from '../core/quill';

function pasteHtml() {}

function pasteText() {}

function useClipboard() {
  const { Quill, toolbarHandlers } = useEditor();

  toolbarHandlers.cut = () => {
    const { quill } = useEditor();

    let range = quill.getSelection();
    if (range) {
      quill.deleteText(range, Quill.sources.USER);
      quill.setSelection(range.index, Quill.sources.SILENT);
    }
  };

  toolbarHandlers.copy = () => {
    const { quill } = useEditor();

    let range = quill.getSelection();
    if (range) {
    }
  };

  toolbarHandlers.paste = () => {};
}

export default useClipboard;
