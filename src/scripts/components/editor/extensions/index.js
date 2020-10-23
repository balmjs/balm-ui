import { setToolbarStyle } from '../modules/toolbar';
import useCode from './code';
import useLinkOff from './link-off';

export default function (options, prototypeInitialized) {
  if (!prototypeInitialized) {
    useLinkOff(options);
  }

  return function (editor) {
    setToolbarStyle();

    useCode(editor);

    return editor;
  };
}
