import { useEditor } from '../quill';

function useHistory() {
  const { toolbarHandlers } = useEditor();

  toolbarHandlers.undo = () => {
    const { editor } = useEditor();
    editor.history.undo();
  };

  toolbarHandlers.redo = () => {
    const { editor } = useEditor();
    editor.history.redo();
  };
}

export default useHistory;
