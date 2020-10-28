import { useEditor } from '../quill';

function useTextAlign() {
  const { toolbarHandlers } = useEditor();

  ['left', 'right', 'center', 'justify'].forEach((value) => {
    toolbarHandlers[`align${value}`] = () => {
      const { editor } = useEditor();
      editor.format('align', value === 'left' ? false : value);
    };
  });
}

export default useTextAlign;
