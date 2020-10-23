import { setToolbarIcons } from './toolbar';
import useDivider from './divider';
import useCounter from './counter';
// import usePreview from './preview';

const customModules = ['divider'];

function useDefaultModules(Quill, options, toolbarIcons) {
  customModules.forEach((moduleName) => {
    options.modules[moduleName] = true;
  });

  setToolbarIcons(Quill, toolbarIcons);

  useDivider(Quill);
  useCounter(Quill);
  // usePreview(Quill, options);
}

export default useDefaultModules;
