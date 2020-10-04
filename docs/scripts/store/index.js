import usePageStore from './page';
import useLangStore from './lang';
import useThemeStore from './theme';
import useSnippetStore from './snippet';

export default () => {
  return {
    ...usePageStore(),
    ...useLangStore(),
    ...useThemeStore(),
    ...useSnippetStore()
  };
};
