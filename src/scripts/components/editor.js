import bootstrap from '../config/bootstrap';
import UiEditor from './editor/editor';
import { useEditor } from './editor/quill';

export default bootstrap(UiEditor);
export { useEditor };
