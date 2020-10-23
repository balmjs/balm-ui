import { setToolbarIcons } from './toolbar';
import useCounter from './counter';
import useDivider from './divider';
import useHistory from './history';
import usePreview from './preview';

const customFormatHandlers = ['divider', 'emoji'];

function useDefaultModules(options, toolbarIcons) {
  const toolbarHandlers = options.modules.toolbar.handlers;

  customFormatHandlers.forEach((blotName) => {
    options.modules[blotName] = true;
  });

  setToolbarIcons(toolbarIcons);

  useCounter();
  useDivider();
  useHistory(toolbarHandlers);
  usePreview(options);
}

export default useDefaultModules;
