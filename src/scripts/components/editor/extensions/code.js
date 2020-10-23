import { useEditor } from '../quill';

function handleCode() {
  const { toolbarHandlers } = useEditor();

  toolbarHandlers.preview = () => {
    console.log('code');
  };
}

export default handleCode;
