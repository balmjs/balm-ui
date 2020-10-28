import useDivider from './divider';
import useCode from './code';
import usePreview from './preview';
import useLinkOff from './link-off';

function useDefaultExtensions() {
  useDivider();
  useLinkOff();
  usePreview();
  useCode();
}

export default useDefaultExtensions;
