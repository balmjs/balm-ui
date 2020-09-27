import { useTheme } from 'balm-ui';
import { themes } from '@/config';

const theme = useTheme();

export default {
  data() {
    return {
      themeColors: {},
      lang: ''
    };
  },
  created() {
    this.theme = this.getThemeName();
    this.setTheme();
  },
  mounted() {},
  methods: {
    getThemeName() {
      return localStorage.getItem('theme') || 'light';
    },
    getTheme() {
      [
        'background',
        'primary',
        'on-primary',
        'secondary',
        'on-secondary',
        'surface',
        'on-surface',
        'error',
        'on-error'
      ].forEach((style) => {
        this.$set(this.themeColors, style, theme.getThemeColor(style));
      });
    },
    setTheme(themeName = this.theme) {
      const themeColors = themes[themeName];

      localStorage.setItem('theme', themeName);
      theme.colors = themeColors;

      this.getTheme();
    },
    switchTheme() {
      const themeName = this.theme === 'dark' ? 'light' : 'dark';

      this.theme = themeName;
      this.setTheme(themeName);
    }
  }
};
