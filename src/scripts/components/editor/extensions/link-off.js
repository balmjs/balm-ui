import { useEditor } from '../quill';

function useLinkOff() {
  const { toolbarHandlers } = useEditor();

  toolbarHandlers.linkoff = () => {
    const { editor } = useEditor();

    let delta = editor.getContents();
    let newDelta = delta.ops.map((item) => {
      if (item.attributes && typeof item.attributes.link !== 'undefined') {
        delete item.attributes.link;
      }
      return item;
    });
    editor.setContents(newDelta);
  };
}

export default useLinkOff;
