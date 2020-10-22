import useCounter from './counter-module';
import useDivider from './divider-format';
import usePreview from './preview-module';
import handleCode from './code-module';
import handleLinkOff from './link-off';

import { setToolbarIcons, setToolbarStyle } from './toolbar';

export default function (Quill, options, createEditor, toolbarIcons, prototypeInitialized) {
  if (options.theme === 'snow' && !prototypeInitialized) {
    setToolbarIcons(Quill, toolbarIcons);
    useCounter(Quill);
    useDivider(Quill, options, createEditor);
    usePreview(Quill, options);
  }
  
  return function (instance) {
    setToolbarStyle();
    handleCode(instance);
    handleLinkOff(instance)
    return instance;
  }
}

