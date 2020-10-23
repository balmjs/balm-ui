import useCode from './code';
import usePreview from './preview';
import useLinkOff from './link-off';

function useDefaultExtensions() {
  useLinkOff();
  usePreview();
  useCode();
}

export default useDefaultExtensions;
