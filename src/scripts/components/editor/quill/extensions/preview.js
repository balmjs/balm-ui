import { useEditor } from '../core/quill';

function usePreview() {
  const { toolbarHandlers } = useEditor();

  toolbarHandlers.preview = () => {
    console.log('preview');
  };
}

export default usePreview;
