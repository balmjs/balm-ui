import { setToolbarIcons } from './toolbar';
import useCounter from './counter';
import useHistory from './history';
// import useClipboard from './clipboard';

function useDefaultModules(toolbarIcons) {
  setToolbarIcons(toolbarIcons);

  useCounter();
  useHistory();
  // useClipboard();
}

export default useDefaultModules;
