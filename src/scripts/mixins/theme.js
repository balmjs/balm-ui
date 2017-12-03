const THEME_COLORS = [
  'primary',
  'primary-light',
  'primary-dark',
  'secondary',
  'secondary-light',
  'secondary-dark',
  'background'
];
const TEXT_STYLES = ['primary', 'secondary', 'hint', 'disabled', 'icon'];
const THEME_STYLES = ['light', 'dark'];
const TEXT_THEME_COLORS = THEME_COLORS.concat(THEME_STYLES);

export default {
  methods: {
    themeColor(color = '', bg = false) {
      let className = '';
      let currentColor = color.toLowerCase();

      if (THEME_COLORS.includes(currentColor)) {
        className = `mdc-theme--${currentColor}`;
        let hasBackground = bg && currentColor !== 'background';
        if (hasBackground) {
          className += '-bg';
        }
      } else {
        console.warn(
          'Please choose a theme color: ' + JSON.stringify(THEME_COLORS)
        );
      }

      return className;
    },
    textColor(color = '', bgColor = '') {
      let className = '';

      if (TEXT_STYLES.includes(color.toLowerCase())) {
        if (TEXT_THEME_COLORS.includes(bgColor.toLowerCase())) {
          className = `mdc-theme--text-${color}-on-${bgColor}`;
        } else {
          console.warn(
            'Please choose a text theme color: ' +
              JSON.stringify(TEXT_THEME_COLORS)
          );
        }
      } else {
        console.warn(
          'Please choose a text color: ' + JSON.stringify(TEXT_STYLES)
        );
      }

      return className;
    }
  }
};
