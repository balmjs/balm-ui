import { setToolbarStyle } from '../modules/toolbar';
import useCode from './code';
import useLinkOff from './link-off';
import useHistory from './history';

export default function (Quill, options, prototypeInitialized) {
  if (!prototypeInitialized) {
    useLinkOff(options);
  }

  return function (editor) {
    setToolbarStyle();
    useCode(editor);
    useHistory(editor);

    return editor;
  };
}
