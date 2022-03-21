import { useEditor } from '../core/quill';

function useHistory() {
  const { toolbarHandlers } = useEditor();

  toolbarHandlers.undo = () => {
    const { quill } = useEditor();
    quill.history.undo();
  };

  toolbarHandlers.redo = () => {
    const { quill } = useEditor();
    quill.history.redo();
  };
}

export default useHistory;
