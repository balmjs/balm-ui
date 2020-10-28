import useTextAlign from './text-align';
import useDivider from './divider';
import useCode from './code';
import usePreview from './preview';
import useLinkOff from './link-off';

function useDefaultExtensions() {
  useTextAlign();
  useDivider();
  useLinkOff();
  usePreview();
  useCode();
}

export default useDefaultExtensions;
