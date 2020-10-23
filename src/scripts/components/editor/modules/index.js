import { setToolbarIcons } from './toolbar';
import useDivider from './divider';
import useCounter from './counter';
// import usePreview from './preview';

const customHandlers = ['divider'];

function useDefaultModules(Quill, options, toolbarIcons) {
  customHandlers.forEach((blotName) => {
    options.modules[blotName] = true;
  });

  setToolbarIcons(Quill, toolbarIcons);

  useDivider(Quill);
  useCounter(Quill);
  // usePreview(Quill, options);
}

export default useDefaultModules;
