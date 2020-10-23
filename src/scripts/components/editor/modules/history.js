import { useEditor } from '../quill';

function useHistory(toolbarHandlers) {
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
