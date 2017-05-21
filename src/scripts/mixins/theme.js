const THEME_COLORS = ['primary', 'accent', 'background'];
const TEXT_COLORS = ['primary', 'secondary', 'hint', 'disabled', 'icon'];
const TEXT_THEME_COLORS = THEME_COLORS.concat(['light', 'dark']);

export default {
  methods: {
    themeColor(color = '', bg = false) {
      let style = '';

      if (THEME_COLORS.indexOf(color.toLowerCase()) > -1) {
        style = `mdc-theme--${color}`;
        if (bg) {
          style += '-bg';
        }
      } else {
        console.warn('Please choose a theme color: ' + JSON.stringify(THEME_COLORS));
      }

      return style;
    },
    textColor(color = '', bgColor = '') {
      let style = '';

      if (TEXT_COLORS.indexOf(color.toLowerCase()) > -1) {
        if (TEXT_THEME_COLORS.indexOf(bgColor.toLowerCase()) > -1) {
          style = `mdc-theme--text-${color}-on-${bgColor}`;
        } else {
          console.warn('Please choose a text theme color: ' + JSON.stringify(TEXT_THEME_COLORS));
        }
      } else {
        console.warn('Please choose a text color: ' + JSON.stringify(TEXT_COLORS));
      }

      return style;
    }
  }
};
