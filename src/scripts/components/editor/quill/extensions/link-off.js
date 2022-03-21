import { useEditor } from '../core/quill';

function useLinkOff() {
  const { toolbarHandlers } = useEditor();

  toolbarHandlers.linkoff = () => {
    const { quill } = useEditor();

    let delta = quill.getContents();
    let newDelta = delta.ops.map((item) => {
      if (item.attributes && typeof item.attributes.link !== 'undefined') {
        delete item.attributes.link;
      }
      return item;
    });
    quill.setContents(newDelta);
  };
}

export default useLinkOff;
