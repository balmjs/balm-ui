import { useEditor } from '../quill';

function useSelectAll() {
  const { toolbarHandlers } = useEditor();

  toolbarHandlers.selectall = () => {
    const { editor } = useEditor();

    let text = editor.getText();
    editor.setSelection(0, text.length);
  };
}

export default useSelectAll;
