import useDivider from './divider';
import useCounter from '../modules/counter';
import usePreview from '../modules/preview';
import handleCode from './code';
import handleLinkOff from './link-off';

import { setToolbarIcons, setToolbarStyle } from './toolbar';

export default function (
  Quill,
  options,
  editor,
  toolbarIcons,
  prototypeInitialized
) {
  if (options.theme === 'snow' && !prototypeInitialized) {
    setToolbarIcons(Quill, toolbarIcons);
    useCounter(Quill);
    useDivider(Quill, options, editor);
    usePreview(Quill, options);
  }

  return function (instance) {
    setToolbarStyle();
    handleCode(instance);
    handleLinkOff(instance);
    return instance;
  };
}
