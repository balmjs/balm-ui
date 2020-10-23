import { useEditor } from '../quill';

function hanldeLinkOff() {
  const { editor, toolbarHandlers } = useEditor();

  toolbarHandlers.linkoff = function () {
    let contents = editor.getContents();
    let newContent = contents.ops.map((item) => {
      if (item.attributes && typeof item.attributes.link !== 'undefined') {
        delete item.attributes.link;
      }
      return item;
    });
    editor.setContents(newContent);
  };
}

export default hanldeLinkOff;
