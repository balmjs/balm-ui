import useDivider from './divider';
import usePreview from './preview';
import useLinkOff from './link-off';
import useSelectAll from './select-all';

function useDefaultExtensions() {
  useDivider();
  useLinkOff();
  usePreview();
  useSelectAll();
}

export default useDefaultExtensions;
