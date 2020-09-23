import useLangStore from './lang';
import useThemeStore from './theme';
import useSnippetStore from './snippet';

export default () => {
  return {
    ...useLangStore(),
    ...useThemeStore(),
    ...useSnippetStore()
  };
};
