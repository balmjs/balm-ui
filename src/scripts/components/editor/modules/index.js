import { setToolbarIcons } from './toolbar';
import useCounter from './counter';
import useDivider from './divider';
import useHistory from './history';

const customFormatHandlers = ['divider', 'emoji'];

function useDefaultModules(options, toolbarIcons) {
  customFormatHandlers.forEach((blotName) => {
    options.modules[blotName] = true;
  });

  setToolbarIcons(toolbarIcons);

  useCounter();
  useDivider();
  useHistory();
}

export default useDefaultModules;
