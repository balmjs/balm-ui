import usePageStore from './page';
import useLangStore from './lang';
import useThemeStore from './theme';
import useSnippetStore from './snippet';
// import useDemoStore from './demo';

export default {
  ...usePageStore(),
  ...useLangStore(),
  ...useThemeStore(),
  ...useSnippetStore()
  // ...useDemoStore()
};
