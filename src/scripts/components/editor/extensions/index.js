import useCode from './code';
import useLinkOff from './link-off';
import useHistory from './history';

import { setToolbarIcons, setToolbarStyle } from './toolbar';

export default function (Quill, options, toolbarIcons, prototypeInitialized) {

  if (!prototypeInitialized) {
    useLinkOff(options);
    if (options.theme === 'snow' && !prototypeInitialized) {
      setToolbarIcons(Quill, toolbarIcons);
    }
  }
  

  return function (editor) {
    setToolbarStyle();
    useCode(editor);
    useHistory(editor);

    return editor;
  };
}
