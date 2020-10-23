import { setToolbarIcons } from './toolbar';
import useCounter from './counter';
import useDivider from './divider';
import useHistory from './history';

function useDefaultModules(toolbarIcons) {
  setToolbarIcons(toolbarIcons);

  useCounter();
  useDivider();
  useHistory();
}

export default useDefaultModules;
