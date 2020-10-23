import { setToolbarStyle } from '../modules/toolbar';
import useCode from './code';
import usePreview from './preview';
import useLinkOff from './link-off';

export default function (prototypeInitialized) {
  if (!prototypeInitialized) {
    useLinkOff();
    usePreview();
  }

  return function (editor) {
    setToolbarStyle();

    useCode(editor);

    return editor;
  };
}
