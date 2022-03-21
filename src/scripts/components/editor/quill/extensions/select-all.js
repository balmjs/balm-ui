import { useEditor } from '../core/quill';

function useSelectAll() {
  const { toolbarHandlers } = useEditor();

  toolbarHandlers.selectall = () => {
    const { quill } = useEditor();

    let text = quill.getText();
    quill.setSelection(0, text.length);
  };
}

export default useSelectAll;
