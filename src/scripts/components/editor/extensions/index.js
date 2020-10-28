import useDivider from './divider';
import usePreview from './preview';
import useLinkOff from './link-off';

function useDefaultExtensions() {
  useDivider();
  useLinkOff();
  usePreview();
}

export default useDefaultExtensions;
