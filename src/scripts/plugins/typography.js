import autoInstall from '../config/auto-install';

// Define typography constants
const T_BASE = 'mdc-typography';
const T_DEFAULT_STYLES = [
  'headline1',
  'headline2',
  'headline3',
  'headline4',
  'headline5',
  'headline6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline'
];
let globalStyles;

function tt(style) {
  let className = '';

  if (globalStyles.includes(style)) {
    className = `${T_BASE}--${style}`;
  } else {
    throw new Error(
      '[BalmUI] Please set a valid typographic style:\n' +
        JSON.stringify(globalStyles)
    );
  }

  return className;
}

const BalmUI_TypographyPlugin = {
  install(Vue, customStyles = []) {
    globalStyles = Array.isArray(customStyles)
      ? T_DEFAULT_STYLES.concat(customStyles)
      : T_DEFAULT_STYLES;

    Vue.mixin({
      mounted() {
        const bodyClassList = document.querySelector('body').classList;
        if (!bodyClassList.contains(T_BASE)) {
          bodyClassList.add(T_BASE);
        }
      }
    });

    Vue.prototype.$tt = tt;
  }
};

const useTypography = () => tt;

autoInstall(BalmUI_TypographyPlugin);

export default BalmUI_TypographyPlugin;
export { useTypography };
